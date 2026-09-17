import { createFileRoute } from "@tanstack/react-router";

import StyleGuidePage from "@/components/style-guide-page";

export const Route = createFileRoute("/style-guide")({
  head: () => ({
    meta: [
      { title: "Style Guide — Ateliê 47" },
      {
        name: "description",
        content:
          "Referência interna do design system do Ateliê 47: tokens, tipografia, layout, ações, formulários e mídia.",
      },
      { property: "og:title", content: "Style Guide — Ateliê 47" },
      {
        property: "og:description",
        content:
          "Tokens, primitivas e contratos do design system dark-first do Ateliê 47.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StyleGuideRoute,
});

function StyleGuideRoute() {
  return <StyleGuidePage />;
}
