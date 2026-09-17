export type ServicePriceType = 'fixed' | 'starting-at' | 'consultation';

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  durationMinutes: number;
  bufferBeforeMinutes: number;
  bufferAfterMinutes: number;
  price: number;
  currency: string;
  priceType: ServicePriceType;
  barberIds: string[];
  locationIds: string[];
  mediaId?: string;
  featured: boolean;
  bookingEnabled: boolean;
  active: boolean;
  sortOrder: number;
  offerVersion: string;
}
