import http from './GoogleReviewAPI';
import IReviewsData from '@/app/_types/review/Reviews';

export const getReviews = () => {
  return http.get<IReviewsData>('/reviews');
};
