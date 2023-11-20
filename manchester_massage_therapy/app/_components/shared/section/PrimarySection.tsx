import { ComponentProps } from 'react';
import Section from '.';

export default function PrimarySection({
  children,
  ...all
}: ComponentProps<'div'>) {
  return (
    <Section bgColor='bg-primary' {...all}>
      {children}
    </Section>
  );
}
