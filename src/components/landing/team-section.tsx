'use client';

import { SectionContainer, SectionHeader } from '@/components/layout';
import { useI18n } from '@/i18n';
import type { Barber, MediaAsset } from '@/types';

import { BarberCard } from './barber-card';

interface TeamSectionProps {
  barbers: Barber[];
  resolveMedia: (id: string) => MediaAsset;
}

export function TeamSection({ barbers, resolveMedia }: TeamSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer id="equipe" size="wide" spacing="editorial" className="landing-anchor">
      <SectionHeader eyebrow={t.team.eyebrow} title={t.team.title} description={t.team.description} />
      <div className="mt-[var(--space-8)] grid gap-x-[var(--space-5)] gap-y-[var(--space-9)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[var(--space-6)]">
        {barbers.map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            media={resolveMedia(barber.primaryMediaId ?? 'media-foundation-placeholder')}
            actionPrefix={t.team.actionPrefix}
            specialtiesLabel={t.team.specialtiesLabel}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
