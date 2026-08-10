'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, m } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface LightboxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-inherit"
        aria-label={`Agrandir : ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none font-light transition-colors"
              aria-label="Fermer"
            >
              ✕
            </button>
            {/* Entrée et sortie empruntent le même chemin : scale 0.94 ↔ 1 */}
            <m.div
              className="relative max-w-[95vw] max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              <Image
                src={src}
                alt={alt}
                width={width * 3}
                height={height * 3}
                onClick={close}
                className="rounded-xl shadow-2xl object-contain max-w-[95vw] max-h-[90vh] w-auto h-auto cursor-zoom-out"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
