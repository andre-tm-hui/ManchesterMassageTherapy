import { ComponentProps } from 'react';

export default function Section({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <div className={`w-full gap-8 py-16 md:py-32 ${className ?? ''}`}>
      {children}
    </div>
  );
}
