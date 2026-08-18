import type { Metadata } from 'next';
import LegalDocument from '../../../components/LegalDocument';
import { LEGAL_DOCS } from '../../data/legalDocs';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Suivi Auto · Moto · Vélo',
  description:
    "Politique de confidentialité de l'application Suivi Auto · Moto · Vélo (Mappli) : aucune collecte, aucun serveur, permissions demandées, sauvegardes et droits RGPD.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialiteSuiviAutoPage() {
  return <LegalDocument doc={LEGAL_DOCS['suivi-auto-moto-velo'].privacy} />;
}
