import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import LightboxImage from '../../../components/LightboxImage';
import LegalLinks from '../../../components/LegalLinks';
import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaFilePdf,
  FaWallet,
  FaUtensils,
  FaLanguage,
  FaFirstAid,
  FaMagic,
} from 'react-icons/fa';

export const metadata = {
  title: 'Itero.ai — Guide de voyage personnalisé généré par IA',
  description:
    "Application mobile qui génère un guide de voyage complet à partir d'un formulaire : programme jour par jour, budget éco/confort, restaurants, carte, urgences et vocabulaire. Export PDF de 9 pages, sans création de compte.",
  keywords: [
    'guide de voyage personnalisé',
    'itinéraire de voyage IA',
    'application planification voyage',
    'guide voyage PDF',
    'programme jour par jour voyage',
    'budget voyage estimé',
    'itero',
    'carnet de voyage généré',
  ],
  alternates: { canonical: '/apps/itero' },
};

const FEATURES = [
  {
    icon: FaMapMarkedAlt,
    title: 'Programme jour par jour',
    description:
      "Chaque journée est construite avec des horaires réalistes, les distances entre les étapes et un lien d'itinéraire Google Maps multi-étapes. Le rythme s'adapte au groupe : âge des enfants, mobilité, rayon d'exploration.",
  },
  {
    icon: FaWallet,
    title: 'Double budget éco / confort',
    description:
      'Deux estimations côte à côte, par personne et par jour, activité par activité. Vous voyez tout de suite ce que coûte le voyage selon le niveau de confort choisi.',
  },
  {
    icon: FaUtensils,
    title: 'Restaurants par quartier',
    description:
      "Environ une adresse par jour de séjour, réparties par catégorie et par zone : spécialité, fourchette de prix et accès. Pas une liste du centre-ville servie pour tout le séjour.",
  },
  {
    icon: FaFilePdf,
    title: 'Export PDF mis en page',
    description:
      "Un guide de plusieurs pages avec couverture, sommaire, présentation de la destination et sections numérotées. Le PDF est fabriqué sur votre téléphone et reste disponible hors connexion.",
  },
  {
    icon: FaLanguage,
    title: '5 langues, contenu natif',
    description:
      "Interface et guide en français, anglais, espagnol, allemand et italien. Le contenu n'est pas traduit : il est écrit directement dans la langue choisie, avec un vocabulaire de survie et sa prononciation figurée.",
  },
  {
    icon: FaFirstAid,
    title: 'Infos pratiques fiables',
    description:
      "Numéros d'urgence du pays de destination, monnaie, fuseau horaire et type de prise proviennent d'une table de référence vérifiée — pas d'une invention du modèle.",
  },
];

const APERCUS = [
  {
    src: '/itero/apercu-1.png',
    alt: 'Couverture du guide — Séville, drapeau du pays, météo et double budget',
    legend: 'Couverture : destination, dates, météo et budgets',
  },
  {
    src: '/itero/apercu-2.png',
    alt: 'Programme jour par jour avec horaires, distances et liens Google Maps',
    legend: 'Programme jour par jour et transports',
  },
  {
    src: '/itero/apercu-3.png',
    alt: "Section urgences et vocabulaire avec prononciation figurée",
    legend: 'Urgences et vocabulaire de survie',
  },
];

const PLANS = [
  {
    name: '5 guides / mois',
    price: 'Gratuit',
    desc: 'Génération et consultation à l’écran, sans compte ni carte bancaire.',
    highlight: false,
  },
  {
    name: '1 export PDF',
    price: '3,99 €',
    desc: 'Le guide complet, version enrichie, exporté en PDF.',
    highlight: false,
  },
  {
    name: '5 exports PDF',
    price: '9,99 €',
    desc: '~2 € par guide — un stock utilisable sur n’importe quels voyages.',
    highlight: true,
  },
  {
    name: '10 exports PDF',
    price: '16,99 €',
    desc: 'Pour les gros voyageurs et les usages familiaux.',
    highlight: false,
  },
];

export default function IteroPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 mb-10 transition-colors"
        >
          ← Retour aux apps
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">
              <FaPlaneDeparture className="inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Itero.ai
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Votre guide de voyage sur mesure, généré en quelques secondes
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Vous décrivez votre voyage — destination, dates, composition du groupe, style,
              budget, mobilité — et l&apos;application produit un guide complet : programme jour
              par jour, budget éco et confort, restaurants, carte interactive, urgences et
              vocabulaire. Aucun compte à créer, et le guide exporté en PDF reste sur votre
              téléphone, consultable hors connexion sur place.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Android', 'iOS bientôt'].map((p) => (
                <span
                  key={p}
                  className="bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/contact?sujet=Itero.ai"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Être informé du lancement →
              </a>
              <a
                href="/itero/exemple-seville.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <FaFilePdf aria-hidden="true" />
                Voir un guide complet (PDF)
              </a>
              <a
                href="#legal"
                className="border border-white/20 text-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-white/40 transition-colors text-sm flex items-center"
              >
                Informations légales
              </a>
            </div>
          </div>

          {/* Aperçu de la couverture du guide */}
          <div className="relative flex justify-center">
            <div className="relative w-[300px] sm:w-[360px]">
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full scale-110 pointer-events-none" />
              <LightboxImage
                src="/itero/apercu-1.png"
                alt="Itero.ai — couverture d'un guide de voyage généré (Séville)"
                width={794}
                height={1123}
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aperçus du guide */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
              À quoi ressemble le guide
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Un vrai document, pas une liste de suggestions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Les pages ci-dessous sont extraites d&apos;un guide réel de 9 pages généré pour
              Séville. Le PDF complet est consultable librement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {APERCUS.map(({ src, alt, legend }) => (
              <div key={src} className="group relative">
                <div className="absolute inset-0 bg-sky-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <LightboxImage
                  src={src}
                  alt={alt}
                  width={794}
                  height={1123}
                  className="rounded-xl border border-white/10 shadow-xl w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
                />
                <p className="text-center text-xs text-slate-500 mt-3 px-1">{legend}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/itero/exemple-seville.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors"
            >
              <FaFilePdf aria-hidden="true" />
              Ouvrir l&apos;exemple complet — Séville, 9 pages
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Ce que contient chaque guide</h2>
            <p className="text-slate-400">
              Huit sections construites pour le terrain, pas un article de blog
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Comment ça marche</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Vous décrivez le voyage',
                desc: "Destination, dates, adultes et enfants (avec leur âge), style, niveaux de budget, mode d'arrivée, véhicule personnel ou de location, rayon d'exploration, activités souhaitées et contraintes.",
              },
              {
                step: '02',
                title: 'Le guide est généré',
                desc: "Le formulaire part vers un modèle d'IA qui produit le guide structuré en une vingtaine de secondes. Les données de référence — urgences, monnaie, prise électrique, vocabulaire — sont injectées depuis une table vérifiée et écrasent le modèle.",
              },
              {
                step: '03',
                title: 'Vous ajustez',
                desc: "Réordonnez les journées, puis relancez « Optimiser l'itinéraire » : les transitions, transports et distances sont réécrits en conséquence. La carte interactive situe tous les lieux du séjour.",
              },
              {
                step: '04',
                title: 'Vous exportez et partez',
                desc: "Le PDF est fabriqué sur votre téléphone, nommé ville-pays-dates, rangé dans « Mes guides PDF » et partageable. Il fonctionne sans réseau, ce qui est précisément le cas sur place.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-white/10 flex gap-5"
              >
                <span className="text-2xl font-black text-sky-400/60 shrink-0">{step}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vie privée */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
              Vie privée
            </span>
            <h2 className="text-3xl font-bold text-white">Sans compte, sans traceur</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <ul className="list-disc list-inside text-slate-300 space-y-3 ml-2">
              <li>
                <strong className="text-white">Aucun compte :</strong> ni nom, ni email, ni mot de
                passe. Un identifiant technique anonyme sert uniquement à rattacher vos quotas à
                votre appareil.
              </li>
              <li>
                <strong className="text-white">Vos guides restent chez vous :</strong> guides et
                PDF sont enregistrés sur le téléphone, pas sur nos serveurs.
              </li>
              <li>
                <strong className="text-white">Aucun traceur publicitaire</strong> ni outil de
                mesure d&apos;audience tiers, aucune donnée de localisation, aucun accès aux photos
                ou aux contacts.
              </li>
              <li>
                <strong className="text-white">Hébergement européen :</strong> exécution en
                Belgique et base de données multi-région Europe. Les détails, y compris les
                transferts hors UE liés à la génération, sont dans la{' '}
                <Link href="/itero/privacy" className="text-sky-400 hover:text-sky-300">
                  politique de confidentialité
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <LegalLinks
        app="itero"
        descriptions={{
          mentions:
            "Éditeur, directeur de la publication, hébergeur, propriété intellectuelle, sources cartographiques (OpenStreetMap) et avertissement sur les contenus générés par IA.",
          privacy:
            "Données traitées, sous-traitants, transferts hors UE, durées de conservation et exercice de vos droits RGPD. C'est l'URL déclarée dans la fiche Play Store.",
          terms:
            "Objet, avertissement sur la fiabilité des guides générés, quotas, exports offerts, usage autorisé, disponibilité, responsabilité et droit applicable.",
        }}
        note={
          <>
            La version française fait foi. Les mêmes textes sont consultables dans
            l&apos;application, écran «&nbsp;Informations légales&nbsp;», y compris hors connexion.
            Des conditions générales de vente distinctes seront publiées avant l&apos;ouverture des
            achats.
          </>
        }
      />

      {/* Tarifs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Tarifs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La génération et la consultation sont gratuites. On ne fait payer que l&apos;export
              PDF — un stock d&apos;exports, sans abonnement et sans date d&apos;expiration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-7 border transition-all hover:scale-[1.02] ${
                  plan.highlight
                    ? 'bg-brand-600 border-brand-400 text-white shadow-xl shadow-brand-500/20'
                    : 'bg-white/5 backdrop-blur-md border-white/10 text-white'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Le plus généreux
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="text-2xl font-extrabold mb-4 text-white">{plan.price}</div>
                <p className={`text-sm ${plan.highlight ? 'text-brand-100' : 'text-slate-400'}`}>
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Les achats ne sont pas encore ouverts : l&apos;application est en phase de test et les
            exports PDF sont actuellement offerts aux testeurs. Les tarifs ci-dessus sont ceux
            prévus au lancement.
          </p>
        </div>
      </section>

      {/* Détails techniques */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Architecture &amp; détails techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaMagic aria-hidden="true" className="text-sky-400" />
                Génération
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm ml-2">
                <li>Appels IA côté serveur uniquement (aucune clé dans l&apos;application)</li>
                <li>Chaîne de repli entre plusieurs modèles, avec budget de temps borné</li>
                <li>Validation de schéma et garde de complétude : un guide amputé est rejeté</li>
                <li>Cache de génération par destination canonique</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaMapMarkedAlt aria-hidden="true" className="text-sky-400" />
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Expo / React Native',
                  'TypeScript',
                  'Turborepo',
                  'Firebase Auth',
                  'Firestore',
                  'Cloud Functions',
                  'OpenStreetMap / Leaflet',
                  'Nominatim',
                  'expo-print',
                  'i18next',
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Bientôt sur Google Play</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Laissez-nous votre contact pour être prévenu de la sortie — ou pour rejoindre les
          testeurs.
        </p>
        <a
          href="/contact?sujet=Itero.ai"
          className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
        >
          Être informé du lancement →
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Itero.ai',
              description:
                "Application mobile qui génère un guide de voyage complet et personnalisé : programme jour par jour, budget éco/confort, restaurants, carte, urgences et vocabulaire, avec export PDF.",
              applicationCategory: 'TravelApplication',
              operatingSystem: 'Android',
              url: 'https://mappli.fr/apps/itero',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Itero.ai' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
