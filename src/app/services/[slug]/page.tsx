import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InternationalVisaDetailPage from '@/components/pages/InternationalVisaDetailPage';
import { getServiceDetailPage, getServiceDetailSlugs } from '@/lib/service-detail-pages';

interface ServiceDetailRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetailPage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.page.metaTitle,
    description: service.page.metaDescription,
  };
}

export default async function ServiceDetailRoute({ params }: ServiceDetailRouteProps) {
  const { slug } = await params;
  const service = getServiceDetailPage(slug);

  if (!service) {
    notFound();
  }

  return (
    <InternationalVisaDetailPage
      page={service.page}
      parentHref="/services"
      parentLabel="Services"
      backHref="/services"
      backLabel="View All Services"
      heroEyebrow="Core Plus Business Services"
      overviewIconClassName={service.overviewIconClassName}
      overviewLabel="Service Overview"
      includesText="Service overview, support areas, workflow, value points, and next-step guidance."
      bestForText="Businesses and individuals in the UAE looking for structured, reliable support from an experienced service team."
      supportTitle="Talk to a Service Specialist"
      supportText="Get practical help choosing the right service path and preparing the next step with confidence."
    />
  );
}
