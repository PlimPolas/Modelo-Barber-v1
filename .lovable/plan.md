# Calibrar a animação das faixas da galeria com vídeo de referência

## Objetivo
Ajustar a animação das duas faixas fotográficas da galeria para reproduzir fielmente o vídeo de referência que o usuário vai enviar.

## Passos

1. **Receber e analisar o vídeo**
   - Extrair quadros do vídeo (ffmpeg) para medir: tamanho/proporção das fotos, espaçamento entre elas, altura das faixas, velocidade aparente e direção do movimento de cada faixa.
   - Verificar comportamentos extras: pausa no hover, aceleração/desaceleração, emenda do loop.

2. **Calibrar a implementação existente** (sem recriar nada)
   - `src/styles/landing.css`: ajustar `--gallery-height`, `--gallery-gap`, `--gallery-pace` e os keyframes `gallery-forward`/`gallery-reverse` para casar com o vídeo (desktop e mobile).
   - `src/components/landing/gallery-ticker.tsx`: ajustes pontuais somente se o vídeo mostrar algo que o CSS atual não cobre (ex.: ritmo não linear, comportamento de hover diferente).

3. **Validar**
   - Desktop (1280/1600) e mobile (360/390/430): as duas faixas se movendo, em sentidos opostos, sem salto no loop, sem rolagem lateral.
   - `prefers-reduced-motion`: faixas estáticas.
   - Sem erros de console.

## O que NÃO muda
- Estrutura da seção, dados da galeria (`src/data/landing.ts`) e demais seções da landing.
- Sem novas bibliotecas de animação — apenas CSS e o ajuste fino do componente existente.

## Bloqueio
- Aguardando o envio do vídeo de referência pelo usuário.
