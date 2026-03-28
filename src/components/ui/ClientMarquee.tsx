import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/constants';

export default function ClientMarquee() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h5 className="uppercase text-primary font-bold text-sm tracking-widest mb-2">Our Valued Clients</h5>
          <h2 className="text-3xl font-bold">Trusted by Leading Companies</h2>
        </div>
      </div>

      {/* Marquee slider */}
      <div
        className="relative overflow-hidden"
        style={{
          height: '120px',
          maskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
        }}
      >
        <div className="slide-track">
          {/* Original set + duplicate for seamless loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((num, idx) => (
            <div key={idx} className="slide">
              <div className="relative h-20 w-full max-w-[200px]">
                <Image
                  src={`/images/clients_logo/client_${num}.jpg`}
                  alt={`Client ${num}`}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
