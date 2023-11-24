import Image from 'next/image';
import StarRating from './StarRating';
import { ComponentProps, ReactNode } from 'react';
import { GoogleReview } from '@prisma/client';
import SpeechMarkSVG from 'public/speechmark.svg';

export default function ReviewCard({
  profilePhotoUrl,
  isAnonymous,
  displayName,
  createTime,
  rating,
  comment,
  className,
}: GoogleReview & ComponentProps<'div'>) {
  function SpeechMark(rotate: boolean) {
    return (
      <div
        className={`flex h-full min-w-[4rem] justify-center py-4 text-secondary opacity-75 ${
          rotate && 'rotate-180'
        }`}
      >
        <SpeechMarkSVG width='1.5rem' height='1.5rem' />
      </div>
    );
  }

  return (
    <div
      className={`m-4 flex flex-[0_0_90%] cursor-default flex-col overflow-hidden rounded-3xl bg-menu shadow-lg shadow-card selection:bg-transparent md:flex-[0_0_50%] ${className}`}
    >
      <div className='flex bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={profilePhotoUrl}
          alt={'/blankProfile.jpg'}
        />{' '}
        <div className='space-2 ml-4 flex flex-col text-left'>
          <p className='text-xl'>
            {isAnonymous ? 'Anonymous User' : displayName}
          </p>
          <p className='text-sm'>{createTime.toDateString()}</p>
        </div>
        <StarRating className='ml-auto' rating={rating} />
      </div>
      <div className='flex h-full flex-row items-center justify-center'>
        {SpeechMark(false)}
        <p className='line-clamp-5 text-center'>{comment}</p>
        {SpeechMark(true)}
      </div>
    </div>
  );
}
