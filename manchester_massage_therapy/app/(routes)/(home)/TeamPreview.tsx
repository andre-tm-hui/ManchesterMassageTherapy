import IMasseuseData, {
  defaultMasseuses,
} from '@/app/_types/masseuse/Masseuse';
import MasseuseCard from './(components)/MasseuseCard';
import { chelseaMarket } from '@/app/fonts';
import Carousel from '@/app/_components/shared/Carousel';
import PillButton from '@/app/_components/shared/PillButton';

export default function TeamPreview() {
  const masseuses: IMasseuseData[] = defaultMasseuses;

  return (
    <div className='flex w-full bg-accent'>
      <div className='flex w-full flex-col justify-end pb-16 pt-0 md:flex-row md:flex-row-reverse lg:pb-12'>
        <div className='m-auto flex grid w-full max-w-xl justify-center space-y-5 px-5 pb-10 text-center md:pb-0'>
          <h1 className={`text-5xl md:text-7xl ${chelseaMarket.className}`}>
            Meet the Team!
          </h1>
          <p>Trained professionals, keeping your needs a priority.</p>
          <PillButton classNames='py-4 w-48 m-auto'>See everyone!</PillButton>
        </div>
        <Carousel
          classNames='md:w-[48vw] w-screen mx-0 block'
          axis='x'
          autoplay={false}
          loop={false}
        >
          {masseuses.map((masseuse, _) => {
            return (
              <MasseuseCard
                className='mr-3 flex-[0_0_16rem] shadow-2xl'
                key={masseuse.uuid}
                masseuseData={masseuse}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
