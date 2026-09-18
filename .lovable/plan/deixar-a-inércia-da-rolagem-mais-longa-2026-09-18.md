# Deixar a inércia da rolagem mais longa

## Objetivo
A rolagem atualmente desliza rápido demais depois de soltar o scroll. O pedido é prolongar o "efeito de inércia" — o site continua deslizando por mais tempo antes de parar — sem alterar layout, design, velocidade de animações da galeria nem nada além do comportamento da rolagem.

## O que muda
Arquivo único: `src/components/layout/smooth-scroll.tsx`.

1. **Inércia do scroll do mouse** — o parâmetro `lerp` controla o quão "pesado" o deslize é. Hoje está em `0.1`; desce para `0.06`, o que faz a página continuar deslizando sensivelmente mais tempo antes de parar.
2. **Deslize dos links do menu** — ao clicar em um item do menu, a rolagem até a seção também fica mais longa e suave: passa a usar duração fixa de ~1400ms com easing suave (em vez de parar abruptamente), mantendo o offset do header como está hoje.

## O que não muda
- Nada de layout, cores, texto ou seções.
- Faixas da galeria (velocidade, direção, loop) ficam intocadas.
- Rolagem no celular continua nativa (sem inércia artificial no toque).
- Fallback CSS de `scroll-behavior: smooth` permanece.

## Validação
- Rodar no desktop (via preview com Playwright): rolar e confirmar que o deslize continua por mais tempo; clicar em um item do menu e confirmar o deslize mais longo até a seção, parando com a seção visível abaixo do navbar.
- Conferir build OK em /tmp/observability/build-errors.log.
