import { SectionContainer, SectionHeader } from '@/components/layout';
import { landingContent } from '@/data';
import type { Review } from '@/types';

import { ReviewCard } from './review-card';

interface ReviewsSectionProps {
  reviews: Review[];
  locale: string;
}

export function ReviewsSection({ reviews, locale }: ReviewsSectionProps) {
  const [featured, ...rest] = reviews;

  return (
    <SectionContainer id="avaliacoes" size="wide" spacing="editorial" className="landing-anchor">
      <SectionHeader
        eyebrow={landingContent.reviews.eyebrow}
        title={landingContent.reviews.title}
        description={landingContent.reviews.description}
      />

      <div className="mt-[var(--space-8)] grid gap-[var(--space-6)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-[var(--space-8)]">
        {featured ? <ReviewCard review={featured} locale={locale} variant="featured" /> : null}

        {rest.length ? (
          <div className="grid gap-[var(--space-6)] sm:grid-cols-2 lg:gap-x-[var(--space-8)]">
            {rest.map((review) => (
              <ReviewCard key={review.id} review={review} locale={locale} />
            ))}
          </div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
