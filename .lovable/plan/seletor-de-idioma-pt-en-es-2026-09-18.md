# Seletor de idioma PT / EN / ES

Adicionar troca de idioma para todo o site, com PT como padrão, sem mexer em layout, cores, animações, galeria ou sistema de rolagem.

## O que o usuário verá

- No topo, ao lado do botão de agendamento: três letras discretas — **PT  EN  ES**, nessa ordem. O idioma ativo em destaque suave (cor de destaque bronze), os outros em tom secundário.
- No celular, as mesmas três letras aparecem no menu lateral, acima do botão de agendamento, para não apertar a barra do topo.
- Ao tocar em EN ou ES, todo o texto do site muda na hora, sem recarregar.
- A escolha fica guardada no navegador: ao voltar depois, o site abre no último idioma usado.

## O que é traduzido

Navbar, hero, indicadores, serviços (nome, descrição, categoria, botões), equipe (cargos, bios, botão "Agendar com"), galeria, avaliações (textos dos depoimentos e rótulos), bloco de agendamento, localização (rótulos, horários, botões), CTA final, rodapé e a página /booking.

Permanecem sem tradução: nome da barbearia, nomes dos barbeiros, endereço, telefone, nomes de redes sociais, preços e moeda.

## Detalhes técnicos

- Nova pasta `src/i18n/` com `pt.ts`, `en.ts`, `es.ts` e `index.ts`. `pt.ts` recebe o conteúdo atual de `src/data/landing.ts` como fonte da estrutura; `en`/`es` são tipados a partir dele para garantir que nenhuma chave falte.
- Textos localizáveis que hoje vivem em `src/data/{services,barbers,reviews,locations}.ts` (nome/descrição/categoria de serviço, cargo/bio de barbeiro, trecho/fonte de avaliação, rótulos de local) passam a ser referenciados por id dentro dos dicionários de idioma. Os arquivos de dados mantêm ids, preços, durações, relações e flags — nenhuma mudança nos tipos `Service`, `Barber`, `Location`.
- `LanguageProvider` (contexto React) em `src/i18n/language-provider.tsx`: estado `pt | en | es`, hidratação segura (inicia em `pt` e lê `localStorage` em `useEffect` para evitar mismatch de SSR), grava em `localStorage` na troca e ajusta `document.documentElement.lang` (pt-BR / en / es). Montado em `src/routes/__root.tsx` em volta do `Outlet`.
- Hook `useI18n()` devolve o dicionário do idioma ativo e o setter. Componentes de landing deixam de importar `landingContent` direto e passam a consumir o hook (ou recebem as strings via props, como já fazem vários deles).
- `LanguageSwitcher` novo em `src/components/landing/language-switcher.tsx`: `role="group"` com três botões, `aria-pressed`, alvo de toque de 44px, tokens existentes (`--brand-accent`, `--text-muted`, `--border-subtle`), sem bandeiras e sem dropdown. Inserido em `site-navbar.tsx` no grupo do CTA (desktop) e dentro do `SheetContent` (mobile).
- `/booking` e os `head()` das rotas mantêm os metadados atuais em pt-BR (SEO não faz parte deste pedido).
- Sem novas bibliotecas.

## Validação

Playwright em desktop e mobile: confirmar ordem PT/EN/ES, PT como padrão, troca imediata de todos os textos sem mistura de idiomas, `lang` do html correto, persistência após recarregar, e ausência de quebra de layout ou rolagem horizontal.
