import Image from 'next/image';
import IReviewData from '@/app/_types/review/Review';
import StarRating from './StarRating';
import { ComponentProps } from 'react';

export default function ReviewCard({
  reviewer,
  createTime,
  starRating,
  comment,
  className,
}: IReviewData & ComponentProps<'div'>) {
  return (
    <div
      className={`embla__slide flex flex-col overflow-hidden rounded-3xl bg-menu shadow-lg shadow-card ${
        className ?? ''
      }`}
    >
      <div className='flex bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={reviewer.profilePhotoUrl}
          alt={'/blankProfile.jpg'}
        />{' '}
        <div className='space-2 ml-4 flex flex-col text-left'>
          <p className='text-xl'>
            {reviewer.isAnonymous ? 'Anonymous User' : reviewer.displayName}
          </p>
          <p className='text-sm'>{createTime}</p>
        </div>
        <StarRating className='ml-auto' rating={starRating} />
      </div>
      <div className='flex h-40 flex-col'>
        <p className='my-auto px-12 py-2 text-center'>{comment}</p>
      </div>
    </div>
  );
}
