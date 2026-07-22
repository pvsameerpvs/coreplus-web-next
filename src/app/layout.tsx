import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';
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
  verification: {
    google: 'C94nccqwsrLuhARF1HXWE1IErhLmKeHqJ5tw184rN-o',
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCGXQRGG');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCGXQRGG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
