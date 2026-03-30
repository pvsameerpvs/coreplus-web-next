import type { Metadata } from 'next';

export const SITE_URL = 'https://coreplusdxb.ae';
export const SITE_NAME = 'Core Plus Business Set Up Services LLC';
export const DEFAULT_OG_IMAGE = '/images/hero-section.jpg';

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
}: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
