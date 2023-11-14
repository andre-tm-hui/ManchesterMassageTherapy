import IMasseuseData, {
  defaultMasseuses,
} from '@/app/_types/masseuse/Masseuse';
import MasseuseCard from './(components)/MasseuseCard';
import { chelseaMarket } from '@/app/fonts';
import Carousel from '@/app/_components/shared/Carousel';
import PillButton from '@/app/_components/shared/PillButton';
import AccentSection from '@/app/_components/shared/section/AccentSection';

export default function TeamPreview() {
  const masseuses: IMasseuseData[] = defaultMasseuses;

  return (
    <AccentSection className='flex flex-col justify-end pt-0 md:flex-row-reverse md:pt-8'>
      <div className='m-auto w-full max-w-2xl justify-center space-y-5 px-5 pb-10 text-center md:pb-0'>
        <h1
          className={`text-5xl text-secondary md:text-7xl ${chelseaMarket.className}`}
        >
          Meet the Team!
        </h1>
        <p className='pb-12'>
          Trained professionals, keeping your needs a priority.
        </p>
        <PillButton href='/team' classNames='py-4 px-12'>
          See everyone!
        </PillButton>
      </div>
      <Carousel
        className='mx-0 block w-full w-screen max-w-4xl'
        axis='x'
        autoplay={false}
        loop={false}
      >
        {masseuses.map((masseuse, _) => {
          return (
            <MasseuseCard
              className='mr-3 flex-[0_0_16em] md:flex-[0_0_20em]'
              key={masseuse.uuid}
              masseuseData={masseuse}
            />
          );
        })}
      </Carousel>
    </AccentSection>
  );
}
