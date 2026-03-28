import { notFound } from 'next/navigation';
import VisaRequirementsPage from '@/components/pages/VisaRequirementsPage';

interface VisaRequirementsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function VisaRequirementsCategoryPage({ params }: VisaRequirementsCategoryPageProps) {
  const { category } = await params;

  if (category !== 'uae' && category !== 'international') {
    notFound();
  }

  return <VisaRequirementsPage activeTab={category} />;
}
