import type { ImgHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import type { MediaAsset } from '@/types';

export interface ResponsiveMediaProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'height' | 'loading' | 'src' | 'width'> {
  asset: MediaAsset;
  priority?: boolean;
  loadingStrategy?: 'eager' | 'lazy';
  imageClassName?: string;
}

export function ResponsiveMedia({
  asset,
  priority = false,
  loadingStrategy = 'lazy',
  sizes = '100vw',
  className,
  imageClassName,
  style,
  ...props
}: ResponsiveMediaProps) {
  const variantsByMime: Record<string, string[]> = {};
  for (const variant of asset.variants ?? []) {
    const current = variantsByMime[variant.mimeType] ?? [];
    current.push(`${variant.src} ${variant.width}w`);
    variantsByMime[variant.mimeType] = current;
  }

  return (
    <picture className={cn('block overflow-hidden', className)} style={style}>
      {variantsByMime
        ? Object.entries(variantsByMime).map(([mimeType, srcSet]) => (
            <source key={mimeType} type={mimeType} srcSet={srcSet.join(', ')} sizes={sizes} />
          ))
        : null}
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : loadingStrategy}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        sizes={sizes}
        className={cn('block h-full w-full object-cover', imageClassName)}
        {...props}
      />
    </picture>
  );
}
