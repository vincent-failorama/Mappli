'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function parseStatValue(raw: string): { prefix: string; num: number; suffix: string } {
  const match = /^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/.exec(raw);
  if (!match) return { prefix: '', num: 0, suffix: raw };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export default function StatCounter({ value, label }: { value: string; label: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { prefix, num, suffix } = parseStatValue(value);
  const [count, setCount] = useState(num);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setCount(num);
      return;
    }

    // 900 ms et non 1800 : avec l'ease-out expo ci-dessous, 97 % de la valeur
    // finale est atteinte à mi-parcours (à p = 0.5, 1 − 2^−5 ≈ 0,969). Les
    // 900 ms supplémentaires n'étaient qu'une reptation invisible.
    const duration = 900;
    const start = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const progress = Math.min((t - start) / duration, 1);
      // ease-out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * num));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(num);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num, prefersReducedMotion]);

  return (
    <div ref={ref}>
      <div className="text-4xl sm:text-5xl font-black gradient-text mb-3">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-zinc-400 text-sm font-medium">{label}</div>
    </div>
  );
}
