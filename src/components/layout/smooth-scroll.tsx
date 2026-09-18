'use client';

import { useEffect } from 'react';

/**
 * Desktop wheel inertia. Touch devices keep native scrolling.
 */
export function SmoothScroll() {
  useEffect(() => {
    const desktopPointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
    if (!desktopPointer.matches) return;

    const SMOOTHING = 0.08;
    const STOP_THRESHOLD = 0.5;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let frame: number | null = null;
    let isAnimating = false;

    document.documentElement.classList.add('custom-wheel-scroll');

    const maximumScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const clampTarget = (value: number) => Math.min(maximumScroll(), Math.max(0, value));

    const animateScroll = () => {
      isAnimating = true;
      currentScroll += (targetScroll - currentScroll) * SMOOTHING;

      if (Math.abs(targetScroll - currentScroll) < STOP_THRESHOLD) {
        currentScroll = targetScroll;
        window.scrollTo({ top: currentScroll, left: 0, behavior: 'instant' as ScrollBehavior });
        frame = null;
        isAnimating = false;
        return;
      }

      window.scrollTo({ top: currentScroll, left: 0, behavior: 'instant' as ScrollBehavior });
      frame = requestAnimationFrame(animateScroll);
    };

    const startAnimation = () => {
      if (frame === null) frame = requestAnimationFrame(animateScroll);
    };

    const normalizeWheelDelta = (event: WheelEvent) => {
      if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
      if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
      return event.deltaY;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      event.preventDefault();
      targetScroll = clampTarget(targetScroll + normalizeWheelDelta(event));
      startAnimation();
    };

    const onNativeScroll = () => {
      if (isAnimating) return;
      currentScroll = window.scrollY;
      targetScroll = window.scrollY;
    };

    const onResize = () => {
      targetScroll = clampTarget(targetScroll);
      currentScroll = Math.min(currentScroll, maximumScroll());
    };

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
      targetScroll = clampTarget(
        window.scrollY + target.getBoundingClientRect().top - headerOffset() - 16,
      );
      startAnimation();
      window.history.replaceState(null, '', hash);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onNativeScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onNativeScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('click', onClick);
      if (frame !== null) cancelAnimationFrame(frame);
      document.documentElement.classList.remove('custom-wheel-scroll');
    };
  }, []);

  return null;
}
