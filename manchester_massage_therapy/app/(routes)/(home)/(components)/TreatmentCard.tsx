import BGImageDiv from '@/app/_components/shared/BGImageDiv';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';
import { ComponentProps, MouseEventHandler } from 'react';
import { isMobile } from 'react-device-detect';

interface TreatmentCardProps extends ComponentProps<'div'> {
  title: string;
  description: string;
  bookingUrl: string;
  flipped?: undefined | boolean;
}

export default function TreatmentCard({
  className,
  title,
  description,
  bookingUrl,
  flipped,
  onClick,
}: TreatmentCardProps) {
  const containerClassNames = [
    'relative',
    'h-full',
    'w-full',
    'text-white',
    'transition-all',
    'duration-500',
    '[transform-style:preserve-3d]',
    'group-hover:[transform:rotateY(180deg)]',
    isMobile && flipped ? '[transform:rotateY(180deg)]' : undefined,
  ];

  return (
    <div
      onClick={onClick}
      className={`group aspect-square w-72 [perspective:1000px] selection:bg-transparent ${className}`}
    >
      <div className={containerClassNames.join(' ')}>
        <div className='absolute inset-0 shadow-xl'>
          <Image
            className='absolute'
            fill={true}
            src='/assets/masseuse/placeholder.jpg'
            alt=''
          />
          <h1
            className={`absolute top-1/2 translate-y-[-50%] p-6 text-4xl ${chelseaMarket.className}`}
          >
            Hello
          </h1>
        </div>

        <div className='absolute inset-0 h-full w-full text-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]'>
          <Image
            className='absolute brightness-50'
            fill={true}
            src='/assets/masseuse/placeholder.jpg'
            alt=''
          />
          <div className='absolute z-10 flex h-full w-full flex-col justify-center gap-4 p-6 text-left text-sm'>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
              className='text-logo transition-all duration-200 hover:brightness-125'
              href={bookingUrl}
            >
              Book me in!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
