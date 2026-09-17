# Corrigir o movimento da galeria

## Diagnóstico confirmado
A animação está declarada, mas o controle que pausa as faixas fora da tela volta a marcá-las como pausadas após o carregamento e reposicionamento das fotos. Também confirmei que, quando o navegador solicita movimento reduzido, a animação é corretamente desativada.

## Correção
1. Tornar o controle de visibilidade estável após o carregamento das imagens, para as faixas permanecerem em movimento durante todo o tempo em que a galeria estiver visível.
2. Garantir movimento contínuo e sem salto: faixa superior para a esquerda e inferior para a direita.
3. Manter a pausa somente quando a seção estiver realmente fora da tela.
4. Preservar `prefers-reduced-motion`: nesse modo acessível, as faixas continuam estáticas por intenção.
5. Validar o deslocamento real ao longo do tempo na prévia, em desktop e celular, além de conferir ausência de emendas e rolagem lateral.

## Escopo
Somente o comportamento de movimento da galeria será corrigido; composição, imagens e demais seções não mudam.
