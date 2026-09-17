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
}

/** Minimum number of frames rendered per half-loop, so wide screens stay filled. */
const MIN_ITEMS_PER_HALF = 10;

export function GalleryItem({ item, sizes, fluid = false }: GalleryItemProps) {
  return (
    <div className={`${fluid ? '' : 'gallery-item'} overflow-hidden bg-[var(--surface)]`}>
      <FocalImage asset={item} aspectRatio="4 / 5" sizes={sizes} />
    </div>
  );
}

function fillSequence(items: MediaAsset[]) {
  if (items.length === 0) return items;
  const repeats = Math.ceil(MIN_ITEMS_PER_HALF / items.length);
  // rotate each repeat so neighbouring frames never show the same pair twice
  return Array.from({ length: repeats }, (_, block) =>
    items.map((_, index) => items[(index + block) % items.length]!),
  ).flat();
}

function GalleryRow({ items, reverse, paused }: { items: MediaAsset[]; reverse?: boolean; paused: boolean }) {
  // Presentation-layer duplication only: the real gallery data is untouched.
  const half = fillSequence(items);
  const repeated = [...half, ...half];

  return (
    <div className="gallery-viewport" aria-hidden="true">
      <div
        className="gallery-track"
        data-direction={reverse ? 'reverse' : 'forward'}
        data-paused={paused}
        style={{ ['--gallery-count' as string]: half.length }}
      >
        {repeated.map((item, index) => (
          <GalleryItem
            key={`${item.id}-${index}`}
            item={item}
            sizes="(min-width: 64rem) 17rem, (min-width: 48rem) 14rem, 11rem"
          />
        ))}
      </div>
    </div>
  );
}

export function GalleryGridFallback({ items }: GalleryTickerProps) {
  return (
    <div className="gallery-fallback mx-auto max-w-[var(--container-wide)] grid-cols-2 gap-[2px] px-[var(--page-gutter)] md:grid-cols-3">
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
      { rootMargin: '160px 0px', threshold: 0.01 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="gallery-bleed">
      <div className="gallery-motion flex flex-col gap-[2px]">
        <GalleryRow items={firstRow} paused={paused} />
        <GalleryRow items={secondRow} reverse paused={paused} />
      </div>
      <GalleryGridFallback items={items} />
    </div>
  );
}
