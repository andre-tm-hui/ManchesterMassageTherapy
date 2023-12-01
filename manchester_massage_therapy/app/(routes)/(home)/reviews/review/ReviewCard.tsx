import Image from 'next/image';
import StarRating from './StarRating';
import { ComponentProps } from 'react';
import { GoogleReview } from '@prisma/client';
import SpeechMark from './Speechmark';

export default function ReviewCard({
  uid,
  profilePhotoUrl,
  isAnonymous,
  displayName,
  createTime,
  rating,
  comment,
  className,
}: GoogleReview & ComponentProps<'div'>) {
  return (
    <div
      className={`m-4 flex flex-[0_0_90%] cursor-default flex-col overflow-hidden rounded-3xl bg-menu shadow-lg shadow-card selection:bg-transparent md:flex-[0_0_50%] ${className}`}
    >
      <div className='flex items-center bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={profilePhotoUrl}
          alt={''}
        />{' '}
        <div className='ml-4 flex flex-col text-left'>
          <p className='text-xl'>
            {isAnonymous ? 'Anonymous User' : displayName}
          </p>
          <p className='text-sm'>{createTime.toDateString()}</p>
        </div>
        <StarRating className='ml-auto mr-0 gap-1' rating={rating} />
      </div>
      <div className='flex h-full flex-row items-center justify-center'>
        {SpeechMark(false)}
        <p className='line-clamp-[7] text-center md:line-clamp-5'>{comment}</p>
        {SpeechMark(true)}
      </div>
    </div>
  );
}
