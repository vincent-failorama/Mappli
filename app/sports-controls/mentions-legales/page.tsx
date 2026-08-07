import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: 'Mentions légales — Sports Controls',
  description:
    "Mentions légales de l'application Sports Controls (Mappli) : éditeur, hébergement des données, portée des contrôles et propriété intellectuelle.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesSportsControlsPage() {
  return <LegalDocument doc={LEGAL_DOCS['sports-controls'].mentions} />;
}
