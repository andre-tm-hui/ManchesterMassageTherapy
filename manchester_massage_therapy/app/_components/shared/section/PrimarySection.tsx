import { ComponentProps } from 'react';
import Section from '.';

export default function PrimarySection({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <Section className={`bg-primary ${className ?? ''}`}>{children}</Section>
  );
}
