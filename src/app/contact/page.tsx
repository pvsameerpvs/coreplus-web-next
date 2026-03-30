import type { Metadata } from 'next';
import WhatsAppForm from '@/components/ui/WhatsAppForm';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact - CorePlus',
  description:
    'Contact Core Plus in Al Karama, Dubai for visa processing, PRO services, company formation, and business support in the UAE.',
  path: '/contact',
  image: '/images/logo-core.png',
});

const CONTACT_DETAILS = [
  { icon: 'bi-geo-alt-fill', text: 'Matar Karama Building - Shop No 1 - behind Ansar Gallery - Al Karama - Dubai, UAE' },
  { icon: 'bi-telephone-fill', text: '+971 4329 6602' },
  { icon: 'bi-phone-fill', text: '+971 50 414 5594', href: 'https://wa.me/971504145594' },
  { icon: 'bi-clock-fill', text: 'Mon - Sat: 9:30 AM – 9:30 PM' },
];

export default function ContactPage() {
  return (
    <>
      <div style={{ marginTop: '80px' }} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Row 1: Address + Form */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Contact info */}
            <div className="p-6 bg-white rounded-2xl shadow-lg h-full">
              <h2 className="text-3xl font-bold text-primary mb-3">Contact Us</h2>
              <p className="text-gray-500 mb-6">
                We&apos;re here to assist you with all your PRO, visa, and business setup services. Visit us or get in touch for personalized support.
              </p>
              <ul className="space-y-4">
                {CONTACT_DETAILS.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-gray-700">
                    <i className={`bi ${item.icon} text-primary mt-1 flex-shrink-0`} />
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp form */}
            <WhatsAppForm />
          </div>

          {/* Row 2: Map */}
          <div className="py-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.915448616873!2d55.30547741500285!3d25.2509324838831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43424b6fbc71%3A0x530dce3ba8babbad!2sCORE%20PLUS%20BUSINESS%20SET%20UP%20SERVICES%20L%20L%20C!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              title="CorePlus Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
