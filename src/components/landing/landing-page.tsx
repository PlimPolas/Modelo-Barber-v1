import {
  ArrowRight,
  AtSign,
  Check,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Link } from '@/lib/app-link';

import { ActionLink } from '@/components/actions';
import { PageContainer, SectionContainer, SectionHeader } from '@/components/layout';
import { FocalImage } from '@/components/media';
import { barbers, brand, landingContent, locations, media, reviews, services } from '@/data';
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

function Hero({ asset }: { asset: MediaAsset }) {
  const content = landingContent.hero;

  return (
    <section id="inicio" className="landing-anchor relative min-h-[100svh] overflow-hidden bg-[var(--background-primary)]">
      <div className="hero-media absolute inset-0">
        <FocalImage
          asset={asset}
          aspectRatio="auto"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
          imageClassName="h-full w-full"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-wide)] items-end px-[var(--page-gutter)] pb-[var(--space-8)] pt-32 md:pb-[var(--space-10)]">
        <div className="max-w-[48rem]">
          <p className="type-eyebrow text-[var(--brand-accent)]">{content.eyebrow}</p>
          <h1 className="type-display-xl mt-[var(--space-3)] max-w-[11ch]">{content.title}</h1>
          <p className="type-body-large mt-[var(--space-5)] max-w-[36rem] text-[var(--text-secondary)]">
            {content.description}
          </p>
          <div className="mt-[var(--space-6)] flex flex-col gap-[var(--space-3)] sm:flex-row">
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
      <div className="absolute bottom-[var(--space-6)] right-[var(--page-gutter)] z-10 hidden items-center gap-3 lg:flex">
        <span className="h-px w-12 bg-[var(--brand-accent)]" />
        <span className="type-eyebrow text-[var(--text-secondary)]">{content.scrollHint}</span>
      </div>
    </section>
  );
}

export function LandingPage() {
  const location = locations.find((item) => item.active) ?? locations[0]!;
  const activeServices = services.filter((item) => item.active).sort((a, b) => a.sortOrder - b.sortOrder);
  const activeBarbers = barbers.filter((item) => item.active).sort((a, b) => a.sortOrder - b.sortOrder);
  const featuredReviews = reviews.filter((item) => item.featured);
  const galleryItems = landingContent.gallery.mediaIds.map(getMedia);

  return (
    <div className="landing-shell bg-[var(--background-primary)] text-[var(--text-primary)]">
      <SiteNavbar
        brand={brand}
        links={landingContent.navigation.links}
        bookingLabel={landingContent.navigation.bookingLabel}
        menuLabel={landingContent.navigation.menuLabel}
      />

      <PageContainer>
        <Hero asset={getMedia(landingContent.hero.mediaId)} />

        <section aria-label="Indicadores" className="border-y border-[var(--border-subtle)] bg-[var(--background-secondary)]">
          <div className="mx-auto grid max-w-[var(--container-content)] grid-cols-2 px-[var(--page-gutter)] sm:grid-cols-4">
            {landingContent.socialProof.map((metric) => (
              <div
                key={metric.label}
                className={`${metric.compact ? '' : 'hidden sm:block'} border-r border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-5)] first:border-l md:px-[var(--space-6)]`}
              >
                <p className="type-h3 text-[var(--brand-accent)]">{metric.value}</p>
                <p className="type-small mt-1 text-[var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionContainer id="servicos" size="content" spacing="editorial" className="landing-anchor">
          <SectionHeader
            eyebrow={landingContent.services.eyebrow}
            title={landingContent.services.title}
            description={landingContent.services.description}
          />
          <div className="mt-[var(--space-8)] grid gap-[var(--space-4)] md:grid-cols-2">
            {activeServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                actionLabel={landingContent.services.actionLabel}
                featuredLabel={landingContent.services.featuredLabel}
                locale={brand.defaultLocale}
              />
            ))}
          </div>
        </SectionContainer>

        <section className="bg-[var(--background-secondary)]">
          <SectionContainer size="wide" spacing="editorial">
            <div className="grid gap-[var(--space-8)] lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-[var(--space-10)]">
              <div>
                <SectionHeader
                  eyebrow={landingContent.about.eyebrow}
                  title={landingContent.about.title}
                  description={landingContent.about.manifesto}
                />
                <ol className="mt-[var(--space-8)] border-t border-[var(--border-subtle)]">
                  {landingContent.about.principles.map((principle) => (
                    <li key={principle.index} className="grid grid-cols-[2.5rem_1fr] gap-[var(--space-4)] border-b border-[var(--border-subtle)] py-[var(--space-5)]">
                      <span className="type-eyebrow pt-1 text-[var(--brand-accent)]">{principle.index}</span>
                      <div>
                        <h3 className="type-h3">{principle.title}</h3>
                        <p className="type-body mt-2 text-[var(--text-secondary)]">{principle.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="overflow-hidden border border-[var(--border-subtle)] lg:mt-[var(--space-8)]">
                <FocalImage
                  asset={getMedia(landingContent.about.mediaId)}
                  aspectRatio="4 / 3"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
            </div>
          </SectionContainer>
        </section>

        <TeamSection barbers={activeBarbers} resolveMedia={getMedia} />

        <section id="galeria" className="landing-anchor overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background-secondary)] py-[var(--space-9)] md:py-[var(--space-11)]">
          <div className="mx-auto mb-[var(--space-8)] max-w-[var(--container-content)] px-[var(--page-gutter)]">
            <SectionHeader
              eyebrow={landingContent.gallery.eyebrow}
              title={landingContent.gallery.title}
              description={landingContent.gallery.description}
            />
          </div>
          <GalleryTicker items={galleryItems} />
        </section>

        <ReviewsSection reviews={featuredReviews} locale={brand.defaultLocale} />

        <section className="border-y border-[var(--brand-accent)] bg-[var(--brand-accent-soft)]">
          <SectionContainer size="content" spacing="default">
            <div className="grid gap-[var(--space-8)] lg:grid-cols-[minmax(0,1fr)_minmax(24rem,.8fr)] lg:items-end">
              <SectionHeader
                eyebrow={landingContent.booking.eyebrow}
                title={landingContent.booking.title}
                description={landingContent.booking.description}
                action={
                  <ActionLink href="/booking" size="large">
                    {landingContent.booking.actionLabel}
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                }
              />
              <div>
                <p className="type-small flex items-center gap-2 text-[var(--text-secondary)]">
                  <Check aria-hidden="true" className="size-4 text-[var(--brand-accent)]" />
                  {landingContent.booking.benefit}
                </p>
                <ol className="mt-[var(--space-5)] grid grid-cols-2 gap-px border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-4">
                  {landingContent.booking.steps.map((step, index) => (
                    <li key={step} className="bg-[var(--background-secondary)] p-[var(--space-4)]">
                      <span className="type-eyebrow text-[var(--brand-accent)]">0{index + 1}</span>
                      <p className="type-label mt-2">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </SectionContainer>
        </section>

        <LocationSection location={location} />

        <section className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
          <SectionContainer size="content" spacing="default">
            <div className="grid gap-[var(--space-7)] lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="type-eyebrow text-[var(--brand-accent-active)]">{landingContent.finalCta.eyebrow}</p>
                <h2 className="type-h1 mt-[var(--space-3)] max-w-[12ch]">{landingContent.finalCta.title}</h2>
                <p className="type-body-large mt-[var(--space-4)] max-w-xl text-black/65">{landingContent.finalCta.description}</p>
              </div>
              <div className="flex flex-col gap-[var(--space-3)] sm:flex-row lg:flex-col">
                <Link href="/booking" className="type-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--brand-accent-active)] px-[var(--space-6)] text-white">
                  {landingContent.finalCta.actionLabel}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                {location.whatsapp ? (
                  <a href={formatWhatsappHref(location.whatsapp)} target="_blank" rel="noreferrer" className="type-button inline-flex min-h-14 items-center justify-center gap-2 border border-black/30 px-[var(--space-6)]">
                    {landingContent.finalCta.alternativeLabel}
                    <span className="sr-only"> (abre em nova aba)</span>
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
              <p className="type-body mt-[var(--space-4)] max-w-sm text-[var(--text-secondary)]">{landingContent.footer.description}</p>
            </div>
            <div>
              <p className="type-label">{landingContent.footer.navigationLabel}</p>
              <ul className="mt-[var(--space-4)] space-y-2">
                {landingContent.navigation.links.map((link) => (
                  <li key={link.href}><a className="type-small inline-flex min-h-11 items-center text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="type-label">{landingContent.footer.contactLabel}</p>
              <div className="mt-[var(--space-4)] space-y-2">
                <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={formatPhoneHref(location.phone)}><Phone aria-hidden="true" className="size-4" />{location.phone}</a>
                {location.whatsapp ? <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={formatWhatsappHref(location.whatsapp)} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4" />{landingContent.footer.whatsappLabel}<span className="sr-only"> (abre em nova aba)</span></a> : null}
                {brand.socialLinks.instagram ? <a className="type-small flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]" href={brand.socialLinks.instagram} target="_blank" rel="noreferrer"><AtSign aria-hidden="true" className="size-4" />{landingContent.footer.instagramLabel}<span className="sr-only"> (abre em nova aba)</span></a> : null}
              </div>
            </div>
            <div>
              <p className="type-label">{landingContent.footer.hoursLabel}</p>
              <p className="type-small mt-[var(--space-4)] text-[var(--text-secondary)]">{landingContent.footer.hoursSummary}</p>
              <Link href="/booking" className="type-small mt-[var(--space-4)] inline-flex min-h-11 items-center gap-2 text-[var(--brand-accent)]">{landingContent.navigation.bookingLabel}<ArrowRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </div>
          <div className="mt-[var(--space-9)] flex flex-col gap-[var(--space-4)] border-t border-[var(--border-subtle)] pt-[var(--space-5)] md:flex-row md:items-center md:justify-between">
            <p className="type-small text-[var(--text-muted)]">© {new Date().getFullYear()} {brand.name}. {landingContent.footer.copyrightSuffix}</p>
            <div className="flex flex-wrap gap-[var(--space-5)]">
              {landingContent.footer.policies.map((policy) => (
                <a key={policy.label} href={policy.href} className="type-small min-h-11 py-3 text-[var(--text-muted)] hover:text-[var(--text-primary)]">{policy.label}</a>
              ))}
              <Link href="/style-guide" className="type-small min-h-11 py-3 text-[var(--text-muted)] hover:text-[var(--text-primary)]">{landingContent.footer.styleGuideLabel}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
