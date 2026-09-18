import type { Dictionary } from './pt';

export const es: Dictionary = {
  code: 'es',
  htmlLang: 'es',
  locale: 'es-ES',
  label: 'ES',
  switcherLabel: 'Seleccionar idioma',
  languageNames: { pt: 'Português', en: 'English', es: 'Español' },

  navigation: {
    links: [
      { label: 'Servicios', href: '#servicos' },
      { label: 'Equipo', href: '#equipe' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Reseñas', href: '#avaliacoes' },
      { label: 'Ubicación', href: '#localizacao' },
    ],
    bookingLabel: 'Reservar cita',
    bookingLabelShort: 'Reservar',
    menuLabel: 'Abrir menú',
    mainNavLabel: 'Navegación principal',
    mobileNavLabel: 'Navegación móvil',
    homeLabel: 'inicio',
  },
  hero: {
    eyebrow: 'Barbería de autor · São Paulo',
    title: 'TU MEJOR CORTE EMPIEZA AQUÍ.',
    description:
      'Cortes precisos, barba bien cuidada y una experiencia pensada para que bajes el ritmo.',
    primaryAction: 'Reservar cita',
    secondaryAction: 'Ver servicios',
    scrollHint: 'Desliza para descubrir',
  },
  socialProof: {
    label: 'Indicadores',
    items: [
      { key: 'rating', value: '4,9', label: 'valoración media' },
      { key: 'reviews', value: '+480', label: 'reseñas' },
      { key: 'years', value: '12', label: 'años de oficio' },
      { key: 'clients', value: '+18 mil', label: 'servicios realizados' },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'NUESTRA LISTA DE PRECIOS\u00a0',
    description:
      'Cada visita empieza con una lectura rápida de tu estilo y termina con consejos para mantener el resultado.',
    actionLabel: 'Elegir este servicio',
    featuredLabel: 'El más elegido',
    minutesSuffix: 'min',
  },
  team: {
    eyebrow: 'Equipo',
    title: 'NUESTRO EQUIPO',
    description: 'Perfiles distintos, el mismo nivel de cuidado y atención al detalle.',
    actionPrefix: 'Reservar con',
    specialtiesLabel: 'Especialidades de',
  },
  gallery: {
    eyebrow: 'Dentro del estudio',
    title: 'GALERÍA DE NUESTRO LOCAL',
    description: 'Una mirada al espacio y al trabajo en movimiento.',
  },
  reviews: {
    eyebrow: 'Reseñas',
    title: 'CONFIANZA CONSTRUIDA EN CADA VISITA.',
    description: 'Comentarios de muestra que representan la experiencia propuesta en esta plantilla.',
    ratingLabel: 'de 5 estrellas',
  },
  booking: {
    eyebrow: 'Tu cita',
    title: 'Elige con calma. Reserva en pocos pasos.',
    description:
      'En el siguiente paso podrás elegir el servicio, el profesional y el horario que mejor te convenga.',
    benefit: 'Sin llamadas, sin esperas y con confirmación clara.',
    actionLabel: 'Iniciar reserva',
    steps: ['Servicio', 'Barbero', 'Fecha', 'Hora'],
  },
  bookingPage: {
    backPrefix: 'Volver a',
    title: 'La reserva está en preparación.',
    description:
      'Esta página ya recibe tu elección de servicio o profesional. El flujo completo se implementará más adelante.',
  },
  location: {
    eyebrow: 'Ubicación',
    title: 'DÓNDE ENCONTRARNOS',
    description: 'Llega unos minutos antes y empieza la experiencia con tranquilidad.',
    actions: {
      directions: 'Cómo llegar',
      call: 'Llamar',
      whatsapp: 'WhatsApp',
      booking: 'Reservar',
    },
    mapLabel: 'Mapa ilustrativo del centro de São Paulo',
    mapAriaSuffix: 'abrir el mapa en una pestaña nueva',
    hoursLabel: 'Horarios',
    closedLabel: 'Cerrado',
    postalCodePrefix: 'CP',
    dayNames: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  },
  finalCta: {
    eyebrow: 'Cuando estés listo',
    title: 'Tu próximo corte empieza aquí.',
    description: 'Elige el servicio y deja el resto en manos de nuestro equipo.',
    actionLabel: 'Reservar cita',
    alternativeLabel: 'Hablar por WhatsApp',
  },
  footer: {
    description: 'Barbería de autor para quien valora la técnica, la presencia y el cuidado.',
    navigationLabel: 'Navegación',
    contactLabel: 'Contacto',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    hoursLabel: 'Horario resumido',
    hoursSummary: 'Lun–jue 10–19 h · Vie 10–20 h · Sáb 9–18 h',
    copyrightSuffix: 'Demo ficticia.',
    styleGuideLabel: 'Style Guide',
    policies: [
      { key: 'privacy', label: 'Privacidad', href: '#' },
      { key: 'terms', label: 'Términos', href: '#' },
    ],
  },
  common: {
    newTabHint: ' (se abre en una pestaña nueva)',
  },

  services_by_id: {
    'service-cut': {
      name: 'Corte esencial',
      shortDescription: 'Consulta breve, corte y acabado.',
      category: 'cabello',
    },
    'service-beard': {
      name: 'Barba completa',
      shortDescription: 'Diseño, toalla caliente y acabado.',
      category: 'barba',
    },
    'service-combo': {
      name: 'Corte + barba',
      shortDescription: 'Experiencia completa, con consulta y acabado.',
      category: 'combo',
    },
    'service-finish': {
      name: 'Retoque exprés',
      shortDescription: 'Contornos, nuca y acabado entre cortes.',
      category: 'cabello',
    },
  },
  barbers_by_id: {
    'barber-caio': {
      role: 'Barbero sénior',
      shortBio: 'Especialista en cortes clásicos y diseño de barba.',
      specialties: ['cortes clásicos', 'barba'],
    },
    'barber-lia': {
      role: 'Barbera y asesora de imagen',
      shortBio: '-------------',
      specialties: ['visagismo', 'cortes contemporáneos'],
    },
    'barber-ravi': {
      role: 'Barbero',
      shortBio: '-------------',
      specialties: ['fades', 'textura', 'acabado'],
    },
  },
  reviews_by_id: {
    'review-foundation-1': {
      excerpt: 'Atención cuidadosa y resultado constante.',
      source: 'Datos de muestra',
    },
    'review-master-2': {
      excerpt:
        'La consulta antes del corte marcó la diferencia. El resultado siguió impecable semanas después.',
      source: 'Datos de muestra',
    },
    'review-master-3': {
      excerpt: 'Ambiente tranquilo, puntualidad y mucha atención a los detalles de la barba.',
      source: 'Datos de muestra',
    },
    'review-master-4': {
      excerpt: 'Salí sabiendo exactamente cómo mantener el corte en casa. Atención directa y muy cuidadosa.',
      source: 'Datos de muestra',
    },
  },
  locations_by_id: {
    'location-central': {
      name: 'Estudio Central',
      district: 'Centro',
      city: 'São Paulo',
      country: 'Brasil',
    },
  },
};
