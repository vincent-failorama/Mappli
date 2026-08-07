import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import { FaBuilding, FaMobileAlt, FaChartBar, FaHardHat, FaMoon, FaTractor, FaPlug } from 'react-icons/fa';

export const metadata = {
  title: 'Signalis — Gestion des signalements pour les communes',
  description:
    'Logiciel de signalement mairie : gérez les signalements citoyens, interventions techniques, astreintes et GMAO depuis une seule plateforme SaaS. Essai gratuit 60 jours.',
  keywords: [
    'gestion signalements communes',
    'plateforme SaaS collectivités',
    'signalements citoyens',
    'interventions techniques mairie',
    'GMAO commune',
    'application mairie',
    'gestion astreintes',
    'suivi interventions terrain',
  ],
  alternates: { canonical: '/apps/signalis' },
};

/**
 * Catalogue des 25 modules — repris du dépôt Signalis : liste et descriptions de sa
 * landing (`app/page.tsx`), complétées par le module Urbanisme (présent au catalogue
 * commercial mais absent de ses cartes). Les familles reprennent la colonne « Cible »
 * du tableau de CLAUDE.md.
 *
 * À maintenir en phase avec signalis.fr : un module vendu et non listé ici, ou l'inverse,
 * se voit immédiatement côté prospect.
 */
const MODULE_FAMILIES = [
  {
    family: 'Services techniques',
    modules: [
      ['Signalements', 'Demandes citoyennes géolocalisées et suivies'],
      ['Interventions', 'Prise en charge terrain par les agents'],
      ['Matériel & GMAO', 'Parc, pannes, maintenance, carburant, API REST'],
      ['Espaces verts', 'Entretien, récurrences, registre phyto réglementaire'],
      ['Astreintes', 'Planning, arbre décisionnel et suivi des astreintes'],
      ['Prêts de véhicules', 'Réservation et état des lieux'],
      ['Énergie & Fluides', 'Compteurs et relevés'],
    ],
  },
  {
    family: 'Secrétariat, actes & finances',
    modules: [
      ['Actes & Arrêtés', 'Rédaction, signature, publication'],
      ['Courrier', 'Registre arrivée / départ, chrono, échéances'],
      ['État civil', 'Actes de naissance, mariage, décès'],
      ['Cimetière', 'Concessions, plan, marbrerie, reprises'],
      ['Démarches en ligne', 'Guichet citoyen paramétrable'],
      ['Urbanisme', 'Guichet ADS, délais légaux, actes, export EPCI'],
      ['GED / Archivage', 'Documents, plan de classement, durées légales'],
      ['Régie de recettes', 'Titres, encaissements, état de caisse, PES V2 & PayFiP'],
    ],
  },
  {
    family: 'Vie locale & élus',
    modules: [
      ['Associations', 'Répertoire et subventions'],
      ['Conseil municipal', 'Séances, délibérations, convocations'],
      ['Manifestations', 'Événements, logistique, inscriptions'],
      ['Réservation de salles', 'Créneaux, caution, tarification'],
    ],
  },
  {
    family: 'RH, sécurité & prévention',
    modules: [
      ['Congés & Absences RH', 'Demandes, soldes, planning, validateurs par service'],
      ['Habilitations RH', 'Permis, formations, échéances'],
      ['Police municipale', 'PV, objets trouvés, fourrière'],
      ['Alertes & PCS', 'Risques, population vulnérable, contacts de crise'],
      ['DUERP', 'Risques pro, cotation, versioning, plan d’actions'],
    ],
  },
  {
    family: 'Transversal',
    modules: [['Rapports & Exports', 'Statistiques et exports CSV / PDF']],
  },
];

const MODULE_COUNT = MODULE_FAMILIES.reduce((n, f) => n + f.modules.length, 0);

const PACKS = [
  { nom: 'Pack Technique', modules: 'Interventions · Matériel · Astreintes · Espaces verts' },
  {
    nom: 'Pack Secrétariat',
    modules: 'Arrêtés · Cimetière · État civil · Courrier · Démarches',
  },
  {
    nom: 'Pack Sécurité & RH',
    modules: 'Police municipale · Congés RH · Alertes & PCS · Habilitations · DUERP',
  },
  { nom: 'Pack Vie locale', modules: 'Associations · Conseil municipal · Manifestations' },
  { nom: 'Pack Complet', modules: `Les ${MODULE_COUNT} modules, sans exception`, featured: true },
];

const FEATURES = [
  {
    icon: FaMobileAlt, // Icône de téléphone mobile
    title: 'Signalements citoyens',
    description:
      'Formulaire public sans compte, carte interactive, suivi par email, géolocalisation. Le citoyen suit l\'avancement de sa demande en temps réel.',
  },
  {
    icon: FaChartBar, // Icône de graphique à barres
    title: 'Tableau de bord',
    description:
      'Statistiques en temps réel, alertes automatiques, KPIs avancés. Actualisation instantanée via Supabase Realtime pour ne rien manquer.',
  },
  {
    icon: FaHardHat, // Icône de casque de chantier
    title: 'Gestion des interventions',
    description:
      'Assignation en un clic, photos avant/après, suivi des statuts, exports CSV et PDF. Historique complet par signalement.',
  },
  {
    icon: FaMoon, // Icône de lune
    title: 'Module Astreinte',
    description:
      'Arbre décisionnel pour les urgences nocturnes, checklist d\'intervention, planning interactif sur 12 semaines pour agents et élus.',
  },
  {
    icon: FaTractor, // Icône de tracteur
    title: 'Matériel & Maintenance',
    description:
      'Inventaire du parc, suivi des pannes, calcul du coût de possession, suivi du carburant et kilométrage. Planning de maintenance préventive.',
  },
  {
    icon: FaPlug, // Icône de prise électrique
    title: 'Interopérabilité GMAO',
    description:
      'API REST v1 sécurisée pour intégration avec vos logiciels existants. Synchronisation des matériels, pannes et maintenances.',
  },
];

export default function SignalisPage() {
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
              <FaBuilding className="inline-block" /> {/* Rendu de l'icône */}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Signalis — Logiciel de gestion des signalements pour les communes
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Plateforme SaaS tout-en-un pour collectivités : signalements citoyens, interventions, GMAO
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Centralisez toute la chaîne de gestion communale : du signalement citoyen jusqu'à l'intervention de l'agent, en passant par le secrétariat, les finances, les RH et la sécurité civile. {MODULE_COUNT} modules activables un par un, données isolées par commune, journal d'audit immuable.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Web', 'Mobile', 'SaaS', 'API'].map((p) => (
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
                href="https://signalis.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Voir signalis.fr →
              </a>
              <a
                href="/contact?sujet=D%C3%A9mo+Signalis"
                className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center text-blue-300">
              <div className="text-6xl mb-3">💻</div>
              <p className="text-sm font-medium">Aperçu de la plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Une solution tout-en-un
            </h2>
            <p className="text-slate-400">
              Des modules métiers pensés pour le quotidien des agents, élus et citoyens
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Catalogue des modules */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-3 block">
              Catalogue
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              {MODULE_COUNT} modules, activables un par un
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Toute la gestion communale — services techniques, secrétariat, finances, vie locale,
              RH et sécurité civile. Vous n&apos;activez que ce dont vous avez besoin, et vous
              ajoutez le reste quand vous le voulez.
            </p>
          </div>

          <div className="space-y-10">
            {MODULE_FAMILIES.map(({ family, modules }) => (
              <div key={family}>
                <h3 className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-4">
                  {family}
                  <span className="text-slate-500 font-semibold normal-case tracking-normal ml-2">
                    · {modules.length} modules
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {modules.map(([name, desc]) => (
                    <div
                      key={name}
                      className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <h4 className="font-bold text-white text-sm mb-1">{name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Détails Techniques & Modules */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Conçu pour les collectivités
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Points forts de l'architecture
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>
                  <strong>Multi-tenant :</strong> Chaque commune dispose de données strictement isolées (Row Level Security).
                </li>
                <li>
                  <strong>Permissions granulaires (RBAC) :</strong> Matrice de permissions par rôle avec exceptions individuelles.
                </li>
                <li>
                  <strong>Photos optimisées :</strong> Compression côté client avant upload, réduisant les coûts de stockage de 70%.
                </li>
                <li>
                  <strong>Zéro maintenance :</strong> Hébergement managé sur Vercel et Supabase. Mises à jour transparentes.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Stack Technique
              </h3>
              <p className="text-slate-300 mb-4">
                Une base technologique moderne assurant performance, sécurité et maintenabilité :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 14',
                  'TailwindCSS',
                  'shadcn/ui',
                  'Supabase',
                  'PostgreSQL',
                  'Resend',
                  'Sentry',
                  'PostHog',
                  'Playwright',
                  'GitHub Actions',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Packs & tarification</h3>
              <p className="text-slate-300 mb-5">
                Facturation annuelle sur bon de commande, compatible CHORUS. Des packs pensés par
                métier, ou des modules à la carte — le tarif dépend des modules retenus et de la
                taille de la commune.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {PACKS.map(({ nom, modules, featured }) => (
                  <div
                    key={nom}
                    className={`rounded-2xl p-4 border ${
                      featured
                        ? 'bg-brand-600/20 border-brand-400/40'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-bold text-white text-sm">{nom}</h4>
                      <span className="text-sky-400 text-xs font-semibold shrink-0">Sur devis</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1.5">{modules}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 italic">
                Essai 60 jours sans engagement. Devis personnalisé selon vos modules et votre
                population (communes de 1 000 à 10 000 habitants).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Modernisez votre commune dès aujourd'hui</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Profitez d'un essai gratuit de 60 jours pour valider la solution avec vos équipes, sans engagement.
        </p>
        <div className="flex gap-4 justify-center">
            <a
            href="https://signalis.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
            >
            Découvrir signalis.fr →
            </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Signalis',
              description:
                'Plateforme SaaS de gestion des signalements citoyens et interventions techniques pour les communes françaises.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Mobile',
              url: 'https://mappli.fr/apps/signalis',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Signalis' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}