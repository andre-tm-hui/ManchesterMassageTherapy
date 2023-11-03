'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  classNames?: undefined | string;
  autoplay?: undefined | boolean;
  axis?: undefined | 'x' | 'y';
  loop?: undefined | boolean;
  showOverflow?: undefined | boolean;
  children?: undefined | JSX.Element | JSX.Element[];
}

export default function Carousel({
  classNames,
  autoplay,
  axis,
  loop,
  showOverflow,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: loop ?? false, axis: axis ?? 'x', duration: 40 },
    autoplay ? [Autoplay()] : []
  );
  return (
    <div
      className={`embla ${
        showOverflow ? 'overflow-visible' : 'overflow-hidden'
      } ${classNames ?? ''}`}
      ref={emblaRef}
    >
      <div
        className={`embla__container flex ${
          axis == 'x' ? 'flex-row' : 'flex-col'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
