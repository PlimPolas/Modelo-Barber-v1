'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

/**
 * Global smooth/inertial scrolling. Renders nothing — layout is untouched.
 * Touch devices keep native scrolling (syncTouch: false).
 */
export function SmoothScroll() {
  useEffect(() => {
    // lerp controla a desaceleração: ~0.09 a 60fps ≈ 550-650ms de decaimento
    // exponencial perceptível após cada giro da roda.
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      syncTouch: false,
    });

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    const headerOffset = () => {
      const shell = document.querySelector('.landing-shell') ?? document.documentElement;
      const value = getComputedStyle(shell).getPropertyValue('--landing-header-height').trim();
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      if (value.endsWith('rem')) return parseFloat(value) * rem;
      if (value.endsWith('px')) return parseFloat(value);
      return 72;
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -headerOffset() - 16,
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      window.history.replaceState(null, '', hash);
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
