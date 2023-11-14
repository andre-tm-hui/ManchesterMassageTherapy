interface SectionProps {
  className?: undefined | string;
  children?: undefined | JSX.Element | JSX.Element[];
}

export default function Section({ className, children }: SectionProps) {
  return (
    <div className={`w-full gap-8 py-16 md:py-32 ${className ?? ''}`}>
      {children}
    </div>
  );
}
