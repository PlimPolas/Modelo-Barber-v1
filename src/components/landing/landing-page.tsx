'use client';

import {
  ArrowRight,
  AtSign,
  Check,
  MessageCircle,
  Phone,
} from 'lucide-react';
import type React from 'react';
import { Link } from '@/lib/app-link';

import { ActionLink } from '@/components/actions';
import { PageContainer, SectionContainer, SectionHeader } from '@/components/layout';
import { FocalImage } from '@/components/media';
import { barbers, brand, landingContent, locations, media, reviews, services } from '@/data';
import { localizeBarber, localizeLocation, localizeReview, localizeService, useI18n } from '@/i18n';
import type { Dictionary } from '@/i18n';
import type { MediaAsset } from '@/types';

import { GalleryTicker } from './gallery-ticker';
import { formatPhoneHref, formatWhatsappHref, LocationSection } from './location-section';
import { ReviewsSection } from './reviews-section';
import { ServiceCard } from './service-card';
import { SiteNavbar } from './site-navbar';
import { TeamSection } from './team-section';

function getMedia(id: string) {
  const asset = media.find((item) => item.id === id);
  if (!asset) throw new Error(`Missing media asset: ${id}`);
  return asset;
}

function Hero({ asset, t }: { asset: MediaAsset; t: Dictionary }) {
  const content = t.hero;

  return (
    <section id="inicio" className="landing-anchor relative min-h-[100svh] overflow-hidden bg-[var(--background-primary)]">
      <div className="hero-media hero-media-enter absolute inset-0">
        <FocalImage
          asset={asset}
          aspectRatio="auto"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
          imageClassName="h-full w-full"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-wide)] items-end px-[var(--page-gutter)] pb-[var(--space-9)] pt-[calc(var(--landing-header-height)+var(--space-8))] md:pb-[var(--space-11)]">
        <div className="max-w-[46rem]">
          <div className="hero-enter flex items-center gap-[var(--space-4)]">
            <span aria-hidden="true" className="hero-rule" />
            <p className="type-eyebrow text-[var(--brand-accent)]">{content.eyebrow}</p>
          </div>
          <h1 className="hero-enter type-display-xl mt-[var(--space-5)] max-w-[10ch]" style={{ "--hero-delay-step": "140ms" } as React.CSSProperties}>{content.title}</h1>
          <p className="hero-enter type-body-large mt-[var(--space-6)] max-w-[34rem] text-[var(--text-secondary)]" style={{ "--hero-delay-step": "280ms" } as React.CSSProperties}>
            {content.description}
          </p>
          <div className="hero-enter mt-[var(--space-7)] flex flex-col gap-[var(--space-3)] sm:flex-row sm:items-center" style={{ "--hero-delay-step": "420ms" } as React.CSSProperties}>
            <ActionLink href="/booking" size="large">
              {content.primaryAction}
              <ArrowRight aria-hidden="true" />
            </ActionLink>
            <ActionLink href="#servicos" size="large" tone="secondary">
              {content.secondaryAction}
            </ActionLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[var(--space-9)] right-[var(--page-gutter)] z-10 hidden items-center gap-3 lg:flex">
        <span className="h-px w-12 bg-[var(--brand-accent)]" />
        <span className="type-eyebrow text-[var(--text-secondary)]">{content.scrollHint}</span>
      </div>
    </section>
  );
}

export function LandingPage() {
  const { t } = useI18n();
  const baseLocation = locations.find((item) => item.active) ?? locations[0]!;
  const location = localizeLocation(baseLocation, t);
  const activeServices = services
    .filter((item) => item.active)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item) => localizeService(item, t));
  const activeBarbers = barbers
    .filter((item) => item.active)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item) => localizeBarber(item, t));
  const featuredReviews = reviews.filter((item) => item.featured).map((item) => localizeReview(item, t));
  const galleryItems = landingContent.gallery.mediaIds.map(getMedia);

  return (
    <div className="landing-shell bg-[var(--background-primary)] text-[var(--text-primary)]">
      <SiteNavbar
        brand={brand}
        links={t.navigation.links}
        bookingLabel={t.navigation.bookingLabel}
        menuLabel={t.navigation.menuLabel}
      />

      <PageContainer>
        <Hero asset={getMedia(landingContent.hero.mediaId)} t={t} />

        <section aria-label={t.socialProof.label} className="border-b border-[var(--border-subtle)] bg-[var(--background-primary)]">
          <div className="mx-auto grid max-w-[var(--container-wide)] grid-cols-2 gap-y-[var(--space-6)] px-[var(--page-gutter)] py-[var(--space-7)] sm:grid-cols-4 md:py-[var(--space-8)]">
            {t.socialProof.items.map((metric, index) => (
              <div
                key={metric.key}
                className={`${index < 2 ? '' : 'hidden sm:block'} border-l border-[var(--border-subtle)] px-[var(--space-4)] md:px-[var(--space-6)]`}
              >
                <p className="type-h3 text-[var(--text-primary)]">{metric.value}</p>
                <p className="type-small mt-[var(--space-2)] text-[var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionContainer id="servicos" size="wide" spacing="editorial" className="landing-anchor">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
          <div className="mt-[var(--space-8)] grid gap-px border-y border-[var(--border-subtle)] bg-[var(--border-subtle)] md:grid-cols-2">
            {activeServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                actionLabel={t.services.actionLabel}
                featuredLabel={t.services.featuredLabel}
                minutesSuffix={t.services.minutesSuffix}
                locale={t.locale}
              />
            ))}
          </div>
        </SectionContainer>


        <TeamSection barbers={activeBarbers} resolveMedia={getMedia} />

        <section id="galeria" className="landing-anchor overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background-secondary)] py-[var(--space-9)] md:py-[var(--space-11)]">
          <div className="mx-auto mb-[var(--space-8)] max-w-[var(--container-wide)] px-[var(--page-gutter)] md:mb-[var(--space-9)]">
            <SectionHeader
              eyebrow={t.gallery.eyebrow}
              title={t.gallery.title}
              description={t.gallery.description}
            />
          </div>
          <GalleryTicker items={galleryItems} />
        </section>

        <ReviewsSection reviews={featuredReviews} locale={t.locale} />

        <section className="border-y border-[var(--border-subtle)] bg-[var(--background-secondary)]">
          <SectionContainer size="wide" spacing="default">
            <div className="grid gap-[var(--space-8)] lg:grid-cols-[minmax(0,1fr)_minmax(22rem,.9fr)] lg:items-end lg:gap-[var(--space-10)]">
              <SectionHeader
                eyebrow={t.booking.eyebrow}
                title={t.booking.title}
                description={t.booking.description}
                action={
                  <ActionLink href="/booking" size="large">
                    {t.booking.actionLabel}
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                }
              />
              <div>
                <p className="type-small flex items-center gap-2 text-[var(--text-secondary)]">
                  <Check aria-hidden="true" className="size-4 text-[var(--brand-accent)]" />
                  {t.booking.benefit}
                </p>
                <ol className="mt-[var(--space-5)] flex flex-col gap-[var(--space-3)] border-t border-[var(--border-subtle)] pt-[var(--space-5)] sm:flex-row sm:items-center sm:justify-between sm:gap-[var(--space-2)]">
                  {t.booking.steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-[var(--space-3)] whitespace-nowrap sm:gap-[var(--space-2)]">
                      {index > 0 ? (
                        <ArrowRight aria-hidden="true" className="mr-[var(--space-2)] hidden size-3.5 shrink-0 text-[var(--text-muted)] sm:block" />
                      ) : null}
                      <span className="type-eyebrow text-[var(--brand-accent)]">0{index + 1}</span>
                      <p className="type-label">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </SectionContainer>
        </section>

        <LocationSection location={location} />

        <section className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
          <SectionContainer size="wide" spacing="editorial">
            <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_auto] lg:items-end lg:gap-[var(--space-10)]">
              <div>
                <p className="type-eyebrow text-[var(--brand-accent-active)]">{t.finalCta.eyebrow}</p>
                <h2 className="type-h1 mt-[var(--space-5)] max-w-[11ch]">{t.finalCta.title}</h2>
                <p className="type-body-large mt-[var(--space-5)] max-w-[38ch] text-[var(--text-inverse)]/65">{t.finalCta.description}</p>
              </div>
              <div className="flex flex-col gap-[var(--space-3)] sm:flex-row lg:flex-col lg:items-stretch">
                <Link href="/booking" className="type-button inline-flex min-h-14 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[var(--brand-accent-active)] px-[var(--space-7)] text-[var(--surface-inverse)]">
                  {t.finalCta.actionLabel}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                {location.whatsapp ? (
                  <a href={formatWhatsappHref(location.whatsapp)} target="_blank" rel="noreferrer" className="type-button inline-flex min-h-14 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-[var(--text-inverse)]/25 px-[var(--space-7)]">
                    {t.finalCta.alternativeLabel}
                    <span className="sr-only">{t.common.newTabHint}</span>
                  </a>
                ) : null}
              </div>
            </div>
          </SectionContainer>
        </section>
      </PageContainer>

      <footer id="footer" className="border-t border-[var(--border-subtle)] bg-[var(--background-primary)]">
        <div className="mx-auto max-w-[var(--container-wide)] px-[var(--page-gutter)] py-[var(--space-9)]">
          <div className="grid gap-[var(--space-8)] md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
            <div>
              <div className="flex items-center gap-[var(--space-3)]">
                <span className="grid size-10 place-items-center border border-[var(--brand-accent)] font-bold text-[var(--brand-accent)]">{brand.shortName}</span>
                <span className="type-h3">{brand.name}</span>
              </div>
              <p className="type-body mt-[var(--space-4)] max-w-sm text-[var(--text-secondary)]">{t.footer.description}</p>
            </div>
            <div>
              <p className="type-label">{t.footer.navigationLabel}</p>
              <ul className="mt-[var(--space-4)] space-y-2">
                {t.navigation.links.map((link) => (
                  <li key={link.href}><a className="type-small inline-flex min-h-11 items-center text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="type-label">{t.footer.contactLabel}</p>
              <div className="mt-[var(--space-4)] space-y-2">
                <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={formatPhoneHref(location.phone)}><Phone aria-hidden="true" className="size-4" />{location.phone}</a>
                {location.whatsapp ? <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={formatWhatsappHref(location.whatsapp)} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4" />{t.footer.whatsappLabel}<span className="sr-only">{t.common.newTabHint}</span></a> : null}
                {brand.socialLinks.instagram ? <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={brand.socialLinks.instagram} target="_blank" rel="noreferrer"><AtSign aria-hidden="true" className="size-4" />{t.footer.instagramLabel}<span className="sr-only">{t.common.newTabHint}</span></a> : null}
              </div>
            </div>
            <div>
              <p className="type-label">{t.footer.hoursLabel}</p>
              <p className="type-small mt-[var(--space-4)] text-[var(--text-secondary)]">{t.footer.hoursSummary}</p>
              <Link href="/booking" className="type-small mt-[var(--space-4)] inline-flex min-h-11 items-center gap-2 text-[var(--brand-accent)]">{t.navigation.bookingLabel}<ArrowRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </div>
          <div className="mt-[var(--space-9)] flex flex-col gap-[var(--space-4)] border-t border-[var(--border-subtle)] pt-[var(--space-5)] md:flex-row md:items-center md:justify-between">
            <p className="type-small text-[var(--text-muted)]">© {new Date().getFullYear()} {brand.name}. {t.footer.copyrightSuffix}</p>
            <div className="flex flex-wrap gap-[var(--space-5)]">
              {t.footer.policies.map((policy) => (
                <a key={policy.key} href={policy.href} className="type-small min-h-11 py-3 text-[var(--text-muted)] hover:text-[var(--text-primary)]">{policy.label}</a>
              ))}
              <Link href="/style-guide" className="type-small min-h-11 py-3 text-[var(--text-muted)] hover:text-[var(--text-primary)]">{t.footer.styleGuideLabel}</Link>
              {brand.signature ? (
                <a href={brand.signature.href} target="_blank" rel="noreferrer" className="type-small inline-flex min-h-11 items-center py-3 text-[var(--text-muted)] hover:text-[var(--brand-accent)]">
                  {brand.signature.handle}
                  <span className="sr-only">{t.common.newTabHint}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
