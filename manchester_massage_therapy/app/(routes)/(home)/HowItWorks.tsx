import SVGCard from '@/app/_components/shared/SVGCard';
import { chelseaMarket } from '@/app/fonts';
import BookingButton from '@/app/_components/shared/BookingButton';
import SelectTreatmentSVG from '../../../public/assets/home/selectTreatment.svg';
import ScheduleTreatmentSVG from '../../../public/assets/home/scheduleTreatment.svg';
import RelaxSVG from '../../../public/assets/home/relax.svg';
import AccentSection from '@/app/_components/shared/section/AccentSection';

export default function HowItWorks() {
  return (
    <AccentSection className='flex flex-col justify-center text-center md:mb-[-5rem]'>
      <h1
        className={`text-5xl text-secondary md:text-7xl ${chelseaMarket.className}`}
      >
        How it works
      </h1>
      <div className='m-auto flex w-auto flex-row flex-wrap justify-center md:space-x-16'>
        <SVGCard
          key={1}
          stepSvg={<SelectTreatmentSVG />}
          header='1. Pick a treatment'
          desc='Select the on that fits your needs best'
          color='text-svg'
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
          color='text-svg'
        />
        <SVGCard
          key={3}
          stepSvg={<RelaxSVG />}
          header='3. Sit back and relax'
          desc='Our therapist will make their way to you with everything they need'
          color='text-svg'
        />
      </div>
      <BookingButton className='mx-auto my-5 w-52 px-6 py-3' />
    </AccentSection>
  );
}
