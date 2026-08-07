import Link from 'next/link';
import { FaBalanceScale, FaUserShield, FaFileContract } from 'react-icons/fa';
import { LEGAL_LINKS } from '../app/data/legalDocs';

/**
 * Section « Informations légales » d'une page d'app : les trois URL publiques exigées
 * avant publication sur les stores — politique de confidentialité (Play et App Store),
 * conditions d'utilisation (Play dès qu'un achat intégré existe, App Store comme lien
 * EULA) et mentions légales (LCEN).
 *
 * Réservée aux apps distribuées sur les stores : Signalis et Planificateur de Garde
 * n'y figurent pas.
 */
interface LegalLinksProps {
  app: keyof typeof LEGAL_LINKS;
  /** Descriptions courtes, propres à l'app : ce que le lecteur trouvera dans chaque document. */
  descriptions: { mentions: string; privacy: string; terms: string };
  /** Phrase de contexte sous les cartes (achats à venir, version faisant foi…). */
  note?: React.ReactNode;
}

export default function LegalLinks({ app, descriptions, note }: LegalLinksProps) {
  const href = LEGAL_LINKS[app];
  const docs = [
    {
      href: href.mentions,
      icon: FaBalanceScale,
      title: 'Mentions légales',
      desc: descriptions.mentions,
    },
    {
      href: href.privacy,
      icon: FaUserShield,
      title: 'Politique de confidentialité',
      desc: descriptions.privacy,
    },
    {
      href: href.terms,
      icon: FaFileContract,
      title: "Conditions d'utilisation",
      desc: descriptions.terms,
    },
  ];

  return (
    <section id="legal" className="scroll-mt-24 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h2 className="text-3xl font-bold text-white mb-3">Informations légales</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Les trois documents applicables à l&apos;application, dans leur version en vigueur. Ce
            sont les URL publiques référencées sur les fiches Google Play et App Store.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {docs.map(({ href: to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              href={to}
              className="group bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-colors flex flex-col gap-3"
            >
              <Icon aria-hidden="true" className="text-3xl text-sky-400" />
              <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
              <span className="text-sky-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Lire →
              </span>
            </Link>
          ))}
        </div>
        {note && (
          <p className="text-slate-500 text-sm mt-8 text-center max-w-2xl mx-auto">{note}</p>
        )}
      </div>
    </section>
  );
}
