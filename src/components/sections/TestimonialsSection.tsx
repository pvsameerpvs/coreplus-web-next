'use client';

import { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>('.testimonial-card');
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0';
            setTimeout(() => el.classList.add('show'), parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <h5 className="uppercase text-primary font-bold text-sm tracking-widest mb-2">What Our Clients Say</h5>
          <h2 className="text-4xl font-bold mb-3">Success Stories</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Over <strong className="text-primary">100+</strong> satisfied customers trust{' '}
            <strong>CorePlus</strong> for reliable PRO, visa, and business setup services.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials + t.role}
              className="testimonial-card h-full p-6 bg-white rounded-2xl shadow-sm border border-black/[0.03] relative"
              data-delay={String(t.delay)}
            >
              {/* Quote icon */}
              <div className="absolute top-3 right-4 text-primary opacity-20 text-5xl leading-none">
                <i className="bi bi-quote" />
              </div>
              <p className="italic text-gray-500 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${t.avatarColor}`}
                >
                  {t.initials}
                </div>
                <div>
                  <h6 className="font-bold text-sm mb-0">{t.name}</h6>
                  <small className="text-gray-400">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
