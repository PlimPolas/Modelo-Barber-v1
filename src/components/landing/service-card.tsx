import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/app-link';

import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  actionLabel: string;
  featuredLabel: string;
  minutesSuffix: string;
  locale: string;
}

export function ServiceCard({ service, actionLabel, featuredLabel, minutesSuffix, locale }: ServiceCardProps) {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: service.currency,
    maximumFractionDigits: 0,
  }).format(service.price);

  return (
    <article className="group relative flex min-h-full flex-col justify-between gap-[var(--space-6)] bg-[var(--background-primary)] px-[var(--space-5)] py-[var(--space-6)] transition-colors duration-[var(--motion-level-1-duration)] hover:bg-[var(--surface)] md:px-[var(--space-6)] md:py-[var(--space-7)]">
      <div>
        <div className="flex items-baseline justify-between gap-[var(--space-4)]">
          <h3 className="type-h3 max-w-[16ch]">{service.name}</h3>
          <p className="type-h3 shrink-0 tabular-nums text-[var(--brand-accent)]">{price}</p>
        </div>

        <div className="mt-[var(--space-3)] flex flex-wrap items-center gap-x-[var(--space-3)] gap-y-1">
          <span className="type-eyebrow text-[var(--text-muted)]">{service.category}</span>
          <span aria-hidden="true" className="h-3 w-px bg-[var(--border-subtle)]" />
          <span className="type-eyebrow text-[var(--text-muted)]">{service.durationMinutes} {minutesSuffix}</span>
          {service.featured ? (
            <>
              <span aria-hidden="true" className="h-3 w-px bg-[var(--border-subtle)]" />
              <span className="type-eyebrow text-[var(--brand-accent)]">{featuredLabel}</span>
            </>
          ) : null}
        </div>

        <p className="type-body mt-[var(--space-4)] max-w-[42ch] text-[var(--text-secondary)]">
          {service.shortDescription}
        </p>
      </div>

      <Link
        href={`/booking?service=${service.slug}`}
        aria-label={`${actionLabel}: ${service.name}`}
        className="type-button inline-flex min-h-11 items-center gap-2 self-start text-[var(--text-secondary)] transition-colors group-hover:text-[var(--brand-accent)]"
      >
        {actionLabel}
        <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
