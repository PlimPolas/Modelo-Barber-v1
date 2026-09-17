export type BookingStatus =
  | 'scheduled'
  | 'confirmed'
  | 'attended'
  | 'no-show'
  | 'cancelled';

export type BarberPreference = 'specific' | 'any';

export interface CustomerContactSnapshot {
  name: string;
  phone: string;
  email?: string;
}

export interface BookingStatusEvent {
  status: BookingStatus;
  occurredAt: string;
  source: 'customer' | 'staff' | 'system';
  note?: string;
}

export interface Booking {
  id: string;
  publicReference: string;
  status: BookingStatus;
  serviceId: string;
  barberId?: string;
  barberPreference: BarberPreference;
  locationId: string;
  customerContactSnapshot: CustomerContactSnapshot;
  startAt: string;
  endAt: string;
  timezone: string;
  durationMinutes: number;
  price: number;
  currency: string;
  offerVersion: string;
  customerNotes?: string;
  consentSnapshot: Record<string, boolean>;
  source: string;
  idempotencyKey: string;
  createdAt: string;
  updatedAt: string;
  cancelledAt?: string;
  cancellationReason?: string;
  statusHistory: BookingStatusEvent[];
}
