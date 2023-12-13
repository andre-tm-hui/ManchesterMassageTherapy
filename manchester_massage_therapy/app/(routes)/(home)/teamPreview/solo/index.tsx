import AccentSection from '@/app/_components/shared/section/AccentSection';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';

export default function Solo() {
  return (
    <AccentSection className='mx-auto flex w-full max-w-5xl flex-col-reverse justify-center pt-0 md:flex-row-reverse md:pt-8'>
      <div className='my-auto flex w-full flex-col justify-center gap-5 px-8 text-center md:w-[65%] md:px-2 md:pb-0 md:text-left'>
        <h1
          className={`text-5xl text-secondary md:text-7xl ${chelseaMarket.className}`}
        >
          Who am I?
        </h1>
        <p>
          Having worked in massage for over 4 years, Lucas is an experienced
          therapist with a style that&apos;s holistic and remedial. His
          experience includes working for private clients and sports teams,
          providing clients with premium, tailored massage treatments, accented
          by his compassionate personality, and he also enjoys cycling in his
          free time.
        </p>
      </div>
      <div className='relative mx-auto h-[60vh] w-full max-w-[90%] md:max-w-[35%]'>
        <Image
          src='/assets/masseuse/placeholder.jpg'
          className='object-contain'
          alt='Lucas'
          fill={true}
        />
      </div>
    </AccentSection>
  );
}
