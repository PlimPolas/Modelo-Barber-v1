import type { Location } from '@/types';

export const locations: Location[] = [
  {
    id: 'location-central',
    slug: 'unidade-central',
    name: 'Unidade Central',
    addressLine1: 'Rua Exemplo, 47',
    district: 'Centro',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '00000-000',
    country: 'Brasil',
    latitude: -23.5505,
    longitude: -46.6333,
    timezone: 'America/Sao_Paulo',
    phone: '+55 11 0000-0000',
    whatsapp: '+55 11 00000-0000',
    email: 'ola@example.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Centro%2C%20S%C3%A3o%20Paulo%2C%20SP',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Centro%2C%20S%C3%A3o%20Paulo%2C%20SP',
    openingHours: [
      { day: 0, closed: true },
      { day: 1, opensAt: '10:00', closesAt: '19:00', closed: false },
      { day: 2, opensAt: '10:00', closesAt: '19:00', closed: false },
      { day: 3, opensAt: '10:00', closesAt: '19:00', closed: false },
      { day: 4, opensAt: '10:00', closesAt: '19:00', closed: false },
      { day: 5, opensAt: '10:00', closesAt: '20:00', closed: false },
      { day: 6, opensAt: '09:00', closesAt: '18:00', closed: false },
    ],
    scheduleExceptions: [],
    active: true,
  },
];
