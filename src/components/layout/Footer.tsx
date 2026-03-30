import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#081226' }} className="text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <Image
              src="/images/logo-core-footer.png"
              alt="Core Plus Logo"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for Business Setup, PRO Services, Visa Processing,
              Emirates ID Typing, and Government Approvals in the UAE.
              We simplify your corporate journey with reliability and speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Our Services</h6>
            <ul className="space-y-2 text-sm text-white/70">
              {['PRO Services', 'Visa Processing', 'Company Formation', 'Emirates ID Typing', 'Global Visa Assistance'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Contact Us</h6>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <i className="bi bi-geo-alt-fill text-yellow-400 mr-2" />
                Al Karama, Dubai, UAE
              </p>
              <p>
                <i className="bi bi-telephone-fill text-yellow-400 mr-2" />
                +971 50 414 5594
              </p>
              <p>
                <i className="bi bi-telephone-fill text-yellow-400 mr-2" />
                04 329 6602
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/profile.php?id=61585471404510&sk=photos" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-xl transition-colors">
                  <i className="bi bi-facebook" />
                </a>
                <a href="https://www.instagram.com/coreplus.visa?igsh=MTB1Ympsd2Jseng2OQ==" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-xl transition-colors">
                  <i className="bi bi-instagram" />
                </a>
                <a href="https://www.tiktok.com/@coreplusvisa?_r=1&_t=ZS-92K7g7EOoCN" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-xl transition-colors">
                  <i className="bi bi-tiktok" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/20 mt-10 mb-4" />
        <div className="text-center text-sm text-white/50">
          © 2025 CORE PLUS Business Setup Services — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
