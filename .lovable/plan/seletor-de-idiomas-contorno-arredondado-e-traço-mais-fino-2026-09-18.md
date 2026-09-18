# Seletor de idiomas: contorno arredondado e traço mais fino

## O que muda

Apenas o visual do contorno do seletor PT / EN / ES (`src/components/landing/language-switcher.tsx`). Nenhuma mudança de layout, posição, idiomas ou comportamento.

1. **Moldura externa:** ganha cantos totalmente arredondados (`rounded-full`) e o traço fica mais fino (meio pixel, estilo hairline) em vez do contorno de 1px atual.
2. **Destaque da opção ativa:** o botão ativo (atualmente com borda bronze de 1px) passa a ter cantos arredondados combinando (`rounded-full`) e traço igualmente mais fino — a cor bronze de destaque permanece a mesma.
3. **Botões inativos:** continuam sem borda visível, apenas arredondados para acompanhar o conjunto.

## Não altera

- Posição no navbar (desktop e mobile) e tamanhos dos botões.
- Cores, tipografia, velocidade de transição e estado ativo (bronze).
- Qualquer outra parte do site.

## Validação

- Visual do seletor em desktop e celular (360/390px), confirmando contorno arredondado, traço fino e opção ativa destacada.
- Build sem erros.
