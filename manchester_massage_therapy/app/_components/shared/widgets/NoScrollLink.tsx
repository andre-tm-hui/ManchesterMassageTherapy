'use client';

import { scrollToTop } from '@/libs/util';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface NoScrollLinkProps extends LinkProps {
  children?: ReactNode;
  className?: undefined | string;
}

export default function NoScrollLink({
  children,
  onClick,
  ...all
}: NoScrollLinkProps) {
  return (
    <Link
      scroll={false}
      onClick={(event) => {
        onClick ? onClick(event) : null;
        navigator.userAgent.includes('Firefox')
          ? scrollToTop(window)
          : window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      {...all}
    >
      {children}
    </Link>
  );
}
