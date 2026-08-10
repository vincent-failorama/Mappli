'use client';

import { useEffect, useState } from 'react';
import { m, useMotionValue, useSpring, animate } from 'framer-motion';

export default function CustomCursor() {
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setHasPointer(fine);
    if (!fine) return;
    // Signale à la CSS que le curseur de remplacement est en place — c'est ce
    // marqueur, et lui seul, qui masque le curseur natif.
    document.documentElement.dataset.customCursor = 'on';
    return () => {
      delete document.documentElement.dataset.customCursor;
    };
  }, []);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring : suit avec lag spring
  // Seul ressort du site qui était sur-amorti (ζ ≈ 1,29) : le ring traînait.
  const ringX = useSpring(dotX, { stiffness: 120, damping: 15, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 15, mass: 0.5 });

  const ringSize = useMotionValue(32);
  const ringOpacity = useMotionValue(0.5);
  const ringBorderColor = useMotionValue('rgba(255,255,255,0.5)');
  const ringBg = useMotionValue('transparent');

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [data-cursor="hover"]')) {
        animate(ringSize, 52, { duration: 0.2, ease: 'easeOut' });
        animate(ringBorderColor, 'rgba(56,189,248,0.85)', { duration: 0.2 });
        animate(ringBg, 'rgba(56,189,248,0.07)', { duration: 0.2 });
        animate(ringOpacity, 1, { duration: 0.2 });
      }
    };

    const onLeave = () => {
      animate(ringSize, 32, { duration: 0.2, ease: 'easeOut' });
      animate(ringBorderColor, 'rgba(255,255,255,0.5)', { duration: 0.2 });
      animate(ringBg, 'transparent', { duration: 0.2 });
      animate(ringOpacity, 0.5, { duration: 0.2 });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [dotX, dotY, ringSize, ringBorderColor, ringBg, ringOpacity]);

  if (!hasPointer) return null;

  return (
    <>
      {/* Dot central — suit le curseur sans lag */}
      <m.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Ring — suit avec lag spring */}
      <m.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: ringBorderColor,
          backgroundColor: ringBg,
          opacity: ringOpacity,
        }}
      />
    </>
  );
}
