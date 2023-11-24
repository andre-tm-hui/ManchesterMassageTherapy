import Image from 'next/image';
import StarRating from './StarRating';
import { ComponentProps, ReactNode } from 'react';
import { GoogleReview } from '@prisma/client';
import SpeechMarkSVG from 'public/speechmark.svg';

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
      <div className='flex items-center bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={uid.length == 0 ? '/blankProfile.jpg' : profilePhotoUrl}
          alt={''}
        />{' '}
        <div className='ml-4 flex flex-col text-left'>
          <p
            className={`text-xl ${
              uid.length == 0 &&
              'h-8 w-48 rounded-lg bg-primary text-transparent'
            }`}
          >
            {isAnonymous ? 'Anonymous User' : displayName}
          </p>
          <p
            className={`text-sm ${
              uid.length == 0 &&
              'mt-1 h-4 w-24 rounded-lg bg-primary text-transparent'
            }`}
          >
            {createTime.toDateString()}
          </p>
        </div>
        <StarRating
          className='ml-auto mr-0 gap-1'
          rating={uid.length == 0 ? 0 : rating}
        />
      </div>
      <div className='flex h-full flex-row items-center justify-center'>
        {SpeechMark(false)}
        <p
          className={`line-clamp-[7] text-center md:line-clamp-5 ${
            uid.length == 0 &&
            'h-24 w-full rounded-lg bg-primary text-transparent'
          }`}
        >
          {comment}
        </p>
        {SpeechMark(true)}
      </div>
    </div>
  );
}
