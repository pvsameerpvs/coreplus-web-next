'use client';

import { useRouter } from 'next/navigation';
import VisaCard from '@/components/ui/VisaCard';
import { VISA_DATA } from '@/lib/constants';

interface VisaRequirementsPageProps {
  activeTab: 'uae' | 'international';
}

export default function VisaRequirementsPage({ activeTab }: VisaRequirementsPageProps) {
  const router = useRouter();
  const filtered = VISA_DATA.filter((visa) => visa.category === activeTab);
  const tabCounts = {
    uae: VISA_DATA.filter((visa) => visa.category === 'uae').length,
    international: VISA_DATA.filter((visa) => visa.category === 'international').length,
  };

  const tabs = [
    {
      id: 'uae' as const,
      title: 'UAE Visas',
      description: 'Residence, tourist, employment, family, and investor visa pathways.',
      icon: 'bi bi-buildings-fill',
      count: tabCounts.uae,
    },
    {
      id: 'international' as const,
      title: 'International Visas',
      description: 'Travel visa options for global destinations prepared from Dubai.',
      icon: 'bi bi-globe-central-south-asia',
      count: tabCounts.international,
    },
  ];

  const handleTabChange = (tab: 'uae' | 'international') => {
    router.replace(`/visa-requirements/${tab}`, { scroll: false });
  };

  return (
    <>
      <div style={{ marginTop: '80px' }} />

      <section
        className="flex items-center justify-center text-center text-white"
        style={{
          height: '400px',
          background: "linear-gradient(rgba(15, 44, 89, 0.9), rgba(15, 44, 89, 0.8)), url('/images/visa_processing 12.jpg') center/cover",
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="mb-3 text-5xl font-extrabold text-white"
            style={{ color: '#FFFFFF' }}
          >
            Visa Document Checklist
          </h1>
          <p className="text-lg text-white/85">Complete requirements for UAE &amp; International Visas</p>
        </div>
      </section>

      <div
        className="sticky z-40 border-b border-black/5"
        style={{
          top: '80px',
          background: 'rgba(248, 250, 252, 0.95)',
          backdropFilter: 'blur(5px)',
          padding: '15px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-3 rounded-[2rem] border border-black/5 bg-white/80 p-3 shadow-[0_20px_60px_rgba(15,44,89,0.08)] backdrop-blur-md md:grid-cols-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`rounded-[1.5rem] border px-5 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-transparent text-white shadow-[0_18px_40px_rgba(15,44,89,0.22)]'
                      : 'border-black/5 bg-white text-primary hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-lg'
                  }`}
                  style={
                    isActive
                      ? { background: 'linear-gradient(135deg, #0F2C59 0%, #1a4f9c 100%)' }
                      : undefined
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${
                        isActive ? 'bg-white/15 text-white' : 'bg-primary/8 text-primary'
                      }`}
                    >
                      <i className={tab.icon} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] ${
                        isActive ? 'bg-white/12 text-white/90' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {tab.count} visas
                    </span>
                  </div>

                  <h2 className={`mt-5 text-2xl font-bold ${isActive ? 'text-white' : 'text-primary'}`}>{tab.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${isActive ? 'text-white/82' : 'text-slate-600'}`}>{tab.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary">
              {activeTab === 'uae' ? 'UAE Visa Requirements' : 'International Visa Requirements'}
            </h2>
            <p className="mt-2 text-gray-500">Click any visa card to open its dedicated detail page.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.04] px-4 py-2 text-sm font-semibold text-primary">
              <i className="bi bi-grid-1x2-fill" />
              {filtered.length} visa options in this section
            </div>
          </div>
          <VisaCard visas={filtered} />
        </div>
      </section>
    </>
  );
}
