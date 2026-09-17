import type { HTMLAttributes, ReactNode } from 'react';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

import { cn } from '@/lib/utils';

type InlineMessageTone = 'info' | 'success' | 'warning' | 'error';

const icons: Record<InlineMessageTone, ReactNode> = {
  info: <Info aria-hidden="true" className="size-5" />,
  success: <CircleCheck aria-hidden="true" className="size-5" />,
  warning: <CircleAlert aria-hidden="true" className="size-5" />,
  error: <CircleX aria-hidden="true" className="size-5" />,
};

const tones: Record<InlineMessageTone, string> = {
  info: 'border-[var(--status-info)] text-[var(--status-info)]',
  success: 'border-[var(--status-success)] text-[var(--status-success)]',
  warning: 'border-[var(--status-warning)] text-[var(--status-warning)]',
  error: 'border-[var(--status-error)] text-[var(--status-error)]',
};

interface InlineMessageProps extends HTMLAttributes<HTMLDivElement> {
  tone?: InlineMessageTone;
  title: string;
}

export function InlineMessage({
  tone = 'info',
  title,
  children,
  className,
  ...props
}: InlineMessageProps) {
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={cn(
        'grid grid-cols-[auto_1fr] gap-x-[var(--space-3)] rounded-[var(--radius-surface)] border bg-[var(--surface)] p-[var(--space-4)]',
        tones[tone],
        className,
      )}
      {...props}
    >
      {icons[tone]}
      <div>
        <p className="font-semibold text-current">{title}</p>
        {children ? <div className="type-small mt-[var(--space-1)] text-[var(--text-secondary)]">{children}</div> : null}
      </div>
    </div>
  );
}
