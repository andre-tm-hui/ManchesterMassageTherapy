import { ComponentProps } from 'react';

export default function Overlay({
  className,
  children,
  ...all
}: ComponentProps<'div'>) {
  return (
    <div className={`overlay-filter h-full w-full ${className}`} {...all}>
      {children}
    </div>
  );
}
