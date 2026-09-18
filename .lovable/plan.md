# Remover `prefers-reduced-motion` — já concluído

Esta remoção já foi executada e validada na etapa anterior. Nova busca no projeto inteiro agora confirma: **zero ocorrências** de `prefers-reduced-motion`, `motion-reduce` ou qualquer lógica de reduced motion em `src/` e `public/`.

## Estado atual (verificado)

- Os três blocos `@media (prefers-reduced-motion: reduce)` foram removidos de `src/styles/motion.css`, `src/styles/landing.css` e `src/components/landing/landing.css`.
- Não existe hook, estado ou `matchMedia` de reduced motion no JavaScript (o `matchMedia` de `src/hooks/use-mobile.tsx` é só breakpoint de largura e permanece intacto).
- Nenhuma animação foi alterada em velocidade, direção ou estilo; o IntersectionObserver da galeria (pausa só fora da viewport) está intacto.
- Validação no navegador com reduced-motion emulado ativado: faixas da galeria rodando normalmente em desktop (325px/2s) e celular (120px/2s), sem rolagem lateral e sem erros de console. Build OK.

## O que este plano faz

Nada a alterar — aprovar apenas confirma o estado atual; nenhum arquivo será modificado.
