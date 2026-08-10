'use client';

import { m, Variants } from 'framer-motion';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

const HIDDEN: Record<RevealVariant, Record<string, number>> = {
  up: { opacity: 0, y: 32 },
  left: { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
  scale: { opacity: 0, scale: 0.92 },
};

function makeItemVariants(variant: RevealVariant): Variants {
  return {
    hidden: HIDDEN[variant],
    visible: (delayMs: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: variant === 'scale' ? 0.45 : 0.5,
        delay: delayMs / 1000,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/**
 * Enfant de StaggerContainer. Il ne porte NI `initial` NI `whileInView` : c'est
 * ce qui lui permet d'hériter de l'état du parent et donc d'être échelonné.
 *
 * Utiliser `ScrollReveal` à l'intérieur d'un `StaggerContainer` ne produit aucun
 * stagger — l'enfant déclare son propre `whileInView`, écrase l'héritage et se
 * déclenche sur sa propre entrée dans le viewport, indépendamment du groupe.
 */
function makeStaggerItemVariants(variant: RevealVariant): Variants {
  return {
    hidden: HIDDEN[variant],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

export function StaggerItem({
  children,
  className = '',
  variant = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <m.div className={className} variants={makeStaggerItemVariants(variant)}>
      {children}
    </m.div>
  );
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={staggerVariants}
    >
      {children}
    </m.div>
  );
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={makeItemVariants(variant)}
      custom={delay}
    >
      {children}
    </m.div>
  );
}
