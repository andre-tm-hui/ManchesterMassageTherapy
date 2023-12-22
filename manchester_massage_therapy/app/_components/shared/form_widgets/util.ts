export const labelStyles = 'flex w-full flex-col gap-2';

export const errorStyles = (isValid: boolean) =>
  `px-2 text-xs transition-all duration-100 ease-in-out ${
    !isValid ? 'text-red-500' : 'text-zinc-600'
  }`;

export const formStyles =
  'text-secondary bg-secondary rounded-md focus:outline-none p-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50';

export const formVariants = {
  idle: {
    x: 0,
    y: 0,
  },
  error: {
    x: [0, -2, -2, 2, 2, 0],
    y: [0, -1, 1, -1, 1, 0],
    transition: { repeat: Infinity, times: [0, 0.1, 0.3, 0.5, 0.7, 1] },
  },
};
