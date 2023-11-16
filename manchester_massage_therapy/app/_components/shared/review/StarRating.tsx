import { ComponentProps } from 'react';

interface StarRatingProps extends ComponentProps<'div'> {
  rating: number;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    // TODO: implement
    <div className={className}></div>
  );
}
