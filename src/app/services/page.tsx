import type { Metadata } from 'next';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = { title: 'Services - CorePlus' };

const PRO_ITEMS = [
  'Trade License Application & Renewal',
  'Establishment Card Services',
  'Notarization & Attestation',
  'Emirates ID Typing',
  'Medical Typing',
  'Equivalency Certificate',
  'Tasheel & Amer Services',
  'Government Approvals & Liaisons',
];

export default function ServicesPage() {
  return (
    <>
      <div style={{ marginTop: '80px' }} />

      {/* SERVICES OVERVIEW */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="relative rounded-2xl overflow-hidden shadow-lg text-white flex flex-col"
                style={{ minHeight: '380px', background: '#1a1a1a' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${svc.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Overlay */}
                <div className="card-overlay" />
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-end flex-1">
                  <i className={`bi ${svc.icon} text-5xl ${svc.iconColor} mb-4 block`} />
                  <h5 className="font-bold text-lg mb-3" style={{ color: '#DAC0A3' }}>{svc.title}</h5>
                  <p className="text-sm text-white/85 leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Services card */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg text-white"
            style={{ minHeight: '250px', background: '#1a1a1a' }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/other serives.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="card-overlay" />
            <div className="relative z-10 p-10 text-left">
              <i className="bi bi-globe2 text-5xl text-white/80 mb-4 block" />
              <h5 className="font-bold text-xl mb-3" style={{ color: '#DAC0A3' }}>Other Services</h5>
              <p className="text-white/90 leading-relaxed max-w-3xl">
                At <strong>CorePlus</strong>, we provide end-to-end business support services in the UAE — including{' '}
                <strong>PRO Services</strong>, <strong>Visa Processing</strong>, <strong>Company Formation & Licensing</strong>,
                and <strong>Global Visa Assistance</strong>. Our expertise also covers{' '}
                <strong>Document Clearing</strong>, <strong>Typing & Translation</strong>,{' '}
                <strong>Emirates ID & Medical Typing</strong>, <strong>Trade Name & License Renewal</strong>,{' '}
                <strong>Tourist & Visit Visa Processing</strong>, and <strong>Business Consultancy</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRO SERVICES DETAIL */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">PRO Services</h2>
            <p className="text-gray-500 text-lg font-semibold mt-3 max-w-2xl mx-auto">
              Professional handling of government-related documentation, approvals, and legal processes on behalf of companies or individuals in the UAE.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/pro image.png"
                alt="PRO Services in UAE"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>PRO (Public Relations Officer) Services</strong> form the backbone of every successful business operation in the UAE. Our experienced PROs handle all government-related tasks efficiently, saving you time and ensuring compliance.
              </p>
              <ul className="space-y-3">
                {PRO_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <i className="bi bi-check-circle-fill text-primary text-lg flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
