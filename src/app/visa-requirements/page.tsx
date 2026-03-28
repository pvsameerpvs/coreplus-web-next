'use client';

import { useState } from 'react';
import { VISA_DATA } from '@/lib/constants';
import VisaCard from '@/components/ui/VisaCard';

export default function VisaRequirementsPage() {
  const [activeTab, setActiveTab] = useState<'uae' | 'international'>('uae');

  const filtered = VISA_DATA.filter((v) => v.category === activeTab);

  return (
    <>
      <div style={{ marginTop: '80px' }} />

      {/* Hero banner */}
      <section
        className="flex items-center justify-center text-center text-white"
        style={{
          height: '400px',
          background: "linear-gradient(rgba(15, 44, 89, 0.9), rgba(15, 44, 89, 0.8)), url('/images/visa_processing 12.jpg') center/cover",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-3 text-white">Visa Document Checklist</h1>
          <p className="text-lg text-white/85">Complete requirements for UAE &amp; International Visas</p>
        </div>
      </section>

      {/* Sticky tabs */}
      <div
        className="sticky z-40 border-b border-black/5"
        style={{
          top: '80px',
          background: 'rgba(248, 250, 252, 0.95)',
          backdropFilter: 'blur(5px)',
          padding: '15px 0',
        }}
      >
        <div className="container mx-auto px-4 flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('uae')}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={
              activeTab === 'uae'
                ? { background: '#ffc107', color: '#000', boxShadow: '0 4px 15px rgba(255,193,7,0.4)' }
                : { background: '#f7db86', color: '#0F2C59', border: '1px solid rgba(0,0,0,0.1)' }
            }
          >
            🇦🇪 UAE Visas
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={
              activeTab === 'international'
                ? { background: '#ffc107', color: '#000', boxShadow: '0 4px 15px rgba(255,193,7,0.4)' }
                : { background: '#f7db86', color: '#0F2C59', border: '1px solid rgba(0,0,0,0.1)' }
            }
          >
            🌍 International Visas
          </button>
        </div>
      </div>

      {/* Visa cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary">
              {activeTab === 'uae' ? 'UAE Visa Requirements' : 'International Visa Requirements'}
            </h2>
            <p className="text-gray-500 mt-2">Click any visa card to view full requirements</p>
          </div>
          <VisaCard visas={filtered} />
        </div>
      </section>
    </>
  );
}
