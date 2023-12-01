import { ComponentProps } from 'react';

export default function Overlay({ className, style }: ComponentProps<'div'>) {
  return (
    <div
      className={`overlay-filter h-full w-full ${className}`}
      style={style}
    />
  );
}
