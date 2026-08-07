import type { LegalDocument as LegalDocumentData } from '../app/data/legalDocs';

/**
 * Rendu d'un document légal (mentions légales, CGU) depuis `app/data/legalDocs.ts`.
 *
 * Même gabarit visuel que les pages légales déjà en ligne (politique de confidentialité
 * d'Itero.ai et de Gestion locative) : les stores comparent des textes, pas des mises en
 * page, et un gabarit unique évite qu'un document diverge des autres en apparence.
 */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function LegalDocument({ doc }: { doc: LegalDocumentData }) {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">{doc.title}</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">{doc.app}</strong>
            {doc.subtitle ? ` — ${doc.subtitle}` : ''}
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : {doc.updated}</p>
        </div>

        {doc.sections.map((section) => (
          <Section key={section.heading} title={section.heading}>
            {section.body?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.bullets && (
              <ul className="list-disc list-inside space-y-2">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </Section>
        ))}
      </div>
    </main>
  );
}
