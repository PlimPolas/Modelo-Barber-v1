# Assinatura @BenevenutoDigital no fim do site

Adicionar uma assinatura discreta e premium no final do rodapé da landing, com o identificador **@BenevenutoDigital**.

## O que muda

1. **Dados (`src/data/brand.ts`)** — novo campo `signature` com o handle e o link do perfil (Instagram `https://www.instagram.com/benevenutodigital/`), seguindo a regra do projeto de conteúdo só na camada de dados.
2. **Rodapé (`src/components/landing/landing-page.tsx`)** — na barra final do rodapé (linha do copyright), após os links de políticas e Style Guide, um link discreto com o handle:
   - Estilo `type-small`, cor `--text-muted`, hover `--brand-accent`, mesmo alvo de toque (min-h-11) dos links vizinhos.
   - Abre em nova aba, com o texto alternativo padrão do site (`t.common.newTabHint`).
3. Sem tradução (nome próprio/handle) — o texto `@BenevenutoDigital` fica igual em PT/EN/ES; nada entra nos dicionários.

## Visual

Assinatura na mesma linha dos links institucionais, integrada ao rodapé atual — sem destaque, sem box, como um crédito discreto no padrão dark do site.

## Fora de escopo

Nenhuma outra seção, layout ou estilo é alterado; a página `/booking` não recebe rodapé.

## Validação

Build sem erros + checagem no navegador em mobile (390px) e desktop: assinatura visível no fim do rodapé, link funcional, sem rolagem lateral e sem erros de console.
