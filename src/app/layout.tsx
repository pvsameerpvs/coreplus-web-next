import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import AosProvider from '@/components/providers/AosProvider';

export const metadata: Metadata = {
  title: 'CorePlus - Business Set Up Services',
  description: 'Company formation, visa processing, and PRO services in the UAE.',
  icons: { icon: '/images/logo_white_text.png' },
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
