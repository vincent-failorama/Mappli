'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

/**
 * Charge le sous-ensemble `domAnimation` de Framer Motion (animations, variants,
 * exit, gestes tap/hover/focus et `whileInView`) au lieu du bundle complet.
 * Les composants animés du site utilisent donc `m.*` et non `motion.*` :
 * `strict` fait échouer en développement tout usage de `motion.*` qui
 * réintroduirait la bibliothèque entière dans le bundle.
 *
 * Aucun `drag` ni animation de layout dans le projet — `domMax` serait inutile.
 *
 * `MotionConfig reducedMotion="user"` neutralise les animations de position et de
 * scale quand le système demande moins de mouvement, en conservant les fondus.
 * La règle `prefers-reduced-motion` de globals.css ne couvre que le CSS : elle
 * n'atteint pas les animations pilotées en JS par Framer.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
