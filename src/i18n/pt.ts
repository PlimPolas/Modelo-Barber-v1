/**
 * Dicionário base (pt-BR). Define a ESTRUTURA de todas as traduções:
 * en.ts e es.ts são tipados a partir daqui, então nenhuma chave pode faltar.
 */
export const pt = {
  code: 'pt',
  htmlLang: 'pt-BR',
  locale: 'pt-BR',
  label: 'PT',
  brandTagline: 'Precisão, presença e cuidado.',
  switcherLabel: 'Selecionar idioma',
  languageNames: { pt: 'Português', en: 'English', es: 'Español' },

  navigation: {
    links: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Equipe', href: '#equipe' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Avaliações', href: '#avaliacoes' },
      { label: 'Localização', href: '#localizacao' },
    ],
    bookingLabel: 'Agendar horário',
    bookingLabelShort: 'Agendar',
    menuLabel: 'Abrir menu',
    mainNavLabel: 'Navegação principal',
    mobileNavLabel: 'Navegação mobile',
    homeLabel: 'início',
  },
  hero: {
    eyebrow: 'Barbearia autoral · São Paulo',
    title: 'SEU MELHOR CORTE COMEÇA AQUI.',
    description:
      'Cortes precisos, barba bem cuidada e uma experiência desenhada para você desacelerar.',
    primaryAction: 'Agendar horário',
    secondaryAction: 'Conhecer serviços',
    scrollHint: 'Role para descobrir',
  },
  socialProof: {
    label: 'Indicadores',
    items: [
      { key: 'rating', value: '4,9', label: 'avaliação média' },
      { key: 'reviews', value: '+480', label: 'avaliações' },
      { key: 'years', value: '12', label: 'anos de ofício' },
      { key: 'clients', value: '+18 mil', label: 'atendimentos' },
    ],
  },
  services: {
    eyebrow: 'Serviços',
    title: 'NOSSA TABELA DE PREÇOS\u00a0',
    description:
      'Cada atendimento começa com uma leitura rápida do seu estilo e termina com orientação para manter o resultado.',
    actionLabel: 'Escolher este serviço',
    featuredLabel: 'Mais escolhido',
    minutesSuffix: 'min',
  },
  team: {
    eyebrow: 'Equipe',
    title: 'NOSSO TIME',
    description: 'Perfis diferentes, o mesmo padrão de cuidado e atenção ao detalhe.',
    actionPrefix: 'Agendar com',
    specialtiesLabel: 'Especialidades de',
  },
  gallery: {
    eyebrow: 'Dentro do Ateliê',
    title: 'GALERIA DA NOSSA LOJA',
    description: 'Uma visão do espaço e do trabalho em movimento.',
  },
  reviews: {
    eyebrow: 'Avaliações',
    title: 'CONFIANÇA CONSTRUÍDA EM CADA VISITA.',
    description: 'Comentários demonstrativos que representam a experiência proposta para esta master.',
    ratingLabel: 'de 5 estrelas',
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
  bookingPage: {
    backPrefix: 'Voltar para',
    title: 'Agendamento em preparação.',
    description:
      'Esta rota já recebe as escolhas de serviço ou profissional. O fluxo completo será implementado em uma etapa futura.',
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
    mapAriaSuffix: 'abrir mapa em nova aba',
    hoursLabel: 'Horários',
    closedLabel: 'Fechado',
    postalCodePrefix: 'CEP',
    dayNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
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
      { key: 'privacy', label: 'Privacidade', href: '#' },
      { key: 'terms', label: 'Termos', href: '#' },
    ],
  },
  common: {
    newTabHint: ' (abre em nova aba)',
  },

  services_by_id: {
    'service-cut': {
      name: 'Corte essencial',
      shortDescription: 'Consulta breve, corte e finalização.',
      category: 'cabelo',
    },
    'service-beard': {
      name: 'Barba completa',
      shortDescription: 'Desenho, toalha quente e acabamento.',
      category: 'barba',
    },
    'service-combo': {
      name: 'Corte + barba',
      shortDescription: 'Experiência completa, com consulta e finalização.',
      category: 'combo',
    },
    'service-finish': {
      name: 'Acabamento expresso',
      shortDescription: 'Contornos, nuca e acabamento entre cortes.',
      category: 'cabelo',
    },
  },
  barbers_by_id: {
    'barber-caio': {
      role: 'Barbeiro sênior',
      shortBio: 'Especialista em cortes clássicos e desenho de barba.',
      specialties: ['cortes clássicos', 'barba'],
    },
    'barber-lia': {
      role: 'Barbeira e visagista',
      shortBio: '-------------',
      specialties: ['visagismo', 'cortes contemporâneos'],
    },
    'barber-ravi': {
      role: 'Barbeiro',
      shortBio: '-------------',
      specialties: ['fades', 'textura', 'acabamento'],
    },
  },
  reviews_by_id: {
    'review-foundation-1': {
      excerpt: 'Atendimento cuidadoso e resultado consistente.',
      source: 'Dados demonstrativos',
    },
    'review-master-2': {
      excerpt:
        'A consulta antes do corte fez toda a diferença. O resultado continuou bonito mesmo depois de algumas semanas.',
      source: 'Dados demonstrativos',
    },
    'review-master-3': {
      excerpt: 'Ambiente tranquilo, horário respeitado e muita atenção aos detalhes da barba.',
      source: 'Dados demonstrativos',
    },
    'review-master-4': {
      excerpt: 'Saí sabendo exatamente como manter o corte em casa. Atendimento direto e muito cuidadoso.',
      source: 'Dados demonstrativos',
    },
  },
  locations_by_id: {
    'location-central': {
      name: 'Unidade Central',
      district: 'Centro',
      city: 'São Paulo',
      country: 'Brasil',
    },
  },
};

export type Dictionary = typeof pt;
