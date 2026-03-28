import Image from 'next/image';
import Link from 'next/link';
import { VISA_DATA } from '@/lib/constants';
import { HOME_DESTINATIONS } from '@/lib/home-content';
import { getVisaDetailHref } from '@/lib/visa-detail-pages';

const visaMap = new Map(
  VISA_DATA.filter((visa) => visa.category === 'international').map((visa) => [visa.id, visa])
);

export default function HomeDestinationsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">International Visa Services from Dubai</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Our visa consultants assist UAE residents with visit visa applications for many popular travel destinations.
            We guide applicants through the documentation, application process, and embassy requirements to help ensure
            a smooth visa experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {HOME_DESTINATIONS.map((destination, index) => {
            const visa = visaMap.get(destination.id);

            if (!visa) {
              return null;
            }

            return (
              <Link
                key={destination.id}
                href={getVisaDetailHref(visa)}
                className="group relative flex min-h-[360px] overflow-hidden rounded-[2rem] border border-black/5 bg-slate-950 text-white shadow-[0_20px_50px_rgba(15,44,89,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,44,89,0.18)]"
                data-aos="fade-up"
                data-aos-delay={String(100 + index * 80)}
              >
                <Image
                  src={visa.image}
                  alt={destination.title}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-slate-950/92" />

                <div className="relative z-10 flex flex-1 flex-col justify-end p-6">
                  <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm">
                    International Visa
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">{destination.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Expert support for eligibility, document checks, and the complete application process.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    View visa details
                    <i className="bi bi-arrow-right" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="180">
          <Link
            href="/visa-requirements/international"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: '#0F2C59' }}
          >
            Explore More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
