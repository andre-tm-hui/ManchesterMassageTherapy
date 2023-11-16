import { ComponentProps } from 'react';
import Section from '.';

export default function SecondarySection({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <Section className={`bg-secondary ${className ?? ''}`}>{children}</Section>
  );
}
