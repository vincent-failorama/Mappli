/* Hallmark · genre: atmospheric · macrostructure: Narrative Workflow · theme: projet MAPPLI (préservé)
 * enrichment: none (typographie seule) · nav: n/a (app/layout.tsx) · footer: n/a (app/layout.tsx)
 * audience: particulier propriétaire · use case: être prévenu de la sortie · tone: utilitaire
 * pre-emit critique: P5 H4 E4 S5 R5 V4
 * Déviations assumées au genre : glassmorphisme conservé et fonte unique (Montserrat),
 * imposés par le système visuel existant du site — la cohérence prime sur la règle.
 */
import Link from 'next/link';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../../components/ScrollReveal';
import LegalLinks from '../../../components/LegalLinks';
import { FaCar, FaMotorcycle, FaBicycle } from 'react-icons/fa';

export const metadata = {
  title: "Suivi Auto · Moto · Vélo — Carnet d'entretien hors ligne",
  description:
    "Carnet d'entretien pour voiture, moto et vélo : entretiens, dépenses, pleins, alertes kilométriques et par date, documents. Tout reste sur le téléphone — aucun compte, aucun serveur.",
  keywords: [
    "carnet d'entretien véhicule",
    'application entretien voiture',
    'suivi dépenses véhicule',
    'rappel révision kilométrage',
    'carnet entretien moto',
    'entretien vélo application',
    'application hors ligne sans compte',
    'export PDF carnet entretien',
  ],
  alternates: { canonical: '/apps/suivi-auto-moto-velo' },
};

/**
 * Les quatre temps de l'usage réel, pas quatre arguments de vente. La macrostructure
 * Narrative Workflow demande une vraie séquence : celle-ci va du premier soir au jour
 * de la revente, et chaque étape ne dit que ce que l'application fait vraiment.
 */
const ETAPES = [
  {
    num: '1.0',
    titre: 'Le premier soir',
    duree: 'Une fois',
    texte:
      "Vous déclarez vos véhicules : marque, modèle, compteur, carburant. Une voiture, une moto, un vélo — l'application ne fait pas de différence entre les trois, elle adapte seulement ce qu'elle vous demande.",
    detail: 'Essence, diesel, GPL, électrique, hybride ou musculaire.',
  },
  {
    num: '2.0',
    titre: 'À chaque plein, à chaque passage au garage',
    duree: '30 secondes',
    texte:
      'Vous saisissez le montant, le compteur, la date. La dépense correspondante est créée toute seule, le kilométrage du véhicule se met à jour, et la photo de la facture reste attachée à la ligne.',
    detail:
      'Pleins en litres ou recharges en kWh — le prix unitaire est recalculé si vous l’oubliez.',
  },
  {
    num: '3.0',
    titre: 'Entre deux entretiens',
    duree: 'En continu',
    texte:
      "Vous ne faites rien. L'application compare vos échéances au compteur et au calendrier, et vous prévient avant que ce soit dû — pas le jour où ça l'est.",
    detail: 'Seuils d’alerte par défaut : 500 km ou 30 jours avant l’échéance, réglables.',
  },
  {
    num: '4.0',
    titre: 'Le jour où vous revendez',
    duree: 'Deux minutes',
    texte:
      "Vous exportez le carnet complet en PDF : chaque entretien, chaque date, chaque compteur, chaque montant. L'acheteur a l'historique sous les yeux, vous n'avez rien à retrouver au fond d'un tiroir.",
    detail: 'PDF pour l’acheteur, CSV pour votre tableur, JSON pour la sauvegarde.',
  },
];

/** Les quatre absences revendiquées. Formulées en creux : c'est le vrai argument du produit. */
const SANS = [
  {
    titre: 'Aucun compte',
    texte:
      "Pas d'inscription, pas de mot de passe, pas d'adresse e-mail à donner. Vous installez, vous ouvrez, vous saisissez.",
  },
  {
    titre: 'Aucun serveur',
    texte:
      "Vos données ne partent nulle part parce qu'il n'y a nulle part où les envoyer. L'application fonctionne en mode avion.",
  },
  {
    titre: 'Aucune publicité',
    texte:
      "Pas de bannière, pas de traceur, aucune statistique d'usage remontée. Rien à vendre à personne.",
  },
  {
    titre: 'Aucune sauvegarde à votre insu',
    texte:
      'La sauvegarde système d’Android est explicitement désactivée : vos plaques et vos numéros de série ne remontent pas chez Google sans que vous l’ayez demandé.',
  },
];

/** Ce que l'application suit, en une ligne chacun. Liste dense plutôt que grille de cartes. */
const SUIVI = [
  {
    quoi: 'Entretiens',
    comment:
      'Type, date, compteur, coût, prestataire, notes et photos. La dépense liée est créée et reste synchronisée.',
  },
  {
    quoi: 'Dépenses',
    comment:
      'Dix catégories — carburant, assurance, réparation, pneus, révision, péage, stationnement… — avec justificatif photo.',
  },
  {
    quoi: 'Pleins et recharges',
    comment:
      'Litres ou kWh, prix unitaire, plein complet ou non, station. La consommation se déduit des compteurs successifs.',
  },
  {
    quoi: 'Échéances',
    comment:
      'Une règle par entretien récurrent : tous les X kilomètres, tous les X mois, ou les deux. Notification locale avant la date.',
  },
  {
    quoi: 'Documents',
    comment:
      "Carte grise, attestation d'assurance, factures, certificats. Rangés par véhicule, ouvrables sans connexion.",
  },
  {
    quoi: 'Statistiques',
    comment:
      'Coût au kilomètre, dépenses par catégorie, évolution mois par mois. Calculées sur l’appareil, comme le reste.',
  },
];

export default function SuiviAutoMotoVeloPage() {
  return (
    <>
      {/* ── Hero ── biais gauche, hauteur du contenu, pas de plein écran centré */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 sm:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-slate-400 hover:text-brand-400 transition-colors"
        >
          ← Retour aux apps
        </Link>

        {/* Le héros tient dans le pli d'un portable 13″ (1280 × 800) : titre court,
            accroche sur une ligne, statut en une phrase, appels à l'action visibles
            sans défiler. Chaque bloc ajouté ici repousse le bouton hors de l'écran. */}
        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-4 text-xl text-brand-300/80" aria-hidden="true">
            <FaCar />
            <FaMotorcycle />
            <FaBicycle />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white [overflow-wrap:anywhere] sm:text-5xl">
            Le carnet d’entretien de vos véhicules
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-medium leading-snug text-slate-300 sm:text-2xl">
            Auto, moto, vélo. Tout reste sur votre téléphone.
          </p>

          <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
            Ce que vous avez fait sur vos véhicules, ce que ça vous a coûté, ce qui arrive à
            échéance — sans compte à créer et sans rien envoyer sur Internet.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['Android', 'iOS'].map((p) => (
              <span
                key={p}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-300"
              >
                {p}
              </span>
            ))}
            {/* Statut honnête : l'application n'est pas publiée, la page ne prétend pas l'inverse. */}
            <span className="whitespace-nowrap rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-sm font-semibold text-brand-300">
              Pas encore publiée
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/contact?sujet=Suivi+Auto+Moto+V%C3%A9lo"
              className="btn-primary whitespace-nowrap rounded-xl px-6 py-3 font-semibold text-white"
            >
              Être prévenu de la sortie →
            </a>
            <a
              href="/contact?sujet=Question+Suivi+Auto+Moto+V%C3%A9lo"
              className="btn-secondary whitespace-nowrap rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Poser une question
            </a>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500">
            L’application est en développement, disponible sur aucun magasin d’applications, et
            aucune date de sortie n’est annoncée.
          </p>
        </div>
      </section>

      {/* ── Les quatre temps ── macrostructure Narrative Workflow */}
      <section className="relative py-20">
        <div className="absolute inset-0 border-y border-white/5 bg-white/5 backdrop-blur-xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold [overflow-wrap:anywhere] text-white sm:text-4xl">
              Ce que ça donne, dans l’ordre
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Quatre moments, du premier soir au jour de la revente.
            </p>
          </ScrollReveal>

          {/* Une seule entrée orchestrée pour les quatre étapes : chaque bloc ne déclenche
              pas sa propre animation, sinon la page ne se pose jamais. */}
          <StaggerContainer className="mt-14">
            {ETAPES.map((etape) => (
              <StaggerItem key={etape.num} variant="left">
                <article className="border-t-2 border-white/10 py-10 first:border-t-0 first:pt-0">
                  {/* Numéro au-dessus du titre, dans la même colonne : jamais en rail à gauche. */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="text-sm font-bold tabular-nums tracking-[0.2em] text-brand-400">
                      {etape.num}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {etape.duree}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {etape.titre}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{etape.texte}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
                    {etape.detail}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Les absences ── l'argument central, formulé en creux */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <ScrollReveal>
          <h2 className="max-w-2xl text-3xl font-bold [overflow-wrap:anywhere] leading-tight text-white sm:text-4xl">
            Ce que l’application ne fait pas
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Cette liste compte autant que celle d’en dessous.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {SANS.map((item) => (
            <StaggerItem key={item.titre}>
              <h3 className="text-lg font-bold text-white">{item.titre}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{item.texte}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Ce qu'elle suit ── liste dense à filets, pas une grille de cartes à icônes */}
      <section className="relative py-20">
        <div className="absolute inset-0 border-y border-white/5 bg-white/5 backdrop-blur-xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold [overflow-wrap:anywhere] text-white sm:text-4xl">
              Ce qu’elle suit
            </h2>
          </ScrollReveal>

          {/* Liste sans animation : c'est du contenu de référence, il est simplement là. */}
          <dl className="mt-12">
            {SUIVI.map((ligne) => (
              <div
                key={ligne.quoi}
                className="grid grid-cols-1 gap-2 border-t border-white/10 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-8"
              >
                <dt className="text-base font-bold text-white">{ligne.quoi}</dt>
                <dd className="leading-relaxed text-slate-400">{ligne.comment}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Sauvegarde ── le corollaire honnête du local-first */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <ScrollReveal>
          <h2 className="max-w-2xl text-3xl font-bold [overflow-wrap:anywhere] leading-tight text-white sm:text-4xl">
            Vos données sont sur votre téléphone. La sauvegarde vous appartient donc aussi.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">
            Rien n’est stocké chez nous — ce qui veut dire que personne ne peut restaurer vos
            données à votre place. L’application exporte donc un fichier de sauvegarde complet,
            photos comprises, que vous enregistrez où vous voulez : Drive, iCloud, Fichiers, une
            carte mémoire. Restaurer, c’est choisir ce fichier.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
            Si vous désignez un dossier une fois, les sauvegardes suivantes s’y écrivent
            directement. Et l’application vous rappelle d’en faire une lorsqu’un mois s’est écoulé
            depuis la dernière.
          </p>
        </ScrollReveal>
      </section>

      <LegalLinks
        app="suivi-auto-moto-velo"
        descriptions={{
          mentions:
            "Éditeur, absence de serveur et d'hébergement des données, portée de l'application vis-à-vis du carnet constructeur et des obligations légales, propriété intellectuelle.",
          privacy:
            'Ce qui est enregistré sur votre appareil, les permissions demandées et leur usage exact, l’absence de sous-traitant, la responsabilité de vos sauvegardes et vos droits RGPD.',
          terms:
            "Ce que l'application fait et ne fait pas, fonctionnement hors ligne, sauvegarde à votre charge, gratuité et absence d'achat intégré.",
        }}
        note={
          <>
            L&apos;application ne traite aucun paiement : elle est diffusée gratuitement, sans achat
            intégré ni abonnement. Aucune condition de vente n&apos;est donc applicable à ce jour.
          </>
        }
      />

      {/* ── CTA final ── un seul bouton */}
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white [overflow-wrap:anywhere]">
            Vous voulez le savoir en premier ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Un message suffit — nous vous écrivons le jour de la publication, et jamais pour autre
            chose.
          </p>
          <a
            href="/contact?sujet=Suivi+Auto+Moto+V%C3%A9lo"
            className="btn-primary mt-8 inline-block whitespace-nowrap rounded-xl px-8 py-4 text-lg font-bold text-white"
          >
            Être prévenu de la sortie →
          </a>
        </ScrollReveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Suivi Auto · Moto · Vélo',
              description:
                "Carnet d'entretien mobile pour voiture, moto et vélo : entretiens, dépenses, pleins, alertes kilométriques et par date, documents. Fonctionnement hors ligne, sans compte ni serveur.",
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Android, iOS',
              url: 'https://mappli.fr/apps/suivi-auto-moto-velo',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Suivi Auto · Moto · Vélo' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
