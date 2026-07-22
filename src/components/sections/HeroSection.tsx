import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '750px',
        paddingTop: '80px',
      }}
    >
      {/* Full background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/Home page/businessmen-making-handshake-with-partner-greeting-dealing-website-banner-copy-space (1).jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="flex items-center" style={{ minHeight: '100%' }}>
          <div className="w-full lg:w-7/12 pr-8 text-white" data-aos="fade-right">
            {/* Badge */}
            <div
              className="inline-block mb-8 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
              }}
            >
              Trusted Visa Guidance Across The UAE
            </div>

            <h1
              className="font-extrabold leading-tight mb-6 text-white"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                textShadow: '0 10px 30px rgba(0,0,0,0.2)',
                color: '#FFFFFF',
              }}
            >
              Best Visa Consultant <br />
              <span style={{ color: '#FFFFFF' }}>in Dubai</span>
            </h1>

            <p className="text-lg text-white/90 mb-10 max-w-xl leading-relaxed">
              Core Plus helps UAE residents apply for international visit visas with expert guidance, accurate
              documentation support, and a smooth application process.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 rounded-full font-bold text-primary bg-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                Get a Free Consultation
              </Link>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
