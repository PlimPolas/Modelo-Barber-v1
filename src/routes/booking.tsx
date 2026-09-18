import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { PageContainer, SectionContainer } from "@/components/layout";
import { Link } from "@/lib/app-link";
import { brand } from "@/data";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Agendar horário — Ateliê 47" },
      {
        name: "description",
        content:
          "Escolha seu serviço ou profissional e agende seu horário no Ateliê 47.",
      },
      { property: "og:title", content: "Agendar horário — Ateliê 47" },
      {
        property: "og:description",
        content: "Escolha seu serviço ou profissional e agende seu horário no Ateliê 47.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const { t } = useI18n();

  return (
    <PageContainer className="grid place-items-center">
      <SectionContainer size="small" spacing="editorial">
        <Link
          href="/"
          className="type-small inline-flex min-h-11 items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-accent)]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" /> {t.bookingPage.backPrefix} {brand.name}
        </Link>
        <div className="mt-[var(--space-7)] border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-6)] md:p-[var(--space-8)]">
          <CalendarDays aria-hidden="true" className="size-9 text-[var(--brand-accent)]" />
          <p className="type-eyebrow mt-[var(--space-6)] text-[var(--brand-accent)]">
            {t.booking.eyebrow}
          </p>
          <h1 className="type-h1 mt-[var(--space-3)]">{t.bookingPage.title}</h1>
          <p className="type-body-large mt-[var(--space-5)] text-[var(--text-secondary)]">
            {t.bookingPage.description}
          </p>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
