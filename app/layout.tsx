import { Montserrat } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotionProvider from '../components/MotionProvider';

// Chargés uniquement côté client (window / document requis)
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false });
const BokehBackground = dynamic(() => import('../components/BokehBackground'), { ssr: false });

import type { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MAPPLI — Applications mobiles & web sur mesure',
  description:
    'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
  keywords: [
    'applications mobiles',
    'développement sur mesure',
    'b2b',
    'applications web',
    'terrain',
    'iOS',
    'Android',
    'React Native',
    'Next.js',
  ],
  authors: [{ name: 'MAPPLI' }],
  creator: 'MAPPLI',
  publisher: 'MAPPLI',
  metadataBase: new URL('https://mappli.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mappli.fr',
    siteName: 'MAPPLI',
    title: 'MAPPLI — Applications mobiles & web sur mesure',
    description:
      'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
    // L'image est générée par app/opengraph-image.tsx et injectée automatiquement :
    // la déclarer ici l'écraserait.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAPPLI — Applications mobiles & web sur mesure',
    description:
      'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
    // Idem : app/twitter-image.tsx fournit le visuel.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MAPPLI',
  url: 'https://mappli.fr',
  logo: 'https://mappli.fr/og-image.jpg',
  description:
    'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@mappli.fr',
    contactType: 'customer service',
    availableLanguage: 'French',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={montserrat.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#020617] text-white antialiased">
        <MotionProvider>
          <div className="noise" />
          <BokehBackground />
          <CustomCursor />
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main-content" className="relative z-[2] pt-16">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
