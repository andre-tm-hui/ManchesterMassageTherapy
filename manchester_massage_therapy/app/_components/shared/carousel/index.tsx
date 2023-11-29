'use client';

import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ComponentProps, useCallback, useEffect, useState } from 'react';
import CarouselButtons from './CarouselButtons';
import CarouselDots from './CarouselDots';

interface CarouselProps extends ComponentProps<'div'> {
  autoplay?: undefined | boolean;
  axis?: undefined | 'x' | 'y';
  loop?: undefined | boolean;
  showOverflow?: undefined | boolean;
  showButtons?: undefined | boolean;
  showDots?: undefined | boolean;
  dir?: undefined | 'ltr' | 'rtl';
}

export default function Carousel({
  className,
  autoplay = false,
  axis = 'x',
  loop = false,
  showOverflow = false,
  showButtons = false,
  showDots = false,
  dir = 'ltr',
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: loop ?? false,
      axis: axis ?? 'x',
      duration: 40,
      direction: dir,
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
          dir={dir}
          className={`embla__container flex ${
            axis == 'x' ? 'flex-row' : 'flex-col'
          }`}
        >
          {children}
        </div>
      </div>
      {showButtons && (
        <CarouselButtons
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          dir={dir}
        />
      )}
      {showDots && (
        <CarouselDots
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          scrollTo={scrollTo}
          dir={dir}
        />
      )}
    </div>
  );
}
