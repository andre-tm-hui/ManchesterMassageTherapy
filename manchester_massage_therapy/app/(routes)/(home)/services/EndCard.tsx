import NoScrollLink from '@/app/_components/shared/widgets/NoScrollLink';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';

interface EndCardProps {
  className?: string;
}

export default function EndCard({ className }: EndCardProps) {
  const containerClassNames = [
    'relative',
    'h-full',
    'w-full',
    'text-white',
    'transition-all',
    'duration-500',
    'saturate-50',
    'hover:saturate-100',
  ];

  return (
    <NoScrollLink
      href={'/services'}
      className={`group aspect-square [perspective:1000px] selection:bg-transparent ${className}`}
    >
      <div className={containerClassNames.join(' ')}>
        <div className='absolute inset-0 shadow-xl'>
          <Image
            className='absolute'
            fill={true}
            src={'/assets/home/splash.jpg'}
            alt={'See our services'}
          />
          <h1
            className={`absolute top-1/2 translate-y-[-50%] p-6 text-4xl ${chelseaMarket.className}`}
          >
            See the rest
          </h1>
        </div>
      </div>
    </NoScrollLink>
  );
}
