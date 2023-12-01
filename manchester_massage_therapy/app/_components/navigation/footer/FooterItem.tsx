import { LinkProps } from 'next/link';
import { ComponentProps } from 'react';
import NoScrollLink from '../../shared/widgets/NoScrollLink';

export default function FooterItem({
  href = '',
  children,
}: LinkProps & ComponentProps<'div'>) {
  return (
    <td>
      <NoScrollLink
        href={href!}
        className='transition-all ease-linear hover:brightness-125'
      >
        {children}
      </NoScrollLink>
    </td>
  );
}
