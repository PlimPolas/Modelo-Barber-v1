export interface Barber {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  specialties: string[];
  serviceIds: string[];
  locationIds: string[];
  primaryMediaId?: string;
  secondaryMediaId?: string;
  bookingEnabled: boolean;
  active: boolean;
  sortOrder: number;
  socialLinks?: {
    instagram?: string;
  };
}
