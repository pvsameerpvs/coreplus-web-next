import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import VisaRequirementsPage from '@/components/pages/VisaRequirementsPage';
import { buildMetadata } from '@/lib/seo';

interface VisaRequirementsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ category: 'uae' }, { category: 'international' }];
}

export async function generateMetadata({ params }: VisaRequirementsCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (category === 'uae') {
    return buildMetadata({
      title: 'UAE Visa Requirements - CorePlus',
      description:
        'Check UAE visa categories including family, golden, employment, freelance, investor, tourist, and transit visa guidance from Core Plus.',
      path: '/visa-requirements/uae',
      image: '/images/visa_processing 12.jpg',
    });
  }

  if (category === 'international') {
    return buildMetadata({
      title: 'International Visa Requirements - CorePlus',
      description:
        'Explore international visa guidance for destinations including the UK, Schengen, USA, Canada, Australia, Saudi Arabia, Japan, and more.',
      path: '/visa-requirements/international',
      image: '/images/hero-section.jpg',
    });
  }

  return {};
}

export default async function VisaRequirementsCategoryPage({ params }: VisaRequirementsCategoryPageProps) {
  const { category } = await params;

  if (category !== 'uae' && category !== 'international') {
    notFound();
  }

  return <VisaRequirementsPage activeTab={category} />;
}
