'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ComponentProps } from 'react';

interface CarouselProps extends ComponentProps<'div'> {
  autoplay?: undefined | boolean;
  axis?: undefined | 'x' | 'y';
  loop?: undefined | boolean;
  showOverflow?: undefined | boolean;
}

export default function Carousel({
  className,
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
      } ${className ?? ''}`}
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
