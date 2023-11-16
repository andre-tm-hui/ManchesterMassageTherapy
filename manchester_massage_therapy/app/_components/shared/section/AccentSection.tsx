import { ComponentProps } from 'react';
import Section from '.';

export default function AccentSection({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <Section className={`bg-accent ${className ?? ''}`}>{children}</Section>
  );
}
