import { LinkProps } from 'next/link';
import { ComponentProps } from 'react';
import NoScrollLink from './NoScrollLink';

export default function Hyperlink(
  props: (LinkProps & ComponentProps<'div'>) | ComponentProps<'a'>
) {
  const href = props.href ?? '.';
  const isInternalRoute = (
    typeof href === 'string' ? href : href.toString()
  ).startsWith('/');
  const wrapper = isInternalRoute ? <NoScrollLink href='' /> : <a />;

  return (
    <wrapper.type
      {...props}
      className={`${props.className} m-auto flex flex-row items-center justify-center gap-1 text-hyperlink brightness-75 transition-all duration-200 hover:brightness-100`}
      target={isInternalRoute ? '' : '_blank'}
    >
      {props.children}
    </wrapper.type>
  );
}
