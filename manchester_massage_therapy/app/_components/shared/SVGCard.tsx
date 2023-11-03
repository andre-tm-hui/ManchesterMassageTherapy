import { chelseaMarket } from '@/app/fonts';

interface StepCardProps {
  stepSvg: JSX.Element;
  header: string;
  desc: string;
  children?: undefined | JSX.Element;
}

export default function SVGCard({
  stepSvg,
  header,
  desc,
  children,
}: StepCardProps) {
  return (
    <div className='mx-auto flex w-60 flex-col space-y-1 lg:w-72'>
      <div className='mx-auto'>
        <stepSvg.type margin={'auto'} width={'14rem'} height={'14rem'} />
      </div>
      <h3 className={`text-2xl ${chelseaMarket.className}`}>{header}</h3>
      <p className='text-lg'>{desc}</p>
      {children}
    </div>
  );
}
