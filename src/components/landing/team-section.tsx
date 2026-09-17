import { SectionContainer, SectionHeader } from '@/components/layout';
import { landingContent } from '@/data';
import type { Barber, MediaAsset } from '@/types';

import { BarberCard } from './barber-card';

interface TeamSectionProps {
  barbers: Barber[];
  resolveMedia: (id: string) => MediaAsset;
}

export function TeamSection({ barbers, resolveMedia }: TeamSectionProps) {
  return (
    <SectionContainer id="equipe" size="wide" spacing="editorial" className="landing-anchor">
      <SectionHeader
        eyebrow={landingContent.team.eyebrow}
        title={landingContent.team.title}
        description={landingContent.team.description}
      />
      <div className="mt-[var(--space-8)] grid gap-x-[var(--space-4)] gap-y-[var(--space-8)] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[var(--space-5)]">
        {barbers.map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            media={resolveMedia(barber.primaryMediaId ?? 'media-foundation-placeholder')}
            actionPrefix={landingContent.team.actionPrefix}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
