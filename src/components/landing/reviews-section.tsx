import { SectionContainer, SectionHeader } from '@/components/layout';
import { landingContent } from '@/data';
import type { Review } from '@/types';

import { ReviewCard } from './review-card';

interface ReviewsSectionProps {
  reviews: Review[];
  locale: string;
}

export function ReviewsSection({ reviews, locale }: ReviewsSectionProps) {
  return (
    <SectionContainer id="avaliacoes" size="wide" spacing="editorial" className="landing-anchor">
      <SectionHeader
        eyebrow={landingContent.reviews.eyebrow}
        title={landingContent.reviews.title}
        description={landingContent.reviews.description}
      />
      <div className="review-scroller -mx-[var(--page-gutter)] mt-[var(--space-8)] flex snap-x snap-mandatory gap-[var(--space-4)] overflow-x-auto px-[var(--page-gutter)] pb-[var(--space-4)] lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 xl:grid-cols-4">
        {reviews.map((review) => (
          <div key={review.id} className="w-[82vw] max-w-[22rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
            <ReviewCard review={review} locale={locale} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
