import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Gestion locative : bail & EDL',
  description:
    "Politique de confidentialité de l'application Gestion locative — bail & EDL (Mappli).",
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

const Mail = () => (
  <a
    href="mailto:contact@mappli.fr"
    className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
  >
    contact@mappli.fr
  </a>
);

export default function PolitiqueConfidentialiteGestionLocativePage() {
  return (
    <main className="relative z-[2] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
            Légal
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Politique de confidentialité</h1>
          <p className="text-zinc-400 text-sm">
            Application <strong className="text-zinc-200">Gestion locative — bail &amp; EDL</strong>
          </p>
          <p className="text-zinc-600 text-xs mt-1">Dernière mise à jour : 10 juillet 2026</p>
        </div>

        <Section title="1. Responsable du traitement">
          <p>
            L'application <strong className="text-zinc-200">« Gestion locative — bail &amp; EDL »</strong>{' '}
            (ci-après « l'Application ») est éditée par{' '}
            <span className="text-zinc-300 font-medium">Vincent Morvezen</span>, personne physique,
            domicilié 14 rue de Canvel, 44420 La Turballe, France.
          </p>
          <p>
            Contact pour toute question relative aux données personnelles : <Mail />.
          </p>
        </Section>

        <Section title="2. Données que nous traitons">
          <p>
            L'Application permet à un propriétaire bailleur de gérer ses biens locatifs. Sont
            traitées :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-zinc-300 font-medium">Données de compte :</span> adresse e-mail,
              et selon votre mode de connexion, nom et identifiant fournis par Google (connexion
              Google).
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Profil bailleur :</span> nom, adresse,
              téléphone, e-mail.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Données des biens :</span> adresse,
              caractéristiques, informations financières (loyer, charges, dépôt de garantie, taxe
              foncière, valeur), diagnostics.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Données des locataires</span> (saisies par
              le bailleur) : nom, e-mail, téléphone, civilité.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Données financières de gestion :</span>{' '}
              loyers, paiements, dépenses.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Documents et photos</span> que vous
              importez : baux, états des lieux, quittances, pièces jointes d'incidents.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Incidents / tickets</span> de gestion
              locative.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Données d'usage :</span> événements
              techniques anonymisés (ex. création d'un bien, génération d'un bail) via Firebase
              Analytics, sans contenu personnel.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Achats :</span> historique des achats
              intégrés (crédits de bail). Les données de paiement (carte bancaire) sont traitées{' '}
              <strong className="text-zinc-200">exclusivement par Google Play</strong> ; nous n'y
              avons pas accès.
            </li>
          </ul>
          <p>
            L'Application <strong className="text-zinc-200">ne collecte pas</strong> votre position
            géographique précise, ni vos contacts, ni d'identifiants publicitaires.
          </p>
        </Section>

        <Section title="3. Finalités et bases légales (RGPD)">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-zinc-300 font-medium">Fournir le service</span> de gestion
              locative (comptes, biens, baux, quittances, EDL, finances, espace locataire) —{' '}
              <em>exécution du contrat</em>.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Générer les documents</span> (baux,
              quittances, états des lieux) — <em>exécution du contrat</em>.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Gérer les achats intégrés</span> et les
              crédits — <em>exécution du contrat</em>.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Sécuriser et améliorer l'Application</span>{' '}
              (statistiques d'usage agrégées, prévention des abus) — <em>intérêt légitime</em>.
            </li>
            <li>
              <span className="text-zinc-300 font-medium">Répondre à vos demandes</span> —{' '}
              <em>intérêt légitime</em>.
            </li>
          </ul>
        </Section>

        <Section title="4. Rôle concernant les données des locataires">
          <p>
            Lorsque vous saisissez les données d'un locataire, vous en êtes{' '}
            <strong className="text-zinc-200">responsable de traitement</strong> ; l'éditeur agit en{' '}
            <strong className="text-zinc-200">sous-traitant</strong> pour leur hébergement et leur
            traitement technique. Il vous appartient d'informer vos locataires et de disposer d'une
            base légale pour traiter leurs données.
          </p>
        </Section>

        <Section title="5. Hébergement et sous-traitants">
          <p>
            Les données sont hébergées et traitées via{' '}
            <strong className="text-zinc-200">Google Firebase / Google Cloud Platform</strong>{' '}
            (authentification, base de données Firestore, stockage de fichiers, fonctions serveur,
            Firebase Analytics). Les serveurs applicatifs (fonctions) sont situés dans l'
            <strong className="text-zinc-200">Union européenne</strong> (europe-west1). Certains
            services Google peuvent impliquer des transferts hors UE, encadrés par des{' '}
            <strong className="text-zinc-200">garanties appropriées</strong> (clauses contractuelles
            types).
          </p>
          <p>
            Les <strong className="text-zinc-200">achats intégrés</strong> sont traités par{' '}
            <strong className="text-zinc-200">Google Play (Google Ireland Ltd.)</strong>.
          </p>
          <p>Nous ne vendons ni ne louons vos données à des tiers.</p>
        </Section>

        <Section title="6. Durée de conservation">
          <p>
            Vos données sont conservées tant que votre compte est actif. À la{' '}
            <strong className="text-zinc-200">suppression de votre compte</strong>, vos données sont
            supprimées ou anonymisées dans un délai raisonnable, sous réserve des obligations légales
            de conservation (ex. comptables).
          </p>
        </Section>

        <Section title="7. Sécurité">
          <p>
            L'accès aux données est <strong className="text-zinc-200">cloisonné par utilisateur</strong>{' '}
            (règles de sécurité Firestore et Storage) : chaque bailleur n'accède qu'à ses propres
            données, et un locataire n'accède qu'à ce qui le concerne. Les transferts sont chiffrés
            (HTTPS/TLS). Les opérations sensibles sont exécutées côté serveur.
          </p>
        </Section>

        <Section title="8. Vos droits">
          <p>
            Conformément au RGPD, vous disposez des droits d'
            <strong className="text-zinc-200">accès, rectification, effacement, limitation,
            opposition et portabilité</strong>. Vous pouvez :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>gérer et supprimer vos données directement dans l'Application ;</li>
            <li>
              exercer vos droits en écrivant à <Mail />.
            </li>
          </ul>
          <p>
            Vous pouvez introduire une réclamation auprès de la{' '}
            <strong className="text-zinc-200">CNIL</strong> (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </Section>

        <Section title="9. Enfants">
          <p>
            L'Application s'adresse à des adultes (propriétaires bailleurs et locataires) et n'est
            pas destinée aux mineurs de moins de 15 ans.
          </p>
        </Section>

        <Section title="10. Modifications">
          <p>
            Cette politique peut être mise à jour. La date de dernière mise à jour figure en tête de
            document ; les changements importants seront signalés dans l'Application.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            <span className="text-zinc-300 font-medium">Vincent Morvezen</span> — <Mail /> — 14 rue
            de Canvel, 44420 La Turballe, France.
          </p>
        </Section>
      </div>
    </main>
  );
}
