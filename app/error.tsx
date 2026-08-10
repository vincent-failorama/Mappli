'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-4xl mb-8">
        ⚠️
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
        Oups, un problème est survenu
      </h2>
      <p className="text-slate-400 text-lg max-w-lg mb-10">
        Nous n&apos;avons pas pu charger cette page. Il peut s&apos;agir d&apos;une erreur de réseau
        ou d&apos;un problème temporaire sur nos serveurs.
      </p>
      <button
        onClick={() => reset()}
        className="btn-secondary bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-brand-400 transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
