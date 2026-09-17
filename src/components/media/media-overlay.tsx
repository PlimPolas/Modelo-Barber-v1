import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface MediaOverlayProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'bottom' | 'full' | 'directional';
}

const overlays = {
  bottom: 'bg-gradient-to-t from-[var(--background-primary)] via-[rgb(11_12_12/58%)] to-transparent',
  full: 'bg-[rgb(11_12_12/52%)]',
  directional: 'bg-gradient-to-r from-[rgb(11_12_12/86%)] via-[rgb(11_12_12/38%)] to-transparent',
};

export function MediaOverlay({ className, variant = 'bottom', ...props }: MediaOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', overlays[variant], className)}
      {...props}
    />
  );
}
