'use client';

import { useCounter } from '@/hooks/useCounter';
import { STATS } from '@/lib/constants';

function StatCard({ value, label, sublabel, icon, iconColor }: { value: number; label: string; sublabel: string; icon: string; iconColor: string }) {
  const { count, ref } = useCounter(value);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <div className={`text-5xl mb-3 ${iconColor}`}>
        <i className={`bi ${icon}`} />
      </div>
      <h2 className="text-5xl font-bold text-white mb-0">{count}+</h2>
      <p className="text-sm font-bold uppercase mt-2 tracking-wide" style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '1px' }}>
        {label}<br />{sublabel}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #0F2C59 0%, #1a4f9c 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left text */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <span className="font-bold uppercase text-sm" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '2px' }}>
              Core Plus Impact
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-5 text-white">
              Supporting UAE Residents with Reliable Visa Consultancy Services
            </h2>
            <p className="text-lg leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
              With years of experience assisting travellers across the UAE, Core Plus has helped hundreds of clients
              successfully prepare their visa applications for international travel.
            </p>
          </div>

          {/* Right counters */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
