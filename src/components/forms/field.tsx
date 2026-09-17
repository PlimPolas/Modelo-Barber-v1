import type { ReactNode } from 'react';

import {
  Field as FieldPrimitive,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';

interface FieldProps {
  id: string;
  label: string;
  description?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
  children: ReactNode;
}

export function Field({ id, label, description, error, required, children }: FieldProps) {
  return (
    <FieldPrimitive data-invalid={Boolean(error)}>
      <FieldLabel htmlFor={id} className="type-label text-[var(--text-primary)]">
        {label}
        {required ? <span aria-hidden="true" className="text-[var(--brand-accent)]"> *</span> : null}
      </FieldLabel>
      {children}
      {description && !error ? <FieldDescription>{description}</FieldDescription> : null}
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </FieldPrimitive>
  );
}
