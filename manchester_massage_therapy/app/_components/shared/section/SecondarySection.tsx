import Section from '.';

interface SecondarySectionProps {
  className?: undefined | string;
  children?: undefined | JSX.Element | JSX.Element[];
}

export default function SecondarySection({
  className,
  children,
}: SecondarySectionProps) {
  return (
    <Section className={`bg-secondary ${className ?? ''}`}>{children}</Section>
  );
}
