'use client';

import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function BokehParticles() {
  const { loaded } = useParticlesProvider();

  if (!loaded) return null;

  return (
    <Particles
      id="bokeh"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: {
            value: ['#0ea5e9', '#8b5cf6', '#6366f1', '#14b8a6'],
          },
          opacity: {
            value: { min: 0.05, max: 0.2 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 40, max: 120 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          blur: 80,
        },
        detectRetina: true,
      }}
    />
  );
}

export default function BokehBackground() {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <BokehParticles />
    </ParticlesProvider>
  );
}
