import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Bilan Secouriste",
  description:
    "Conditions générales d'utilisation de l'application Bilan Secouriste (Mappli) : portée de l'outil, données de santé, usage autorisé et responsabilité.",
  robots: { index: false, follow: false },
};

export default function CguBilanSecouristePage() {
  return <LegalDocument doc={LEGAL_DOCS['bilan-secouriste'].terms} />;
}
