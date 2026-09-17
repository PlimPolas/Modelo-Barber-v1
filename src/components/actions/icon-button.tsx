'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Button as ButtonPrimitive } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IconButtonProps extends Omit<ComponentProps<typeof ButtonPrimitive>, 'children'> {
  label: string;
  icon: ReactNode;
}

export function IconButton({ label, icon, className, ...props }: IconButtonProps) {
  return (
    <ButtonPrimitive
      aria-label={label}
      title={label}
      className={cn(
        'motion-level-1 size-12 rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-transparent text-[var(--text-primary)] hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent-soft)] focus-visible:ring-0',
        className,
      )}
      {...props}
    >
      {icon}
    </ButtonPrimitive>
  );
}
