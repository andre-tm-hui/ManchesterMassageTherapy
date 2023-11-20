import { ComponentProps } from 'react';
import Section from '.';

export default function SecondarySection({
  children,
  ...all
}: ComponentProps<'div'>) {
  return (
    <Section bgColor='bg-secondary' {...all}>
      {children}
    </Section>
  );
}
