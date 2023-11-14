import IMasseuseData from '@/app/_types/masseuse/Masseuse';
import { chelseaMarket } from '@/app/fonts';
import Image from 'next/image';

interface MasseuseCardProps {
  masseuseData: IMasseuseData;
  className: undefined | string;
}

export default function MasseuseCard({
  masseuseData,
  className,
}: MasseuseCardProps) {
  return (
    <div className={`${className} shadow-card m-4 flex-col bg-menu shadow-md`}>
      <div className='relative h-96 md:h-[34rem]'>
        <Image
          fill={true}
          src={masseuseData.profilePhotoUrl}
          alt={masseuseData.fullName}
          className='object-cover'
        ></Image>
      </div>
      <div className='h-24 px-3 py-2 md:h-28'>
        <h3 className={`${chelseaMarket.className}`}>
          {masseuseData.fullName}
        </h3>
        <p className='text-xs'>{`Years with MMT: ${masseuseData.yearsWithMMT}`}</p>
        <p className='text-xs'>{`Expert In: ${masseuseData.expertIn.join(
          ', '
        )}`}</p>
      </div>
    </div>
  );
}
