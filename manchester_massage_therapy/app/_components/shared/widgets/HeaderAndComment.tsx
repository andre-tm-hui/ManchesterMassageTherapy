import { chelseaMarket } from '@/app/fonts';
import { ComponentProps } from 'react';

interface HeaderAndCommentProps extends ComponentProps<'div'> {
  title: string;
}

export default function HeaderAndComment({
  title,
  children,
  className,
  dir,
}: HeaderAndCommentProps) {
  return (
    <div
      className={`flex ${
        dir == 'rtl' ? 'sm:flex-row-reverse sm:divide-x-reverse' : 'sm:flex-row'
      } flex-col items-center divide-y divide-zinc-400 sm:divide-x sm:divide-y-0 ${
        className ?? ''
      }`}
    >
      <h1
        className={`h-full ${chelseaMarket.className} w-9/12 p-6 text-center text-4xl font-bold sm:w-5/12`}
      >
        {title}
      </h1>
      <p className='w-9/12 p-6 text-left sm:w-8/12'>{children}</p>
    </div>
  );
}
