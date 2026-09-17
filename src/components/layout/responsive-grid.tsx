import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export function ResponsiveGrid({
  className,
  style,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: 'repeat(var(--grid-columns), minmax(0, 1fr))',
        gap: 'var(--grid-gap)',
        ...style,
      }}
      {...props}
    />
  );
}
