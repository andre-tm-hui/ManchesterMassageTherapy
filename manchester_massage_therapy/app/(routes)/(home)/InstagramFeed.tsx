'use client';

import { chelseaMarket } from '@/app/fonts';
import PillButton from '@/app/_components/shared/PillButton';
import InstagramMasonry from './(components)/InstagramMasonry';

export default function InstagramFeed() {
  return (
    <div className='relative col-span-1 h-auto max-h-[150vh] w-full overflow-hidden bg-secondary'>
      <div className='mx-auto flex h-full w-full flex-col items-center px-5 py-16 md:py-12 lg:w-4/5'>
        <h1 className={`${chelseaMarket.className} text-7xl`}>Gallery</h1>
        <InstagramMasonry />
      </div>
      <div className='fade-to-footer overlay-filter h-full w-full' />
      <PillButton
        classNames='py-4 z-10 w-72 text-center m-auto overlay-button'
        href='https://www.instagram.com/manchester_massage_therapy/'
      >
        Check out more photos!
      </PillButton>
    </div>
  );
}
