import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface NoScrollLinkProps extends LinkProps {
  children?: ReactNode;
  className?: undefined | string;
}

export default function NoScrollLink({ children, ...all }: NoScrollLinkProps) {
  return (
    <Link scroll={false} {...all}>
      {children}
    </Link>
  );
}
