import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import { chelseaMarket } from '@/app/fonts';
import { prisma } from '@/libs/prisma';
import TherapyCarousel from './(components)/TherapyCarousel';

export default async function Services() {
  const cards = await prisma.therapy.findMany({ take: 5 });

  return (
    <PrimarySection className='flex flex-col justify-center text-center'>
      <h1
        className={`text-5xl text-secondary md:pb-6 md:text-7xl ${chelseaMarket.className}`}
      >
        Popular Treatments
      </h1>
      <TherapyCarousel cards={cards} />
    </PrimarySection>
  );
}
