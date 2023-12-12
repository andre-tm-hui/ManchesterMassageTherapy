import { prisma } from '@/libs/prisma';
import axios from 'axios';
import sharp from 'sharp';
import fetch from 'node-fetch';

async function removeOldestReviews(count: number) {
  const postsToDelete = await prisma.iGPost.findMany({
    orderBy: { uploadDate: 'asc' },
    take: count,
  });

  const idsToDelete = postsToDelete.map(post => post.uid);

  await prisma.iGPost.deleteMany({
    where: {
      uid: {
        in: idsToDelete,
      },
    },
  });
}

export async function fetchInstagram(): Promise<any> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const N = 30;

  const mediaResponse = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${N}`)
    .catch((_) => {return undefined});
  if (!mediaResponse || mediaResponse.data.error) { return {status: 400, msg: "could not access instagram basic api" } }
  console.log(mediaResponse.data);

  const existingPosts = await prisma.iGPost.findMany({
    select: {
      uid: true
    }
  }).catch((e) => {return undefined}).then((res) => {return res});
  if (!existingPosts) { return {status: 400, msg: "could not access instagram basic api" } }

  for (const media of mediaResponse.data.data) {
    const postResponse = await axios.get(`${media.permalink}?fields=id,text,timestamp&access_token=${accessToken}`)
      .catch((_) => {return undefined});
    if (!postResponse || postResponse.data.error) { return {status: 400, msg: "could not access instagram basic api" } }
    console.log(postResponse.data);
    const post = postResponse.data;

    if (existingPosts.some(existingPost => existingPost.uid === post.id)) {
      break;
    }

    let mediaUrls = [media.media_url];

    if (media.media_type === 'CAROUSEL_ALBUM') {
      const childrenResponse = await axios.get(`https://graph.instagram.com/${media.id}/children?fields=media_url&access_token=${accessToken}`);
      mediaUrls = childrenResponse.data.data.map((child: any) => child.media_url);
    }

    let smallestAspectRatio = Infinity;

    for (const url of mediaUrls) {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const metadata = await sharp(buffer).metadata();
      const aspectRatio = metadata.width! / metadata.height!;
      smallestAspectRatio = Math.min(smallestAspectRatio, aspectRatio);
    }

    console.log(post, mediaUrls, smallestAspectRatio);

    let success = await prisma.iGPost.create({
      data: {
        uid: post.id,
        caption: post.text,
        albumUrls: mediaUrls,
        postUrl: media.permalink,
        uploadDate: new Date(post.timestamp),
        prefAspectRatio: smallestAspectRatio,
      },
    }).catch((e) => {return undefined});
    if (!success) { return {status: 400, msg: "could not create post in database" } }
  }

  const postCount = await prisma.iGPost.count();
  if (postCount > N) {
    await removeOldestReviews(postCount - N);
  }

  return {status: 200, msg: "success"};
}


