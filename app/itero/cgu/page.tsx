import type { Metadata } from 'next';

/**
 * SOURCE DE VÉRITÉ : `apps/mobile/src/legal/fr.ts` du dépôt Itero.ai (document
 * « terms »). Cette page en est une transposition EXACTE, générée depuis ce
 * fichier — les fiches Play Store / App Store exigent des URL publiques, l'écran
 * in-app ne suffit pas. Toute modification doit être faite D'ABORD dans l'app, puis
 * reportée ici : deux versions divergentes seraient pires que pas de page du tout.
 *
 * NE PAS ÉDITER À LA MAIN — régénérer avec `pnpm legal:web` depuis Itero.ai.
 */
export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Itero.ai",
  description:
    "Conditions générales d'utilisation de l'application Itero.ai (Mappli) : contenus générés par IA, quotas, exports PDF, usage autorisé et responsabilité.",
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function ConditionsUtilisationIteroPage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Conditions générales d&rsquo;utilisation</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">Itero.ai</strong>
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : 2 août 2026</p>
        </div>

        <Section title="1. Objet">
          <p>Les présentes conditions régissent l&rsquo;utilisation de l&rsquo;application Itero.ai, qui génère des guides de voyage personnalisés à l&rsquo;aide de modèles d&rsquo;intelligence artificielle. L&rsquo;utilisation de l&rsquo;application vaut acceptation de ces conditions.</p>
        </Section>

        <Section title="2. Avertissement essentiel sur les contenus générés">
          <p>Les guides sont produits automatiquement. Les horaires, tarifs, jours d&rsquo;ouverture, conditions d&rsquo;accès, distances et recommandations peuvent être inexacts, incomplets ou périmés, et certains lieux cités peuvent avoir fermé ou changé.</p>
          <p>Vérifiez systématiquement auprès des sources officielles ou des établissements concernés avant de vous déplacer, de réserver ou d&rsquo;engager une dépense.</p>
          <p>Les contenus ne constituent ni un conseil médical, ni un conseil juridique, ni une information officielle sur les formalités d&rsquo;entrée, la sécurité ou la santé. Pour ces sujets, référez-vous aux autorités compétentes (ministère des Affaires étrangères, ambassades et consulats). Les numéros d&rsquo;urgence affichés sont fournis à titre indicatif et doivent être vérifiés sur place.</p>
          <p>Vous restez seul responsable de vos décisions de voyage.</p>
        </Section>

        <Section title="3. Compte et accès">
          <p>L&rsquo;accès se fait via un identifiant anonyme lié à votre appareil, sans mot de passe. En conséquence, la perte, la réinitialisation ou le changement d&rsquo;appareil, ainsi que la désinstallation de l&rsquo;application, entraînent la perte des quotas et des crédits d&rsquo;export associés. Ceux-ci ne peuvent pas être transférés d&rsquo;un appareil à l&rsquo;autre.</p>
        </Section>

        <Section title="4. Palier gratuit et quotas">
          <p>La génération de guides est gratuite dans la limite d&rsquo;un quota mensuel, affiché dans l&rsquo;application lorsqu&rsquo;il est atteint. Ces limites peuvent être ajustées afin de préserver la disponibilité du service.</p>
        </Section>

        <Section title="5. Offre de lancement (exports offerts)">
          <p>Une offre temporaire accorde 12 exports PDF offerts par utilisateur, valables jusqu&rsquo;au 2026-12-31. Ces exports sont consommés avant tout crédit acheté.</p>
          <p>Ils sont personnels, sans valeur marchande, non cessibles et non remboursables. L&rsquo;éditeur peut modifier ou clore l&rsquo;offre à tout moment.</p>
        </Section>

        <Section title="6. Achats">
          <p>Les packs d&rsquo;exports payants ne sont pas encore disponibles à la vente. Les conditions générales de vente qui les régiront (prix, exécution, droit de rétractation, remboursement, médiation de la consommation) figurent ci-après et vous seront rappelées avant tout paiement.</p>
        </Section>

        <Section title="7. Usage autorisé">
          <p>L&rsquo;application est réservée à un usage personnel et non commercial. Sont notamment interdits : la revente ou la rediffusion des guides générés, l&rsquo;accès automatisé au service, et toute tentative de contournement des quotas ou des mécanismes de sécurité.</p>
          <p>En cas d&rsquo;usage abusif, l&rsquo;accès peut être suspendu sans préavis.</p>
        </Section>

        <Section title="8. Disponibilité">
          <p>Le service est fourni « en l&rsquo;état », sans garantie de disponibilité continue. Il dépend de prestataires tiers (fournisseurs de modèles d&rsquo;IA, services cartographiques) dont l&rsquo;indisponibilité peut empêcher temporairement la génération d&rsquo;un guide ou d&rsquo;un export.</p>
        </Section>

        <Section title="9. Responsabilité">
          <p>Dans la limite permise par la loi, la responsabilité de l&rsquo;éditeur ne saurait être engagée pour les dommages résultant de l&rsquo;utilisation des contenus générés, notamment les frais engagés sur la foi d&rsquo;une information inexacte. Les dispositions impératives protégeant les consommateurs restent applicables.</p>
        </Section>

        <Section title="10. Droit applicable">
          <p>Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité en écrivant à contact@mappli.fr.</p>
        </Section>

        <p className="text-zinc-600 text-xs mt-12">
          Ce document est également consultable dans l&rsquo;application, écran «&nbsp;Informations
          légales&nbsp;», avec les deux autres.
        </p>
      </div>
    </main>
  );
}
