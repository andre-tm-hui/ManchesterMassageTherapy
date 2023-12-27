import Hyperlink from './Hyperlink';
import ArrowSVG from '@/public/arrow.svg';

interface StyledLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export default function StyledLink({
  className,
  href,
  children,
}: StyledLinkProps) {
  return (
    <Hyperlink className={className} href={href}>
      <div>{children}</div>
      <ArrowSVG width='2rem' height='2rem' />
    </Hyperlink>
  );
}
