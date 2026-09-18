'use client';

import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';

import { ActionLink } from '@/components/actions';
import { SectionContainer, SectionHeader } from '@/components/layout';
import { useI18n } from '@/i18n';
import type { Location, OpeningPeriod } from '@/types';

function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

function formatWhatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

export function OpeningHours({ periods }: { periods: OpeningPeriod[] }) {
  const { t } = useI18n();
  const dayNames = t.location.dayNames;

  return (
    <dl className="space-y-[var(--space-2)]">
      {periods.map((period) => (
        <div key={period.day} className="type-small flex items-center justify-between gap-[var(--space-5)]">
          <dt className="text-[var(--text-muted)]">{dayNames[period.day]}</dt>
          <dd className="text-right text-[var(--text-primary)]">
            {period.closed ? t.location.closedLabel : `${period.opensAt}–${period.closesAt}`}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function LocationInfo({ location }: { location: Location }) {
  const { t } = useI18n();
  const address = `${location.addressLine1}, ${location.district} — ${location.city}, ${location.region}`;

  return (
    <div className="bg-[var(--background-secondary)] px-[var(--space-5)] py-[var(--space-8)] md:p-[var(--space-8)] lg:p-[var(--space-10)]">
      <SectionHeader
        eyebrow={t.location.eyebrow}
        title={t.location.title}
        description={t.location.description}
      />
      <div className="mt-[var(--space-8)] grid gap-[var(--space-7)] border-t border-[var(--border-subtle)] pt-[var(--space-7)] sm:grid-cols-2 sm:gap-[var(--space-8)]">
        <div>
          <p className="type-eyebrow text-[var(--text-muted)]">{location.name}</p>
          <address className="type-body-large mt-[var(--space-3)] not-italic text-[var(--text-primary)]">
            {location.addressLine1}
          </address>
          <p className="type-body mt-[var(--space-2)] text-[var(--text-secondary)]">
            {location.district} — {location.city}, {location.region}
            <br />
            {t.location.postalCodePrefix} {location.postalCode}
          </p>
          <p className="type-body mt-[var(--space-4)] text-[var(--text-secondary)]">{location.phone}</p>
        </div>
        <div>
          <p className="type-eyebrow text-[var(--text-muted)]">{t.location.hoursLabel}</p>
          <div className="mt-[var(--space-3)]">
            <OpeningHours periods={location.openingHours} />
          </div>
        </div>
      </div>
      <div className="mt-[var(--space-8)] flex flex-col gap-[var(--space-3)] sm:flex-row sm:flex-wrap">
        <ActionLink href="/booking">{t.location.actions.booking}</ActionLink>
        <ActionLink tone="secondary" href={location.directionsUrl ?? location.mapUrl ?? '#'} external>
          <MapPin aria-hidden="true" /> {t.location.actions.directions}
          <span className="sr-only">{t.common.newTabHint}</span>
        </ActionLink>
        <ActionLink tone="secondary" href={formatPhoneHref(location.phone)}>
          <Phone aria-hidden="true" /> {t.location.actions.call}
        </ActionLink>
        {location.whatsapp ? (
          <ActionLink tone="secondary" href={formatWhatsappHref(location.whatsapp)} external>
            <MessageCircle aria-hidden="true" /> {t.location.actions.whatsapp}
            <span className="sr-only">{t.common.newTabHint}</span>
          </ActionLink>
        ) : null}
      </div>
    </div>
  );
}

export function MapContainer({ location }: { location: Location }) {
  const { t } = useI18n();

  return (
    <a
      href={location.mapUrl ?? location.directionsUrl ?? '#'}
      target="_blank"
      rel="noreferrer"
      className="map-surface group relative grid min-h-[22rem] place-items-center overflow-hidden border-t border-[var(--border-subtle)] lg:min-h-full lg:border-l lg:border-t-0"
      aria-label={`${t.location.mapLabel}, ${t.location.mapAriaSuffix}`}
    >
      <div className="relative z-10 grid place-items-center text-center">
        <span className="map-pin relative grid size-3 place-items-center rounded-full bg-[var(--brand-accent)]" />
        <p className="type-label mt-[var(--space-9)]">{location.district}</p>
        <p className="type-small mt-1 text-[var(--text-muted)]">
          {location.city} · {location.region}
        </p>
      </div>
      <span className="type-eyebrow absolute bottom-[var(--space-5)] right-[var(--space-5)] inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--brand-accent)]">
        {t.location.actions.directions}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </span>
    </a>
  );
}

export function LocationSection({ location }: { location: Location }) {
  return (
    <SectionContainer id="localizacao" size="wide" spacing="editorial" className="landing-anchor">
      <div className="grid overflow-hidden border border-[var(--border-subtle)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <LocationInfo location={location} />
        <MapContainer location={location} />
      </div>
    </SectionContainer>
  );
}

export { formatPhoneHref, formatWhatsappHref };
