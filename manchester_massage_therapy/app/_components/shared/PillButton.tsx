interface PillProps {
  classNames?: string;
  href?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export default function PillButton({
  classNames,
  href = '',
  children,
}: PillProps) {
  return (
    <a
      className={`${classNames} bg-booking-button rounded-full bg-bookingButtonIdle font-bold font-bold text-bookingButton text-bookingButton transition-all ease-linear hover:bg-bookingButtonHover`}
      href={href}
      target={'_blank'}
      rel={'noreferrer'}
    >
      {children}
    </a>
  );
}
