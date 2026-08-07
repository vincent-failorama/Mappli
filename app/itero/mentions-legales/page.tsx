import type { Metadata } from 'next';

/**
 * SOURCE DE VÉRITÉ : `apps/mobile/src/legal/fr.ts` du dépôt Itero.ai (document
 * « mentions »). Cette page en est une transposition EXACTE, générée depuis ce
 * fichier — les fiches Play Store / App Store exigent des URL publiques, l'écran
 * in-app ne suffit pas. Toute modification doit être faite D'ABORD dans l'app, puis
 * reportée ici : deux versions divergentes seraient pires que pas de page du tout.
 *
 * NE PAS ÉDITER À LA MAIN — régénérer avec `pnpm legal:web` depuis Itero.ai.
 */
export const metadata: Metadata = {
  title: "Mentions légales — Itero.ai",
  description:
    "Mentions légales de l'application Itero.ai (Mappli) : éditeur, hébergeur, propriété intellectuelle, sources cartographiques et contenus générés par IA.",
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function MentionsLegalesIteroPage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Mentions légales</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">Itero.ai</strong> — conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : 2 août 2026</p>
        </div>

        <Section title="1. Éditeur de l'application">
          <p>Nom : Vincent Morvezen</p>
          <p>Adresse : 14 rue de Canvel, 44420 La Turballe, France</p>
          <p>Email : contact@mappli.fr</p>
          <p>Site web : https://mappli.fr</p>
          <p>Statut : éditeur non immatriculé. L&rsquo;application est diffusée gratuitement et ne donne lieu à aucune activité commerciale à ce jour. Les mentions d&rsquo;immatriculation (forme juridique, SIRET, RCS, TVA) seront ajoutées à l&rsquo;ouverture des ventes.</p>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>Vincent Morvezen</p>
          <p>contact@mappli.fr</p>
        </Section>

        <Section title="3. Hébergement">
          <p>Les traitements serveur de l&rsquo;application (génération des guides, compteurs d&rsquo;usage, caches techniques) sont hébergés par :</p>
          <p>Société : Google Ireland Limited (Firebase / Google Cloud Platform)</p>
          <p>Adresse : Gordon House, Barrow Street, Dublin 4, Irlande</p>
          <p>Cloud Functions : europe-west1 (Belgique) · Base de données : multi-région Europe (eur3)</p>
          <p>Les guides que vous générez et les PDF que vous exportez sont, eux, stockés sur votre appareil.</p>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>L&rsquo;application Itero.ai, son nom, son interface et ses visuels sont la propriété exclusive de l&rsquo;éditeur, sauf mention contraire. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite.</p>
          <p>Les guides générés vous sont destinés pour un usage personnel (voir les Conditions d&rsquo;utilisation).</p>
        </Section>

        <Section title="5. Données cartographiques et sources tierces">
          <p>Les fonds de carte et les données de lieux proviennent d&rsquo;OpenStreetMap : © les contributeurs OpenStreetMap, données disponibles sous licence ODbL (openstreetmap.org/copyright).</p>
          <p>Le géocodage des lieux s&rsquo;appuie sur le service Nominatim de la Fondation OpenStreetMap.</p>
        </Section>

        <Section title="6. Contenus générés par intelligence artificielle">
          <p>Les guides sont produits automatiquement par des modèles d&rsquo;intelligence artificielle. Ils peuvent contenir des informations inexactes, incomplètes ou périmées. Ils ne constituent ni un conseil professionnel, ni une garantie de disponibilité, d&rsquo;ouverture ou de prix. Voir le détail dans les Conditions d&rsquo;utilisation.</p>
        </Section>

        <Section title="7. Liens externes">
          <p>L&rsquo;application propose des liens vers des services tiers (cartographie, sites de lieux, offices de tourisme). L&rsquo;éditeur n&rsquo;exerce aucun contrôle sur ces contenus et décline toute responsabilité à leur égard.</p>
        </Section>

        <Section title="8. Contact">
          <p>Pour toute question relative à ces mentions : contact@mappli.fr</p>
        </Section>

        <p className="text-zinc-600 text-xs mt-12">
          Ce document est également consultable dans l&rsquo;application, écran «&nbsp;Informations
          légales&nbsp;», avec les deux autres.
        </p>
      </div>
    </main>
  );
}
