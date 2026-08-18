import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: 'Mentions légales — Suivi Auto · Moto · Vélo',
  description:
    "Mentions légales de l'application Suivi Auto · Moto · Vélo (Mappli) : éditeur, absence d'hébergement des données, portée de l'application et propriété intellectuelle.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesSuiviAutoPage() {
  return <LegalDocument doc={LEGAL_DOCS['suivi-auto-moto-velo'].mentions} />;
}
