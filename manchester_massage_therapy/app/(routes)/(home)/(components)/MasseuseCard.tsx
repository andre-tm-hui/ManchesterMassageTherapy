import { chelseaMarket } from '@/app/fonts';
import { treatmentIdsToNames, getYears } from '@/libs/util';
import { Practitioner } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps } from 'react';

export default async function MasseuseCard({
  profilePhotoUrl,
  firstName,
  surname,
  joinDate,
  expertIn,
  className,
}: Practitioner & ComponentProps<'div'>) {
  const expertInNames = await treatmentIdsToNames(expertIn);
  const fullName = `${firstName} ${surname}`;
  const yearsWithMMT = getYears(joinDate);

  return (
    <div
      dir='ltr'
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        <Image
          fill={true}
          src={profilePhotoUrl}
          alt={fullName}
          className='object-cover'
        />
      </div>
      <div className='h-24 space-y-1 px-3 py-2 md:h-28'>
        <h3 className={`${chelseaMarket.className}`}>{fullName}</h3>
        <p className='text-xs'>{`Years with MMT: ${yearsWithMMT}`}</p>
        <p className='text-xs'>{`Expert In: ${expertInNames}`}</p>
      </div>
    </div>
  );
}
