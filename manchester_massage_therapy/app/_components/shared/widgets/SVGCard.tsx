import { chelseaMarket } from '@/app/fonts';
import { ComponentProps } from 'react';

interface StepCardProps extends ComponentProps<'div'> {
  stepSvg: JSX.Element;
  header: string;
  desc: string;
  color?: undefined | string;
}

export default function SVGCard({
  stepSvg,
  header,
  desc,
  children,
  color,
}: StepCardProps) {
  return (
    <div className='mb-auto flex w-full max-w-xs flex-col space-y-1 sm:w-1/3 md:m-0 md:w-1/4'>
      <div className={`${color ?? ''} mx-auto`}>
        <stepSvg.type margin={'auto'} width={'100%'} height={'100%'} />
      </div>
      <h3 className={`text-2xl ${chelseaMarket.className} text-secondary`}>
        {header}
      </h3>
      <p className='text-lg'>{desc}</p>
      {children}
    </div>
  );
}
