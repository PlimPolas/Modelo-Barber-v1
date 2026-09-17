# Modelo Master de barbearia — fechar as últimas lacunas

O briefing enviado descreve praticamente o que o projeto já é hoje: ordem das seções, direção visual dark/editorial, tipografia, paleta, galeria em duas faixas full-bleed, localização 50/50, agendamento apenas como entrada visual. Então não há reconstrução: o trabalho é uma auditoria de acabamento e o fechamento dos pontos que ainda divergem do texto.

## O que já está de acordo (confirmado no projeto)

- Ordem das 12 seções, do menu ao rodapé.
- Paleta e tipografia exatamente como o briefing pede (fundo #0B0C0C, destaque bronze #D0A15E, Barlow Condensed + Manrope).
- Todo o conteúdo vem da camada de dados (marca, serviços, equipe, avaliações, localização, textos e fotos) — nada escrito dentro das telas.
- Galeria: duas faixas em sentidos opostos, fotos 4:5 pequenas e coladas, ocupando toda a largura, sem setas nem bolinhas, pausa fora da tela e versão parada para quem prefere menos movimento.
- Entrada de agendamento visual (Serviço → Barbeiro → Data → Horário), localização com mapa ilustrativo, CTA final e rodapé.

## Ajustes a fazer

1. **Fotos da equipe em 4:5** — hoje estão em 3:4 (um pouco mais altas do que o briefing pede). Passam a 4:5, com o mesmo enquadramento de rosto.
2. **Menu integrado ao topo** — hoje a barra já nasce escura e sólida. Passa a começar transparente sobre a foto do topo e ganhar fundo sólido só depois que a pessoa rola a página.
3. **Passo a passo do agendamento** — a lista "01 Serviço / 02 Barbeiro..." vira uma sequência horizontal com seta entre as etapas no computador (empilhada no celular), como o briefing desenha.
4. **Avaliações no celular** — a avaliação em destaque hoje fica muito longa no telefone; ajuste de tamanho e espaçamento para a leitura ficar confortável, sem alterar nenhum texto.
5. **Troca de cor de destaque em um só lugar** — hoje a cor aparece tanto nos dados da marca quanto na folha de estilos. Fica documentado e centralizado um único ponto de troca, para duplicar o projeto e personalizar rapidamente.
6. **Auditoria final de acabamento** — alinhamentos, respiros e contraste entre as seções, foco visível no teclado, alvos de toque de no mínimo 44px e textos alternativos das imagens.

## Detalhes técnicos

Arquivos previstos: `barber-card.tsx` (proporção e `sizes`), `site-navbar.tsx` (estado de scroll via `IntersectionObserver` numa sentinela no topo, sem biblioteca), `landing-page.tsx` (bloco da entrada de agendamento), `reviews-section.tsx` / `review-card.tsx` (tipografia responsiva do destaque), `src/styles/tokens.css` + `src/data/brand.ts` (comentário e ponto único do accent), `src/styles/landing.css` para os ajustes de apoio. Sem novas dependências, sem alteração de contratos de tipos, rotas ou dados.

## Fora de escopo

Backend, banco, autenticação, disponibilidade real e o fluxo completo de agendamento continuam não implementados; `/booking` segue como página de entrada.

## Validação

Build e verificação no navegador em 360px, 390px, 430px, tablet, desktop e desktop grande: sem rolagem lateral, galeria em movimento, topo mudando no scroll e nenhum erro de console.
