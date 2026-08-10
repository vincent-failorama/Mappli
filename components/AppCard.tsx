'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import {
  m,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue,
} from 'framer-motion';

const PLATFORM_COLORS: Record<string, string> = {
  iOS: 'bg-white/10 text-zinc-300',
  Android: 'bg-emerald-500/10 text-emerald-400',
  Web: 'bg-violet-500/10 text-violet-400',
  Windows: 'bg-sky-500/10 text-sky-400',
  Mobile: 'bg-emerald-500/10 text-emerald-400',
  SaaS: 'bg-violet-500/10 text-violet-400',
  'iOS bientôt': 'bg-white/5 text-zinc-500',
};

interface AppCardProps {
  /** Icône pré-rendue côté serveur — évite le passage d'une fonction RSC→Client */
  iconEl: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  platforms?: string[];
  href: string;
}

function useCardTilt() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 24,
  });
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 24,
  });
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 24,
  });

  return { mouseX, mouseY, rotateX, rotateY, glareX, glareY };
}

function GlareOverlay({
  glareX,
  glareY,
}: {
  glareX: MotionValue<number>;
  glareY: MotionValue<number>;
}) {
  const background = useTransform(
    [glareX, glareY] as MotionValue[],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.10) 0%, transparent 60%)`,
  );

  return (
    <m.div
      className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background }}
    />
  );
}

export default function AppCard({
  iconEl,
  name,
  tagline,
  description,
  platforms = [],
  href,
}: AppCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY, rotateX, rotateY, glareX, glareY } = useCardTilt();
  const iconAnim = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    iconAnim.start({
      scale: 1.2,
      x: 18,
      y: -4,
      rotate: 5,
      transition: { type: 'spring', stiffness: 280, damping: 33 },
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    iconAnim.start({
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: 'spring', stiffness: 280, damping: 33 },
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
      className="h-full"
    >
      <m.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative bg-white/[0.05] border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden
                   hover:border-white/25 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-violet-500/20
                   transition-colors duration-300 h-full"
      >
        {/* Glare overlay suit le curseur */}
        <GlareOverlay glareX={glareX} glareY={glareY} />

        {/* Gradient hover de fond — le dégradé est fixe et c'est l'opacité qui
            varie : les arrêts de `background-image` ne sont pas interpolables,
            l'ancien `transition-all` sur from-/to- ne produisait qu'un saut sec. */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/[0.08] to-violet-500/[0.06]
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <Link href={href} className="relative z-20 p-7 flex flex-col gap-4 h-full">
          <m.div className="text-5xl self-start" animate={iconAnim} initial={{ scale: 1, y: 0 }}>
            {iconEl}
          </m.div>

          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
              {name}
            </h3>
            <p className="text-zinc-400 text-sm mt-1 font-medium">{tagline}</p>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed flex-1">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {platforms.map((p) => (
                <span
                  key={p}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PLATFORM_COLORS[p] ?? 'bg-white/10 text-zinc-300'}`}
                >
                  {p}
                </span>
              ))}
            </div>
            <span className="text-sky-400 font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Découvrir →
            </span>
          </div>
        </Link>
      </m.div>
    </div>
  );
}
