'use client';

import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ComponentProps, useCallback, useEffect, useState } from 'react';
import ChevronSvg from '../../../public/chevron.svg';

interface CarouselProps extends ComponentProps<'div'> {
  autoplay?: undefined | boolean;
  axis?: undefined | 'x' | 'y';
  loop?: undefined | boolean;
  showOverflow?: undefined | boolean;
  showButtons?: undefined | boolean;
  showDots?: undefined | boolean;
  direction?: undefined | 'ltr' | 'rtl';
}

export default function Carousel({
  className,
  autoplay = false,
  axis = 'x',
  loop = false,
  showOverflow = false,
  showButtons = false,
  showDots = false,
  direction = 'ltr',
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: loop ?? false,
      axis: axis ?? 'x',
      duration: 40,
      direction: direction,
    },
    autoplay ? [Autoplay()] : []
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={`embla relative ${className ?? ''}`}>
      <div
        className={`embla__viewport ${
          showOverflow ? 'overflow-visible' : 'overflow-hidden'
        } ${className ?? ''}`}
        ref={emblaRef}
      >
        <div
          dir={direction}
          className={`embla__container flex ${
            axis == 'x' ? 'flex-row' : 'flex-col'
          }`}
        >
          {children}
        </div>
      </div>
      {showButtons ? (
        <div className='pointer-events-none absolute top-0 z-10 h-full w-full p-4'>
          <button
            className='embla__prev rotate-180'
            onClick={direction === 'ltr' ? scrollPrev : scrollNext}
            disabled={direction === 'ltr' ? prevBtnDisabled : nextBtnDisabled}
          >
            <ChevronSvg width={'4rem'} height={'4rem'} />
          </button>
          <button
            className='embla__next right-0'
            onClick={direction === 'ltr' ? scrollNext : scrollPrev}
            disabled={direction === 'ltr' ? nextBtnDisabled : prevBtnDisabled}
          >
            <ChevronSvg width={'4rem'} height={'4rem'} />
          </button>
        </div>
      ) : undefined}
      {showDots ? (
        <div className='absolute bottom-5 flex w-full flex-row justify-center gap-1 p-4'>
          {scrollSnaps.map((_, index) => (
            <div
              dir={direction}
              key={index}
              onClick={() => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      ) : undefined}
    </div>
  );
}
