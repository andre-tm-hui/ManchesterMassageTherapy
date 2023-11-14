'use client';

import { chelseaMarket } from '@/app/fonts';
import PillButton from '@/app/_components/shared/PillButton';
import InstagramMasonry from './(components)/InstagramMasonry';
import SecondarySection from '@/app/_components/shared/section/SecondarySection';
import Overlay from '@/app/_components/shared/Overlay';

export default function InstagramFeed() {
  return (
    <SecondarySection className='relative col-span-1 h-auto max-h-[350vh] overflow-hidden pb-0 md:max-h-[150vh]'>
      <div className='mx-auto w-full items-center px-4 md:h-full md:px-0 lg:w-4/5'>
        <h1
          className={`${chelseaMarket.className} m-auto w-min text-5xl text-secondary md:text-7xl`}
        >
          Gallery
        </h1>
        <InstagramMasonry />
      </div>
      <Overlay
        style={{
          background: `linear-gradient(
            0deg,
            var(--bg-menu-color) 0%,
            var(--bg-menu-color) 5rem,
            rgba(0, 0, 0, 0) 20rem,
            rgba(0, 0, 0, 0) 100%
          )`,
        }}
      />
      <PillButton
        classNames='py-4 z-10 w-72 text-center m-auto overlay-button'
        href='https://www.instagram.com/manchester_massage_therapy/'
      >
        Check out more photos!
      </PillButton>
    </SecondarySection>
  );
}
