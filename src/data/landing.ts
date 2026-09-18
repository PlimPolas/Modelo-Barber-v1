export const landingContent = {
  navigation: {
    links: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Equipe', href: '#equipe' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Avaliações', href: '#avaliacoes' },
      { label: 'Localização', href: '#localizacao' },
    ],
    bookingLabel: 'Agendar horário',
    menuLabel: 'Abrir menu',
  },
  hero: {
    eyebrow: 'Barbearia autoral · São Paulo',
    title: 'SEU MELHOR CORTE COMEÇA AQUI.',
    description:
      'Cortes precisos, barba bem cuidada e uma experiência desenhada para você desacelerar.',
    primaryAction: 'Agendar horário',
    secondaryAction: 'Conhecer serviços',
    scrollHint: 'Role para descobrir',
    mediaId: 'media-hero-studio',
  },
  socialProof: [
    { value: '4,9', label: 'avaliação média', compact: true },
    { value: '+480', label: 'avaliações', compact: true },
    { value: '12', label: 'anos de ofício', compact: false },
    { value: '+18 mil', label: 'atendimentos', compact: false },
  ],
  services: {
    eyebrow: 'Serviços',
    title: 'NOSSA TABELA DE PREÇOS\u00a0',
    description:
      'Cada atendimento começa com uma leitura rápida do seu estilo e termina com orientação para manter o resultado.',
    actionLabel: 'Escolher este serviço',
    featuredLabel: 'Mais escolhido',
  },
  about: {
    eyebrow: 'O Ateliê',
    title: 'Menos pressa. Mais presença.',
    manifesto:
      'Acreditamos que técnica e escuta caminham juntas. Por isso, cada detalhe — do diagnóstico ao acabamento — é pensado para um resultado que funciona na rotina, não apenas na cadeira.',
    mediaId: 'media-about-craft',
    principles: [
      { index: '01', title: 'Consulta real', description: 'Entendemos seu estilo, sua rotina e o tempo que você quer dedicar à manutenção.' },
      { index: '02', title: 'Técnica precisa', description: 'Forma, textura e acabamento trabalhados para crescer bem entre visitas.' },
      { index: '03', title: 'Cuidado contínuo', description: 'Você sai com recomendações simples e adequadas ao seu cabelo ou barba.' },
    ],
  },
  team: {
    eyebrow: 'Equipe',
    title: 'NOSSO TIME',
    description: 'Perfis diferentes, o mesmo padrão de cuidado e atenção ao detalhe.',
    actionPrefix: 'Agendar com',
  },
  gallery: {
    eyebrow: 'Dentro do Ateliê',
    title: 'GALERIA DA NOSSA LOJA',
    description: 'Uma visão do espaço e do trabalho em movimento.',
    mediaIds: [
      'media-gallery-chair',
      'media-gallery-tools',
      'media-gallery-studio',
      'media-gallery-razor',
      'media-gallery-clipper',
      'media-gallery-detail',
    ],
  },
  reviews: {
    eyebrow: 'Avaliações',
    title: 'CONFIANÇA CONSTRUÍDA EM CADA VISITA.',
    description: 'Comentários demonstrativos que representam a experiência proposta para esta master.',
  },
  booking: {
    eyebrow: 'Seu horário',
    title: 'Escolha com calma. Agende em poucos passos.',
    description:
      'Na próxima etapa, você poderá selecionar o serviço, o profissional e o melhor horário em um fluxo direto.',
    benefit: 'Sem ligações, sem espera e com confirmação clara.',
    actionLabel: 'Iniciar agendamento',
    steps: ['Serviço', 'Barbeiro', 'Data', 'Horário'],
  },
  location: {
    eyebrow: 'Localização',
    title: 'NOSSA LOCALIZAÇÂO',
    description: 'Chegue alguns minutos antes e aproveite o começo da experiência com tranquilidade.',
    actions: {
      directions: 'Como chegar',
      call: 'Ligar',
      whatsapp: 'WhatsApp',
      booking: 'Agendar',
    },
    mapLabel: 'Mapa ilustrativo da região central de São Paulo',
    hoursLabel: 'Horários',
  },
  finalCta: {
    eyebrow: 'Quando você estiver pronto',
    title: 'Seu próximo corte começa aqui.',
    description: 'Escolha o serviço e deixe o restante com a nossa equipe.',
    actionLabel: 'Agendar horário',
    alternativeLabel: 'Falar pelo WhatsApp',
  },
  footer: {
    description: 'Barbearia autoral para quem valoriza técnica, presença e cuidado.',
    navigationLabel: 'Navegação',
    contactLabel: 'Contato',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    hoursLabel: 'Horário resumido',
    hoursSummary: 'Seg–qui 10h–19h · Sex 10h–20h · Sáb 9h–18h',
    copyrightSuffix: 'Demo fictícia.',
    styleGuideLabel: 'Style Guide',
    policies: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
    ],
  },
} as const;
