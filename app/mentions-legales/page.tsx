import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — MAPPLI',
  description: 'Mentions légales du site MAPPLI.fr',
  robots: { index: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

/**
 * Aucune immatriculation à ce jour : ni SIRET, ni RCS, ni TVA. Ne pas écrire « en cours »
 * — ce serait annoncer une démarche engagée. Ces mentions deviennent obligatoires dès la
 * première vente, en même temps que des CGV.
 */
const NonImmatricule = () => (
  <span className="text-zinc-500 italic">sans objet — éditeur non immatriculé</span>
);

export default function MentionsLegalesPage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Mentions légales</h1>
          <p className="text-zinc-500 text-sm">Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)</p>
        </div>

        <Section title="1. Éditeur du site">
          <p><span className="text-zinc-300 font-medium">Nom :</span> Vincent Morvezen</p>
          <p><span className="text-zinc-300 font-medium">Adresse :</span> 14 rue de Canvel, 44420 La Turballe, France</p>
          <p><span className="text-zinc-300 font-medium">Email :</span> contact@mappli.fr</p>
          <p><span className="text-zinc-300 font-medium">Site web :</span> https://mappli.fr</p>
          <p><span className="text-zinc-300 font-medium">Forme juridique :</span> <NonImmatricule /></p>
          <p><span className="text-zinc-300 font-medium">SIRET :</span> <NonImmatricule /></p>
          <p><span className="text-zinc-300 font-medium">RCS :</span> <NonImmatricule /></p>
          <p><span className="text-zinc-300 font-medium">N° TVA intracommunautaire :</span> <NonImmatricule /></p>
          <p className="pt-2">
            L&rsquo;éditeur n&rsquo;exerce aucune activité commerciale à ce jour : les applications
            sont diffusées gratuitement et aucune vente n&rsquo;est réalisée. Les mentions
            d&rsquo;immatriculation seront ajoutées à l&rsquo;ouverture des ventes.
          </p>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>Vincent Morvezen</p>
          <p>contact@mappli.fr</p>
        </Section>

        <Section title="3. Hébergeur">
          <p><span className="text-zinc-300 font-medium">Société :</span> Vercel Inc.</p>
          <p><span className="text-zinc-300 font-medium">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
          <p><span className="text-zinc-300 font-medium">Site web :</span> https://vercel.com</p>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, images, logos, visuels) est la propriété exclusive
            de Vincent Morvezen, sauf mention contraire. Toute reproduction, distribution ou utilisation
            sans autorisation écrite préalable est interdite.
          </p>
        </Section>

        <Section title="5. Données personnelles & RGPD">
          <p>
            Les données collectées via le formulaire de contact (nom, email, message) sont utilisées
            uniquement pour répondre aux demandes des utilisateurs. Elles ne sont ni revendues,
            ni transmises à des tiers.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces
            droits : contact@mappli.fr
          </p>
          <p>
            Les applications ont chacune leurs propres documents légaux — les traitements diffèrent
            d&rsquo;une app à l&rsquo;autre. Ils sont accessibles depuis la page de chaque
            application, section «&nbsp;Informations légales&nbsp;» :{' '}
            <a href="/apps/itero#legal" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              Itero.ai
            </a>
            ,{' '}
            <a href="/apps/gestion-locative#legal" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              Gestion locative
            </a>
            ,{' '}
            <a href="/apps/bilan-secouriste#legal" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              Bilan Secouriste
            </a>
            ,{' '}
            <a href="/apps/sports-controls#legal" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              Sports Controls
            </a>
            .
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Aucun cookie tiers n'est
            déposé sans votre consentement explicite.
          </p>
        </Section>

        <Section title="7. Liens hypertextes">
          <p>
            MAPPLI décline toute responsabilité concernant le contenu des sites externes vers lesquels
            des liens peuvent pointer.
          </p>
        </Section>

        <p className="text-zinc-600 text-xs mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </main>
  );
}
