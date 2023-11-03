import IReviewData, { defaultReview } from './Review';

export default interface IReviewsData {
  reviews: IReviewData[];
  averageRating: number;
  totalReviewCount: number;
  nextPageToken?: string;
}

export const defaultReviews: IReviewsData = {
  reviews: [defaultReview, defaultReview, defaultReview],
  averageRating: 5,
  totalReviewCount: 3,
};
