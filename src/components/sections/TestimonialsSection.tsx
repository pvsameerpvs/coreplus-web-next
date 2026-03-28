import Link from 'next/link';
import WhatsAppForm from '@/components/ui/WhatsAppForm';
import { TESTIMONIALS, WA_NUMBER } from '@/lib/constants';
import {
  GOOGLE_BUSINESS_EMBED_URL,
  GOOGLE_BUSINESS_PROFILE_URL,
  HOME_TRUST_SIGNALS,
} from '@/lib/home-content';

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">What Clients Say About Core plus</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Trusted by travellers across the UAE — read real experiences from our satisfied clients.
          </p>
        </div>

        <div className="mb-12 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div
            className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_60px_rgba(15,44,89,0.08)]"
            data-aos="fade-right"
          >
            <div className="border-b border-black/5 p-8">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
                Google Business Profile
              </span>
              <h3 className="mt-4 text-3xl font-bold text-primary">See Core Plus on Google and explore customer feedback</h3>
              <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                View our Google Business profile, location details, and customer feedback directly from our official
                listing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_BUSINESS_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: '#0F2C59' }}
                >
                  Open Google Reviews
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/15 px-6 py-3 font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Visit Our Office
                </Link>
              </div>
            </div>

            <div className="p-4 pt-0 md:p-8 md:pt-0">
              <iframe
                src={GOOGLE_BUSINESS_EMBED_URL}
                width="100%"
                height="360"
                style={{ border: 0, borderRadius: '24px' }}
                allowFullScreen
                loading="lazy"
                title="Core Plus Google Business Profile"
              />
            </div>
          </div>

          <div className="grid gap-6" data-aos="fade-left">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={`${testimonial.initials}-${testimonial.role}`}
                className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_rgba(15,44,89,0.08)]"
                data-aos="fade-up"
                data-aos-delay={String(120 + index * 80)}
              >
                <div className="mb-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <i key={`${testimonial.initials}-star-${starIndex}`} className="bi bi-star-fill" />
                  ))}
                </div>
                <p className="text-base italic leading-7 text-gray-500">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${testimonial.avatarColor}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <div
            className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(15,44,89,0.08)]"
            data-aos="fade-right"
          >
            <span className="inline-flex rounded-full bg-primary/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Instant Guidance
            </span>
            <h2 className="mt-4 text-4xl font-bold text-primary">Talk to the Expert Visa Consultant in Dubai</h2>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              Planning international travel from the UAE? Connect instantly with our visa consultants to get guidance
              for your visit visa application. Our team helps you understand requirements, documents, and the
              application process before you start.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {HOME_TRUST_SIGNALS.map((signal) => (
                <div
                  key={signal}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.04] px-4 py-2 text-sm font-semibold text-primary"
                >
                  <i className="bi bi-check-circle-fill" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#0F2C59' }}
            >
              Chat with Visa Expert
            </a>
          </div>

          <div data-aos="fade-left">
            <div className="mb-5 px-2">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
                WhatsApp Lead Form
              </span>
              <h3 className="mt-4 text-3xl font-bold text-primary">Start your enquiry with the right support team</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Share your details and enquiry type, and our team will continue the conversation directly on WhatsApp.
              </p>
            </div>
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </section>
  );
}
