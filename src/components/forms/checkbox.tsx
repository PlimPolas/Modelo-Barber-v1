'use client';

import type { ComponentProps } from 'react';

import { Checkbox as CheckboxPrimitive } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface CheckboxProps extends ComponentProps<typeof CheckboxPrimitive> {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export function Checkbox({ id, label, description, error, className, ...props }: CheckboxProps) {
  return (
    <div className="group/field grid grid-cols-[auto_1fr] gap-x-[var(--space-3)] gap-y-[var(--space-1)]">
      <CheckboxPrimitive
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : description ? `${id}-description` : undefined}
        className={cn(
          'mt-0.5 size-5 border-[var(--border-strong)] bg-[var(--background-primary)] data-checked:border-[var(--brand-accent)] data-checked:bg-[var(--brand-accent)] data-checked:text-[var(--text-on-accent)] focus-visible:ring-0',
          className,
        )}
        {...props}
      />
      <label htmlFor={id} className="type-body cursor-pointer font-medium text-[var(--text-primary)]">
        {label}
      </label>
      {description ? (
        <p id={`${id}-description`} className="type-small col-start-2 text-[var(--text-secondary)]">
          {description}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="type-small col-start-2 text-[var(--status-error)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
