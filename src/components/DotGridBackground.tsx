'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero dot-grid background with a cursor-following glow.
 * Dim dots by default; a soft cool-white radial glow brightens the dots
 * near the pointer (tracked via --mx/--my CSS vars). The only hero effect.
 * Decorative + disabled on touch / reduced-motion (see design.md).
 */
export default function DotGridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="io-dotgrid-wrap">
      <div className="io-dotgrid" />
      <div className="io-dotgrid-glow" />
    </div>
  );
}
