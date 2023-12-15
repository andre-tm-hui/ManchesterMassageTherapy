import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { formStyles, formVariants } from './util';
import Field from './baseField';
import { FieldProps } from './baseField';

interface SelectFieldProps extends ComponentProps<'select'>, FieldProps {
  fields: string[];
  value: string;
  animating?: boolean;
}

export default function SelectField({
  label,
  fields,
  className,
  required = false,
  error = '',
  value,
  animating = false,
  onChange,
  ...all
}: SelectFieldProps) {
  return (
    <Field
      className={className}
      label={label}
      required={required}
      error={error}
    >
      <motion.select
        variants={formVariants}
        animate={animating ? 'error' : 'idle'}
        value={value}
        className={`h-8 ${formStyles}`}
        onChange={onChange}
      >
        <option value='' hidden>
          Select a {label.toLowerCase()}
        </option>
        {fields.map((field) => (
          <option key={field}>{field}</option>
        ))}
      </motion.select>
    </Field>
  );
}
