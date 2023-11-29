import MasseuseCard from './(components)/MasseuseCard';
import { chelseaMarket } from '@/app/fonts';
import Carousel from '@/app/_components/shared/carousel';
import AccentSection from '@/app/_components/shared/section/AccentSection';
import Hyperlink from '@/app/_components/shared/Hyperlink';
import ArrowSVG from '../../../public/arrow.svg';
import { prisma } from '@/libs/prisma';
import { Practitioner } from '@prisma/client';
import { emptyPractitioner } from '@/libs/templates';

export default async function TeamPreview() {
  const masseuses: Practitioner[] = await prisma.practitioner.findMany({
    take: 1,
  });

  let i = -1;
  while (masseuses.length < 3) {
    masseuses.push({ ...emptyPractitioner, uid: i-- });
  }

  return (
    <AccentSection className='flex flex-col justify-end pt-0 md:flex-row-reverse md:pt-8 2xl:justify-center'>
      <div className='my-auto flex w-full max-w-5xl flex-col justify-center gap-5 text-center md:w-[45%] md:pb-0'>
        <h1
          className={`text-5xl text-secondary md:text-7xl ${chelseaMarket.className}`}
        >
          Meet the Team!
        </h1>
        <p>Trained professionals, keeping your needs a priority.</p>
        <Hyperlink className='w-40' href='/team'>
          <div>See everyone</div>
          <ArrowSVG width='2rem' height='2rem' />
        </Hyperlink>
      </div>
      <div className='w-full max-w-6xl md:w-[55%]'>
        <Carousel
          className='mx-0 block w-full w-full'
          showButtons={true}
          dir='rtl'
        >
          {masseuses.map((masseuse, _) => {
            return (
              <MasseuseCard
                className='mr-3 flex-[0_0_16em] md:flex-[0_0_20em]'
                key={masseuse.uid}
                {...masseuse}
              />
            );
          })}
        </Carousel>
      </div>
    </AccentSection>
  );
}
