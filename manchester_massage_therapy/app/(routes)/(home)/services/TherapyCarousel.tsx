import TreatmentCard from './TreatmentCard';
import Carousel from '@/app/_components/shared/carousel';
import Overlay from '@/app/_components/shared/widgets/Overlay';
import { Therapy } from '@prisma/client';

interface TherapyCarouselProps {
  cards: Therapy[];
}

export default function TherapyCarousel({ cards }: TherapyCarouselProps) {
  const cardComponents = cards.map((c, idx) => {
    return (
      <TreatmentCard
        className='mr-5 flex-[0_0_22em] md:mr-0'
        key={c.uid}
        {...c}
      ></TreatmentCard>
    );
  });

  return (
    <div className='relative w-full'>
      <div className='mx-auto hidden max-w-6xl flex-row flex-wrap justify-center gap-6 md:flex'>
        {cardComponents}
      </div>
      <Carousel
        className='w-full max-w-3xl overflow-visible md:hidden md:max-w-none'
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
              var(--bg-primary-color) 0%, 
              rgba(0, 0, 0, 0) 20%, 
              rgba(0, 0, 0, 0) 80%, 
              var(--bg-primary-color) 100%
            )`,
        }}
      />
    </div>
  );
}
