# Corrigir a galeria que ainda aparece como mosaico

## Diagnóstico confirmado
A imagem enviada corresponde exatamente à versão alternativa atual para dispositivos ou navegadores com **movimento reduzido** ativado: ela ainda renderiza a galeria antiga em grade 3 × 2. A versão animada nova já existe, mas fica escondida nesse modo.

## Alterações
1. Substituir a grade alternativa antiga por uma composição estática com as mesmas duas faixas horizontais da galeria nova.
2. Manter as fotos pequenas, praticamente encostadas e ocupando toda a largura disponível.
3. Preservar a acessibilidade: com movimento reduzido, as duas faixas permanecem paradas; nos demais casos, continuam se movendo em sentidos opostos.
4. Eliminar o caminho visual antigo para que a galeria tenha a mesma aparência em qualquer configuração do navegador.
5. Validar a seção nos dois modos — animação normal e movimento reduzido — em desktop e celular.

## Escopo
Somente a apresentação da galeria será alterada. Textos, imagens, demais seções e página de agendamento permanecem intactos.
