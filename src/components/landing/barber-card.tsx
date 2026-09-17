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
      <div className="overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)]">
        <FocalImage
          asset={media}
          aspectRatio="4 / 5"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          imageClassName="motion-level-2 scale-[1.01] transition-transform group-hover:scale-[1.035]"
        />
      </div>
      <div className="pt-[var(--space-4)]">
        <div className="flex items-start justify-between gap-[var(--space-4)]">
          <div>
            <h3 className="type-h3">{barber.name}</h3>
            <p className="type-small mt-1 text-[var(--brand-accent)]">{barber.role}</p>
          </div>
          <Link
            href={`/booking?barber=${barber.slug}`}
            aria-label={`${actionPrefix} ${barber.name}`}
            className="grid size-12 shrink-0 place-items-center border border-[var(--border-strong)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
          >
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
        <p className="type-body mt-[var(--space-3)] max-w-md text-[var(--text-secondary)]">{barber.shortBio}</p>
        <ul className="mt-[var(--space-4)] flex flex-wrap gap-2" aria-label={`Especialidades de ${barber.name}`}>
          {barber.specialties.map((specialty) => (
            <li key={specialty} className="type-small border border-[var(--border-subtle)] px-3 py-2 text-[var(--text-secondary)]">
              {specialty}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
