import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Sports Controls",
  description:
    "Conditions générales d'utilisation de l'application Sports Controls (Mappli) : portée de l'outil, comptes et organisations, usage autorisé, disponibilité et responsabilité.",
  robots: { index: false, follow: false },
};

export default function CguSportsControlsPage() {
  return <LegalDocument doc={LEGAL_DOCS['sports-controls'].terms} />;
}
