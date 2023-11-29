interface CarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  dir: 'ltr' | 'rtl';
}

export default function CarouselDots({
  scrollSnaps,
  selectedIndex,
  scrollTo,
  dir,
}: CarouselDotsProps) {
  return (
    <div className='absolute bottom-5 flex w-full flex-row justify-center gap-1 p-4'>
      {scrollSnaps.map((_, index) => (
        <div
          dir={dir}
          key={index}
          onClick={() => scrollTo(index)}
          className={'embla__dot'.concat(
            index === selectedIndex ? ' embla__dot--selected' : ''
          )}
        />
      ))}
    </div>
  );
}
