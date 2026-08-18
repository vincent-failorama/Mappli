import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: "Conditions d'utilisation — Suivi Auto · Moto · Vélo",
  description:
    "Conditions générales d'utilisation de l'application Suivi Auto · Moto · Vélo (Mappli) : portée de l'outil, fonctionnement local, responsabilité de la sauvegarde et gratuité.",
  robots: { index: false, follow: false },
};

export default function CguSuiviAutoPage() {
  return <LegalDocument doc={LEGAL_DOCS['suivi-auto-moto-velo'].terms} />;
}
