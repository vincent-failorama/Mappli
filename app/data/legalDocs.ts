/**
 * Textes légaux des applications — SOURCE UNIQUE pour le site.
 *
 * Pourquoi ce fichier existe : Google Play et l'App Store exigent, avant publication,
 * des URL publiques pour la politique de confidentialité ET pour les conditions
 * d'utilisation (l'App Store applique son EULA standard à défaut de lien). Les mentions
 * légales sont dues au titre de la LCEN. Ces documents ne peuvent pas vivre uniquement
 * dans les apps : ils doivent être lisibles AVANT installation.
 *
 * ⚠️ Deux exceptions volontaires :
 *   - Itero.ai — ses trois pages sont GÉNÉRÉES depuis son propre dépôt
 *     (`pnpm legal:web`), la source de vérité étant `apps/mobile/src/legal/fr.ts`.
 *     Ne pas les rapatrier ici : elles doivent rester identiques au texte in-app.
 *   - Signalis et Planificateur de Garde — hors stores, donc hors de ce fichier.
 *
 * ⚠️ Textes rédigés d'après le fonctionnement RÉEL de chaque app (repris des politiques
 * de confidentialité déjà publiées et, pour Bilan Secouriste, de son écran « Mentions
 * légales » embarqué). Ils n'ont pas été relus par un juriste.
 *
 * ⚠️ Immatriculation ENGAGÉE, prévue pour septembre 2026, et aucun encaissement branché à
 * ce jour : les textes disent « immatriculation en cours » et « aucune vente ». Dès
 * réception, renseigner ici forme juridique, SIRET, RCS et TVA — ces mentions sont
 * obligatoires avant la première vente, en même temps que des CGV distinctes.
 */

export interface LegalSection {
  heading: string;
  body?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  /** Nom de l'application, affiché sous le titre. */
  app: string;
  title: string;
  subtitle?: string;
  /** Date de dernière mise à jour, en toutes lettres. */
  updated: string;
  sections: LegalSection[];
}

export const IDENTITY = {
  editor: 'Vincent Morvezen',
  address: '14 rue de Canvel, 44420 La Turballe, France',
  email: 'contact@mappli.fr',
  site: 'https://mappli.fr',
} as const;

const UPDATED = '7 août 2026';

/** Statut de l'éditeur — identique dans les trois documents, à mettre à jour dès l'obtention des numéros. */
const STATUT_EDITEUR =
  "Immatriculation : en cours. Dans l'attente, l'application est diffusée gratuitement et ne donne lieu à aucune vente. La forme juridique, le SIRET, le RCS et le numéro de TVA seront renseignés dès leur obtention, avant toute ouverture des ventes.";

const EDITEUR_BULLETS = [
  `Nom : ${IDENTITY.editor}`,
  `Adresse : ${IDENTITY.address}`,
  `Email : ${IDENTITY.email}`,
  `Site web : ${IDENTITY.site}`,
];

/** Section « Achats » commune : rien n'est vendu aujourd'hui, et les CGV manquent. */
const sectionAchats = (numero: number, precision: string): LegalSection => ({
  heading: `${numero}. Achats`,
  body: [
    precision,
    "Des conditions générales de vente distinctes (prix, modalités d'exécution, droit de rétractation, remboursement et médiation de la consommation) seront publiées et portées à votre connaissance avant tout paiement.",
  ],
});

/* -------------------------------------------------------------------------- */
/*  Bilan Secouriste — 100 % hors-ligne, aucun serveur, données médicales      */
/* -------------------------------------------------------------------------- */

const bilanSecouristeMentions: LegalDocument = {
  app: 'Bilan Secouriste',
  title: 'Mentions légales',
  subtitle: 'Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)',
  updated: UPDATED,
  sections: [
    {
      heading: "1. Éditeur de l'application",
      bullets: [...EDITEUR_BULLETS, STATUT_EDITEUR],
    },
    {
      heading: '2. Directeur de la publication',
      body: [`${IDENTITY.editor} — ${IDENTITY.email}`],
    },
    {
      heading: '3. Hébergement des données',
      body: [
        "Aucune donnée n'est hébergée sur un serveur distant. Les bilans, constantes, photos et notes sont enregistrés uniquement sur votre appareil, et ne le quittent que sur action explicite de partage ou d'export de votre part.",
        "L'application est distribuée via Google Play. Cette page est publiée sur le site mappli.fr, hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis).",
      ],
    },
    {
      heading: '4. Avertissement sur le contenu',
      body: [
        "Application à usage pédagogique et d'aide opérationnelle. Elle ne remplace ni les protocoles officiels, ni la formation, ni le jugement du secouriste. Les arbres de décision s'inspirent des protocoles du SDIS 44 (Loire-Atlantique) et n'engagent pas ce service.",
        "L'application n'est pas un dispositif médical au sens du règlement (UE) 2017/745 : elle ne pose aucun diagnostic et ne délivre aucune prescription.",
        "Les bases de référence embarquées (médicaments, pathologies, toxicologie, scores) sont fournies à titre indicatif et peuvent être incomplètes ou périmées. Elles ne se substituent pas aux sources officielles ni aux protocoles de votre service.",
      ],
    },
    {
      heading: '5. Données personnelles',
      body: [
        "L'application ne collecte aucune donnée personnelle et ne la transmet à aucun serveur : ni publicité, ni traceur, ni service d'analyse. La localisation GPS n'est utilisée que ponctuellement pour afficher l'adresse d'intervention, sans être enregistrée.",
        "Les bilans pouvant contenir des informations de santé, l'utilisateur reste responsable de leur confidentialité au titre de ses obligations professionnelles (secret professionnel, RGPD). Le détail figure dans la politique de confidentialité.",
      ],
    },
    {
      heading: '6. Propriété intellectuelle',
      body: [
        "L'application, son nom, son interface et ses contenus sont la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite.",
      ],
    },
    {
      heading: '7. Contact',
      body: [`Pour toute question relative à ces mentions : ${IDENTITY.email}`],
    },
  ],
};

const bilanSecouristeTerms: LegalDocument = {
  app: 'Bilan Secouriste',
  title: "Conditions générales d'utilisation",
  updated: UPDATED,
  sections: [
    {
      heading: '1. Objet',
      body: [
        "Les présentes conditions régissent l'utilisation de l'application Bilan Secouriste, outil d'aide au bilan et au suivi de victimes destiné aux professionnels et étudiants du secours à personne. L'utilisation de l'application vaut acceptation de ces conditions.",
      ],
    },
    {
      heading: '2. Avertissement essentiel',
      body: [
        "L'application est un aide-mémoire opérationnel. Elle ne remplace ni la formation, ni les protocoles de votre service, ni le jugement du secouriste, ni l'avis d'un médecin régulateur.",
        "Elle n'est pas un dispositif médical : aucun diagnostic, aucune prescription, aucune décision thérapeutique ne doit être fondée sur ses seules indications. Les doses, scores et fiches embarqués sont indicatifs et doivent être vérifiés auprès des sources de référence en vigueur.",
        "En situation d'urgence, appliquez les protocoles officiels et les consignes de votre régulation. Vous restez seul responsable de vos actes.",
      ],
    },
    {
      heading: '3. Accès et données',
      body: [
        "L'application fonctionne sans compte et sans connexion réseau. Toutes les données saisies restent sur l'appareil : désinstaller l'application, effacer ses données ou perdre l'appareil entraîne leur perte définitive, sans possibilité de restauration par l'éditeur.",
        "Il vous appartient d'exporter (PDF) les éléments que vous devez conserver ou transmettre, et de le faire par les canaux autorisés par votre service.",
      ],
    },
    {
      heading: '4. Confidentialité des données de santé',
      body: [
        "Les bilans que vous saisissez peuvent contenir des données de santé concernant des tiers. En tant qu'utilisateur professionnel, vous en êtes responsable : protection de l'appareil, respect du secret professionnel, et transmission aux seuls destinataires habilités.",
        "L'éditeur n'a accès à aucune de ces données, ce qui implique aussi qu'il ne peut ni les récupérer, ni les supprimer à votre place.",
      ],
    },
    sectionAchats(
      5,
      "L'application est fournie gratuitement. Elle ne propose aucun achat intégré, aucun abonnement et aucune publicité.",
    ),
    {
      heading: '6. Usage autorisé',
      body: [
        "L'application est destinée à un usage professionnel ou pédagogique individuel. Sont notamment interdites la revente, la redistribution, la décompilation et la réutilisation des contenus embarqués à des fins commerciales ou de formation payante sans autorisation écrite.",
      ],
    },
    {
      heading: '7. Disponibilité et évolutions',
      body: [
        "L'application est fournie « en l'état ». L'éditeur peut la modifier, en faire évoluer les contenus ou en interrompre la diffusion, sans obligation de maintenir une version antérieure. Les mises à jour sont distribuées via Google Play.",
      ],
    },
    {
      heading: '8. Responsabilité',
      body: [
        "Dans la limite permise par la loi, la responsabilité de l'éditeur ne saurait être engagée pour les conséquences d'une décision opérationnelle prise sur la base des contenus de l'application, ni pour la perte de données stockées localement. Les dispositions impératives protégeant les consommateurs restent applicables.",
      ],
    },
    {
      heading: '9. Droit applicable',
      body: [
        `Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité en écrivant à ${IDENTITY.email}.`,
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Gestion locative — bail & EDL : documents juridiques + achats Google Play  */
/* -------------------------------------------------------------------------- */

const gestionLocativeMentions: LegalDocument = {
  app: 'Gestion locative — bail & EDL',
  title: 'Mentions légales',
  subtitle: 'Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)',
  updated: UPDATED,
  sections: [
    {
      heading: "1. Éditeur de l'application",
      bullets: [...EDITEUR_BULLETS, STATUT_EDITEUR],
    },
    {
      heading: '2. Directeur de la publication',
      body: [`${IDENTITY.editor} — ${IDENTITY.email}`],
    },
    {
      heading: '3. Hébergement',
      body: [
        'Les données de l\'application (comptes, biens, documents, photos) sont hébergées et traitées via Google Firebase / Google Cloud Platform. Les fonctions serveur sont situées dans l\'Union européenne (europe-west1). Certains services Google peuvent impliquer des transferts hors UE, encadrés par des clauses contractuelles types.',
        'Cette page est publiée sur le site mappli.fr, hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis).',
      ],
    },
    {
      heading: '4. Avertissement sur les documents générés',
      body: [
        "L'application produit des documents (baux, états des lieux, quittances) à partir de modèles et de vos saisies. Ces documents ne constituent pas un conseil juridique et n'ont pas été établis par un professionnel du droit ou de l'immobilier.",
        "Il vous appartient de vérifier, avant signature, leur conformité à votre situation et à la réglementation applicable — notamment la loi n° 89-462 du 6 juillet 1989, ses décrets d'application et les annexes obligatoires. L'éditeur n'exerce aucune activité de rédaction d'actes, de gestion immobilière ni de conseil fiscal.",
        "Les indications fiscales fournies (Micro-Foncier, régime réel) sont des estimations informatives et ne remplacent pas l'avis d'un comptable ou de l'administration fiscale.",
      ],
    },
    {
      heading: '5. Données personnelles',
      body: [
        "Les traitements réalisés (données de compte, biens, locataires, documents, achats) sont décrits dans la politique de confidentialité. Lorsque vous saisissez les données d'un locataire, vous en êtes responsable de traitement et l'éditeur agit en sous-traitant technique.",
      ],
    },
    {
      heading: '6. Propriété intellectuelle',
      body: [
        "L'application, son nom, son interface et ses modèles de documents sont la propriété exclusive de l'éditeur, sauf mention contraire. Les documents que vous générez vous sont destinés pour la gestion de vos propres biens ; les modèles eux-mêmes ne peuvent être extraits, revendus ni rediffusés.",
      ],
    },
    {
      heading: '7. Liens et services externes',
      body: [
        "L'application peut renvoyer vers des services tiers (achats intégrés Google Play, services d'information publics). L'éditeur n'exerce aucun contrôle sur ces contenus et décline toute responsabilité à leur égard.",
      ],
    },
    {
      heading: '8. Contact',
      body: [`Pour toute question relative à ces mentions : ${IDENTITY.email}`],
    },
  ],
};

const gestionLocativeTerms: LegalDocument = {
  app: 'Gestion locative — bail & EDL',
  title: "Conditions générales d'utilisation",
  updated: UPDATED,
  sections: [
    {
      heading: '1. Objet',
      body: [
        "Les présentes conditions régissent l'utilisation de l'application « Gestion locative — bail & EDL », destinée aux propriétaires bailleurs qui gèrent eux-mêmes leurs biens. L'utilisation de l'application vaut acceptation de ces conditions.",
      ],
    },
    {
      heading: '2. Avertissement sur les documents produits',
      body: [
        "Les baux, états des lieux, quittances et synthèses fiscales sont générés automatiquement à partir de modèles et de vos saisies. Ils ne constituent ni un conseil juridique, ni un conseil fiscal, et leur exactitude dépend directement des informations que vous renseignez.",
        "Vous devez relire chaque document et vérifier sa conformité à la réglementation en vigueur avant de le signer ou de le remettre à un locataire. En cas de situation particulière (bail dérogatoire, colocation, logement social, encadrement des loyers), faites-vous accompagner par un professionnel.",
      ],
    },
    {
      heading: '3. Compte et accès',
      body: [
        "L'accès nécessite un compte (adresse e-mail ou connexion Google). Vous êtes responsable de la confidentialité de vos identifiants et de l'exactitude des informations saisies. Vous pouvez supprimer votre compte depuis l'application ; la suppression entraîne celle de vos données dans les conditions prévues par la politique de confidentialité.",
      ],
    },
    {
      heading: '4. Vos obligations envers vos locataires',
      body: [
        "Vous saisissez des données concernant des tiers (locataires, cautions). Vous en êtes responsable de traitement : il vous appartient de les informer de l'usage de l'application, de disposer d'une base légale, et de leur transmettre les documents auxquels ils ont droit.",
        "L'espace locataire donne accès à un périmètre restreint de données, sous votre contrôle.",
      ],
    },
    sectionAchats(
      5,
      "Les crédits de bail et les packs annoncés ne sont pas encore disponibles : aucun achat ne peut être réalisé à ce jour. Lorsqu'ils seront ouverts, les achats intégrés seront traités par Google Play, qui applique ses propres conditions et sa politique de remboursement ; l'éditeur n'a accès à aucune donnée bancaire. La génération des quittances, le suivi des loyers, les incidents, l'espace locataire et les états des lieux restent gratuits.",
    ),
    {
      heading: '6. Usage autorisé',
      body: [
        "L'application est réservée à la gestion de vos propres biens locatifs. Sont notamment interdits l'usage pour le compte de tiers à titre professionnel (gestion mandatée) sans accord écrit, la revente des documents générés en tant que prestation, l'accès automatisé au service et toute tentative de contournement des crédits ou des règles de sécurité.",
      ],
    },
    {
      heading: '7. Disponibilité',
      body: [
        "Le service est fourni « en l'état », sans garantie de disponibilité continue. Il dépend de prestataires tiers (Google Firebase, Google Play) dont l'indisponibilité peut empêcher temporairement l'accès ou la génération d'un document.",
      ],
    },
    {
      heading: '8. Sauvegarde de vos documents',
      body: [
        "Il vous est recommandé de conserver, hors de l'application, une copie des documents contractuels (baux signés, états des lieux). L'éditeur ne peut garantir la restauration d'un document supprimé par vos soins.",
      ],
    },
    {
      heading: '9. Responsabilité',
      body: [
        "Dans la limite permise par la loi, la responsabilité de l'éditeur ne saurait être engagée pour les conséquences juridiques ou financières de l'utilisation d'un document généré, notamment lorsqu'il n'a pas été relu ou qu'il repose sur des informations inexactes. Les dispositions impératives protégeant les consommateurs restent applicables.",
      ],
    },
    {
      heading: '10. Droit applicable',
      body: [
        `Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité en écrivant à ${IDENTITY.email}.`,
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Sports Controls — usage par des organisations, données sur Firebase        */
/* -------------------------------------------------------------------------- */

const sportsControlsMentions: LegalDocument = {
  app: 'Sports Controls',
  title: 'Mentions légales',
  subtitle: 'Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)',
  updated: UPDATED,
  sections: [
    {
      heading: "1. Éditeur de l'application",
      bullets: [...EDITEUR_BULLETS, STATUT_EDITEUR],
    },
    {
      heading: '2. Directeur de la publication',
      body: [`${IDENTITY.editor} — ${IDENTITY.email}`],
    },
    {
      heading: '3. Hébergement',
      body: [
        "Les données de l'application (comptes, équipements, inspections, photos) sont hébergées par Google Firebase (Cloud Firestore et Firebase Storage), sur des serveurs situés en Europe. Les échanges entre l'application et les serveurs sont chiffrés (HTTPS/TLS).",
        'Cette page est publiée sur le site mappli.fr, hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis).',
      ],
    },
    {
      heading: '4. Avertissement sur la portée des contrôles',
      body: [
        "L'application est un outil de saisie, de suivi et de traçabilité des inspections réalisées par vos agents. Les rapports PDF restituent ces saisies : ils n'attestent d'aucune conformité par eux-mêmes.",
        "L'application ne se substitue pas aux vérifications réglementaires ni aux obligations qui pèsent sur le gestionnaire de l'équipement, notamment le recours à un organisme ou à un intervenant qualifié lorsque la réglementation l'exige.",
      ],
    },
    {
      heading: '5. Données personnelles',
      body: [
        "Les traitements réalisés (données de compte, inspections, photos, jetons de notification) sont décrits dans la politique de confidentialité. Lorsque l'application est utilisée par une organisation, celle-ci détermine les finalités des données de ses agents et de ses équipements ; l'éditeur agit en sous-traitant technique.",
      ],
    },
    {
      heading: '6. Propriété intellectuelle',
      body: [
        "L'application, son nom, son interface, ses modèles de rapports et son dashboard web sont la propriété exclusive de l'éditeur, sauf mention contraire. Les données saisies et les rapports produits restent la propriété de votre organisation.",
      ],
    },
    {
      heading: '7. Contact',
      body: [`Pour toute question relative à ces mentions : ${IDENTITY.email}`],
    },
  ],
};

const sportsControlsTerms: LegalDocument = {
  app: 'Sports Controls',
  title: "Conditions générales d'utilisation",
  updated: UPDATED,
  sections: [
    {
      heading: '1. Objet',
      body: [
        "Les présentes conditions régissent l'utilisation de l'application mobile Sports Controls et de son dashboard web, destinés au suivi et à l'inspection d'équipements sportifs par des organisations (collectivités, clubs, gestionnaires de sites). L'utilisation du service vaut acceptation de ces conditions.",
      ],
    },
    {
      heading: '2. Portée de l\'outil',
      body: [
        "L'application enregistre et restitue les constats saisis par les utilisateurs. Elle ne réalise aucun contrôle par elle-même, n'émet aucun avis de conformité et ne dispense pas des vérifications imposées par la réglementation applicable à l'équipement concerné.",
        "La qualification des anomalies, les décisions de mise hors service et le suivi des remises en état relèvent du gestionnaire de l'équipement.",
      ],
    },
    {
      heading: '3. Comptes et organisation',
      body: [
        "Les comptes sont rattachés à une organisation, dont l'administrateur gère les accès et les rôles. Chaque utilisateur n'accède qu'aux données de son organisation.",
        "L'organisation est responsable des comptes qu'elle crée, de l'exactitude des données saisies par ses agents et du retrait des accès des personnes ayant quitté ses effectifs.",
      ],
    },
    {
      heading: '4. Contenus que vous publiez',
      body: [
        "Vous restez propriétaire des données et des photos que vous saisissez. Vous vous engagez à ne pas y faire figurer de données inutiles au contrôle, en particulier des personnes identifiables sur les photos d'équipements.",
      ],
    },
    sectionAchats(
      5,
      "Aucun paiement n'est traité par l'application ni par le dashboard : il n'existe ni achat intégré, ni souscription en ligne. Les modalités d'accès — essai et formules annoncées sur mappli.fr — sont convenues directement avec l'éditeur.",
    ),
    {
      heading: '6. Usage autorisé',
      body: [
        "Le service est réservé à un usage professionnel dans le cadre de la gestion de vos équipements. Sont notamment interdits la revente ou la mise à disposition du service à des tiers, l'accès automatisé, et toute tentative de contournement du cloisonnement entre organisations.",
        "En cas d'usage abusif ou de mise en danger du service, l'accès peut être suspendu.",
      ],
    },
    {
      heading: '7. Disponibilité',
      body: [
        "Le service est fourni « en l'état », sans garantie de disponibilité continue. Il dépend de prestataires tiers (Google Firebase, service de notifications) dont l'indisponibilité peut empêcher temporairement l'accès, la synchronisation ou l'envoi d'alertes.",
        "Certaines fonctions nécessitent une connexion réseau : prévoyez que les inspections réalisées en zone sans couverture puissent devoir être synchronisées ultérieurement.",
      ],
    },
    {
      heading: '8. Durée, suppression et récupération des données',
      body: [
        "Vous pouvez demander l'export ou la suppression des données de votre organisation en écrivant à l'adresse de contact. Les conditions de conservation figurent dans la politique de confidentialité.",
      ],
    },
    {
      heading: '9. Responsabilité',
      body: [
        "Dans la limite permise par la loi, la responsabilité de l'éditeur ne saurait être engagée pour les conséquences d'une décision de gestion prise sur la base des données saisies dans l'application, ni pour un défaut de contrôle réglementaire incombant au gestionnaire de l'équipement.",
      ],
    },
    {
      heading: '10. Droit applicable',
      body: [
        `Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité en écrivant à ${IDENTITY.email}.`,
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const LEGAL_DOCS = {
  'bilan-secouriste': { mentions: bilanSecouristeMentions, terms: bilanSecouristeTerms },
  'gestion-locative': { mentions: gestionLocativeMentions, terms: gestionLocativeTerms },
  'sports-controls': { mentions: sportsControlsMentions, terms: sportsControlsTerms },
} as const;

/**
 * Liens légaux affichés sur chaque page d'app. `privacy` diffère d'une app à l'autre :
 * ces URL sont déjà déclarées dans les fiches des stores, on ne les renomme pas.
 */
export const LEGAL_LINKS: Record<
  keyof typeof LEGAL_DOCS | 'itero',
  { mentions: string; privacy: string; terms: string }
> = {
  'bilan-secouriste': {
    mentions: '/bilan-secouriste/mentions-legales',
    privacy: '/bilan-secouriste/privacy',
    terms: '/bilan-secouriste/cgu',
  },
  'gestion-locative': {
    mentions: '/gestion-locative/mentions-legales',
    privacy: '/gestion-locative/politique-confidentialite',
    terms: '/gestion-locative/cgu',
  },
  'sports-controls': {
    mentions: '/sports-controls/mentions-legales',
    privacy: '/privacy-policy',
    terms: '/sports-controls/cgu',
  },
  itero: {
    mentions: '/itero/mentions-legales',
    privacy: '/itero/privacy',
    terms: '/itero/cgu',
  },
};
