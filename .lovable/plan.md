# Galeria — faixa fotográfica contínua full-bleed

Alteração restrita à seção "Dentro do Ateliê". Nenhuma outra seção, dado ou rota é tocada.

Observação: o vídeo de referência citado no texto não chegou junto — vou seguir a descrição escrita (duas faixas, imagens pequenas e coladas, movimento lento em sentidos opostos). Se quiser, envie o vídeo e eu calibro proporção e velocidade em cima dele.

## O que muda

- O título e o texto de apoio continuam alinhados ao container, com mais respiro antes das fotos.
- As duas faixas de fotos passam a ocupar toda a largura da tela (full-bleed), sem margens laterais e sem moldura ou card em volta.
- Imagens menores, verticais (4:5), altura uniforme, praticamente encostadas (separação de 2px).
- Desktop: cerca de 8 a 10 imagens visíveis por faixa. Celular: imagens mais baixas e movimento ainda mais lento.
- Faixa de cima anda da direita para a esquerda; a de baixo, da esquerda para a direita. Movimento lento e contínuo, sem salto no reinício, sem setas, bolinhas ou arraste.
- Ao passar o mouse, o movimento desacelera suavemente.
- Quem prefere menos animação continua vendo uma composição estática com as mesmas fotos.
- Sem barra de rolagem horizontal na página em nenhuma largura.

## Detalhes técnicos

Arquivos: `src/components/landing/gallery-ticker.tsx`, `src/styles/landing.css`, e apenas o bloco da galeria em `src/components/landing/landing-page.tsx`.

- `GalleryItem`: passa a usar `aspectRatio="4 / 5"` com altura fixa por breakpoint (`--gallery-item-height`: ~13rem mobile, ~17rem tablet, ~21rem desktop) e largura derivada; remove a variante `tall`.
- `GalleryRow`: mantém a duplicação apenas na camada de apresentação. Como só existem 6 assets (3 por fileira), a sequência é repetida N vezes para preencher a viewport e depois duplicada para o loop; a track inteira permanece `aria-hidden="true"`.
- Velocidade definida por distância, não por duração fixa: `--gallery-duration` calculado a partir de ~24px/s desktop e ~18px/s mobile, aplicado via `animation-duration` nas keyframes existentes (`gallery-forward` / `gallery-reverse`), que passam a usar `translate3d(-50%)` com `gap` de 2px.
- Hover: `data-hover` na track reduz a velocidade (duração multiplicada), sem parar bruscamente. `IntersectionObserver` atual continua pausando fora do viewport.
- Full-bleed sem overflow no documento: wrapper `w-screen` com `margin-inline: calc(50% - 50vw)` dentro de uma seção `overflow-hidden` (a seção já tem `overflow-hidden`).
- `GalleryGridFallback` adaptado para o mesmo recorte 4:5, exibido sob `prefers-reduced-motion: reduce`.
- `sizes` ajustado para as novas larguras, evitando baixar imagens grandes demais.

## Validação

Build, e depois Playwright em 1440px, 768px, 430px, 390px e 360px: conferir ausência de rolagem horizontal, loop sem corte, faixas em sentidos opostos e o estado de movimento reduzido.
