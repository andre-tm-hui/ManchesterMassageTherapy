import ChevronSvg from '@/public/chevron.svg';

interface CarouselButtonsProps {
  scrollNext: () => void;
  scrollPrev: () => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  dir: 'ltr' | 'rtl';
}

export default function CarouselButtons({
  scrollNext,
  scrollPrev,
  prevBtnDisabled,
  nextBtnDisabled,
  dir,
}: CarouselButtonsProps) {
  return (
    <div className='pointer-events-none absolute top-0 z-10 h-full w-full p-4'>
      <button
        className='embla__prev rotate-180'
        onClick={dir === 'ltr' ? scrollPrev : scrollNext}
        disabled={dir === 'ltr' ? prevBtnDisabled : nextBtnDisabled}
      >
        <ChevronSvg width={'4rem'} height={'4rem'} />
      </button>
      <button
        className='embla__next right-0'
        onClick={dir === 'ltr' ? scrollNext : scrollPrev}
        disabled={dir === 'ltr' ? nextBtnDisabled : prevBtnDisabled}
      >
        <ChevronSvg width={'4rem'} height={'4rem'} />
      </button>
    </div>
  );
}
