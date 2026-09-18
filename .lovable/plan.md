# Remover a seção "O Ateliê" (Sobre) da landing

## O que muda

Remover da página principal a seção selecionada — a que exibe "Menos pressa. Mais presença." com o manifesto e os três princípios numerados (01 Consulta real / 02 Técnica precisa / 03 Cuidado contínuo) ao lado da fotografia.

Arquivo: `src/components/landing/landing-page.tsx`

- Excluir o bloco `<section className="bg-[var(--background-secondary)]">` inteiro (linhas 125–155), que contém o `SectionHeader` do Sobre, a lista de princípios e a foto `media-about-craft`.

## O que NÃO muda

- Nenhuma outra seção: Navbar, Hero, Indicadores, Serviços, Equipe, Galeria, Avaliações, Agendamento, Localização, CTA final e Rodapé permanecem iguais.
- Os dados do Sobre (`landingContent.about` em `src/data/landing.ts`) permanecem no arquivo — assim a seção pode ser restaurada depois sem retrabalho. Nenhum dado é apagado.
- Nada muda em estilos, galeria, animações ou outras páginas (/booking, /style-guide).

## Validação

- Build OK (verificar /tmp/observability/build-errors.log).
- Playwright na landing: seção "O Ateliê" ausente entre Serviços e Equipe, sem rolagem lateral e sem erros de console em 390px e 1280px.
