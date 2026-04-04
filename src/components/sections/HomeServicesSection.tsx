import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { HOME_SERVICE_SUMMARIES } from '@/lib/home-content';

const serviceMap = new Map(SERVICES.map((service) => [service.id, service]));

export default function HomeServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">Our Visa &amp; Business Support Services</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Core Plus is known as a trusted visa consultancy in Dubai, helping UAE residents with international visit
            visa applications for many destinations worldwide.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-gray-500">
            In addition to visa services, we also provide professional business support solutions in the UAE, helping
            individuals and companies manage administrative processes efficiently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HOME_SERVICE_SUMMARIES.map((summary, index) => {
            const service = serviceMap.get(summary.id);

            if (!service) {
              return null;
            }

            return (
              <Link
                key={summary.id}
                href={`/services/${summary.id}`}
                className="group relative flex min-h-[420px] overflow-hidden rounded-[2rem] border border-black/5 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,44,89,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,44,89,0.2)]"
                data-aos="fade-up"
                data-aos-delay={String(120 + index * 90)}
              >
                <Image
                  src={service.image}
                  alt={summary.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950/90" />

                <div className="relative z-10 flex flex-1 flex-col justify-end p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-2xl text-white backdrop-blur-sm">
                    <i className={`bi ${service.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{summary.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/82">{summary.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Learn more
                    <i className="bi bi-arrow-right" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="180">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: '#0F2C59' }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
