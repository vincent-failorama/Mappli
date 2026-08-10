'use client';

import Link from 'next/link';
import Image from 'next/image';
import { m, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`navbar fixed top-0 left-0 right-0 z-50 ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-inner max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="MAPPLI — Accueil">
            <Image
              src="/logo-mappli.png"
              alt="MAPPLI"
              width={300}
              height={64}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/#apps"
              className="nav-link-anim text-zinc-400 hover:text-white transition-colors"
            >
              Nos apps
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <FaTimes size={20} aria-hidden="true" />
            ) : (
              <FaBars size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu principal"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#020617]/96 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-10"
          >
            <nav className="flex flex-col items-center gap-8">
              <Link
                href="/#apps"
                className="text-2xl font-bold text-white hover:text-sky-400 transition-colors"
                onClick={closeMenu}
              >
                Nos apps
              </Link>
              <a
                href="/contact"
                className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-bold"
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
