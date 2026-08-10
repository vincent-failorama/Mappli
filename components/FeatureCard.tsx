'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';

export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <m.div
      className="relative h-full"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -8 } }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* L'ombre vit sur son propre calque et c'est son opacité qui varie :
          animer `box-shadow` repeignait la carte à chaque frame. Le calque est
          hors du conteneur `card-hover-shimmer`, qui est en overflow: hidden. */}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_25px_50px_-12px_rgba(139,92,246,0.2)]"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="card-hover-shimmer relative h-full flex flex-col p-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
        {/* Icon */}
        <m.div
          className="text-4xl mb-6 self-start"
          variants={{
            rest: { scale: 1, x: 0, y: 0, rotate: 0 },
            hover: { scale: 1.2, x: 18, y: -4, rotate: 5 },
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 33 }}
        >
          {icon}
        </m.div>

        {/* Title */}
        <m.h3
          className="text-xl font-bold mb-3"
          variants={{
            rest: { color: '#ffffff' },
            hover: { color: '#38bdf8' },
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </m.h3>

        <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
      </div>
    </m.div>
  );
}
