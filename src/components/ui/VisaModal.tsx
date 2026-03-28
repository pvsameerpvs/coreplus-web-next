'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { VisaEntry } from '@/lib/types';

interface Props {
  visa: VisaEntry | null;
  onClose: () => void;
}

export default function VisaModal({ visa, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (visa) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [visa]);

  if (!visa) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="rounded-2xl p-0 max-w-2xl w-full shadow-2xl"
      style={{ border: 'none' }}
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4" style={{ background: '#0F2C59' }}>
        <h5 className="text-white font-bold text-lg m-0">{visa.title}</h5>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <i className="bi bi-x-lg text-xl" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto max-h-[70vh]">
        {/* Subcategories */}
        {visa.subcategories && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {visa.subcategories.map((sub) => (
              <div key={sub.label}>
                <h6 className="font-bold text-secondary mb-2">{sub.label}</h6>
                <ul className="req-list">
                  {sub.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Simple requirements */}
        {visa.requirements && (
          <>
            <h6 className="font-bold mb-2">Required Documents:</h6>
            <ul className="req-list mb-4">
              {visa.requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
          </>
        )}

        {/* Pricing */}
        {visa.pricing && (
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <h6 className="font-bold text-primary mb-2">
              <i className="bi bi-tag-fill mr-2" />Pricing
            </h6>
            {visa.pricing.map((p) => (
              <div key={p.label} className="flex justify-between text-sm py-1 border-b border-gray-100 last:border-0">
                <span>{p.label}</span>
                <span className="font-bold">{p.amount}</span>
              </div>
            ))}
          </div>
        )}

        {/* Notes */}
        {visa.notes && <p className="text-sm text-gray-600 mb-3"><strong>Note:</strong> {visa.notes}</p>}

        {/* Processing time */}
        {visa.processingTime && (
          <p className="text-sm text-gray-600">
            <i className="bi bi-clock-fill text-primary mr-2" />
            <strong>Processing Time:</strong> {visa.processingTime}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-center w-full py-3 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{ background: '#0F2C59' }}
        >
          Contact Us
        </Link>
      </div>
    </dialog>
  );
}
