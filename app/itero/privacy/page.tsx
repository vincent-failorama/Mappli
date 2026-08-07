import type { Metadata } from 'next';

/**
 * SOURCE DE VÉRITÉ : `apps/mobile/src/legal/fr.ts` du dépôt Itero.ai (document
 * « privacy »). Cette page en est une transposition EXACTE, générée depuis ce
 * fichier — les fiches Play Store / App Store exigent des URL publiques, l'écran
 * in-app ne suffit pas. Toute modification doit être faite D'ABORD dans l'app, puis
 * reportée ici : deux versions divergentes seraient pires que pas de page du tout.
 *
 * NE PAS ÉDITER À LA MAIN — régénérer avec `pnpm legal:web` depuis Itero.ai.
 */
export const metadata: Metadata = {
  title: "Politique de confidentialité — Itero.ai",
  description:
    "Politique de confidentialité de l'application Itero.ai (Mappli) : données traitées, sous-traitants, transferts hors UE et droits RGPD.",
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PolitiqueConfidentialiteIteroPage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Politique de confidentialité</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">Itero.ai</strong> — traitement des données personnelles (RGPD)
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : 2 août 2026</p>
        </div>

        <Section title="1. Responsable du traitement">
          <p>Vincent Morvezen — 14 rue de Canvel, 44420 La Turballe, France</p>
          <p>Contact : contact@mappli.fr</p>
        </Section>

        <Section title="2. Le principe">
          <p>Itero.ai fonctionne sans compte : ni nom, ni adresse email, ni mot de passe ne vous sont demandés. Aucune donnée n&rsquo;est vendue, louée ou transmise à des fins publicitaires. Aucun traceur publicitaire ni outil de mesure d&rsquo;audience tiers n&rsquo;est intégré.</p>
        </Section>

        <Section title="3. Données traitées">
          <p>L&rsquo;application ne collecte aucune donnée de localisation, aucun contact, aucune photo et aucun identifiant publicitaire.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Identifiant technique anonyme : à la première ouverture, un identifiant est généré automatiquement (connexion anonyme Firebase). Il ne contient aucune information sur vous et sert uniquement à rattacher vos quotas d&rsquo;usage à votre appareil.</li>
            <li>Informations de votre formulaire de voyage : destination, dates, composition du groupe (nombre d&rsquo;adultes et d&rsquo;enfants, âge des enfants), style de voyage, budget, véhicule, activités souhaitées, contraintes et nationalité si vous la renseignez. Elles sont transmises à un fournisseur de modèle d&rsquo;IA pour produire le guide.</li>
            <li>Compteurs d&rsquo;usage : nombre de guides générés dans le mois, exports restants, nombre de ré-optimisations. Ils servent à faire respecter les quotas et à prévenir les abus.</li>
            <li>Statistiques techniques : modèle utilisé, langue du contenu, nombre de jetons consommés et coût estimé. Elles sont enregistrées SANS identifiant utilisateur et ne permettent pas de vous réidentifier.</li>
          </ul>
        </Section>

        <Section title="4. Attention au champ « contraintes »">
          <p>Le champ libre des contraintes est envoyé tel quel au modèle d&rsquo;IA. Vous pouvez y indiquer un régime alimentaire ou une difficulté de mobilité si vous souhaitez un guide adapté — mais n&rsquo;y saisissez aucune information de santé précise ou sensible dont vous ne souhaiteriez pas qu&rsquo;elle soit transmise à un prestataire tiers.</p>
        </Section>

        <Section title="5. Ce qui reste sur votre appareil">
          <p>Vos guides générés et vos PDF exportés sont enregistrés localement, sur votre téléphone. Ils ne sont pas sauvegardés sur nos serveurs. Désinstaller l&rsquo;application les supprime définitivement.</p>
        </Section>

        <Section title="6. Destinataires et sous-traitants">
          <ul className="list-disc list-inside space-y-2">
            <li>Google (Firebase Authentication, Firestore, Cloud Functions) — hébergement et exécution. Cloud Functions : europe-west1 (Belgique) · Base de données : multi-région Europe (eur3).</li>
            <li>Fournisseurs de modèles d&rsquo;IA : Google (AI Studio) et OpenRouter. Les informations de votre formulaire leur sont transmises pour produire le guide.</li>
            <li>Fondation OpenStreetMap (Nominatim) : la destination et les noms de lieux sont envoyés pour obtenir leurs coordonnées.</li>
            <li>Stripe : uniquement lorsque le paiement sera activé, pour traiter les achats. Aucune donnée bancaire ne transite ni n&rsquo;est stockée par l&rsquo;application.</li>
          </ul>
        </Section>

        <Section title="7. Transferts hors Union européenne">
          <p>OpenRouter est établi aux États-Unis : les données de formulaire nécessaires à la génération peuvent y être transférées, dans le cadre des garanties prévues par le RGPD (clauses contractuelles types). L&rsquo;hébergement et la base de données restent, eux, en Europe.</p>
        </Section>

        <Section title="8. Durée de conservation">
          <p>Aucune purge automatique n&rsquo;est en place à ce jour ; toute demande de suppression est traitée manuellement à réception.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Guides et PDF : sur votre appareil, jusqu&rsquo;à ce que vous les supprimiez.</li>
            <li>Compteurs d&rsquo;usage : conservés tant que l&rsquo;application est utilisée.</li>
            <li>Cache technique du contenu généré : conservé pour éviter de regénérer un contenu identique. Il n&rsquo;est pas rattaché à votre identifiant.</li>
          </ul>
        </Section>

        <Section title="9. Sécurité">
          <p>Les échanges avec les serveurs sont chiffrés (HTTPS/TLS). Les règles d&rsquo;accès à la base filtrent systématiquement par identifiant : vous ne pouvez lire que vos propres données. Les clés d&rsquo;accès aux services d&rsquo;IA ne figurent jamais dans l&rsquo;application installée sur votre téléphone — elles restent côté serveur.</p>
        </Section>

        <Section title="10. Vos droits">
          <p>Vous disposez d&rsquo;un droit d&rsquo;accès, de rectification, d&rsquo;effacement, de limitation, d&rsquo;opposition et de portabilité sur vos données.</p>
          <p>Pour les exercer : contact@mappli.fr. Comme le compte est anonyme, joignez l&rsquo;identifiant technique affiché en bas de cet écran, sans lequel vos données ne peuvent pas être retrouvées.</p>
          <p>Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
        </Section>

        <Section title="11. Mineurs">
          <p>L&rsquo;application n&rsquo;est pas destinée aux enfants. L&rsquo;âge des enfants éventuellement saisi dans le formulaire l&rsquo;est par l&rsquo;adulte qui prépare le voyage et sert uniquement à adapter le rythme des suggestions.</p>
        </Section>

        <Section title="12. Modification">
          <p>Cette politique peut évoluer avec l&rsquo;application. La date de dernière mise à jour figure en bas de cet écran.</p>
        </Section>

        <p className="text-zinc-600 text-xs mt-12">
          Ce document est également consultable dans l&rsquo;application, écran «&nbsp;Informations
          légales&nbsp;», avec les deux autres.
        </p>
      </div>
    </main>
  );
}
