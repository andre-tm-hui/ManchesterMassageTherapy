import { prisma } from '@/libs/prisma';
import axios from 'axios';
import { google } from 'googleapis';

function ratingToNumber(text: string) {
  switch (text) {
    case 'FIVE':
      return 5;
    case 'FOUR':
      return 4;
    case 'THREE':
      return 3;
    case 'TWO':
      return 2;
    case 'ONE':
      return 1;
    default:
      return 0;
  }
}

async function removeOldestReviews(count: number) {
  const reviews = await prisma.googleReview.findMany({ orderBy: { createTime: 'asc' }, take: count });
  const idsToDelete = reviews.map(review => review.uid);

  await prisma.googleReview.deleteMany({
    where: {
     uid: {
        in: idsToDelete,
      },
    },
  });
}


/** fetch a list of google reviews, and adds new ones to a postgreSQL database under the GoogleReview table */

export async function fetchGoogleReview() {
  let refreshed = '';
  let token = '';
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_BP_CLIENT_ID,
    clientSecret: process.env.GOOGLE_BP_CLIENT_SECRET,
    redirectUri: 'https://manchestermassagetherapy.co.uk',
  });
  oauth2Client.setCredentials({refresh_token: process.env.GOOGLE_BP_REFRESH_TOKEN});
  await oauth2Client.refreshAccessToken((err, res) => {
    if (err) {
      console.error("Error refreshing access token: ", err);
      refreshed = "Error refreshing access token: " + err;
      return;
    }
    if (!res || !res.access_token) {
      console.error("No tokens returned from refresh request");
      refreshed = "No tokens returned from refresh request";
      return;
    }

    token = res.access_token;
    refreshed = "Successfully refreshed access token";
  });
  while (refreshed === '') { await new Promise(r => setTimeout(r, 100)); }

  /*const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });*/
  
  // get all locations
  const locations = (await google.mybusinessbusinessinformation(
    { version: 'v1', auth: oauth2Client }
  ).accounts.locations.list({parent: 'accounts/' + process.env.GOOGLE_BP_ACCOUNT_ID, readMask: 'name'})).data.locations;
  if (!locations) {
    return { status: 400, msg: 'No locations found' };
  }

  // get reviews from all locations
  let response = await axios.post(
    `https://mybusiness.googleapis.com/v4/accounts/${process.env.GOOGLE_BP_ACCOUNT_ID}/locations:batchGetReviews`, 
    {
      'locationNames': locations.map(location => `accounts/${process.env.GOOGLE_BP_ACCOUNT_ID}/${location.name}`),
      'pageSize': 20,
      'orderBy': 'updateTime desc',
      'ignoreRatingOnlyReviews': true,
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`
        }
    }
  );

  // update existing reviews
  for (const locationReview of response.data.locationReviews) {
    const review = locationReview.review;
    const existingReview = await prisma.googleReview.findUnique({
      where: {
        uid: review.reviewId,
      },
    });

    if (!existingReview) {
      await prisma.googleReview.create({
        data: {
          uid: review.reviewId,
          profilePhotoUrl: review.reviewer.profilePhotoUrl,
          displayName: review.reviewer.displayName,
          isAnonymous: review.reviewer.isAnonymous ?? false,
          rating: ratingToNumber(review.starRating),
          comment: review.comment ? review.comment : null,
          createTime: new Date(review.createTime),
        },
      });
    } else {
      prisma.googleReview.update({
        where: {
          uid: review.reviewId,
        },
        data: {
          profilePhotoUrl: review.reviewer.profilePhotoUrl,
          displayName: review.reviewer.displayName,
          isAnonymous: review.reviewer.isAnonymous,
          rating: review.starRating,
          comment: review.comment ? review.comment.comment : null,
          createTime: new Date(review.createTime),
        },
      });
    }
  }

  const reviewCount = await prisma.googleReview.count();
  if (reviewCount > 20) {
    await removeOldestReviews(reviewCount - 20);
  }

  return { status: 200, msg: 'success' };
}