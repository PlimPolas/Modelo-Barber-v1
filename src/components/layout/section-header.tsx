import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: 'start' | 'center';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'start',
  as = 'h2',
  className,
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <header
      className={cn(
        'flex max-w-3xl flex-col gap-[var(--space-4)]',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? <p className="type-eyebrow text-primary">{eyebrow}</p> : null}
      <Heading className={as === 'h1' ? 'type-h1' : 'type-h2'}>{title}</Heading>
      {description ? (
        <p className="type-body-large max-w-2xl text-[var(--text-secondary)]">{description}</p>
      ) : null}
      {action ? <div className="pt-[var(--space-2)]">{action}</div> : null}
    </header>
  );
}
