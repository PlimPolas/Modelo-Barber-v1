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
  /** Quando true, o card usa o avatar genérico de silhueta no lugar da foto. */
  useAvatarPlaceholder?: boolean;
  secondaryMediaId?: string;
  bookingEnabled: boolean;
  active: boolean;
  sortOrder: number;
  socialLinks?: {
    instagram?: string;
  };
}
