export type MediaTreatment =
  | 'natural-warm'
  | 'editorial-neutral'
  | 'monochrome'
  | 'dark-overlay';

export interface FocalPoint {
  x: number;
  y: number;
}

export interface MediaVariant {
  src: string;
  width: number;
  height: number;
  mimeType: string;
  media?: string;
}

export interface MediaAsset {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  mimeType: string;
  width: number;
  height: number;
  aspectRatio: number;
  variants?: MediaVariant[];
  blurPlaceholder?: string;
  focalPointMobile: FocalPoint;
  focalPointTablet: FocalPoint;
  focalPointDesktop: FocalPoint;
  treatment: MediaTreatment;
  rights?: string;
  active: boolean;
}
