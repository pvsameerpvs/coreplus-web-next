'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { VisaEntry } from '@/lib/types';
import VisaModal from './VisaModal';

interface Props {
  visas: VisaEntry[];
}

export default function VisaCard({ visas }: Props) {
  const [selected, setSelected] = useState<VisaEntry | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visas.map((visa) => (
          <button
            key={visa.id}
            onClick={() => setSelected(visa)}
            className="group text-left bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-32 w-full">
              <Image
                src={visa.image}
                alt={visa.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover"
              />
              {visa.flag && (
                <div className="absolute top-2 right-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/w40/${visa.flag}.png`}
                    alt={visa.title}
                    className="rounded shadow-sm"
                    width={30}
                    height={20}
                  />
                </div>
              )}
            </div>
            <div className="p-3 text-center">
              <p className="font-bold text-xs uppercase text-primary mb-2 leading-tight">{visa.title}</p>
              <div className="h-px bg-black/8 w-4/5 mx-auto mb-2" />
              <p className="text-red-600 font-semibold text-xs uppercase">
                <span className="text-gray-400 font-medium text-[10px] mr-1">from</span>
                {visa.price}
              </p>
            </div>
          </button>
        ))}
      </div>

      <VisaModal visa={selected} onClose={() => setSelected(null)} />
    </>
  );
}
