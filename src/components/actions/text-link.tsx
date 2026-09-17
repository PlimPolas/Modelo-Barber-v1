import type { AnchorHTMLAttributes } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export function TextLink({ children, className, external = false, ...props }: TextLinkProps) {
  return (
    <a
      className={cn(
        'motion-level-1 inline-flex min-h-11 items-center gap-[var(--space-2)] font-semibold text-[var(--text-primary)] underline decoration-[var(--brand-accent)] decoration-1 underline-offset-4 hover:text-[var(--brand-accent-hover)]',
        className,
      )}
      target={external ? '_blank' : props.target}
      rel={external ? 'noreferrer' : props.rel}
      {...props}
    >
      {children}
      {external ? <ArrowUpRight aria-label="Abre em nova aba" className="size-4" /> : null}
    </a>
  );
}
