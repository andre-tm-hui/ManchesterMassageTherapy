import Hyperlink from '@/app/_components/shared/Hyperlink';
import { chelseaMarket } from '@/app/fonts';
import { prisma } from '@/libs/prisma';
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
      dir='ltr'
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        {uid > 0 ? (
          <Image
            fill={true}
            src={profilePhotoUrl}
            alt={firstName + ' ' + surname}
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
            uid < 0 && 'h-8 w-48 rounded-lg bg-secondary text-transparent'
          }`}
        >
          {firstName + ' ' + surname}
        </h3>
        <p
          className={`text-xs ${
            uid < 0 && 'h-4 w-64 rounded-lg bg-secondary text-transparent'
          }`}
        >{`Years with MMT: ${(
          (Date.now() - joinDate.getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
        ).toFixed(0)}`}</p>
        <p
          className={`text-xs ${
            uid < 0 && 'h-auto w-full rounded-lg bg-secondary text-transparent'
          }`}
        >{`Expert In: ${expertInNames.join(', ')}`}</p>
      </div>
    </div>
  );
}
