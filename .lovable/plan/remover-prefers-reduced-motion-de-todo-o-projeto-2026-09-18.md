# Remover `prefers-reduced-motion` de todo o projeto

Remover somente a lógica de movimento reduzido. Nenhuma animação é alterada em velocidade, direção ou estilo; o IntersectionObserver da galeria (pausa fora da viewport) permanece intacto.

## Onde está hoje (busca completa feita)

Só existem três blocos, todos em CSS — não há hook, estado ou `matchMedia` de reduced motion no JavaScript:

1. `src/styles/motion.css` (linhas 25-38) — `@media (prefers-reduced-motion: reduce)` global que zerava durações de todas as animações/transições e o scroll suave. **Remover o bloco inteiro.**
2. `src/styles/landing.css` (linhas 188-194) — `@media (prefers-reduced-motion: reduce)` que desligava a animação das faixas da galeria. **Remover o bloco inteiro.**
3. `src/components/landing/landing.css` (linhas 87-95) — cópia antiga da folha da landing que **não é importada por nenhum arquivo** (confirmado: nenhum import referencia esse arquivo). **Remover o bloco do mesmo jeito** para não sobrar nenhuma regra no repositório.

`src/hooks/use-mobile.tsx` usa `matchMedia` apenas para breakpoint de largura — não é reduced motion, permanece intacto.

## Resultado esperado

- Galeria e todas as animações/transições funcionam normalmente mesmo com `prefers-reduced-motion: reduce` ativo no sistema.
- Layout, design, velocidade e direção das animações: inalterados.
- A galeria continua pausando somente fora da viewport.

## Validação

- Build.
- Nova busca no projeto inteiro confirmando que não restou nenhuma ocorrência de `prefers-reduced-motion` nem de `motion-reduce`.
- Playwright em desktop e celular com reduced-motion emulado ativado: conferir que as faixas da galeria se movem normalmente e não há rolagem lateral.
