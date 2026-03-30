import type { MetadataRoute } from 'next';
import { getServiceDetailSlugs } from '@/lib/service-detail-pages';
import { getVisaDetailParams } from '@/lib/visa-detail-pages';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/visa-requirements',
    '/visa-requirements/uae',
    '/visa-requirements/international',
  ];

  const serviceRoutes = getServiceDetailSlugs().map((slug) => `/services/${slug}`);
  const visaRoutes = getVisaDetailParams().map(({ category, slug }) => `/visa-requirements/${category}/${slug}`);

  return [...staticRoutes, ...serviceRoutes, ...visaRoutes].map((path) => ({
    url: `${SITE_URL}${path || '/'}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
