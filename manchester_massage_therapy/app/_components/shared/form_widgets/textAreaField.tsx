import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { formStyles, formVariants } from './util';
import Field, { FieldProps } from './baseField';

interface TextAreaFieldProps extends ComponentProps<'textarea'>, FieldProps {
  textAreaClassName?: string;
  label: string;
  value: string;
  animating?: boolean;
}

export default function TextAreaField({
  label,
  className,
  textAreaClassName,
  required = false,
  error = '',
  value,
  animating = false,
  onChange,
}: TextAreaFieldProps) {
  return (
    <Field
      className={className}
      label={label}
      required={required}
      error={error}
    >
      <motion.textarea
        variants={formVariants}
        animate={animating ? 'error' : 'idle'}
        value={value}
        style={{ resize: 'none' }}
        className={`${textAreaClassName} ${formStyles}`}
        onChange={onChange}
      />
    </Field>
  );
}
