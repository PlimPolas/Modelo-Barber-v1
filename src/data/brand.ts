import type { Brand } from '@/types';

// Conteúdo fictício: substitua esta camada para criar uma nova demo.
export const brand: Brand = {
  name: 'Ateliê 47',
  shortName: 'A47',
  tagline: 'Precisão, presença e cuidado.',
  // Metadado da marca: a cor aplicada na interface vem de --brand-accent
  // em src/styles/tokens.css. Mantenha os dois valores iguais.
  accentColor: '#D0A15E',
  defaultLocale: 'pt-BR',
  defaultCurrency: 'BRL',
  signature: {
    handle: '@BenevenutoDigital',
    href: 'https://www.instagram.com/benevenutodigital/',
  },
  socialLinks: {
    instagram: 'https://instagram.com/',
  },
};
