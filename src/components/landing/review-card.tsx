import { Star } from 'lucide-react';

import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
  locale: string;
}

export function ReviewCard({ review, locale }: ReviewCardProps) {
  const date = review.publishedAt
    ? new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(new Date(`${review.publishedAt}T12:00:00`))
    : null;

  return (
    <article className="flex min-h-[20rem] flex-col border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)] md:min-h-[22rem] md:p-[var(--space-6)]">
      <div className="flex gap-1 text-[var(--brand-accent)]" aria-label={`${review.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} aria-hidden="true" className="size-4" fill={index < review.rating ? 'currentColor' : 'none'} />
        ))}
      </div>
      <blockquote className="type-h3 mt-[var(--space-6)] flex-1">“{review.excerpt}”</blockquote>
      <footer className="mt-[var(--space-6)] border-t border-[var(--border-subtle)] pt-[var(--space-4)]">
        <p className="type-label">{review.authorName}</p>
        <p className="type-small mt-1 text-[var(--text-muted)]">
          {review.source}{date ? ` · ${date}` : ''}
        </p>
      </footer>
    </article>
  );
}

