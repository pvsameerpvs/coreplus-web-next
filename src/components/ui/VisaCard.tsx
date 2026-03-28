'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { VisaEntry } from '@/lib/types';
import { getVisaDetailHref } from '@/lib/visa-detail-pages';

interface Props {
  visas: VisaEntry[];
}

function VisaCardBody({ visa }: { visa: VisaEntry }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={visa.image}
          alt={visa.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-primary shadow-md">
          {visa.category === 'uae' ? 'UAE Visa' : 'International'}
        </div>
        {visa.flag && (
          <div className="absolute top-4 right-4 overflow-hidden rounded-xl border border-white/70 bg-white/90 p-1 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://flagcdn.com/w40/${visa.flag}.png`}
              alt={visa.title}
              className="rounded"
              width={30}
              height={20}
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-6 text-primary sm:text-lg">{visa.title}</h3>

        <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Starting From</p>
          <p className="mt-1 text-base font-bold text-red-600">{visa.price}</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <span className="inline-flex items-center gap-2 text-slate-500">
            <i className="bi bi-clock-history text-primary/70" />
            {visa.processingTime ?? 'Detailed guide available'}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm font-semibold text-primary">
          <span>View Details</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/8 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <i className="bi bi-arrow-right" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function VisaCard({ visas }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {visas.map((visa) => (
        <Link
          key={visa.id}
          href={getVisaDetailHref(visa)}
          className="group h-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-white text-left shadow-[0_16px_45px_rgba(15,44,89,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,44,89,0.14)]"
        >
          <VisaCardBody visa={visa} />
        </Link>
      ))}
    </div>
  );
}
