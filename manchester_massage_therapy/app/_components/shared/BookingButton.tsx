import PillButton from './PillButton';

interface BookingButtonProps {
  classNames: string;
}

export default function BookingButton({ classNames }: BookingButtonProps) {
  return <PillButton classNames={`${classNames}`}>Book me in!</PillButton>;
}
