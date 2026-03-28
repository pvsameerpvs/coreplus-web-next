import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InternationalVisaDetailPage from '@/components/pages/InternationalVisaDetailPage';
import { getVisaDetailPage, getVisaDetailParams } from '@/lib/visa-detail-pages';

interface VisaDetailRouteProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisaDetailParams();
}

export async function generateMetadata({ params }: VisaDetailRouteProps): Promise<Metadata> {
  const { category, slug } = await params;
  const page = getVisaDetailPage(category, slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function VisaDetailRoute({ params }: VisaDetailRouteProps) {
  const { category, slug } = await params;
  const page = getVisaDetailPage(category, slug);

  if (!page) {
    notFound();
  }

  return <InternationalVisaDetailPage page={page} />;
}
