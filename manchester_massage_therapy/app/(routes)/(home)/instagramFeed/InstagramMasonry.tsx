'use client';

import { IGPost } from '@prisma/client';
import InstagramPostCard from './InstagramPostCard';
import Masonry from 'react-masonry-css';
import { emptyIGPost } from '@/libs/templates';

interface InstagramMasonryProps {
  instagramPosts: IGPost[];
}

export default function InstagramMasonry({
  instagramPosts,
}: InstagramMasonryProps) {
  const breakpointColsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  let i = -1;
  while (instagramPosts.length < 16) {
    instagramPosts.push({ ...emptyIGPost, uid: i.toString() });
    i--;
  }

  return (
    <Masonry
      breakpointCols={breakpointColsObj}
      className='masonry py-8 md:py-16'
      columnClassName='masonry-column'
    >
      {instagramPosts.map((post) => (
        <InstagramPostCard key={post.uid} {...post} />
      ))}
    </Masonry>
  );
}
