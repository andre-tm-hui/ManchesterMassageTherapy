interface BGImageDivProps {
  src: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export default function BGImageDiv({
  src,
  className,
  children,
}: BGImageDivProps) {
  return (
    <div className='h-screen w-full'>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={`h-full w-full overflow-hidden bg-cover`}
      />
      <div className={`splash-filter overlay-filter ${className}`}>
        {children}
      </div>
    </div>
  );
}
