import type { Dictionary } from './pt';

export const en: Dictionary = {
  code: 'en',
  htmlLang: 'en',
  locale: 'en-US',
  label: 'EN',
  brandTagline: 'Precision, presence and care.',
  switcherLabel: 'Select language',
  languageNames: { pt: 'Português', en: 'English', es: 'Español' },

  navigation: {
    links: [
      { label: 'Services', href: '#servicos' },
      { label: 'Team', href: '#equipe' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'Reviews', href: '#avaliacoes' },
      { label: 'Location', href: '#localizacao' },
    ],
    bookingLabel: 'Book a visit',
    bookingLabelShort: 'Book',
    menuLabel: 'Open menu',
    mainNavLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    homeLabel: 'home',
  },
  hero: {
    eyebrow: 'Independent barbershop · São Paulo',
    title: 'YOUR BEST CUT STARTS HERE.',
    description:
      'Sharp cuts, a well-groomed beard and an experience built for you to slow down.',
    primaryAction: 'Book a visit',
    secondaryAction: 'See our services',
    scrollHint: 'Scroll to explore',
  },
  socialProof: {
    label: 'Highlights',
    items: [
      { key: 'rating', value: '4.9', label: 'average rating' },
      { key: 'reviews', value: '480+', label: 'reviews' },
      { key: 'years', value: '12', label: 'years of craft' },
      { key: 'clients', value: '18k+', label: 'appointments' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'OUR PRICE LIST\u00a0',
    description:
      'Every visit starts with a quick read of your style and ends with guidance to keep the result looking right.',
    actionLabel: 'Choose this service',
    featuredLabel: 'Most booked',
    minutesSuffix: 'min',
  },
  team: {
    eyebrow: 'Team',
    title: 'OUR TEAM',
    description: 'Different backgrounds, the same standard of care and attention to detail.',
    actionPrefix: 'Book with',
    specialtiesLabel: 'Specialties of',
  },
  gallery: {
    eyebrow: 'Inside the studio',
    title: 'OUR STUDIO GALLERY',
    description: 'A look at the space and the work in motion.',
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'TRUST BUILT ON EVERY VISIT.',
    description: 'Sample comments that reflect the experience this template is built around.',
    ratingLabel: 'out of 5 stars',
  },
  booking: {
    eyebrow: 'Your appointment',
    title: 'Take your time. Book in a few steps.',
    description:
      'In the next step you can pick the service, the barber and the time that works best, all in one simple flow.',
    benefit: 'No phone calls, no waiting and a clear confirmation.',
    actionLabel: 'Start booking',
    steps: ['Service', 'Barber', 'Date', 'Time'],
  },
  bookingPage: {
    backPrefix: 'Back to',
    title: 'Booking is on the way.',
    description:
      'This page already receives your service or barber choice. The full flow will be built in a later stage.',
  },
  location: {
    eyebrow: 'Location',
    title: 'WHERE TO FIND US',
    description: 'Arrive a few minutes early and start the experience without rushing.',
    actions: {
      directions: 'Get directions',
      call: 'Call',
      whatsapp: 'WhatsApp',
      booking: 'Book',
    },
    mapLabel: 'Illustrative map of downtown São Paulo',
    mapAriaSuffix: 'open map in a new tab',
    hoursLabel: 'Opening hours',
    closedLabel: 'Closed',
    postalCodePrefix: 'ZIP',
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  finalCta: {
    eyebrow: 'Whenever you are ready',
    title: 'Your next cut starts here.',
    description: 'Pick the service and leave the rest to our team.',
    actionLabel: 'Book a visit',
    alternativeLabel: 'Chat on WhatsApp',
  },
  footer: {
    description: 'An independent barbershop for those who value craft, presence and care.',
    navigationLabel: 'Navigation',
    contactLabel: 'Contact',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    hoursLabel: 'Hours at a glance',
    hoursSummary: 'Mon–Thu 10am–7pm · Fri 10am–8pm · Sat 9am–6pm',
    copyrightSuffix: 'Fictional demo.',
    styleGuideLabel: 'Style Guide',
    policies: [
      { key: 'privacy', label: 'Privacy', href: '#' },
      { key: 'terms', label: 'Terms', href: '#' },
    ],
  },
  common: {
    newTabHint: ' (opens in a new tab)',
  },

  services_by_id: {
    'service-cut': {
      name: 'Essential cut',
      shortDescription: 'Quick consultation, cut and finish.',
      category: 'hair',
    },
    'service-beard': {
      name: 'Full beard',
      shortDescription: 'Shaping, hot towel and finish.',
      category: 'beard',
    },
    'service-combo': {
      name: 'Cut + beard',
      shortDescription: 'The complete experience, consultation and finish included.',
      category: 'combo',
    },
    'service-finish': {
      name: 'Express touch-up',
      shortDescription: 'Outlines, neckline and clean-up between cuts.',
      category: 'hair',
    },
  },
  barbers_by_id: {
    'barber-caio': {
      role: 'Senior barber',
      shortBio: 'Specialist in classic cuts and beard shaping.',
      specialties: ['classic cuts', 'beard'],
    },
    'barber-lia': {
      role: 'Barber and style advisor',
      shortBio: '-------------',
      specialties: ['face shape styling', 'contemporary cuts'],
    },
    'barber-ravi': {
      role: 'Barber',
      shortBio: '-------------',
      specialties: ['fades', 'texture', 'finishing'],
    },
  },
  reviews_by_id: {
    'review-foundation-1': {
      excerpt: 'Attentive service and a consistent result.',
      source: 'Sample data',
    },
    'review-master-2': {
      excerpt:
        'The consultation before the cut made all the difference. It still looked great weeks later.',
      source: 'Sample data',
    },
    'review-master-3': {
      excerpt: 'Calm space, appointment right on time and real attention to the beard details.',
      source: 'Sample data',
    },
    'review-master-4': {
      excerpt: 'I left knowing exactly how to keep the cut at home. Straightforward and very careful service.',
      source: 'Sample data',
    },
  },
  locations_by_id: {
    'location-central': {
      name: 'Central studio',
      district: 'Downtown',
      city: 'São Paulo',
      country: 'Brazil',
    },
  },
};
