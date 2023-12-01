import Hyperlink from '@/app/_components/shared/widgets/Hyperlink';
import { chelseaMarket } from '@/app/fonts';
import { ComponentProps } from 'react';

export default async function PlaceholderMasseuseCard({
  className,
}: ComponentProps<'div'>) {
  const placeholderClass = 'rounded-lg bg-secondary text-transparent';

  return (
    <div
      dir='ltr'
      className={`${className} m-4 cursor-default flex-col bg-menu shadow-md shadow-card selection:bg-transparent`}
    >
      <div className='relative h-96 md:h-[34rem]'>
        <div className='flex h-full w-full items-center bg-secondary'>
          <Hyperlink
            className={`m-auto text-3xl text-secondary ${chelseaMarket.className}`}
            href='/join'
          >
            Join the team!
          </Hyperlink>
        </div>
      </div>
      <div className='h-24 space-y-1 px-3 py-2 md:h-28'>
        <div className={`h-8 w-48 ${placeholderClass}`} />
        <div className={`h-4 w-64 ${placeholderClass} `} />
        <div className={`h-auto w-full ${placeholderClass}`} />
      </div>
    </div>
  );
}
