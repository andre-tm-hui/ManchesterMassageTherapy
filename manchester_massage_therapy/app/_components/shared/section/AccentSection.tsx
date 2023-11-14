import Section from '.';

interface AccentSectionProps {
  className?: undefined | string;
  children?: undefined | JSX.Element | JSX.Element[];
}

export default function AccentSection({
  className,
  children,
}: AccentSectionProps) {
  return (
    <Section className={`bg-accent ${className ?? ''}`}>{children}</Section>
  );
}
