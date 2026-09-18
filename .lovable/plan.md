# Aumentar a inércia do scroll no desktop

## Alteração
- Ajustar somente a instância Lenis já existente para `lerp: 0.025`, `smoothWheel: true`, `wheelMultiplier: 1.15` e `syncTouch: false`.
- Preservar integralmente o comportamento dos links âncora, layout, navbar, galeria e demais animações.
- Manter o scroll nativo em dispositivos móveis.

## Validação no navegador
- Confirmar que a prévia abre sem erros e que o Lenis permanece ativo no desktop.
- Aplicar um único evento de roda de aproximadamente 300 px.
- Registrar `window.scrollY` em 0, 250, 500, 750, 1000, 1500 e 2000 ms.
- Calcular o deslocamento entre cada amostra e confirmar movimento visual relevante após 500–1000 ms, não apenas variações residuais de 1–2 px.
- Conferir separadamente que o celular continua com rolagem nativa.

## Entrega
Informar a configuração final e os valores reais medidos, mantendo a configuração solicitada mesmo se o efeito parecer pesado.
