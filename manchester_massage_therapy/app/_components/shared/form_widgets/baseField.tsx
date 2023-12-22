import { ReactNode } from 'react';
import { errorStyles, labelStyles } from './util';

export interface FieldProps {
  className?: string;
  label: string;
  required?: boolean;
  error?: string;
  children?: ReactNode;
}

export default function Field({
  label,
  className,
  required = false,
  error = '',
  children,
}: FieldProps) {
  return (
    <label className={`${labelStyles} ${className}`}>
      <div>
        {label}
        {required && (
          <span className={errorStyles(!error)}>*{error || 'required'}</span>
        )}
      </div>
      {children}
    </label>
  );
}
