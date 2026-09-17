import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ateliê 47 — Barbearia autoral em São Paulo",
      },
      {
        name: "description",
        content:
          "Cortes, barba e cuidado com técnica, presença e atenção aos detalhes. Agende seu horário no Ateliê 47.",
      },
      {
        property: "og:title",
        content: "Ateliê 47 — Barbearia autoral em São Paulo",
      },
      {
        property: "og:description",
        content:
          "Cortes precisos, barba bem cuidada e uma experiência desenhada para você desacelerar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ateliê 47 — Barbearia autoral em São Paulo" },
      {
        name: "twitter:description",
        content:
          "Cortes precisos, barba bem cuidada e uma experiência desenhada para você desacelerar.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <LandingPage />;
}
