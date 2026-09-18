'use client';

import { SectionContainer, SectionHeader } from '@/components/layout';
import { useI18n } from '@/i18n';
import type { Review } from '@/types';

import { ReviewCard } from './review-card';

interface ReviewsSectionProps {
  reviews: Review[];
  locale: string;
}

export function ReviewsSection({ reviews, locale }: ReviewsSectionProps) {
  const { t } = useI18n();
  const [featured, ...rest] = reviews;

  return (
    <SectionContainer id="avaliacoes" size="wide" spacing="editorial" className="landing-anchor">
      <SectionHeader eyebrow={t.reviews.eyebrow} title={t.reviews.title} description={t.reviews.description} />

      <div className="mt-[var(--space-8)] grid gap-[var(--space-6)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-[var(--space-8)]">
        {featured ? (
          <ReviewCard review={featured} locale={locale} variant="featured" ratingLabel={t.reviews.ratingLabel} />
        ) : null}

        {rest.length ? (
          <div className="grid gap-[var(--space-6)] sm:grid-cols-2 lg:gap-x-[var(--space-8)]">
            {rest.map((review) => (
              <ReviewCard key={review.id} review={review} locale={locale} ratingLabel={t.reviews.ratingLabel} />
            ))}
          </div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
