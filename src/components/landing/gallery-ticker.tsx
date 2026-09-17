'use client';

import { useEffect, useRef, useState } from 'react';

import { FocalImage } from '@/components/media';
import type { MediaAsset } from '@/types';

interface GalleryTickerProps {
  items: MediaAsset[];
}

interface GalleryItemProps {
  item: MediaAsset;
  sizes: string;
  fluid?: boolean;
  tall?: boolean;
}

export function GalleryItem({ item, sizes, fluid = false, tall = false }: GalleryItemProps) {
  return (
    <div className={`${fluid ? '' : `gallery-item${tall ? ' gallery-item-tall' : ''}`} overflow-hidden bg-[var(--surface)]`}>
      <FocalImage asset={item} aspectRatio={tall ? '3 / 4' : '4 / 3'} sizes={sizes} />
    </div>
  );
}

function GalleryRow({ items, reverse, paused }: { items: MediaAsset[]; reverse?: boolean; paused: boolean }) {
  const repeated = [...items, ...items];

  return (
    <div className="gallery-viewport" aria-hidden="true">
      <div className="gallery-track" data-direction={reverse ? 'reverse' : 'forward'} data-paused={paused}>
        {repeated.map((item, index) => (
          <GalleryItem
            key={`${item.id}-${index}`}
            item={item}
            tall={index % 3 === 1}
            sizes="(min-width: 768px) 20rem, 11rem"
          />
        ))}
      </div>
    </div>
  );
}

export function GalleryGridFallback({ items }: GalleryTickerProps) {
  return (
    <div className="gallery-fallback mx-auto max-w-[var(--container-wide)] grid-cols-2 gap-[var(--space-3)] px-[var(--page-gutter)] md:grid-cols-3">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} sizes="(min-width: 768px) 33vw, 50vw" fluid />
      ))}
    </div>
  );
}

export function GalleryTicker({ items }: GalleryTickerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(true);
  const firstRow = items.filter((_, index) => index % 2 === 0);
  const secondRow = items.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry?.isIntersecting),
      { rootMargin: '160px 0px', threshold: 0.05 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      <div className="gallery-motion flex flex-col gap-[var(--space-3)] md:gap-[var(--space-4)]">
        <GalleryRow items={firstRow} paused={paused} />
        <GalleryRow items={secondRow} reverse paused={paused} />
      </div>
      <GalleryGridFallback items={items} />
    </div>
  );
}
