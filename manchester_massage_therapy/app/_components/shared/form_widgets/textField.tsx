import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { formStyles, formVariants } from './util';
import Field, { FieldProps } from './baseField';

interface TextFieldProps extends ComponentProps<'input'>, FieldProps {
  label: string;
  value: string;
  animating?: boolean;
}

export default function TextField({
  label,
  className,
  required = false,
  error = '',
  value,
  animating = false,
  onChange,
}: TextFieldProps) {
  return (
    <Field
      className={className}
      label={label}
      required={required}
      error={error}
    >
      <motion.input
        variants={formVariants}
        animate={animating ? 'error' : 'idle'}
        value={value}
        className={`h-8 ${formStyles}`}
        onChange={onChange}
      />
    </Field>
  );
}
