'use client';

import type { ComponentProps } from 'react';
import { LoaderCircle } from 'lucide-react';

import { Button as ButtonPrimitive } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonTone = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'large';

export interface ButtonProps extends Omit<ComponentProps<typeof ButtonPrimitive>, 'size' | 'variant'> {
  tone?: ButtonTone;
  size?: ButtonSize;
  loading?: boolean;
}

const tones = {
  primary:
    'border-transparent bg-[var(--brand-accent)] text-[var(--text-on-accent)] hover:bg-[var(--brand-accent-hover)] active:bg-[var(--brand-accent-active)]',
  secondary:
    'border-[var(--border-strong)] bg-transparent text-[var(--text-primary)] hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent-soft)]',
  ghost:
    'border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]',
} satisfies Record<ButtonTone, string>;

export function Button({
  className,
  children,
  tone = 'primary',
  size = 'default',
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(
        'type-button motion-level-1 min-h-12 gap-[var(--space-2)] rounded-[var(--radius-control)] border px-[var(--space-5)] shadow-none focus-visible:ring-0 disabled:bg-[var(--disabled-surface)] disabled:text-[var(--disabled-text)] disabled:opacity-100',
        size === 'large' && 'min-h-14 px-[var(--space-6)]',
        tones[tone],
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : null}
      {children}
    </ButtonPrimitive>
  );
}
