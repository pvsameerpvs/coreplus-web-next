import type { Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'CorePlus - Business Set Up Services in UAE',
  description: 'Trusted business setup, visa processing, and PRO services in Dubai and across the UAE with Core Plus.',
  path: '/',
});

export default HomePage;
