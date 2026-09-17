import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ActionLinkTone = 'primary' | 'secondary' | 'ghost';
type ActionLinkSize = 'default' | 'large';

interface ActionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  tone?: ActionLinkTone;
  size?: ActionLinkSize;
  external?: boolean;
}

const tones = {
  primary:
    'border-transparent bg-[var(--brand-accent)] text-[var(--text-on-accent)] hover:bg-[var(--brand-accent-hover)] active:bg-[var(--brand-accent-active)]',
  secondary:
    'border-[var(--border-strong)] bg-transparent text-[var(--text-primary)] hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent-soft)]',
  ghost:
    'border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]',
} satisfies Record<ActionLinkTone, string>;

export function ActionLink({
  href,
  children,
  className,
  tone = 'primary',
  size = 'default',
  external = false,
  ...props
}: ActionLinkProps) {
  const styles = cn(
    'type-button motion-level-1 inline-flex min-h-12 items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-control)] border px-[var(--space-5)]',
    size === 'large' && 'min-h-14 px-[var(--space-6)]',
    tones[tone],
    className,
  );

  const isInternal = href.startsWith('/') || href.startsWith('#');

  if (!isInternal) {
    return (
      <a
        href={href}
        target={external ? '_blank' : props.target}
        rel={external ? 'noreferrer' : props.rel}
        className={styles}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}
