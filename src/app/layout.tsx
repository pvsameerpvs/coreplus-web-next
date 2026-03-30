import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import AosProvider from '@/components/providers/AosProvider';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'CorePlus - Business Set Up Services in UAE',
  description: 'Company formation, visa processing, and PRO services in the UAE.',
  applicationName: SITE_NAME,
  keywords: [
    'business setup in Dubai',
    'company formation UAE',
    'visa processing Dubai',
    'PRO services UAE',
    'Core Plus Dubai',
    'visa consultancy Dubai',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [{ url: '/images/fev.png', type: 'image/png' }],
    shortcut: '/images/fev.png',
    apple: '/images/fev.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'CorePlus - Business Set Up Services in UAE',
    description: 'Company formation, visa processing, and PRO services in the UAE.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Core Plus Business Set Up Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CorePlus - Business Set Up Services in UAE',
    description: 'Company formation, visa processing, and PRO services in the UAE.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <AosProvider />
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
