# Tela branca na prévia

## O que eu verifiquei agora

- A última compilação do projeto está OK (sem erros).
- O servidor responde normalmente e envia a página completa.
- Abri o site num navegador de teste: a página carrega, mostra o conteúdo e **não** apresenta nenhum erro.

Ou seja: o site em si está funcionando. A tela branca está apenas na aba de prévia aberta aí, que ficou presa numa versão antiga do site, carregada logo depois da instalação da biblioteca de rolagem suave.

## Solução

1. Recarregar a prévia (ou o navegador) para pegar a versão atual.
2. Se continuar branca: limpar o cache interno de desenvolvimento e reiniciar o servidor do site, depois recarregar a prévia.
3. Confirmar com um teste automatizado que a página inicial carrega, rola e não gera erros.

## Detalhes técnicos

- `/tmp/observability/build-errors.log`: `build OK`.
- `GET http://localhost:8080/` retorna 200 com HTML completo (~110 KB).
- Playwright (Chromium headless): 3460 caracteres de texto visível, zero `pageerror`, zero erro de console.
- Hipótese: cache de pré-bundle do Vite (`node_modules/.vite`) na aba do usuário após o optimizer re-bundlar `lenis` — mesmo sintoma do erro anterior `exports.useEffect is null`. Correção: `rm -rf node_modules/.vite` + reinício do dev server, sem alteração de código.

## Fora de escopo

Nenhuma mudança de layout, animação, galeria ou configuração do Lenis.
