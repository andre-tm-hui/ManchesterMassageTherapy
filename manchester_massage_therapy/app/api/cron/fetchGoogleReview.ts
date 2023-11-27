import { prisma } from '@/libs/prisma';
import { google } from 'googleapis';

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
  const googleMMT = google.mmtBusinessInformation_v1.mmtBusinessInformation;

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/business.manage'],
  });

  const service = new googleMMT({ version: 'v1', auth });

  const response = await service.locations.reviews.list({
    parent: `locations/${process.env.GOOGLE_LOCATION_ID}`,
  });

  for (const review of response.data.reviews) {
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
          isAnonymous: review.reviewer.isAnonymous,
          rating: review.starRating,
          comment: review.comment ? review.comment.comment : null,
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

  return response.data;
}