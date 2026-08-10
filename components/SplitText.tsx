'use client';

import { m, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Uniquement `transform` et `opacity`. Les versions précédentes partaient de
 * `rotateX: 90` — surface visible nulle, le caractère venait de nulle part — et
 * animaient `filter: blur()`, qui n'est pas composité : sur les ~26 nœuds d'un
 * titre, au chargement, c'était la principale source de frames perdues.
 */
const normalVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (custom: { i: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: custom.delay + custom.i * 0.02,
    },
  }),
};

// Gradient text : pas de rotateX, il casserait background-clip:text
const gradientVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: { i: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      // ζ = damping / 2√stiffness ≈ 1,0 : cohérent avec les autres ressorts du site
      type: 'spring',
      stiffness: 340,
      damping: 37,
      delay: custom.delay + custom.i * 0.04,
    },
  }),
};

export default function SplitText({
  text,
  className = '',
  delay = 0,
  gradient = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  const chars = text.split('');
  const variants = gradient ? gradientVariants : normalVariants;

  let charIdx = 0;

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {chars.map((char, i) => {
        if (char === ' ') {
          return (
            <span key={i} aria-hidden="true" style={{ display: 'inline-block', width: '0.3em' }} />
          );
        }

        const idx = charIdx++;

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{ display: 'inline-flex', verticalAlign: 'bottom' }}
          >
            <m.span
              className={gradient ? 'gradient-text' : ''}
              style={{ display: 'inline-block' }}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={{ i: idx, delay }}
            >
              {char}
            </m.span>
          </span>
        );
      })}
    </span>
  );
}
