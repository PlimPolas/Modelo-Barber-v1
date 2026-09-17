import type { CSSProperties } from 'react';

import { ResponsiveMedia, type ResponsiveMediaProps } from './responsive-media';
import { cn } from '@/lib/utils';

export interface FocalImageProps extends ResponsiveMediaProps {
  aspectRatio?: number | string;
}

export function FocalImage({
  asset,
  aspectRatio = asset.aspectRatio,
  className,
  imageClassName,
  style,
  ...props
}: FocalImageProps) {
  const focalStyle = {
    '--focal-mobile': `${asset.focalPointMobile.x}% ${asset.focalPointMobile.y}%`,
    '--focal-tablet': `${asset.focalPointTablet.x}% ${asset.focalPointTablet.y}%`,
    '--focal-desktop': `${asset.focalPointDesktop.x}% ${asset.focalPointDesktop.y}%`,
    aspectRatio,
    ...style,
  } as CSSProperties;

  return (
    <ResponsiveMedia
      asset={asset}
      className={cn('relative', className)}
      imageClassName={cn(
        'focal-image h-full w-full',
        asset.treatment === 'editorial-neutral' && 'saturate-75 contrast-110',
        asset.treatment === 'monochrome' && 'grayscale',
        imageClassName,
      )}
      style={focalStyle}
      {...props}
    />
  );
}
