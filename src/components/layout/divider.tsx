'use client';

import type { ComponentProps } from 'react';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function Divider({ className, ...props }: ComponentProps<typeof Separator>) {
  return <Separator className={cn('bg-[var(--border-subtle)]', className)} {...props} />;
}
