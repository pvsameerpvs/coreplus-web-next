import type { Metadata } from 'next';
import VisaRequirementsPage from '@/components/pages/VisaRequirementsPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Visa Requirements - CorePlus',
  description:
    'Browse UAE and international visa requirements, pricing references, and application support guidance from Core Plus.',
  path: '/visa-requirements',
  image: '/images/visa_processing 12.jpg',
});

export default function VisaRequirementsRootPage() {
  return <VisaRequirementsPage activeTab="uae" />;
}
