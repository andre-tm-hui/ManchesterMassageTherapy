import Image from 'next/image';
import StarRating from './StarRating';
import Hyperlink from '../../../../_components/shared/widgets/Hyperlink';
import { chelseaMarket } from '@/app/fonts';
import SpeechMark from './Speechmark';

export default function PlaceholderReviewCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`m-4 flex flex-[0_0_90%] cursor-default flex-col overflow-hidden rounded-3xl bg-menu shadow-lg shadow-card selection:bg-transparent md:flex-[0_0_50%] ${className}`}
    >
      <div className='flex items-center bg-secondary px-5 py-3'>
        <Image
          className='rounded-full'
          width={'48'}
          height={'48'}
          src={'/blankProfile.jpg'}
          alt={''}
        />{' '}
        <div className='mx-4 flex w-full flex-col text-left'>
          <div className='h-8 w-full rounded-lg bg-primary' />
          <div className='mt-1 h-4 w-24 rounded-lg bg-primary text-transparent' />
        </div>
        <StarRating className='ml-auto mr-0 gap-1' rating={0} />
      </div>
      <div className='flex h-full flex-row items-center justify-center'>
        {SpeechMark(false)}
        <div className='h-24 w-full rounded-lg bg-primary text-center'>
          <Hyperlink
            href='/'
            className={`mx-auto mt-2 text-2xl text-secondary ${chelseaMarket.className}`}
          >
            Leave a review!
          </Hyperlink>
        </div>
        {SpeechMark(true)}
      </div>
    </div>
  );
}
