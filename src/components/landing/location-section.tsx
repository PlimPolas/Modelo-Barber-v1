import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';

import { ActionLink } from '@/components/actions';
import { SectionContainer, SectionHeader } from '@/components/layout';
import { landingContent } from '@/data';
import type { Location, OpeningPeriod } from '@/types';

const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'] as const;

function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

function formatWhatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

export function OpeningHours({ periods }: { periods: OpeningPeriod[] }) {
  return (
    <dl className="space-y-[var(--space-2)]">
      {periods.map((period) => (
        <div key={period.day} className="type-small flex items-center justify-between gap-[var(--space-5)]">
          <dt className="text-[var(--text-muted)]">{dayNames[period.day]}</dt>
          <dd className="text-right text-[var(--text-primary)]">
            {period.closed ? 'Fechado' : `${period.opensAt}–${period.closesAt}`}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function LocationInfo({ location }: { location: Location }) {
  const address = `${location.addressLine1}, ${location.district} — ${location.city}, ${location.region}`;

  return (
    <div className="bg-[var(--surface)] p-[var(--space-5)] md:p-[var(--space-8)] lg:p-[var(--space-9)]">
      <SectionHeader
        eyebrow={landingContent.location.eyebrow}
        title={landingContent.location.title}
        description={landingContent.location.description}
      />
      <div className="mt-[var(--space-7)] grid gap-[var(--space-6)] sm:grid-cols-2">
        <div>
          <p className="type-label">{location.name}</p>
          <address className="type-body mt-[var(--space-3)] not-italic text-[var(--text-secondary)]">
            {address}<br />CEP {location.postalCode}
          </address>
          <p className="type-body mt-[var(--space-3)] text-[var(--text-secondary)]">{location.phone}</p>
        </div>
        <div>
          <p className="type-label mb-[var(--space-3)]">{landingContent.location.hoursLabel}</p>
          <OpeningHours periods={location.openingHours} />
        </div>
      </div>
      <div className="mt-[var(--space-7)] grid grid-cols-2 gap-[var(--space-3)] sm:flex sm:flex-wrap">
        <ActionLink tone="secondary" href={location.directionsUrl ?? location.mapUrl ?? '#'} external>
          <MapPin aria-hidden="true" /> {landingContent.location.actions.directions}
          <span className="sr-only"> (abre em nova aba)</span>
        </ActionLink>
        <ActionLink tone="secondary" href={formatPhoneHref(location.phone)}>
          <Phone aria-hidden="true" /> {landingContent.location.actions.call}
        </ActionLink>
        {location.whatsapp ? (
          <ActionLink tone="secondary" href={formatWhatsappHref(location.whatsapp)} external>
            <MessageCircle aria-hidden="true" /> {landingContent.location.actions.whatsapp}
            <span className="sr-only"> (abre em nova aba)</span>
          </ActionLink>
        ) : null}
        <ActionLink href="/booking">{landingContent.location.actions.booking}</ActionLink>
      </div>
    </div>
  );
}

export function MapContainer({ location }: { location: Location }) {
  return (
    <a
      href={location.mapUrl ?? location.directionsUrl ?? '#'}
      target="_blank"
      rel="noreferrer"
      className="map-pattern relative grid min-h-[24rem] place-items-center overflow-hidden border-t border-[var(--border-subtle)] lg:min-h-full lg:border-l lg:border-t-0"
      aria-label={`${landingContent.location.mapLabel}, abrir mapa em nova aba`}
    >
      <div className="absolute inset-8 border border-white/10" />
      <div className="relative z-10 grid place-items-center text-center">
        <span className="grid size-16 place-items-center rounded-full bg-[var(--brand-accent)] text-[var(--text-on-accent)] shadow-[0_0_0_1rem_rgb(208_161_94/12%)]">
          <MapPin aria-hidden="true" className="size-7" />
        </span>
        <p className="type-label mt-[var(--space-5)]">{location.district}</p>
        <p className="type-small mt-1 text-[var(--text-secondary)]">{location.city} · {location.region}</p>
      </div>
      <span className="type-eyebrow absolute bottom-[var(--space-5)] right-[var(--space-5)] inline-flex items-center gap-2 text-[var(--text-secondary)]">
        {landingContent.location.actions.directions}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </span>
    </a>
  );
}

export function LocationSection({ location }: { location: Location }) {
  return (
    <SectionContainer id="localizacao" size="wide" spacing="editorial" className="landing-anchor">
      <div className="grid overflow-hidden border border-[var(--border-subtle)] lg:grid-cols-2">
        <LocationInfo location={location} />
        <MapContainer location={location} />
      </div>
    </SectionContainer>
  );
}

export { formatPhoneHref, formatWhatsappHref };
