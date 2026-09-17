import { ArrowRight, Clock3 } from 'lucide-react';
import Link from 'next/link';

import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  actionLabel: string;
  featuredLabel: string;
  locale: string;
}

export function ServiceCard({ service, actionLabel, featuredLabel, locale }: ServiceCardProps) {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: service.currency,
    maximumFractionDigits: 0,
  }).format(service.price);

  return (
    <article className="group flex min-h-full flex-col border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)] transition-colors duration-[var(--motion-level-1-duration)] hover:border-[var(--border-strong)] md:p-[var(--space-6)]">
      <div className="flex min-h-7 items-center justify-between gap-[var(--space-3)]">
        <p className="type-eyebrow text-[var(--text-muted)]">{service.category}</p>
        {service.featured ? (
          <span className="type-eyebrow border border-[var(--brand-accent)] px-2 py-1 text-[var(--brand-accent)]">
            {featuredLabel}
          </span>
        ) : null}
      </div>
      <h3 className="type-h3 mt-[var(--space-5)]">{service.name}</h3>
      <p className="type-body mt-[var(--space-3)] flex-1 text-[var(--text-secondary)]">
        {service.shortDescription}
      </p>
      <div className="mt-[var(--space-6)] flex items-end justify-between gap-[var(--space-4)] border-t border-[var(--border-subtle)] pt-[var(--space-4)]">
        <div>
          <p className="type-h3 text-[var(--brand-accent)]">{price}</p>
          <p className="type-small mt-1 flex items-center gap-2 text-[var(--text-muted)]">
            <Clock3 aria-hidden="true" className="size-4" />
            {service.durationMinutes} min
          </p>
        </div>
        <Link
          href={`/booking?service=${service.slug}`}
          aria-label={`${actionLabel}: ${service.name}`}
          className="type-button inline-flex min-h-12 items-center gap-2 text-right text-[var(--text-primary)] underline decoration-[var(--brand-accent)] underline-offset-4"
        >
          <span className="hidden sm:inline">{actionLabel}</span>
          <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
