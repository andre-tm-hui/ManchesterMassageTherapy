import { ComponentProps } from 'react';
import Section from '.';

export default function AccentSection({
  children,
  ...all
}: ComponentProps<'div'>) {
  return (
    <Section bgColor='bg-accent' {...all}>
      {children}
    </Section>
  );
}
