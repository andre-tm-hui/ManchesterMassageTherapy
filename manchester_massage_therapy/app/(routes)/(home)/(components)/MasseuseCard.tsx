import IMasseuseData from '@/app/_types/masseuse/Masseuse';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';
import { ComponentProps } from 'react';

export default function MasseuseCard({
  profilePhotoUrl,
  fullName,
  yearsWithMMT,
  expertIn,
  className,
}: IMasseuseData & ComponentProps<'div'>) {
  return (
    <div
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        <Image
          fill={true}
          src={profilePhotoUrl}
          alt={fullName}
          className='object-cover'
        ></Image>
      </div>
      <div className='h-24 px-3 py-2 md:h-28'>
        <h3 className={`${chelseaMarket.className}`}>{fullName}</h3>
        <p className='text-xs'>{`Years with MMT: ${yearsWithMMT}`}</p>
        <p className='text-xs'>{`Expert In: ${expertIn.join(', ')}`}</p>
      </div>
    </div>
  );
}
