import SVGCard from '@/app/_components/shared/SVGCard';
import { chelseaMarket } from '@/app/fonts';
import BookingButton from '@/app/_components/shared/BookingButton';

import SelectTreatmentSVG from '../../../public/assets/home/selectTreatment.svg';
import ScheduleTreatmentSVG from '../../../public/assets/home/scheduleTreatment.svg';
import RelaxSVG from '../../../public/assets/home/relax.svg';

export default function HowItWorks() {
  return (
    <div className='flex w-full justify-center bg-accent'>
      <div className='flex flex-col py-16 text-center lg:py-12'>
        <h1 className={`text-5xl md:text-7xl ${chelseaMarket.className}`}>
          How it works
        </h1>
        <div className='my-2 flex flex-col md:flex-row md:space-x-4 lg:space-x-20'>
          <SVGCard
            key={1}
            stepSvg={<SelectTreatmentSVG />}
            header='1. Pick a treatment'
            desc='Select the on that fits your needs best'
          >
            <a
              className='text-accent transition-all duration-200 hover:brightness-125'
              href='./'
            >
              Unsure?
            </a>
          </SVGCard>
          <SVGCard
            key={2}
            stepSvg={<ScheduleTreatmentSVG />}
            header='2. Schedule a date'
            desc='Choose an open time slot that fits your plans'
          />
          <SVGCard
            key={3}
            stepSvg={<RelaxSVG />}
            header='3. Sit back and relax'
            desc='Our therapist will make their way to you with everything they need'
          />
        </div>
        <BookingButton classNames='w-52 mx-auto my-5 px-6 py-3' />
      </div>
    </div>
  );
}
