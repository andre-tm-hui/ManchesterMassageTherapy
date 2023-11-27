import Hyperlink from '@/app/_components/shared/Hyperlink';
import { chelseaMarket } from '@/app/fonts';
import { treatmentIdsToNames, getYears } from '@/libs/util';
import { Practitioner } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps } from 'react';

export default async function MasseuseCard({
  uid,
  profilePhotoUrl,
  firstName,
  surname,
  joinDate,
  expertIn,
  className,
}: Practitioner & ComponentProps<'div'>) {
  const expertInNames = await treatmentIdsToNames(expertIn);
  const isPlaceholder = uid < 0;
  const placeholderClass = isPlaceholder
    ? 'rounded-lg bg-secondary text-transparent'
    : '';
  const fullName = `${firstName} ${surname}`;
  const yearsWithMMT = getYears(joinDate);

  return (
    <div
      dir='ltr'
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        {profilePhotoUrl ? (
          <Image
            fill={true}
            src={profilePhotoUrl}
            alt={fullName}
            className='object-cover'
          />
        ) : (
          <div className='flex h-full w-full items-center bg-secondary'>
            <Hyperlink
              className={`m-auto text-3xl text-secondary ${chelseaMarket.className}`}
              href='/join'
            >
              Join the team!
            </Hyperlink>
          </div>
        )}
      </div>
      <div className='h-24 space-y-1 px-3 py-2 md:h-28'>
        <h3
          className={`${chelseaMarket.className} ${
            isPlaceholder && 'h-8 w-48'
          } ${placeholderClass}`}
        >
          {fullName}
        </h3>
        <p
          className={`text-xs ${
            isPlaceholder && 'h-4 w-64'
          } ${placeholderClass}`}
        >
          {`Years with MMT: ${yearsWithMMT}`}
        </p>
        <p
          className={`text-xs ${
            isPlaceholder && 'h-auto w-full'
          } ${placeholderClass}`}
        >
          {`Expert In: ${expertInNames}`}
        </p>
      </div>
    </div>
  );
}
