'use client';

import { useRef, ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  /** Facteur d'amplitude du magnétisme (0.1 = très doux, 0.5 = fort) */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Amortissement critique (ζ = damping / 2√(stiffness·mass) ≈ 1) : un suivi de
  // curseur ne porte aucun momentum, un rebond y serait arbitraire.
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 28 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <m.div style={{ x, y }}>{children}</m.div>
    </div>
  );
}
