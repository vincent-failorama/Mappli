import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import LightboxImage from '../../../components/LightboxImage';
import LegalLinks from '../../../components/LegalLinks';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../../components/ScrollReveal';
import { FaHeartbeat, FaBolt, FaUsers, FaFilePdf, FaLock, FaBook } from 'react-icons/fa';

export const metadata = {
  title: 'Bilan Secouriste — Assistant opérationnel pour secouristes',
  description:
    'Application mobile hors-ligne pour pompiers, ambulanciers et secouristes. Bilan victimes, urgences vitales, constantes, export PDF SAMU.',
  keywords: [
    'bilan secouriste',
    'application secours à personne',
    'bilan victime pompiers',
    'ACR arrêt cardiaque application',
    'constantes médicales secouriste',
    'export PDF SAMU',
    'application hors-ligne urgences',
    'PSE1 PSE2 outil',
    'ambulancier application',
  ],
  alternates: { canonical: '/apps/bilan-secouriste' },
};

const FEATURES = [
  {
    icon: FaBolt,
    title: 'Urgences vitales guidées',
    description:
      'Protocoles ACR (arrêt cardiaque) avec minuteur intégré, hémorragie & garrot, détresse respiratoire, bilan X-ABCDE. Chaque étape est guidée pas à pas.',
  },
  {
    icon: FaHeartbeat,
    title: 'Constantes & surveillance',
    description:
      'Saisie complète : FC, PA, SpO2, glycémie, FR, température, EVA. Mesures horodatées, courbes de tendance en temps réel et bilan neurologique (Glasgow, pupilles).',
  },
  {
    icon: FaUsers,
    title: 'Multi-victimes',
    description:
      'Gestion simultanée de plusieurs victimes sur un même incident. Chaque bilan est indépendant avec son propre suivi de constantes et son historique.',
  },
  {
    icon: FaFilePdf,
    title: 'Export PDF professionnel',
    description:
      "Génération d'un compte rendu d'intervention au format SAMU/Centre 15. Inclut constantes, traumatismes, photos horodatées et géolocalisation.",
  },
  {
    icon: FaLock,
    title: '100% hors-ligne',
    description:
      "Aucune connexion réseau requise. Toutes les données restent sur l'appareil. Fonctionne en zone blanche, dans les tunnels ou sur les interventions les plus isolées.",
  },
  {
    icon: FaBook,
    title: 'Bases médicales de référence',
    description:
      '218 médicaments avec doses toxiques et interactions critiques, 184 pathologies classées par système, toxicologie, brûlures (règle des 9), obstétrique (score de Malinas).',
  },
];

export default function BilanSecouristePage() {
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
              <FaHeartbeat className="inline-block text-red-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Bilan Secouriste — Application d&apos;aide aux pompiers et secouristes
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Bilans victimes, protocoles urgences vitales et export PDF SAMU — entièrement
              hors-ligne
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Conçu pour les pompiers, ambulanciers, infirmiers SMUR et secouristes PSE, Bilan
              Secouriste guide de la prise en charge d'une victime jusqu'à la transmission au Centre
              15. Protocoles d'urgences vitales, suivi des constantes, export PDF et bases médicales
              de référence — entièrement hors-ligne.
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
                href="/contact?sujet=Bilan+Secouriste"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Nous contacter →
              </a>
              <a
                href="#legal"
                className="btn-secondary border border-white/20 text-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-white/40 transition-colors text-sm flex items-center"
              >
                Informations légales
              </a>
            </div>
          </div>

          {/* Hero screenshot — écran principal */}
          <div className="relative flex justify-center">
            <div className="relative w-[260px] sm:w-[300px]">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full scale-110 pointer-events-none" />
              <LightboxImage
                src="/screenshots/bilan-secouriste/Screenshot_1778942154.png"
                alt="Bilan Secouriste — écran principal"
                width={280}
                height={560}
                className="relative z-10 rounded-[2.5rem] shadow-2xl border border-white/10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie de screenshots */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <span className="text-sm font-bold text-red-400 uppercase tracking-[0.15em] mb-3 block">
              Aperçu de l&apos;application
            </span>
            <h2 className="text-3xl font-bold text-white">L&apos;interface en situation réelle</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-end justify-items-center">
            {[
              {
                src: '/screenshots/bilan-secouriste/Screenshot_1778942733.png',
                alt: 'Constantes & Identité',
              },
              {
                src: '/screenshots/bilan-secouriste/Screenshot_1778942201.png',
                alt: 'Bilan neurologique — Glasgow & AVC',
              },
              {
                src: '/screenshots/bilan-secouriste/Screenshot_1778942154.png',
                alt: 'Écran principal',
              },
              {
                src: '/screenshots/bilan-secouriste/Screenshot_1778942246.png',
                alt: 'Douleur thoracique — HEART score',
              },
              {
                src: '/screenshots/bilan-secouriste/Screenshot_1778942303.png',
                alt: 'Brûlures — règle des 9',
              },
            ].map(({ src, alt }, i) => (
              // `col-span`/`z-10` doivent rester sur l'enfant de grille ; `scale-110`
              // reste à l'intérieur, sinon le transform inline de Framer l'écrase.
              <StaggerItem key={i} className={i === 2 ? 'col-span-1 z-10' : ''}>
                <div className={`relative group ${i === 2 ? 'scale-110' : ''}`}>
                  <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <LightboxImage
                    src={src}
                    alt={alt}
                    width={200}
                    height={400}
                    className="rounded-[2rem] border border-white/10 shadow-xl w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
                  />
                  <p className="text-center text-xs text-slate-500 mt-2 px-1">{alt}</p>
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
            <h2 className="text-3xl font-bold text-white mb-3">
              Fonctionnalités de Bilan Secouriste
            </h2>
            <p className="text-slate-400">
              Conçu pour le terrain, optimisé pour les situations de stress
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
            Architecture & détails techniques
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Outils spécialisés</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>
                  <strong>Géolocalisation GPS :</strong> adresse et coordonnées automatiques pour la
                  transmission au Centre 15.
                </li>
                <li>
                  <strong>Calculateur O₂ :</strong> autonomie bouteille selon débit et volume.
                </li>
                <li>
                  <strong>Guide ECG :</strong> placement des électrodes, dérivations 12 pistes.
                </li>
                <li>
                  <strong>Traumatologie :</strong> lésions par zone anatomique avec photos
                  horodatées (compression automatique 10×).
                </li>
                <li>
                  <strong>Minuteur garrot persistant :</strong> notification en arrière-plan, même
                  application fermée.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Stack Technique</h3>
              <p className="text-slate-300 mb-4">
                Développé par Vincent Morvezen, l'application s'appuie sur une stack React Native
                moderne :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React Native 0.81',
                  'Expo SDK 54',
                  'React Navigation 7',
                  'AsyncStorage',
                  'expo-print',
                  'expo-location',
                  'expo-camera',
                  'react-native-chart-kit',
                  'EAS Build',
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
              <h3 className="text-xl font-bold text-white mb-4">Confidentialité & données</h3>
              <p className="text-slate-300 mb-3">
                Toutes les données (bilans, constantes, photos) sont stockées{' '}
                <strong>uniquement sur l'appareil</strong> via AsyncStorage. Aucun serveur, aucun
                tracker, aucune connexion réseau.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Zéro collecte de données personnelles</li>
                <li>Pas de SDK publicitaire ni d'analyse</li>
                <li>Partage uniquement à l'initiative explicite de l'utilisateur (export PDF)</li>
                <li>
                  <Link href="/bilan-secouriste/privacy" className="text-brand-400 hover:underline">
                    Lire la politique de confidentialité complète →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LegalLinks
        app="bilan-secouriste"
        descriptions={{
          mentions:
            "Éditeur, hébergement (aucun serveur : tout reste sur l'appareil), avertissement sur les protocoles et les bases médicales, propriété intellectuelle.",
          privacy:
            "Aucune donnée collectée, aucune transmission, aucun traceur. Permissions Android utilisées et responsabilité de l'utilisateur sur les données de santé.",
          terms:
            "Portée de l'outil (aide opérationnelle, pas un dispositif médical), perte des données en cas de désinstallation, usage autorisé, responsabilité.",
        }}
        note={
          <>
            L&apos;application est gratuite et ne propose aucun achat intégré. Les mêmes mentions
            sont consultables dans l&apos;application, écran «&nbsp;Mentions légales&nbsp;».
          </>
        }
      />

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Disponible sur iOS & Android</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Pour toute question sur l'application ou un projet similaire, contactez-nous.
        </p>
        <a
          href="/contact?sujet=Bilan+Secouriste"
          className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
        >
          Nous contacter →
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Bilan Secouriste',
              description:
                'Application mobile hors-ligne pour pompiers, ambulanciers et secouristes. Bilan victimes, urgences vitales, constantes, export PDF SAMU.',
              applicationCategory: 'MedicalApplication',
              operatingSystem: 'iOS, Android',
              url: 'https://mappli.fr/apps/bilan-secouriste',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Bilan Secouriste' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
