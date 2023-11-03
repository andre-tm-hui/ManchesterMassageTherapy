export default interface IReviewerData {
  profilePhotoUrl: string;
  displayName: string;
  isAnonymous: boolean;
}

export const defaultReviewer: IReviewerData = {
  profilePhotoUrl: '/blankProfile.jpg',
  displayName: 'John Doe',
  isAnonymous: false,
};
