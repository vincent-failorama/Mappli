import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import LegalLinks from '../../../components/LegalLinks';
import { FaFutbol, FaSearch, FaFilePdf, FaExclamationTriangle, FaGlobe, FaBell, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'Sports Controls — Contrôle des équipements sportifs',
  description:
    'Application de contrôle des équipements sportifs ERP : inspections terrain guidées, rapports PDF réglementaires, suivi des anomalies et dashboard multi-sites sur Android, iOS et web.',
  keywords: [
    'inspection équipements sportifs',
    'contrôle terrain',
    'rapport PDF inspection',
    'gestion anomalies',
    'application mobile gestionnaire sportif',
    'suivi équipements',
    'dashboard multi-sites',
    'iOS Android web',
  ],
  alternates: { canonical: '/apps/sports-controls' },
};

const FEATURES = [
  {
    icon: FaSearch, // Icône de loupe
    title: 'Inspections terrain guidées',
    description:
      'Checklist interactive sur iOS & Android. Chaque point de contrôle peut être annoté, photographié et qualifié par gravité.',
  },
  {
    icon: FaFilePdf, // Icône de fichier PDF
    title: 'Rapports PDF automatiques',
    description:
      "Génération instantanée de rapports de contrôle signés, archivés et téléchargeables depuis l'app ou le dashboard web.",
  },
  {
    icon: FaExclamationTriangle, // Icône d'avertissement
    title: 'Suivi des anomalies',
    description:
      'Les anomalies détectées sont tracées en temps réel. Cycle de vie complet : ouverture, suivi, résolution avec délai mesuré.',
  },
  {
    icon: FaGlobe, // Icône de globe
    title: 'Dashboard web multi-sites',
    description:
      "Vue centralisée de tous vos sites, équipements et inspections. Statistiques de conformité, taux d'anomalies, activité des inspecteurs.",
  },
  {
    icon: FaBell, // Icône de cloche
    title: 'Notifications push & email',
    description:
      "Alertes automatiques sur condamnation, mise sous surveillance ou détection d'anomalie majeure. Zéro information manquée.",
  },
  {
    icon: FaUsers, // Icône de groupe d'utilisateurs
    title: 'Gestion des rôles',
    description:
      'Admins, responsables, agents, lecteurs — chaque utilisateur accède uniquement à ce dont il a besoin.',
  },
];

const PLANS = [
  {
    name: 'Liberté',
    price: '30 € / équipement / an',
    desc: 'Petites communes & associations',
    highlight: false,
  },
  {
    name: 'Essentiel',
    price: '490 € / an',
    desc: '1 agent · 1 catégorie de patrimoine',
    highlight: false,
  },
  { name: 'Performance', price: '1 200 € / an', desc: '5 agents · 3 catégories', highlight: true },
  { name: 'Pro', price: '1 900 € / an', desc: '15 agents · toutes catégories', highlight: false },
  {
    name: 'Expert',
    price: '2 900 € / an',
    desc: '30 agents · toutes catégories',
    highlight: false,
  },
  {
    name: 'Territoire',
    price: '4 800 € / an',
    desc: 'Collectivités & grands comptes',
    highlight: false,
  },
];

export default function SportsControlsPage() {
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
              <FaFutbol className="inline-block" /> {/* Rendu de l'icône */}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Sports Controls — Application de contrôle des équipements sportifs
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Inspections terrain, rapports PDF réglementaires et suivi des anomalies multi-sites
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Application métier complète pour les gestionnaires d'équipements sportifs :
              inspections terrain, suivi des anomalies, rapports réglementaires et dashboard de
              pilotage multi-sites — tout en un.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Android', 'Web', 'iOS bientôt'].map((p) => (
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
                href="https://sports-controls.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Accéder au dashboard →
              </a>
              <a
                href="/contact?sujet=Sports+Controls"
                className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                Demander une démo
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-brand-500/10 to-brand-600/10 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center text-brand-300">
              <div className="text-6xl mb-3">📱</div>
              <p className="text-sm font-medium">Screenshots à venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Fonctionnalités clés</h2>
            <p className="text-slate-400">
              Tout ce dont vos équipes ont besoin sur le terrain et au bureau
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Captures d'écran</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-xl aspect-[9/16] flex items-center justify-center text-slate-300 border border-white/10"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-xs font-medium">Screenshot {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-4">
          Remplacez les placeholders par vos captures dans <code>public/apps/sports-controls/</code>
        </p>
      </section>

      {/* Tarifs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Plans tarifaires</h2>
            <p className="text-slate-400">Essai gratuit 3 mois — sans engagement</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    Populaire
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlight ? 'text-brand-100' : 'text-slate-400'}`}
                >
                  {plan.desc}
                </p>
                <div
                  className={`text-2xl font-extrabold mb-6 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}
                >
                  {plan.price}
                </div>
                <a
                  href="/contact?sujet=Sports+Controls"
                  className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-white text-brand-700 hover:bg-brand-50'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Nous contacter
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Essai gratuit 3 mois · Option catégorie supplémentaire : +90 €/an (Liberté &amp;
            Essentiel) ·{' '}
            <Link href="/contact?sujet=Sports+Controls" className="underline hover:text-slate-300">
              Demander un devis personnalisé
            </Link>
          </p>
        </div>
      </section>

      <LegalLinks
        app="sports-controls"
        descriptions={{
          mentions:
            "Éditeur, hébergement des données (Firebase, serveurs en Europe), portée des contrôles réalisés via l'application, propriété intellectuelle.",
          privacy:
            "Données de compte et d'inspection, usage de l'appareil photo et de la galerie, stockage, partage, conservation et droits RGPD.",
          terms:
            "Ce que l'outil atteste (et ce qu'il n'atteste pas), comptes rattachés à une organisation, contenus publiés, disponibilité et responsabilité.",
        }}
        note={
          <>
            Aucun paiement n&apos;est traité par l&apos;application : les modalités d&apos;accès sont
            convenues directement avec l&apos;éditeur, et des conditions générales de vente
            distinctes seront publiées avant toute facturation.
          </>
        }
      />

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Prêt à démarrer ?</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Demandez votre accès d'essai gratuit — configuration en moins de 10 minutes.
        </p>
        <a
          href="/contact?sujet=Sports+Controls"
          className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
        >
          Demander une démo →
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Sports Controls',
              description:
                'Application mobile et dashboard web pour inspecter, suivre et gérer les équipements sportifs.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'iOS, Android, Web',
              url: 'https://mappli.fr/apps/sports-controls',
              offers: { '@type': 'Offer', price: '490', priceCurrency: 'EUR' },
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Sports Controls' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
