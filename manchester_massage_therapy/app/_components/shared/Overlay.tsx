import { CSSProperties } from 'react';

interface OverlayProps {
  className?: undefined | string;
  style?: undefined | CSSProperties;
}

export default function Overlay({ className, style }: OverlayProps) {
  return (
    <div
      className={`overlay-filter h-full w-full ${className}`}
      style={style}
    />
  );
}
