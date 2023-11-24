import { ComponentProps } from 'react';
import StarSVG from 'public/star.svg';

interface StarRatingProps extends ComponentProps<'div'> {
  rating: number;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  const Star = (highlighted: boolean, key: number) => (
    <div
      key={key}
      className={`h-4 w-4 ${
        highlighted ? 'text-yellow-300' : 'text-slate-100'
      }`}
    >
      <StarSVG width='1rem' height='1rem' />
    </div>
  );

  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(Star(i < rating, i));
  }

  return (
    // TODO: implement
    <div className={`flex flex-row ${className}`}>
      {stars.map((star) => star)}
    </div>
  );
}
