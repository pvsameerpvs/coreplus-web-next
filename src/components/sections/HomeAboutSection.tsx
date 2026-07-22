import Image from 'next/image';
import Link from 'next/link';
import { HOME_ABOUT_HIGHLIGHTS } from '@/lib/home-content';

export default function HomeAboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-right">
            <div className="relative pb-5 pr-5">
              <Image
                src="/images/About us/coreplus- Trusted Visa Consultancy in Dubai.webp"
                alt="Trusted Visa Consultancy in Dubai - CorePlus"
                width={600}
                height={450}
                className="h-auto w-full rounded-2xl shadow-xl"
              />
              <div
                className="absolute bottom-0 right-0 rounded-2xl border-4 border-white px-8 py-5 text-center text-white"
                style={{ background: '#0F2C59', boxShadow: '0 10px 30px rgba(11,87,208,0.4)' }}
              >
                <span className="block text-4xl font-bold">75+</span>
                <span className="mt-1 block text-sm">
                  Countries
                  <br />
                  Supported
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <h5 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">About Core Plus</h5>
            <h2 className="mb-6 text-4xl font-bold">Trusted Visa Consultancy in Dubai for International Travel</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-500">
              Core Plus is a professional visa agency in Dubai providing reliable visa consultancy services for UAE
              residents and expatriates travelling internationally. Our team assists with visit visa applications for
              major destinations worldwide, helping applicants prepare their documents and complete the application
              process with clarity and confidence.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-500">
              Along with international visa assistance, we also support individuals and businesses in the UAE with
              additional services such as PRO services, company formation assistance, and document processing.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-500">
              With a focus on accuracy, transparency, and personalized consultation, Core Plus has become a trusted
              partner for travellers across the UAE.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-4">
              {HOME_ABOUT_HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <i className="bi bi-check-circle-fill text-xl text-primary" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#0F2C59' }}
            >
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
