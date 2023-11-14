import Section from '.';

interface PrimarySectionProps {
  className?: undefined | string;
  children?: undefined | JSX.Element | JSX.Element[];
}

export default function PrimarySection({
  className,
  children,
}: PrimarySectionProps) {
  return (
    <Section className={`bg-primary ${className ?? ''}`}>{children}</Section>
  );
}
