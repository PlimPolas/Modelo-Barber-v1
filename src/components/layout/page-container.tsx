import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export function PageContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<'main'>) {
  return (
    <main
      className={cn('min-h-screen overflow-x-clip bg-background text-foreground', className)}
      {...props}
    />
  );
}
