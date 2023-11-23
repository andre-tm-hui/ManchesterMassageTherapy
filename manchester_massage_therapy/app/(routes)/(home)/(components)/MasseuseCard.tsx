import { chelseaMarket } from '@/app/fonts';
import { prisma } from '@/libs/prisma';
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
  const expertInNames = await Promise.all(
    expertIn.map(async (uid) => {
      return await prisma.therapy
        .findFirst({ where: { uid: uid } })
        .then((res) => {
          return res?.name;
        });
    })
  );

  return (
    <div
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        <Image
          fill={true}
          src={profilePhotoUrl}
          alt={firstName + ' ' + surname}
          className='object-cover'
        ></Image>
      </div>
      <div className='h-24 px-3 py-2 md:h-28'>
        <h3 className={`${chelseaMarket.className}`}>
          {firstName + ' ' + surname}
        </h3>
        <p className='text-xs'>{`Years with MMT: ${(
          (Date.now() - joinDate.getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
        ).toFixed(0)}`}</p>
        <p className='text-xs'>{`Expert In: ${expertInNames.join(', ')}`}</p>
      </div>
    </div>
  );
}
