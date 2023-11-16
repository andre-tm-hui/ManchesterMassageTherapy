import { ComponentProps, ReactNode } from 'react';

interface ConditionalWrapperProps extends ComponentProps<'div'> {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
}
export default function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) {
  return condition ? wrapper(children) : children;
}
