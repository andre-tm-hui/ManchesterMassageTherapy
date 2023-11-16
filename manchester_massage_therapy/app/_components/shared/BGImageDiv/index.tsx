import { ComponentProps } from 'react';

export default function BGImageDiv({
  src,
  className,
  children,
}: ComponentProps<'img'>) {
  return (
    <div className='h-screen w-full'>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={`h-full w-full overflow-hidden bg-cover`}
      />
      <div
        className={`overlay-filter bg-imageFilter ${className}`}
        style={{ pointerEvents: 'all' }}
      >
        {children}
      </div>
    </div>
  );
}
