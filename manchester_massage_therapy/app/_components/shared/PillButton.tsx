import Link, { LinkProps } from 'next/link';
import { ComponentProps } from 'react';

export default function PillButton(
  props: ComponentProps<'a'> | (LinkProps & ComponentProps<'div'>)
) {
  const href = props.href ?? '.';
  const isInternalRoute = (
    typeof href === 'string' ? href : href.toString()
  ).startsWith('/');
  const wrapper = isInternalRoute ? <Link href='' /> : <a />;

  return (
    <wrapper.type
      {...props}
      className={`${props.className} bg-booking-button rounded-full bg-bookingButtonIdle font-bold font-bold text-bookingButton text-bookingButton transition-all ease-linear hover:bg-bookingButtonHover`}
      href={href}
      target={isInternalRoute ? '' : '_blank'}
      rel={'noreferrer'}
    >
      {props.children}
    </wrapper.type>
  );
}
