import type { Dictionary } from './pt';
import type { Barber, Location, Review, Service } from '@/types';

type Keyed<T> = Record<string, T | undefined>;

/** Aplica os textos do idioma ativo sobre os dados, mantendo ids, preços e relações. */
export function localizeService(service: Service, t: Dictionary): Service {
  const entry = (t.services_by_id as Keyed<{ name: string; shortDescription: string; category: string }>)[service.id];
  return entry ? { ...service, ...entry } : service;
}

export function localizeBarber(barber: Barber, t: Dictionary): Barber {
  const entry = (t.barbers_by_id as Keyed<{ role: string; shortBio: string; specialties: string[] }>)[barber.id];
  return entry ? { ...barber, ...entry } : barber;
}

export function localizeReview(review: Review, t: Dictionary): Review {
  const entry = (t.reviews_by_id as Keyed<{ excerpt: string; source: string }>)[review.id];
  return entry ? { ...review, ...entry } : review;
}

export function localizeLocation(location: Location, t: Dictionary): Location {
  const entry = (t.locations_by_id as Keyed<{ name: string; district: string; city: string; country: string }>)[
    location.id
  ];
  return entry ? { ...location, ...entry } : location;
}
