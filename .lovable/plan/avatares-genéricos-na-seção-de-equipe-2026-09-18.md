# Avatares genéricos na seção de Equipe

Substituir as fotos dos integrantes 2 e 3 por avatares de silhueta escuros e elegantes, mantendo a foto real do EXEMPLO 1 e todo o restante da seção intacto.

## O que muda

- O primeiro card (Caio Nunes - EXEMPLO) continua exatamente como está: foto real, mesmo destaque.
- Os outros dois cards passam a mostrar um avatar de silhueta: fundo grafite/preto com leve profundidade, silhueta centralizada em cinza-escuro, contraste sutil, sem detalhes supérfluos.
- Mesma proporção 4:5, mesmo enquadramento, mesma tipografia, nomes, cargos, textos, espaçamentos e comportamento responsivo.
- O leve zoom no hover continua funcionando também nos avatares, para que os cards pareçam parte do mesmo conjunto.

## Reaproveitamento

Um componente de avatar reutilizável (silhueta desenhada em vetor, sem arquivo de imagem nem biblioteca nova) usando as cores do próprio site, para ser usado em outras demos: basta marcar um integrante como "sem foto".

## Detalhes técnicos

- Novo `src/components/landing/avatar-placeholder.tsx`: SVG inline com `aspect-ratio 4/5`, fundo `--surface`/`--bg-secondary`, silhueta em `--surface-elevated`/`--border-subtle`, `role="img"` + `aria-label` com o nome do integrante.
- `Barber` ganha uma marcação opcional de placeholder na camada de dados (`src/data/barbers.ts`) — o tipo `Barber` em `src/types` recebe apenas um campo opcional, sem alterar campos existentes.
- `barber-card.tsx`: renderiza `AvatarPlaceholder` no lugar de `FocalImage` quando o integrante está marcado; o resto do card fica idêntico.
- Nenhuma alteração em Hero, Serviços, Galeria, Reviews, Localização, Navbar ou Footer.

## Observação

O anexo enviado é uma captura da galeria do próprio site, não uma referência de avatar. Vou seguir a direção descrita no texto (silhueta escura, minimalista, premium). Se você tiver a imagem de referência dos avatares, posso ajustar depois.
