'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
      _hp: fd.get('_hp') as string, // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Une erreur est survenue.');
        setStatus('error');
      } else {
        // Pas de reset() : AnimatePresence démonte le formulaire, les champs
        // non contrôlés repartent vides au remontage.
        setStatus('success');
      }
    } catch {
      setErrorMsg('Impossible de joindre le serveur. Vérifiez votre connexion.');
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <m.div
          key="success"
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-10 text-center"
        >
          <m.div
            className="text-4xl mb-4"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.12 }}
          >
            ✅
          </m.div>
          <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
          <p className="text-slate-300">
            Nous vous répondrons sous 24 h à l&apos;adresse indiquée.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm text-sky-400 hover:underline"
          >
            Envoyer un autre message
          </button>
        </m.div>
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          {/* Honeypot — invisible, les bots le remplissent */}
          <input
            type="text"
            name="_hp"
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Nom *
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jean Dupont"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/[0.08] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email *
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jean@exemple.fr"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/[0.08] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cf-subject" className="block text-sm font-medium text-slate-300 mb-1.5">
              Sujet
            </label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              autoComplete="off"
              defaultValue={defaultSubject}
              placeholder="Demande de démo, question sur une app…"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/[0.08] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="cf-message" className="block text-sm font-medium text-slate-300 mb-1.5">
              Message *
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={6}
              placeholder="Décrivez votre projet ou votre question…"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/[0.08] transition-colors resize-none"
            />
          </div>

          <AnimatePresence>
            {status === 'error' && (
              <m.p
                role="alert"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
              >
                {errorMsg}
              </m.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full text-white font-bold px-8 py-4 rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
          >
            {status === 'loading' && (
              <m.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin [animation-duration:650ms]"
              />
            )}
            {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message →'}
          </button>

          <p className="text-xs text-zinc-500 text-center">
            Aucune donnée transmise à des tiers. Réponse sous 24 h.
          </p>
        </m.form>
      )}
    </AnimatePresence>
  );
}
