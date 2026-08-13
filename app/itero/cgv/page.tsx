import type { Metadata } from 'next';

/**
 * SOURCE DE VÉRITÉ : `apps/mobile/src/legal/fr.ts` du dépôt Itero.ai (document
 * « sales »). Cette page en est une transposition EXACTE, générée depuis ce
 * fichier — les fiches Play Store / App Store exigent des URL publiques, l'écran
 * in-app ne suffit pas. Toute modification doit être faite D'ABORD dans l'app, puis
 * reportée ici : deux versions divergentes seraient pires que pas de page du tout.
 *
 * NE PAS ÉDITER À LA MAIN — régénérer avec `pnpm legal:web` depuis Itero.ai.
 */
export const metadata: Metadata = {
  title: "Conditions générales de vente — Itero.ai",
  description:
    "Conditions générales de vente de l'application Itero.ai (Mappli) : packs d'exports PDF, prix, paiement, livraison, droit de rétractation, remboursement et médiation.",
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function ConditionsVenteIteroPage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Conditions générales de vente</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">Itero.ai</strong> — applicables aux achats de packs d&rsquo;exports PDF
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : 2 août 2026</p>
        </div>

        <Section title="1. Vendeur">
          <p>Vincent Morvezen — 14 rue de Canvel, 44420 La Turballe, France</p>
          <p>Contact : contact@mappli.fr</p>
          <p>Immatriculation en cours ; le numéro d&rsquo;identification figurera ici dès son obtention et avant toute mise en vente effective.</p>
        </Section>

        <Section title="2. Produits">
          <p>L&rsquo;application propose à la vente des packs de crédits d&rsquo;export. Un crédit permet de produire une fois un guide de voyage au format PDF, dans sa version enrichie, sur le voyage de votre choix.</p>
          <p>Les crédits constituent un stock utilisable librement sur n&rsquo;importe quel voyage. Ils ne comportent pas de date d&rsquo;expiration. Ils sont personnels et ne peuvent être ni cédés, ni revendus, ni convertis en argent.</p>
          <p>La génération de guides et leur consultation à l&rsquo;écran restent gratuites et ne font l&rsquo;objet d&rsquo;aucune vente.</p>
        </Section>

        <Section title="3. Prix">
          <p>Les prix sont indiqués en euros, toutes taxes comprises, sur l&rsquo;écran d&rsquo;achat de l&rsquo;application. Le prix applicable est celui affiché au moment de la commande.</p>
          <p>L&rsquo;éditeur peut modifier ses prix à tout moment ; cette modification est sans effet sur les commandes déjà passées et sur les crédits déjà acquis.</p>
        </Section>

        <Section title="4. Commande et paiement">
          <p>La commande s&rsquo;effectue depuis l&rsquo;application. Le paiement est traité par Stripe Payments Europe Ltd. Aucune donnée bancaire ne transite par l&rsquo;application ni n&rsquo;est conservée par l&rsquo;éditeur.</p>
          <p>La vente est conclue lorsque le paiement est confirmé par le prestataire de paiement. Les crédits sont alors ajoutés automatiquement à votre compte, généralement en quelques secondes.</p>
          <p>Un justificatif d&rsquo;achat est émis par le prestataire de paiement à l&rsquo;adresse que vous lui communiquez lors du règlement.</p>
        </Section>

        <Section title="5. Livraison">
          <p>Le produit est entièrement numérique : la livraison consiste en l&rsquo;ajout des crédits à votre compte, immédiatement après confirmation du paiement. Aucun envoi physique n&rsquo;est effectué.</p>
          <p>En cas d&rsquo;échec technique lors de la production d&rsquo;un PDF, le crédit consommé est automatiquement recrédité sur votre compte.</p>
        </Section>

        <Section title="6. Droit de rétractation">
          <p>S&rsquo;agissant d&rsquo;un contenu numérique fourni sans support matériel, vous disposez en principe d&rsquo;un délai de rétractation de quatorze (14) jours à compter de la conclusion du contrat, conformément aux articles L. 221-18 et suivants du code de la consommation.</p>
          <p>Ce droit s&rsquo;éteint si vous demandez expressément l&rsquo;exécution immédiate de la prestation et reconnaissez perdre votre droit de rétractation. Ce consentement vous est demandé lors du paiement.</p>
          <p>À défaut d&rsquo;un tel consentement, vous pouvez exercer votre droit dans le délai de quatorze jours en écrivant à contact@mappli.fr. Le remboursement intervient alors dans les quatorze jours suivant la réception de votre demande, par le même moyen de paiement.</p>
        </Section>

        <Section title="7. Remboursement en cas de défaut">
          <p>Si un crédit est débité sans qu&rsquo;aucun PDF ne vous soit livré, et que le recréditement automatique n&rsquo;a pas eu lieu, écrivez à contact@mappli.fr : le crédit est rétabli ou remboursé.</p>
          <p>Le contenu des guides étant produit par des modèles d&rsquo;intelligence artificielle, son caractère subjectivement décevant ne constitue pas un défaut ouvrant droit à remboursement. L&rsquo;avertissement figurant dans les conditions d&rsquo;utilisation et à l&rsquo;écran s&rsquo;applique pleinement.</p>
        </Section>

        <Section title="8. Garanties légales">
          <p>Le consommateur bénéficie de la garantie légale de conformité des contenus et services numériques (articles L. 224-25-12 et suivants du code de la consommation), indépendamment de toute garantie commerciale.</p>
        </Section>

        <Section title="9. Réclamation et médiation">
          <p>Toute réclamation doit être adressée à contact@mappli.fr. Le compte pouvant être anonyme, joignez l&rsquo;identifiant technique affiché en bas de l&rsquo;écran des informations légales : sans lui, votre achat ne peut pas être retrouvé.</p>
          <p>À défaut de solution amiable, le consommateur peut recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur retenu seront indiquées ici avant la mise en vente effective.</p>
          <p>La plateforme européenne de règlement en ligne des litiges est accessible à l&rsquo;adresse ec.europa.eu/consumers/odr.</p>
        </Section>

        <Section title="10. Droit applicable">
          <p>Les présentes conditions sont soumises au droit français. Les dispositions impératives protégeant les consommateurs, notamment celles du pays de résidence de l&rsquo;acheteur au sein de l&rsquo;Union européenne, demeurent applicables.</p>
        </Section>

        <p className="text-zinc-600 text-xs mt-12">
          Ce document est également consultable dans l&rsquo;application, écran «&nbsp;Informations
          légales&nbsp;», avec les deux autres.
        </p>
      </div>
    </main>
  );
}
