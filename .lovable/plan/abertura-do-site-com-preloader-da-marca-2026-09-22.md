# Abertura do site com preloader da marca

Uma tela de abertura curta, escura e elegante, com a marca ao centro e um brilho suave ao redor. Depois ela desaparece com uma transição delicada e o topo do site aparece em sequência.

## Logo usada

O projeto não tem arquivo de logo em imagem. A marca hoje é o monograma "A47" dentro de um quadrado bronze, ao lado do nome "Ateliê 47" — é exatamente isso que será usado no centro da tela de abertura, em tamanho maior. Se você tiver um logo em arquivo, é só enviar depois que eu troco.

## Como será a experiência

1. Ao abrir o site, uma tela cheia na cor de fundo atual cobre tudo.
2. O monograma aparece no centro com um leve fade e uma aproximação sutil; o nome "Ateliê 47" surge logo abaixo.
3. Um anel luminoso bronze bem discreto pulsa em volta do monograma enquanto carrega.
4. Após cerca de 1,6s no total, a tela some com um fade suave.
5. O conteúdo do topo entra em sequência: linha superior, título, texto, botões e, por fim, a foto de fundo ganha nitidez.

Duração total entre 1,5s e 2s. Aparece apenas no primeiro carregamento da sessão (trocar de idioma ou navegar entre páginas não repete).

## Detalhes técnicos

- Novo `src/components/layout/brand-preloader.tsx`: overlay fixo, `role="status"` com texto acessível, trava o scroll enquanto visível, controla as fases (entrada → brilho → saída) com timers e desmonta ao final.
- Novo bloco de keyframes em `src/styles/motion.css`: `brand-glow-pulse` (opacidade/escala do anel), `brand-mark-in`, `preloader-out`. Sem bibliotecas novas.
- Cores apenas por tokens (`--bg`, `--brand-accent`, `--text-primary`); o brilho usa `box-shadow`/`radial-gradient` do accent com opacidade baixa.
- Estado de "já exibido" em `sessionStorage` (`preloader-shown`); no servidor nada é renderizado até a hidratação, evitando descompasso de SSR.
- Montagem em `src/routes/__root.tsx` (dentro do provider de idioma), para valer na home e em `/booking`.
- Entrada do topo: classes utilitárias de animação aplicadas aos elementos já existentes do Hero em `landing-page.tsx`, com atrasos escalonados — sem mudar layout, textos ou estrutura.
- Sem alterações em galeria, navbar, scroll suave, seções ou responsividade.

## Validação

Desktop e celular (390px): a abertura aparece uma vez, o brilho roda suave, a saída é limpa, o topo entra em sequência, sem rolagem lateral e sem erros.
