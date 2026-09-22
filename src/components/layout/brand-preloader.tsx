'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import { brand } from '@/data';

const STORAGE_KEY = 'preloader-shown';
const HOLD_MS = 1150;
const EXIT_MS = 520;

type Phase = 'hidden' | 'visible' | 'leaving';

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function BrandPreloader() {
  const [phase, setPhase] = useState<Phase>('hidden');

  useIsomorphicLayoutEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      alreadyShown = false;
    }

    if (alreadyShown) {
      document.documentElement.style.setProperty('--hero-delay-base', '0s');
      return;
    }

    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* armazenamento indisponível: segue exibindo a abertura */
    }

    setPhase('visible');
  }, []);

  useEffect(() => {
    if (phase === 'hidden') return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const toLeaving = window.setTimeout(() => setPhase('leaving'), HOLD_MS);
    const toHidden = window.setTimeout(() => setPhase('hidden'), HOLD_MS + EXIT_MS);

    return () => {
      window.clearTimeout(toLeaving);
      window.clearTimeout(toHidden);
      document.body.style.overflow = previousOverflow;
    };
  }, [phase !== 'hidden']);

  if (phase === 'hidden') return null;

  return (
    <div
      className="brand-preloader"
      data-state={phase}
      role="status"
      aria-live="polite"
      aria-label={brand.name}
    >
      <div className="brand-preloader__stage">
        <span aria-hidden="true" className="brand-preloader__glow" />
        <span aria-hidden="true" className="brand-preloader__ring" />
        <div className="relative grid place-items-center gap-[var(--space-4)]">
          <span className="grid size-16 place-items-center border border-[var(--brand-accent)] type-h3 font-bold text-[var(--brand-accent)]">
            {brand.shortName}
          </span>
          <span className="type-eyebrow text-[var(--text-secondary)]">{brand.name}</span>
        </div>
      </div>
    </div>
  );
}
