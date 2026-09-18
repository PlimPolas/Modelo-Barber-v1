import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
  locale: string;
  variant?: 'default' | 'featured';
  ratingLabel: string;
}

function formatDate(review: Review, locale: string) {
  return review.publishedAt
    ? new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(
        new Date(`${review.publishedAt}T12:00:00`),
      )
    : null;
}

function Rating({ rating, ratingLabel }: { rating: number; ratingLabel: string }) {
  return (
    <div className="flex gap-1 text-[var(--brand-accent)]" aria-label={`${rating} ${ratingLabel}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} aria-hidden="true" className="size-3.5" fill={index < rating ? 'currentColor' : 'none'} />
      ))}
    </div>
  );
}

export function ReviewCard({ review, locale, variant = 'default', ratingLabel }: ReviewCardProps) {
  const date = formatDate(review, locale);
  const meta = `${review.source}${date ? ` · ${date}` : ''}`;

  if (variant === 'featured') {
    return (
      <article className="flex h-full flex-col justify-between gap-[var(--space-5)] bg-[var(--surface)] p-[var(--space-5)] md:gap-[var(--space-6)] md:p-[var(--space-8)]">
        <div>
          <span aria-hidden="true" className="quote-mark block">
            “
          </span>
          <blockquote className="review-quote mt-[var(--space-3)] text-[var(--text-primary)]">
            {review.excerpt}
          </blockquote>
        </div>
        <footer>
          <Rating rating={review.rating} ratingLabel={ratingLabel} />
          <p className="type-label mt-[var(--space-4)]">{review.authorName}</p>
          <p className="type-small mt-1 text-[var(--text-muted)]">{meta}</p>
        </footer>
      </article>
    );
  }

  return (
    <article
      className={cn(
        'flex h-full flex-col justify-between gap-[var(--space-5)] border-t border-[var(--border-subtle)] pt-[var(--space-5)]',
      )}
    >
      <blockquote className="type-body-large max-w-[38ch] text-[var(--text-primary)]">“{review.excerpt}”</blockquote>
      <footer className="flex flex-wrap items-center gap-x-[var(--space-4)] gap-y-2">
        <Rating rating={review.rating} ratingLabel={ratingLabel} />
        <p className="type-label">{review.authorName}</p>
        <p className="type-small text-[var(--text-muted)]">{meta}</p>
      </footer>
    </article>
  );
}
