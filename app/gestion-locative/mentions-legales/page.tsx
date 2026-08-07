import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: 'Mentions légales — Gestion locative : bail & EDL',
  description:
    "Mentions légales de l'application Gestion locative — bail & EDL (Mappli) : éditeur, hébergement, avertissement sur les documents générés et propriété intellectuelle.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesGestionLocativePage() {
  return <LegalDocument doc={LEGAL_DOCS['gestion-locative'].mentions} />;
}
