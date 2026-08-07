// Import icons from react-icons/fa
import { FaBuilding, FaFutbol, FaAmbulance, FaHeartbeat, FaKey, FaPlaneDeparture, FaMobileAlt, FaCloud, FaBullseye } from 'react-icons/fa';

export const APPS = [
  {
    icon: FaPlaneDeparture, // Icône d'avion pour Itero.ai
    name: 'Itero.ai',
    tagline: 'Guide de voyage personnalisé',
    description:
      "Application mobile qui génère un guide de voyage complet à partir d'un formulaire : programme jour par jour, budget éco/confort, restaurants, carte, urgences et vocabulaire. Export PDF hors connexion, sans création de compte.",
    platforms: ['Android', 'iOS bientôt'],
    href: '/apps/itero',
  },
  {
    icon: FaKey, // Icône de clé pour la gestion locative
    name: 'Gestion locative — bail & EDL',
    tagline: 'Propriétaires bailleurs indépendants',
    description:
      'Application mobile de gestion locative : baux conformes (Loi 89, meublé, mobilité), états des lieux, quittances, suivi des loyers, fiscalité et espace locataire. 1er bail offert.',
    platforms: ['Android', 'iOS bientôt'],
    href: '/apps/gestion-locative',
  },
  {
    icon: FaBuilding, // Icône de bâtiment pour Signalis
    name: 'Signalis',
    tagline: 'Gestion des signalements communaux',
    description:
      'Plateforme SaaS centralisant la gestion des signalements citoyens et interventions techniques pour les communes. Suivi public, dispatching des agents, astreintes et GMAO.',
    platforms: ['Web', 'Mobile'],
    href: '/apps/signalis',
  },
  {
    icon: FaFutbol, // Icône de ballon de football pour Sports Controls
    name: 'Sports Controls',
    tagline: 'Contrôle des équipements sportifs',
    description:
      'Application mobile et dashboard web pour inspecter, suivre et gérer les équipements sportifs. Rapports PDF automatiques, suivi des anomalies en temps réel, multi-sites.',
    platforms: ['Android', 'Web', 'iOS bientôt'],
    href: '/apps/sports-controls',
  },
  {
    icon: FaHeartbeat, // Icône médicale pour Bilan Secouriste
    name: 'Bilan Secouriste',
    tagline: 'Assistant opérationnel pour secouristes',
    description:
      'Application mobile hors-ligne pour pompiers, ambulanciers et secouristes. Bilan victimes, constantes, urgences vitales (ACR, hémorragie), export PDF SAMU et bases médicales de référence.',
    platforms: ['Android', 'iOS bientôt'],
    href: '/apps/bilan-secouriste',
  },
  {
    icon: FaAmbulance, // Icône d'ambulance pour Planificateur de Garde
    name: 'Planificateur de Garde',
    tagline: 'Sapeurs-Pompiers',
    description:
      "Génération automatique de plannings d'affectation sur engins. Respect des qualifications, des grades et de l'équité. Export PDF et gestion multi-postes.",
    platforms: ['Windows', 'Web'],
    href: '/apps/pompiers-planificateur',
  },
];

export const FEATURES = [
  {
    icon: FaMobileAlt, // Icône de téléphone mobile
    title: 'Mobile-first',
    desc: 'iOS & Android natif ou React Native, pensé pour le terrain. Interface optimisée pour les agents, pas pour les développeurs.',
  },
  {
    icon: FaCloud, // Icône de nuage
    title: 'Cloud & temps réel',
    desc: 'Données synchronisées instantanément, accessibles partout. Infrastructure scalable, sécurisée et haute disponibilité.',
  },
  {
    icon: FaBullseye, // Icône de cible
    title: 'Sur mesure',
    desc: 'Chaque app répond à un besoin métier précis. Pas de fonctionnalités inutiles, juste ce qui compte pour vos équipes.',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'On écoute votre besoin',
    desc: 'Un appel suffit pour comprendre votre contexte, vos contraintes et vos objectifs opérationnels.',
  },
  {
    number: '02',
    title: 'On conçoit la solution',
    desc: 'Maquettes, architecture, stack technique : on vous présente un plan clair avant de coder la moindre ligne.',
  },
  {
    number: '03',
    title: 'On livre et on accompagne',
    desc: 'Déploiement, formation, support. On reste à vos côtés bien après la mise en production.',
  },
];

export const STATS = [
  { value: '1+', label: 'App en production' },
  { value: '100%', label: 'Mobile-first' },
  { value: '60j', label: 'Délai moyen de livraison' },
  { value: '0€', label: 'Commission sur vos revenus' },
];

export const STACK = [
  'Next.js',
  'React Native',
  'Supabase',
  'Firebase',
  'Expo',
  'Tailwind CSS',
  'TypeScript',
  'PostgreSQL',
  'Vercel',
  'AWS',
];
