export interface OpeningPeriod {
  day: number;
  opensAt?: string;
  closesAt?: string;
  closed: boolean;
}

export interface ScheduleException {
  date: string;
  opensAt?: string;
  closesAt?: string;
  closed: boolean;
  label?: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  district: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  openingHours: OpeningPeriod[];
  scheduleExceptions: ScheduleException[];
  mapUrl?: string;
  directionsUrl?: string;
  active: boolean;
}
