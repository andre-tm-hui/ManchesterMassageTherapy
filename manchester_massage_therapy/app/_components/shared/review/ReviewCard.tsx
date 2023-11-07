import Image from 'next/image';
import IReviewData from '@/app/_types/review/Review';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: IReviewData;
  classNames?: undefined | string;
}

export default function ReviewCard({ review, classNames }: ReviewCardProps) {
  return (
    <div
      className={`embla__slide flex flex-col overflow-hidden rounded-3xl bg-menu shadow-md ${
        classNames ?? ''
      }`}
    >
      <div className='flex bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={review.reviewer.profilePhotoUrl}
          alt={'/blankProfile.jpg'}
        />{' '}
        <div className='space-2 ml-4 flex flex-col text-left'>
          <p className='text-xl'>
            {review.reviewer.isAnonymous
              ? 'Anonymous User'
              : review.reviewer.displayName}
          </p>
          <p className='text-sm'>{review.createTime}</p>
        </div>
        <StarRating className='ml-auto' rating={review.starRating} />
      </div>
      <div className='flex h-40 flex-col'>
        <p className='my-auto px-12 py-2 text-center'>{review.comment}</p>
      </div>
    </div>
  );
}
