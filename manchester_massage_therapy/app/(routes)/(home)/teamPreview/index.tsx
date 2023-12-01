import MasseuseCard from './MasseuseCard';
import { chelseaMarket } from '@/app/fonts';
import Carousel from '@/app/_components/shared/carousel';
import AccentSection from '@/app/_components/shared/section/AccentSection';
import Hyperlink from '@/app/_components/shared/widgets/Hyperlink';
import ArrowSVG from '@/public/arrow.svg';
import { prisma } from '@/libs/prisma';
import PlaceholderMasseuseCard from './PlaceholderMasseuseCard';

export default async function TeamPreview() {
  const masseuses = await prisma.practitioner
    .findMany({
      take: 1,
    })
    .then((masseuses) =>
      masseuses.map((masseuse) => (
        <MasseuseCard
          key={masseuse.uid}
          className='mr-3 flex-[0_0_16em] md:flex-[0_0_20em]'
          {...masseuse}
        />
      ))
    );

  let i = -1;
  while (masseuses.length < 3) {
    masseuses.push(
      <PlaceholderMasseuseCard
        className='mr-3 flex-[0_0_16em] md:flex-[0_0_20em]'
        key={i--}
      />
    );
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
          {masseuses.map((masseuse, _) => masseuse)}
        </Carousel>
      </div>
    </AccentSection>
  );
}
