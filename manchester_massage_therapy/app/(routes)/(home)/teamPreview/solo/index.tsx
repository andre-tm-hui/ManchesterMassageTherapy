import AccentSection from '@/app/_components/shared/section/AccentSection';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';

export default function Solo() {
  return (
    <AccentSection className='mx-auto flex w-full max-w-5xl flex-col-reverse justify-center pt-0 md:flex-row-reverse md:pt-8'>
      <div className='my-auto flex w-full flex-col justify-center gap-5 text-center md:w-[65%] md:pb-0'>
        <h1
          className={`text-5xl text-secondary md:text-7xl ${chelseaMarket.className}`}
        >
          Who am I?
        </h1>
        <p>
          My name is Lucas Socha, and I&apos;m a professionally trained massage
          therapist of X years.
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
