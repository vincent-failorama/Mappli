import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../../components/ScrollReveal';
import LegalLinks from '../../../components/LegalLinks';
import {
  FaKey,
  FaFileSignature,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaChartLine,
  FaTools,
  FaUserFriends,
} from 'react-icons/fa';

export const metadata = {
  title: 'Gestion locative — bail & EDL | Application propriétaire bailleur',
  description:
    'Application de gestion locative pour propriétaires bailleurs indépendants : génération de baux conformes (Loi 89, meublé, mobilité), états des lieux, quittances, suivi des loyers, fiscalité et espace locataire.',
  keywords: [
    'gestion locative',
    'bail',
    'état des lieux',
    'quittance de loyer',
    'propriétaire bailleur',
    'SCI LMNP',
    'application location',
    'dépôt de garantie',
  ],
  alternates: { canonical: '/apps/gestion-locative' },
};

const FEATURES = [
  {
    icon: FaFileSignature,
    title: 'Baux PDF conformes',
    description:
      'Génération de baux conformes Loi 89, meublé et mobilité, prêts à signer. Le 1er bail est offert, les suivants via crédits.',
  },
  {
    icon: FaClipboardCheck,
    title: 'États des lieux',
    description:
      "États des lieux d'entrée et de sortie avec photos, inventaires et comparatif automatique entrée / sortie.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Quittances & loyers',
    description:
      'Suivi des loyers, génération de quittances, gestion du dépôt de garantie et des dépenses — le récurrent reste gratuit.',
  },
  {
    icon: FaChartLine,
    title: 'Finances & fiscalité',
    description:
      'Cashflow, rentabilité et aide fiscale (Micro-Foncier / Réel) avec export PDF. Multi-structures : SCI, LMNP, nom propre.',
  },
  {
    icon: FaTools,
    title: 'Incidents & tickets',
    description:
      'Signalement des incidents côté propriétaire et locataire, avec photos, statuts et historique complet.',
  },
  {
    icon: FaUserFriends,
    title: 'Espace locataire',
    description:
      'Un dashboard dédié au locataire : téléchargement des quittances et déclaration des incidents en autonomie.',
  },
];

const PLANS = [
  {
    name: '1er bail',
    price: 'Gratuit',
    desc: "Testez la qualité d'un bail conforme, sans engagement.",
    highlight: false,
  },
  {
    name: "Bail à l'unité",
    price: '14,99 €',
    desc: '1 crédit = 1 nouveau bail PDF (nouveau bien ou nouveau locataire).',
    highlight: false,
  },
  {
    name: 'Pack 3 baux',
    price: '34,99 €',
    desc: '~11,60 € / bail — pour quelques biens.',
    highlight: true,
  },
  {
    name: 'Pack 10 baux',
    price: '99,99 €',
    desc: '~9,90 € / bail — multi-biens et fort turnover.',
    highlight: false,
  },
];

export default function GestionLocativePage() {
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
              <FaKey className="inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Gestion locative — bail &amp; EDL
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              L&apos;application des propriétaires bailleurs indépendants : baux, états des lieux,
              quittances et finances au même endroit
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Centralisez la gestion juridique, financière et administrative de vos biens. Générez
              des baux conformes, réalisez vos états des lieux, éditez vos quittances et suivez
              votre rentabilité — le tout depuis votre mobile, avec un espace dédié pour vos
              locataires.
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
                href="/contact?sujet=Gestion+locative"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Être informé du lancement →
              </a>
              <a
                href="#legal"
                className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                Informations légales
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-brand-500/10 to-brand-600/10 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center text-brand-300">
              <div className="text-6xl mb-3">🏠</div>
              <p className="text-sm font-medium">Screenshots à venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Fonctionnalités clés</h2>
            <p className="text-slate-400">
              Toute la gestion locative d&apos;un bailleur indépendant, sans tableur ni paperasse
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FeatureGrid features={FEATURES} />
          </ScrollReveal>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Captures d&apos;écran</h2>
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
      </section>

      {/* Tarifs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Tarifs</h2>
            <p className="text-slate-400">
              On fait payer l&apos;acte juridique à forte valeur (le bail) — le quotidien reste
              gratuit
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <div
                  className={`h-full rounded-3xl p-7 border transition-transform duration-200 hover:scale-[1.02] ${
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
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="text-2xl font-extrabold mb-4 text-white">{plan.price}</div>
                  <p className={`text-sm ${plan.highlight ? 'text-brand-100' : 'text-slate-400'}`}>
                    {plan.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-slate-400 text-sm mt-8">
            Achats intégrés sécurisés via Google Play. Les quittances, le suivi des loyers, les
            incidents, l&apos;espace locataire et l&apos;EDL restent gratuits.
          </p>
        </div>
      </section>

      <LegalLinks
        app="gestion-locative"
        descriptions={{
          mentions:
            'Éditeur, hébergement (Firebase, fonctions en UE), avertissement sur les documents générés et les indications fiscales, propriété intellectuelle des modèles.',
          privacy:
            'Données de compte, biens, locataires et documents, rôle de sous-traitant pour les données de vos locataires, sous-traitants et droits RGPD.',
          terms:
            'Relecture des documents avant signature, compte, obligations envers vos locataires, achats (pas encore ouverts), usage autorisé et responsabilité.',
        }}
        note={
          <>
            Les achats intégrés ne sont pas encore ouverts : des conditions générales de vente
            distinctes seront publiées avant tout paiement.
          </>
        }
      />

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Bientôt sur Google Play</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Laissez-nous votre contact pour être prévenu dès la sortie de l&apos;application.
        </p>
        <a
          href="/contact?sujet=Gestion+locative"
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
              name: 'Gestion locative — bail & EDL',
              description:
                'Application de gestion locative pour propriétaires bailleurs indépendants : baux conformes, états des lieux, quittances, finances et espace locataire.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Android',
              url: 'https://mappli.fr/apps/gestion-locative',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Gestion locative — bail & EDL' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
