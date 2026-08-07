import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: 'Mentions légales — Bilan Secouriste',
  description:
    "Mentions légales de l'application Bilan Secouriste (Mappli) : éditeur, hébergement des données, avertissement sur les contenus et propriété intellectuelle.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesBilanSecouristePage() {
  return <LegalDocument doc={LEGAL_DOCS['bilan-secouriste'].mentions} />;
}
