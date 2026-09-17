import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type ContainerSize = 'small' | 'content' | 'wide' | 'full';
type SectionSpacing = 'none' | 'compact' | 'default' | 'editorial';

const maxWidths: Record<ContainerSize, string> = {
  small: 'max-w-[var(--container-small)]',
  content: 'max-w-[var(--container-content)]',
  wide: 'max-w-[var(--container-wide)]',
  full: 'max-w-none',
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: '',
  compact: 'py-[var(--space-8)] md:py-[var(--space-9)]',
  default: 'py-[var(--space-9)] md:py-[var(--space-11)]',
  editorial: 'py-[var(--space-10)] md:py-[var(--space-12)]',
};

export interface SectionContainerProps extends ComponentPropsWithoutRef<'section'> {
  size?: ContainerSize;
  spacing?: SectionSpacing;
}

export function SectionContainer({
  className,
  size = 'content',
  spacing = 'default',
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        'mx-auto w-full px-[var(--page-gutter)]',
        maxWidths[size],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    />
  );
}
