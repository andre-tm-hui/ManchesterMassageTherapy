'use client';

import { useState } from 'react';
import TreatmentCard from './TreatmentCard';
import Carousel from '@/app/_components/shared/carousel';
import Overlay from '@/app/_components/shared/widgets/Overlay';
import { Therapy } from '@prisma/client';

interface TherapyCarouselProps {
  cards: Therapy[];
}

export default function TherapyCarousel({ cards }: TherapyCarouselProps) {
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
        key={c.uid}
        {...c}
        flipped={flipped[idx]}
        onClick={(_) => flipCard(idx)}
      ></TreatmentCard>
    );
  });

  return (
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
  );
}
