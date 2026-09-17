# Calibrar a animação das faixas da galeria com o vídeo de referência

## Diagnóstico (medido no vídeo enviado)
- Faixa de cima move para a **esquerda**, faixa de baixo para a **direita** — isso já está correto no projeto.
- **Velocidade da referência: ~14% da largura da tela por segundo (~200 px/s em desktop).**
- **Velocidade atual do projeto: ~20 px/s — cerca de 10× mais lenta.** É por isso que a animação parece "não aplicada": ela existe, mas é lenta demais para perceber.
- Fotos da referência: proporção ~4:5, altura ≈ 11–12% da largura da tela, espaçamento visível entre fotos (~6–7% da largura da foto; hoje o nosso é quase invisível, 2px).

## Correção (apenas ajuste de valores, sem recriar nada)

Em `src/styles/landing.css`:
1. **Velocidade** — reduzir `--gallery-pace` para reproduzir ~12–14% da tela por segundo:
   - mobile: de 7.5s para ~2.1s
   - tablet: de 8s para ~1.4s
   - desktop: de 9s para ~1.1s
2. **Espaçamento** — `--gallery-gap` de 2px para 4px (mobile) / 6px (desktop), como na referência.
3. Manter: direções opostas, loop sem emenda, desaceleração no hover, pausa fora da tela, composição estática com `prefers-reduced-motion`.

## Validação
- Playwright em 1280 e 390: medir o `transform` da faixa em dois instantes e confirmar deslocamento contínuo (~200 px/s no desktop), nos dois sentidos, sem rolagem lateral e sem erros de console.
- Confirmar que com movimento reduzido as faixas ficam estáticas.

## O que NÃO muda
- Estrutura da seção, dados (`src/data/landing.ts`), componente `gallery-ticker.tsx` (só CSS) e demais seções.
