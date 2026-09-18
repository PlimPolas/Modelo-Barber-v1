# Scroll global mais fluido (inércia sutil)

Objetivo: dar à rolagem do site uma sensação suave e premium, com resposta imediata e sem flutuação exagerada. Nada de layout, design, textos ou animação da galeria muda.

## O que será feito

1. Adicionar a biblioteca Lenis (muito leve, ~3 kB) — o projeto ainda não tem nada equivalente.
2. Criar um pequeno componente de rolagem suave que roda apenas no navegador e é montado uma única vez no layout raiz, envolvendo o site inteiro.
3. Ajuste inicial: `lerp` 0.1, `smoothWheel` ligado, e no toque (celular/tablet) mantém a rolagem nativa do sistema, que já é natural e responsiva.
4. Links do menu (`#servicos`, `#equipe`, `#galeria`, `#avaliacoes`, `#localizacao`, `#inicio`) passam a rolar suavemente até a seção, respeitando o espaço do cabeçalho fixo (`--landing-header-height`), tanto no menu do desktop quanto no menu lateral do celular.
5. Manter `scroll-behavior: smooth` no CSS global como alternativa quando a rolagem suave não estiver ativa.

## Cuidados já previstos

- A galeria continua exatamente igual: mesma velocidade, direção e pausa fora da viewport.
- O cabeçalho que muda de cor ao rolar continua funcionando (a leitura de posição passa a vir do próprio motor de rolagem quando necessário).
- Sem rolagem horizontal nova; a rolagem nativa não é bloqueada em nenhum momento.
- A observação de elementos na tela (usada pela galeria) segue funcionando normalmente.

## Detalhes técnicos

- `bun add lenis`.
- Novo `src/components/layout/smooth-scroll.tsx` (`'use client'`): instancia Lenis em `useEffect`, roda o `raf` com `requestAnimationFrame`, `destroy()` na desmontagem; opções `{ lerp: 0.1, smoothWheel: true, syncTouch: false }`.
- Montado em `src/routes/__root.tsx` dentro de `RootComponent`, acima do `<Outlet />`; renderiza `null` (sem wrapper de DOM, então nada no layout muda).
- Delegação global de clique em âncoras `a[href^="#"]` dentro do mesmo componente: `preventDefault` + `lenis.scrollTo(target, { offset: -headerHeight })`, com atualização do hash na URL. Assim o menu do desktop e o `SheetClose` do mobile continuam intactos.
- `site-navbar.tsx`: opcionalmente trocar o listener de `scroll` por `lenis.on('scroll')` apenas se o comportamento atual apresentar atraso; o listener nativo continua disparando com Lenis, então a princípio fica como está.
- Validação com Playwright: roda do mouse, clique nas âncoras, 390px e 1280px, checando ausência de rolagem horizontal e de erros no console.
