interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element | JSX.Element[]) => JSX.Element;
  children: JSX.Element | JSX.Element[];
}
export default function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) {
  return condition ? wrapper(children) : children;
}
