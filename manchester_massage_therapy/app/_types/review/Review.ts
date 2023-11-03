import IReviewerData, { defaultReviewer } from './Reviewer';

export default interface IReviewData {
  reviewId: string;
  reviewer: IReviewerData;
  starRating: number;
  comment: string;
  createTime: string;
}

export const defaultReview: IReviewData = {
  reviewId: 'hello world!',
  reviewer: defaultReviewer,
  starRating: 5,
  comment: 'Lorem ipsum asdfl;;j asldfjal; as;ljf;a',
  createTime: '28/10/2023',
};
