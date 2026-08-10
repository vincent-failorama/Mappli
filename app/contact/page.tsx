import ContactForm from '../../components/ContactForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact — MAPPLI',
  description: "Contactez MAPPLI pour un projet d'application mobile ou web sur mesure.",
  robots: { index: true, follow: true },
  alternates: { canonical: '/contact' },
};

interface Props {
  searchParams: Promise<{ sujet?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const { sujet } = await searchParams;

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-10 transition-colors"
      >
        ← Retour à l&apos;accueil
      </Link>

      <div className="mb-10">
        <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Parlons de votre projet
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4">
          Nous contacter
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Une idée d&apos;application, une question sur nos outils ou une demande de démo ? Décrivez
          votre besoin, nous vous répondons sous 24 h.
        </p>
      </div>

      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
        <ContactForm defaultSubject={sujet ?? ''} />
      </div>
    </section>
  );
}
