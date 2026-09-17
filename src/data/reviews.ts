import type { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'review-foundation-1',
    authorName: 'Cliente fictício',
    rating: 5,
    excerpt: 'Atendimento cuidadoso e resultado consistente.',
    source: 'Dados demonstrativos',
    verified: false,
    featured: true,
  },
  {
    id: 'review-master-2',
    authorName: 'Marina A.',
    rating: 5,
    excerpt: 'A consulta antes do corte fez toda a diferença. O resultado continuou bonito mesmo depois de algumas semanas.',
    source: 'Dados demonstrativos',
    publishedAt: '2026-07-18',
    verified: false,
    featured: true,
  },
  {
    id: 'review-master-3',
    authorName: 'Eduardo M.',
    rating: 5,
    excerpt: 'Ambiente tranquilo, horário respeitado e muita atenção aos detalhes da barba.',
    source: 'Dados demonstrativos',
    publishedAt: '2026-08-03',
    verified: false,
    featured: true,
  },
  {
    id: 'review-master-4',
    authorName: 'Lucas R.',
    rating: 5,
    excerpt: 'Saí sabendo exatamente como manter o corte em casa. Atendimento direto e muito cuidadoso.',
    source: 'Dados demonstrativos',
    publishedAt: '2026-08-27',
    verified: false,
    featured: true,
  },
];
