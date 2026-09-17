import type { ComponentProps } from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { Field } from './field';

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'id'> {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export function TextInput({
  id,
  label,
  description,
  error,
  required,
  className,
  ...props
}: TextInputProps) {
  return (
    <Field id={id} label={label} description={description} error={error} required={required}>
      <Input
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'h-12 rounded-[var(--radius-control)] border-[var(--border-strong)] bg-[var(--background-primary)] px-[var(--space-4)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:border-[var(--focus-ring)] focus-visible:ring-0 disabled:bg-[var(--disabled-surface)] disabled:text-[var(--disabled-text)] md:text-base',
          className,
        )}
        {...props}
      />
    </Field>
  );
}
