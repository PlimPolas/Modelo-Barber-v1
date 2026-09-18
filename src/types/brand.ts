import type { MediaAsset } from './media';

export interface Brand {
  name: string;
  shortName: string;
  tagline: string;
  logoPrimary?: MediaAsset;
  logoCompact?: MediaAsset;
  accentColor: string;
  defaultLocale: string;
  defaultCurrency: string;
  signature?: {
    handle: string;
    href: string;
  };
  socialLinks: {
    instagram?: string;
    website?: string;
  };
}
