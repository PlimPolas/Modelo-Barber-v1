# Migrar repositório GitHub → projeto Lovable

**Fonte:** `github.com/PlimPolas/barbershop-design-system-master` — site estático de barbearia ("Ateliê 47"), em português, construído com vinext (Next.js-style em Cloudflare Workers), React 19, Tailwind v4 e primitivas @base-ui/react. Sem banco de dados, sem autenticação, sem APIs externas — todo o conteúdo vem de arquivos de dados locais.

## Páginas identificadas
- `/` — landing completa: navbar, hero, serviços, sobre, equipe, galeria com ticker, avaliações, localização, CTA de agendamento
- `/booking` — placeholder de agendamento (no código-fonte consta "fluxo completo em etapa futura" — mantido como está)
- `/style-guide` — página de referência do design system (tipografia, botões, formulários, mídia, estados)

## Etapas

1. **Registro de migração** — criar `.lovable/migrate-external-project/ledger.json` com as capacidades detectadas (código, assets, conteúdo; sem dados/auth/provedores externos a preservar).

2. **Dependências** — instalar: `@base-ui/react`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`, `tw-animate-css`.

3. **Assets** — copiar `public/images/*.webp` (11 imagens do site), `media-placeholder.svg` e `favicon.svg` para `public/`.

4. **Design system e código** — portar para o projeto TanStack Start:
   - `styles/tokens.css`, `typography.css`, `motion.css` + CSS de landing/mídia → importados no topo de `src/styles.css` (tokens já definem toda a paleta; nada hardcoded em componentes)
   - `types/`, `data/` (brand, services, barbers, reviews, locations, media, landing), `lib/utils`
   - Componentes: `actions`, `layout`, `media`, `forms`, `feedback`, `landing` e o subconjunto usado de `ui/` (button, checkbox, empty, field, input, separator, sheet, skeleton)
   - Fontes Manrope + Barlow Condensed via `<link>` no head raiz (substituindo next/font)
   - Substituir `next/link` por `Link` do TanStack Router

5. **Rotas** — recriar as três páginas como rotas TanStack, cada uma com `head()` próprio em pt-BR (título, description, og:*, twitter:card):
   - `src/routes/index.tsx` — landing (substitui o placeholder atual)
   - `src/routes/booking.tsx` — placeholder de agendamento
   - `src/routes/style-guide.tsx` — design system

6. **Verificação** — build OK, depois Playwright: screenshots de `/`, `/booking` e `/style-guide` para confirmar que o visual ficou fiel ao original.

## Capacidades
- **Código / design system / conteúdo:** migrado por completo
- **Banco de dados / registros:** não existem na origem — nada a importar
- **Autenticação / integrações / endpoints públicos:** não existem na origem — nada a preservar
- **Agendamento real (booking):** não implementado na origem; mantido o placeholder. Pode ser construído depois se você quiser.
