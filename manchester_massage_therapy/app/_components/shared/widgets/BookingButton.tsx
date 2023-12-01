import { ComponentProps } from 'react';
import PillButton from './PillButton';

export default function BookingButton(props: ComponentProps<'a'>) {
  return (
    <PillButton href='https://booking.com' {...props}>
      Book me in!
    </PillButton>
  );
}
