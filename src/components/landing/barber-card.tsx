import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/lib/app-link';

import { FocalImage } from '@/components/media';
import type { Barber, MediaAsset } from '@/types';

interface BarberCardProps {
  barber: Barber;
  media: MediaAsset;
  actionPrefix: string;
}

export function BarberCard({ barber, media, actionPrefix }: BarberCardProps) {
  return (
    <article className="group min-w-0">
      <div className="overflow-hidden bg-[var(--surface)]">
        <FocalImage
          asset={media}
          aspectRatio="4 / 5"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          imageClassName="motion-level-2 scale-[1.01] transition-transform group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-[var(--space-5)] border-t border-[var(--border-subtle)] pt-[var(--space-4)]">
        <div className="flex items-start justify-between gap-[var(--space-4)]">
          <div className="min-w-0">
            <h3 className="type-h3">{barber.name}</h3>
            <p className="type-eyebrow mt-[var(--space-2)] text-[var(--brand-accent)]">{barber.role}</p>
          </div>
          <Link
            href={`/booking?barber=${barber.slug}`}
            aria-label={`${actionPrefix} ${barber.name}`}
            className="grid size-11 shrink-0 place-items-center border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
          >
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </div>

        <p className="type-body mt-[var(--space-4)] max-w-[38ch] text-[var(--text-secondary)]">{barber.shortBio}</p>

        <ul
          className="type-small mt-[var(--space-4)] flex flex-wrap items-center gap-x-[var(--space-3)] gap-y-1 text-[var(--text-muted)]"
          aria-label={`Especialidades de ${barber.name}`}
        >
          {barber.specialties.map((specialty, index) => (
            <li key={specialty} className="flex items-center gap-[var(--space-3)]">
              {index > 0 ? <span aria-hidden="true" className="h-3 w-px bg-[var(--border-subtle)]" /> : null}
              {specialty}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
