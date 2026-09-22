# Remover toda reação da galeria ao mouse

## Diagnóstico confirmado
A galeria tem uma única interação com o mouse declarada em `src/styles/landing.css`: a regra `.gallery-track:hover`, que deixa a animação 2,5x mais lenta enquanto o cursor está sobre as faixas. Não existem handlers de clique ou hover nos componentes da galeria; o IntersectionObserver (pausa fora da tela) não é interação de mouse e permanece intacto.

## Alterações
1. Em `src/styles/landing.css`, remover a regra `.gallery-track:hover` (a desaceleração no hover).
2. Adicionar `pointer-events: none` na galeria (`.gallery-viewport`), garantindo que nenhum comportamento de mouse possa afetá-la — ela fica 100% decorativa, sempre animando na velocidade constante atual.
3. Manter intactos: velocidade e direções das faixas, loop infinito, gaps, full-bleed, tamanhos das fotos e o IntersectionObserver (pausa somente fora da viewport).

## Escopo
Somente a interação de mouse da galeria. Nenhuma outra seção, animação ou comportamento é alterado.

## Validação
- Conferir no desktop que passar o mouse sobre as faixas não altera mais a velocidade.
- Confirmar que as faixas continuam se movendo normalmente com o cursor sobre elas.
- Checar build e ausência de erros no console.
