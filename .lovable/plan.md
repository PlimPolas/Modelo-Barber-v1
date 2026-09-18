# Diagnóstico e ajuste da rolagem com inércia

## O que o teste no navegador mostrou

Rodei a página real (1280x900), dei **um único giro de roda** e registrei `window.scrollY` por 2,2s:

```text
34, 78, 114, 145, 171, 192, 210, 225, 237, 247, 256, 263, 269, 274, 279,
282, 285, 288, 290, 291, ... 299, 300, 300 (estabiliza)
```

Resultado por item pedido:

1. `SmoothScroll` está montado no layout raiz — confirmado.
2. Instância Lenis ativa no navegador — confirmado (objeto presente em runtime).
3. `<html>` recebe a classe `lenis` — sim, **mas não recebe `lenis-smooth`**.
4. A roda é interceptada: o valor continua mudando ~1,7s depois do gesto terminar.
5. Nenhum container com `overflow-y: auto/scroll` assume a rolagem (lista vazia); a janela é quem rola.
6. **Interferência encontrada (causa provável do "não percebo nada"):** `html { scroll-behavior: smooth }` está ativo (valor calculado = `smooth`). O override que deveria desligá-lo depende do seletor `.lenis.lenis-smooth`, classe que esta versão do Lenis não aplica. Com o `scroll-behavior` nativo ligado, o navegador aplica sua própria suavização por cima do Lenis: os saltos de clique no menu e o trecho final do movimento ficam achatados e o efeito some na percepção.
7. A preview está usando o bundle atual (o Lenis roda no runtime), então não é cache; ainda assim limpo o cache do Vite e recarrego antes de validar.

Ou seja: o Lenis funciona, mas o CSS nativo está competindo com ele, e `lerp: 0.06` deixa a cauda curta demais para ser notada.

## O que vou mudar

1. **CSS (`src/styles.css`)** — desligar a suavização nativa sempre que o Lenis estiver ativo, sem depender da classe `lenis-smooth`: o override passa a valer para `html.lenis`. O fallback `scroll-behavior: smooth` continua existindo para quando o Lenis não estiver ativo.
2. **`src/components/layout/smooth-scroll.tsx`** — configuração inicial pedida: `lerp: 0.045`, `smoothWheel: true`, `syncTouch: false` (mobile segue com rolagem nativa). Sem mudança de layout nem de outras animações.
3. **Validação em runtime**, não por leitura de código: um único wheel, amostragem de `window.scrollY` a cada 50ms por ≥2s, confirmando que o valor continua mudando depois do fim do gesto e comparando a duração da cauda antes/depois.

## Detalhes técnicos

- Nada além desses dois arquivos é tocado; galeria, IntersectionObserver e transições existentes ficam intactos.
- O scroll por âncora do menu continua usando `lenis.scrollTo`; com o `scroll-behavior` nativo desligado ele deixa de ser cortado pelo navegador.
- Limpeza de `node_modules/.vite` e reinício do servidor de desenvolvimento antes da medição final.

## Ao final eu informo

- causa encontrada, configuração final aplicada e os números reais do teste (amostras de `scrollY` e duração da inércia).
