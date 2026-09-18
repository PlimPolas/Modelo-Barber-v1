# Aumentar as fotos da galeria

## O que muda

Somente `--gallery-height` em `src/styles/landing.css`, em três pontos:

| Breakpoint | Atual | Novo | Aumento |
|---|---|---|---|
| Mobile (base, linha 42) | 9.5rem | 10.9rem | +15% |
| Tablet (≥48rem, linha 174) | 11.5rem | 13.8rem | +20% |
| Desktop (≥64rem, linha 182) | 13.5rem | 16.9rem | +25% |

Nada mais muda: proporção 4:5, duas faixas, direções opostas, `--gallery-pace` (velocidade), gaps, full-bleed, IntersectionObserver e loop ficam intocados — a largura das fotos é calculada a partir da altura (`width: calc(var(--gallery-height) * 0.8)`), então elas crescem junto automaticamente.

## Validação

Playwright em 390 (mobile), 768 (tablet) e 1280 (desktop): fotos maiores, duas faixas se movendo em sentidos opostos na velocidade atual, sem rolagem lateral e sem erros de console. Build OK.
