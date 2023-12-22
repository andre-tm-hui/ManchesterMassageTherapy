import { ComponentProps } from 'react';
import PillButton from './PillButton';

export default function BookingButton(props: ComponentProps<'a'>) {
  return (
    <PillButton href={process.env.NEXT_PUBLIC_BOOKING_REDIR} {...props}>
      Book me in!
    </PillButton>
  );
}
