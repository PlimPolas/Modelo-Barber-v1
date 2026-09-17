import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type StackGap = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
  direction?: 'row' | 'column' | 'responsive';
  gap?: StackGap;
  align?: 'start' | 'center' | 'end' | 'stretch';
}

export function Stack({
  className,
  direction = 'column',
  gap = '4',
  align = 'stretch',
  style,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'column' && 'flex-col',
        direction === 'row' && 'flex-row flex-wrap',
        direction === 'responsive' && 'flex-col md:flex-row',
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
        align === 'end' && 'items-end',
        align === 'stretch' && 'items-stretch',
        className,
      )}
      style={{ gap: `var(--space-${gap})`, ...style }}
      {...props}
    />
  );
}
