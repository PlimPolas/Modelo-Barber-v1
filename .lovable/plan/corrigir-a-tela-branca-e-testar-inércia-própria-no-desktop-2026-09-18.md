# Corrigir a tela branca e testar inércia própria no desktop

## Objetivo
Restaurar a página e substituir temporariamente o Lenis no desktop por um único controle de roda com inércia perceptível, preservando o scroll nativo no celular e todas as demais partes do site.

## Implementação
- Diagnosticar a tela branca no navegador antes da alteração e confirmar se a falha vem da montagem atual do `SmoothScroll` ou do pacote Lenis.
- Remover o Lenis do caminho de execução do `SmoothScroll`; não haverá duas soluções controlando a rolagem ao mesmo tempo.
- No desktop com mouse, registrar um listener `wheel` não passivo, normalizar `deltaY`, impedir o salto nativo e acumular o impulso em `targetScroll`, limitado aos limites reais da página.
- Executar um único loop `requestAnimationFrame`, atualizando `currentScroll += (targetScroll - currentScroll) * 0.08` até a diferença ficar abaixo de 0,5 px.
- Sincronizar o alvo quando a posição mudar por outros meios, evitando saltos após redimensionamento ou navegação.
- Preservar os links internos do menu: no desktop, eles atualizarão o mesmo alvo do RAF com o deslocamento do cabeçalho; no celular continuarão usando o comportamento nativo.
- Aplicar `scroll-behavior: auto` somente no desktop durante o teste, sem mudar layout, Hero, navbar, galeria, textos, responsividade ou outras animações.
- Fazer limpeza completa de listeners e RAF ao desmontar o componente.

## Validação obrigatória
- Confirmar que a página deixa de ficar branca e que não há erros de execução ou compilação.
- Confirmar no código final: `wheel`, `{ passive: false }`, `preventDefault()`, `targetScroll`, `currentScroll` e `requestAnimationFrame`.
- Em desktop, usar um único `page.mouse.wheel(0, 300)` e registrar `window.scrollY` a cada 100 ms até a parada, verificando uma desaceleração visual de aproximadamente 500–700 ms.
- Confirmar que Lenis não está ativo nem adiciona classes no desktop e que apenas a janela controla a rolagem.
- Em viewport móvel, confirmar scroll nativo, nenhum listener de toque e ausência de regressões visuais.

## Entrega
Informar exatamente: causa da tela branca, confirmação de Lenis desativado no desktop, localização do handler, smoothing final (`0.08`) e todas as amostras do teste de 100 ms.
