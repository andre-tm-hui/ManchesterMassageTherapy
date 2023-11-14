'use client';

import Overlay from '@/app/_components/shared/Overlay';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import { chelseaMarket } from '@/app/fonts';
import TreatmentCard from './(components)/TreatmentCard';
import { MouseEventHandler, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Carousel from '@/app/_components/shared/Carousel';

export default function Services() {
  const card = { title: 'yeet', description: 'yaw', bookingUrl: 'w0t' };
  const cards = [card, card, card, card, card];

  const [flipped, setFlipped] = useState(
    new Array<boolean>(cards.length).fill(false)
  );

  const flipCard = (idx: number) => {
    const newFlipped = new Array<boolean>(cards.length).fill(false);
    newFlipped[idx] = true;
    setFlipped(newFlipped);
  };

  const cardComponents = cards.map((c, idx) => {
    return (
      <TreatmentCard
        className='mr-5 flex-[0_0_16em] md:mr-0 md:flex-[0_0_20em]'
        key={idx}
        {...c}
        flipped={flipped[idx]}
        onClick={(_) => flipCard(idx)}
      ></TreatmentCard>
    );
  });

  return (
    <PrimarySection className='flex flex-col justify-center text-center'>
      <h1
        className={`text-5xl text-secondary md:pb-6 md:text-7xl ${chelseaMarket.className}`}
      >
        Popular Treatments
      </h1>
      <div className='relative w-full'>
        <div className='mx-auto hidden max-w-6xl flex-row flex-wrap justify-center gap-6 md:flex'>
          {cardComponents}
        </div>
        <Carousel
          className='w-full max-w-3xl md:hidden md:max-w-none'
          axis='x'
          autoplay={true}
          loop={true}
        >
          {cardComponents}
        </Carousel>
        <Overlay
          className='block md:hidden'
          style={{
            background: `linear-gradient(
              90deg, 
              var(--bg-primary-color) 5%, 
              rgba(0, 0, 0, 0) 25%, 
              rgba(0, 0, 0, 0) 75%, 
              var(--bg-primary-color) 95%
            )`,
          }}
        />
      </div>
    </PrimarySection>
  );
}
