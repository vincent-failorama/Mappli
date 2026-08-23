import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import LightboxImage from '../../../components/LightboxImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../../components/ScrollReveal';
import { FaAmbulance, FaUsers, FaCalendarAlt, FaCog, FaFilePdf, FaLock } from 'react-icons/fa';

export const metadata = {
  title: 'Planificateur de Garde — Sapeurs-Pompiers',
  description:
    'Logiciel de planning pompiers : génération automatique des gardes, respect des qualifications et grades, exports PDF. Outil de planification pour centres de secours.',
  keywords: [
    'planning pompiers',
    'planificateur garde sapeurs-pompiers',
    'gestion planning centre secours',
    'logiciel pompiers',
    'affectation engins',
    'planning automatique centre de secours',
    'export PDF planning',
    'qualifications sapeurs-pompiers',
  ],
  alternates: { canonical: '/apps/pompiers-planificateur' },
};

const FEATURES = [
  {
    icon: FaUsers, // Icône de groupe d'utilisateurs
    title: 'Gestion du personnel',
    description:
      "Gestion complète des agents, avec attribution des grades (Sapeur à Commandant) et de 21 qualifications (CA_TE, COD3, SUAP, INC, etc.). Indisponibilités datées et gardes de référence pour les arrivées en cours d'année.",
  },
  {
    icon: FaAmbulance, // Icône d'ambulance
    title: 'Configuration des engins',
    description:
      "Définition personnalisée des engins (VSAV, FPT, VTU, etc.) et configuration des postes (chef d'agrès, conducteur, équipiers) avec leurs qualifications requises.",
  },
  {
    icon: FaCalendarAlt, // Icône de calendrier
    title: 'Grille horaire flexible',
    description:
      'Sélection intuitive des créneaux de garde sur un calendrier, avec support des périodes de 12 heures (jour/nuit) et des cycles multi-semaines.',
  },
  {
    icon: FaCog, // Icône d'engrenage
    title: 'Moteur algorithmique',
    description:
      "Affectation automatique respectant la priorité des engins, l'exclusivité VSAV, le multi-armement, la hiérarchie des grades et l'équité historique.",
  },
  {
    icon: FaFilePdf, // Icône de fichier PDF
    title: 'Export PDF professionnel',
    description:
      'Génération de plannings clairs avec deux mises en page (par engin ou par jour). En-tête personnalisé avec le nom du chef de garde et les dates.',
  },
  {
    icon: FaLock, // Icône de cadenas
    title: '100% Local & Sécurisé',
    description:
      "Fonctionnement sans serveur, sans compte et hors-ligne. Données stockées localement sur l'appareil. La version bureau peut partager ses données entre postes via un fichier déposé dans un dossier synchronisé (Drive, OneDrive…).",
  },
];

export default function PompiersPlanificateurPage() {
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
              <FaAmbulance className="inline-block" /> {/* Rendu de l'icône */}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Planificateur de Garde Sapeurs-Pompiers — Logiciel de planning pour centres de secours
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Génération automatique de plannings d&apos;affectation avec gestion des qualifications
              et exports PDF
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Générez automatiquement le planning d'affectation de votre personnel sur les engins.
              Notre algorithme prend en compte les qualifications, la hiérarchie des grades et
              l'équité pour vous faire gagner un temps précieux à chaque prise de garde.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Windows', 'Android', 'Web'].map((p) => (
                <span
                  key={p}
                  className="bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {/*
                * Essai en premier, demande de demo ensuite : un chef de garde qui decouvre
                * l'outil doit pouvoir l'ouvrir tout de suite. Sans ce lien, la page ne menait
                * nulle part d'autre qu'a un formulaire — aucun centre ne pouvait essayer seul.
                * L'application ne demande ni compte ni installation, et l'essai est complet.
                */}
              <a
                href="https://planning-gardes-sp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Essayer gratuitement →
              </a>
              <a
                href="/contact?sujet=D%C3%A9mo+Planificateur+Pompier"
                className="btn-secondary inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Demander une démo
              </a>
              <a
                href="/guide-planning-gardes-sp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <FaFilePdf aria-hidden="true" />
                Guide utilisateur (PDF)
              </a>
            </div>
          </div>

          {/* Hero screenshot */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />
            <LightboxImage
              src="/screenshots/pompiers-planificateur/phase3-cadre-temporel.png"
              alt="Planning Pompier — cadre temporel jour/nuit"
              width={900}
              height={600}
              className="relative z-10 rounded-xl border border-white/10 shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Galerie workflow en 5 phases */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <span className="text-sm font-bold text-orange-400 uppercase tracking-[0.15em] mb-3 block">
              Le logiciel en action
            </span>
            <h2 className="text-3xl font-bold text-white">5 phases, un planning prêt à imprimer</h2>
            <p className="text-slate-400 mt-3">
              Deux écrans complètent le parcours : l&apos;Historique, qui montre la répartition des
              gardes par agent sur 16 semaines, et les Paramètres.
            </p>
          </ScrollReveal>
          <StaggerContainer className="space-y-6">
            {[
              {
                src: '/screenshots/pompiers-planificateur/phase1-personnel.png',
                phase: '01',
                label: 'Personnel',
                desc: 'Saisie des agents, grades et qualifications',
              },
              {
                src: '/screenshots/pompiers-planificateur/phase2-vehicules.png',
                phase: '02',
                label: 'Véhicules & Postes',
                desc: 'Définition des engins et postes requis (VSAV, VTU, FPTHR…)',
              },
              {
                src: '/screenshots/pompiers-planificateur/phase3-cadre-temporel.png',
                phase: '03',
                label: 'Cadre Temporel',
                desc: 'Sélection des créneaux jour/nuit sur le calendrier',
              },
              {
                src: '/screenshots/pompiers-planificateur/phase4-constitution-equipe.jpg',
                phase: '04',
                label: 'Constitution Équipe',
                desc: 'Sélection des agents pour la période de garde',
              },
              {
                src: '/screenshots/pompiers-planificateur/phase5-generation-pdf.jpg',
                phase: '05',
                label: 'Génération PDF',
                desc: 'Calcul de la rotation et export du planning final',
              },
            ].map(({ src, phase, label, desc }) => (
              <StaggerItem key={phase} variant="left">
                <div className="group flex flex-col sm:flex-row gap-5 items-start bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 hover:border-white/20 hover:bg-white/[0.06] transition-colors duration-300">
                  <div className="shrink-0 flex items-center gap-4 sm:w-52">
                    <span className="text-4xl font-black text-white/10 group-hover:text-orange-500/40 transition-colors leading-none">
                      {phase}
                    </span>
                    <div>
                      <p className="font-bold text-white text-sm">{label}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                  <LightboxImage
                    src={src}
                    alt={`Planning Pompier — ${label}`}
                    width={900}
                    height={550}
                    className="rounded-lg border border-white/10 shadow-lg w-full h-auto"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Fonctionnalités du Planificateur</h2>
            <p className="text-slate-400">
              Conçu spécifiquement pour les contraintes opérationnelles des centres de secours
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FeatureGrid features={FEATURES} />
          </ScrollReveal>
        </div>
      </section>

      {/* Détails Techniques */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Au cœur du moteur de planification
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Règles d'affectation strictes</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>
                  <strong>Hiérarchie des qualifications :</strong> Une qualification supérieure (ex:
                  CA_TE) couvre automatiquement les besoins inférieurs (ex: CA_VSAV).
                </li>
                <li>
                  <strong>Exclusivité VSAV :</strong> Un agent affecté au VSAV 1 est bloqué sur cet
                  engin et ne peut être double-armé sur le même créneau. Les VSAV supplémentaires
                  (VSAV 2, 3…) restent cumulables avec un autre engin, mais jamais entre eux.
                </li>
                <li>
                  <strong>Multi-armement :</strong> Possibilité d'affecter un même agent sur
                  plusieurs engins secondaires (FPT + VTU) : il part avec celui qui sort.
                </li>
                <li>
                  <strong>Privilège des grades :</strong> Sur le poste d'équipier VSAV, les Sapeurs
                  et Caporaux passent en priorité, pour laisser les Sous-Officiers disponibles sur
                  les postes à responsabilités.
                </li>
                <li>
                  <strong>Équité sur 16 semaines :</strong> À qualification égale, l'algorithme fait
                  d'abord tourner les rôles et les engins ; le nombre total de gardes n'intervient
                  qu'en dernier recours. À données identiques, le planning généré est toujours le
                  même.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Architecture & Stack Technique</h3>
              <p className="text-slate-300 mb-4">
                Développé par Vincent Morvezen, l'application s'appuie sur une stack moderne et
                performante :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 16',
                  'React 19',
                  'TypeScript 5',
                  'Tailwind CSS 4',
                  'shadcn/ui',
                  'Electron',
                  'Capacitor',
                  'Framer Motion',
                  'jsPDF',
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
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simplifiez vos prises de garde</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Fini les casse-têtes sur tableau blanc. Générez, ajustez et imprimez vos plannings en
          quelques clics.
        </p>
        <a
          href="/contact?sujet=Planificateur+Pompier"
          className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
        >
          Nous contacter pour ce projet →
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Planificateur de Garde',
              description:
                'Application de génération de planning de garde pour centres de secours. Moteur algorithmique, gestion des qualifications et exports PDF.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Windows, Android, Web',
              url: 'https://mappli.fr/apps/pompiers-planificateur',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Planificateur de Garde' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
