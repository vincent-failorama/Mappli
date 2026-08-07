import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Gestion locative : bail & EDL",
  description:
    "Conditions générales d'utilisation de l'application Gestion locative — bail & EDL (Mappli) : documents générés, compte, obligations envers les locataires, achats et responsabilité.",
  robots: { index: false, follow: false },
};

export default function CguGestionLocativePage() {
  return <LegalDocument doc={LEGAL_DOCS['gestion-locative'].terms} />;
}
