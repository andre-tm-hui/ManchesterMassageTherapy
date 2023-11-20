import ConditionalWrapper from './ConditionalWrapper';
import MmtLogo from '../../../public/mmtLogo.svg';
import { ComponentProps } from 'react';
import NoScrollLink from './NoScrollLink';

interface LogoProps extends ComponentProps<'a'> {
  size: string;
}

export default function Logo({ href, className, size }: LogoProps) {
  return (
    <ConditionalWrapper
      condition={href ? true : false}
      wrapper={(children) => (
        <NoScrollLink href={href!} className={className!}>
          {children}
        </NoScrollLink>
      )}
    >
      <MmtLogo
        stylename='logo'
        width={size}
        height={size}
        color='var(--logo-rgb)'
      />
    </ConditionalWrapper>
  );
}
