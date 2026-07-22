import type { Metadata } from 'next';
import Image from 'next/image';
import { GOOGLE_BUSINESS_PROFILE_URL } from '@/lib/home-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About CorePlus | Visa Consultancy & Business Setup Services Dubai',
  description:
    'Learn about CorePlus, a Dubai-based consultancy specializing in visa assistance, business setup, and PRO services for UAE residents and companies.',
  path: '/about',
  image: '/images/img 33.png',
});

type PresenceItem = {
  title: string;
  detail: string;
  icon: string;
  status: 'available' | 'pending';
  href?: string;
};

const VMV = [
  {
    icon: 'bi-eye',
    title: 'Our Vision',
    text: "To be the UAE's most trusted and innovative business setup partner, empowering entrepreneurs and enterprises to thrive through simplified processes, strategic guidance, and complete regulatory compliance.",
    image: '/images/vision.jpg',
  },
  {
    icon: 'bi-bullseye',
    title: 'Our Mission',
    text: 'Our mission is to simplify company formation and business operations across the UAE by delivering personalized, end-to-end solutions that ensure compliance, efficiency, and sustainable growth.',
    image: '/images/mission.png',
  },
  {
    icon: 'bi-file-lock2',
    title: 'Our Values',
    text: "At Core Plus, our values are rooted in integrity, transparency, and excellence. We believe in building long-term partnerships based on trust, providing customer-focused solutions, and continuously innovating to deliver the highest standards of service.",
    image: '/images/Values.jpg',
  },
];

const COMPANY_SNAPSHOT = [
  {
    label: 'Visa Applications Assisted',
    value: '1,000+',
    description: 'Approximate number of visa applications currently referenced across the website.',
    icon: 'bi-file-earmark-check-fill',
  },
  {
    label: 'Satisfied Clients',
    value: '800+',
    description: 'Clients supported through visa, PRO, and business setup services in the UAE.',
    icon: 'bi-emoji-smile-fill',
  },
  {
    label: 'Partner Companies',
    value: '100+',
    description: 'Businesses supported with company formation, licensing, and administrative services.',
    icon: 'bi-building-fill',
  },
  {
    label: 'Office Location',
    value: 'Al Karama, Dubai',
    description: 'Matar Karama Building - Shop No 1 - behind Ansar Gallery - Al Karama - Dubai, UAE.',
    icon: 'bi-geo-alt-fill',
  },
] as const;

const REFERENCE_ITEMS = [
  {
    title: 'Total Years of Experience',
    detail: 'An experienced team serving businesses and travellers across the UAE. The exact number of years can be added once shared.',
    status: 'pending',
    icon: 'bi-hourglass-split',
  },
  {
    title: 'Approximate Number of Visas Processed',
    detail: 'The website currently highlights 1,000+ visa applications assisted.',
    status: 'available',
    icon: 'bi-passport-fill',
  },
  {
    title: 'Founder / Directors Name & Photo',
    detail: 'Leadership names and official profile photos can be added here once provided.',
    status: 'pending',
    icon: 'bi-people-fill',
  },
  {
    title: 'Certifications',
    detail: 'Certification details can be published here when the exact records are shared.',
    status: 'pending',
    icon: 'bi-patch-check-fill',
  },
  {
    title: 'Trade License Details',
    detail: 'Business name is available as Core Plus Business Set Up Services LLC. Exact license number and issuing authority can be added once shared.',
    status: 'pending',
    icon: 'bi-file-earmark-text-fill',
  },
  {
    title: 'Government Registration',
    detail: 'Government registration references can be added here once the official details are available.',
    status: 'pending',
    icon: 'bi-shield-check',
  },
  {
    title: 'Industry Memberships',
    detail: 'Membership information can be added when applicable details are shared.',
    status: 'pending',
    icon: 'bi-diagram-3-fill',
  },
  {
    title: 'Immigration Consultancies',
    detail: 'This section can include consultancy affiliations or specialist practice references once confirmed.',
    status: 'pending',
    icon: 'bi-globe-central-south-asia',
  },
  {
    title: 'Agency Partnerships',
    detail: 'The website already references 100+ partner companies. Specific agency partnerships can be listed once confirmed.',
    status: 'available',
    icon: 'bi-handshake-fill',
  },
  {
    title: 'Awards or Recognitions',
    detail: 'Awards, recognitions, or notable achievements can be added when supporting details are shared.',
    status: 'pending',
    icon: 'bi-trophy-fill',
  },
  {
    title: 'Office / Team Photos',
    detail: 'Official office and team photography can be added when available. Current visuals on the site are general brand imagery.',
    status: 'pending',
    icon: 'bi-camera-fill',
  },
] as const;

const ONLINE_PRESENCE: PresenceItem[] = [
  {
    title: 'Google Business Profile',
    detail: 'Verified listing and location presence for Core Plus in Dubai.',
    href: GOOGLE_BUSINESS_PROFILE_URL,
    icon: 'bi-geo-alt-fill',
    status: 'available',
  },
  {
    title: 'Facebook',
    detail: 'Company social presence available through the official profile.',
    href: 'https://www.facebook.com/profile.php?id=61585471404510&sk=photos',
    icon: 'bi-facebook',
    status: 'available',
  },
  {
    title: 'Instagram',
    detail: 'Social presence for updates and brand visibility.',
    href: 'https://www.instagram.com/coreplus.visa?igsh=MTB1Ympsd2Jseng2OQ==',
    icon: 'bi-instagram',
    status: 'available',
  },
  {
    title: 'TikTok',
    detail: 'Short-form social media presence listed in the website footer.',
    href: 'https://www.tiktok.com/@coreplusvisa?_r=1&_t=ZS-92K7g7EOoCN',
    icon: 'bi-tiktok',
    status: 'available',
  },
  {
    title: 'Media Mentions',
    detail: 'Can be added once articles, interviews, or media references are shared.',
    icon: 'bi-megaphone-fill',
    status: 'pending',
  },
  {
    title: 'Blog Articles',
    detail: 'Blog content can be listed here if the business publishes guides, updates, or advisory posts.',
    icon: 'bi-journal-text',
    status: 'pending',
  },
  {
    title: 'Industry Speaking Events',
    detail: 'Event appearances or speaking engagements can be added when available.',
    icon: 'bi-mic-fill',
    status: 'pending',
  },
  {
    title: 'Press Coverage',
    detail: 'Press features and editorial mentions can be added once confirmed.',
    icon: 'bi-newspaper',
    status: 'pending',
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <div style={{ marginTop: '80px' }} />

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
              <p className="text-base leading-relaxed text-gray-700">
                With years of industry experience in handling international visa applications, CorePlus operates as a Dubai-based consultancy focused on visa assistance services for UAE residents and expatriates. Our team brings practical expertise in managing visa processes, documentation standards, and application procedures across multiple destinations, ensuring each application is prepared with accuracy and in line with current requirements.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mt-4">
                Our experience in working closely with visa processes, submission systems, and regulatory procedures allows us to guide clients efficiently through each stage — from eligibility assessment and document verification to application preparation and appointment coordination.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mt-4">
                Alongside our core focus on visa consultancy, CorePlus also provides business setup assistance and PRO services, supporting individuals and companies in navigating UAE administrative processes, licensing requirements, and government-related documentation with clarity and compliance.
              </p>
            </div>
            <div>
              <Image
                src="/images/About us/coreplus- Trusted Visa Consultancy in Dubai.webp"
                alt="Trusted Visa Consultancy in Dubai - CorePlus"
                width={600}
                height={450}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-primary">Company Snapshot</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              A quick reference to the company information already available in the project, along with a structure for
              adding formal business credentials as they are shared.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {COMPANY_SNAPSHOT.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-black/5 bg-gray-50 p-6 shadow-sm">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                  <i className={`bi ${item.icon}`} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{item.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-primary">{item.value}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-dashed border-primary/20 bg-primary/[0.03] p-6 text-sm leading-7 text-gray-600">
            <strong className="text-primary">Reference note:</strong> Founder details, trade license number, government
            registration, certifications, memberships, awards, and official office or team photos have not been
            provided in the current project files. The layout below is ready to publish those details once shared.
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-primary">Reference &amp; Documentation</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              This section is structured to present company credentials, registration references, leadership profiles,
              and supporting trust signals in one place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {REFERENCE_ITEMS.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                      item.status === 'available'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-amber-200 bg-amber-50 text-amber-700'
                    }`}
                  >
                    {item.status === 'available' ? 'Available' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Vision, Mission &amp; Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VMV.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md overflow-hidden border border-black/5 flex flex-col h-full">
                <div className="p-6 flex-1">
                  <i className={`bi ${item.icon} text-5xl text-primary mb-4 block`} />
                  <h5 className="font-bold text-lg mb-3">{item.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold text-primary">Media &amp; Online Presence</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
                The business already has active public-facing touchpoints that can be highlighted on the About page.
                Media mentions, blog articles, press features, and speaking engagements can be added here as soon as
                those references are available.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {ONLINE_PRESENCE.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-black/5 bg-gray-50 p-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <i className={`bi ${item.icon}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{item.title}</h3>
                        <span
                          className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                            item.status === 'available' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {item.status === 'available' ? 'Available' : 'Pending'}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-gray-500">{item.detail}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Visit link
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-gray-50 shadow-sm ring-1 ring-black/5">
              <Image
                src="/images/img 33.png"
                alt="Core Plus brand visual"
                width={700}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISA ASSISTANCE EXPERTISE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Visa Assistance Expertise</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Visa applications require precision, documentation accuracy, and a clear understanding of embassy-specific
              requirements. At CorePlus, we provide structured support for{' '}
              <a
                href="https://coreplusdxb.ae/visa-requirements/international/"
                className="text-primary font-semibold underline hover:no-underline"
              >
                international visit visa
              </a>{' '}
              applications from the UAE.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Eligibility assessment based on travel purpose and profile',
                'Document verification aligned with embassy requirements',
                'Guidance for visa application forms (DS-160 and embassy portals)',
                'Appointment scheduling and submission support',
                'Travel documentation guidance',
                'Interview preparation support (where applicable)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-black/5 bg-gray-50 p-4">
                  <i className="bi bi-check-circle-fill text-primary mt-0.5" />
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-primary mb-4">
                We assist UAE residents applying for visas to key destinations such as:
              </h3>
              <div className="flex flex-wrap gap-3">
                {['United Kingdom', 'Schengen countries (Europe)', 'United States', 'Japan', 'Saudi Arabia'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-500">
                Each application is handled with a focus on accuracy, completeness, and compliance with current visa
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SETUP & CORPORATE SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-primary">Business Setup &amp; Corporate Services</h2>
            <p className="text-base leading-relaxed text-gray-700">
              In addition to visa consultancy, CorePlus provides reliable{' '}
              <a
                href="https://coreplusdxb.ae/services/"
                className="text-primary font-semibold underline hover:no-underline"
              >
                business setup and corporate services
              </a>{' '}
              for individuals and companies planning to establish operations in the UAE.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Company formation (Mainland, Free Zone, Offshore)',
                'Trade license processing and renewals',
                'PRO services and government approvals',
                'Document clearing and attestation support',
                'Corporate visa and employee visa assistance',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4">
                  <i className="bi bi-briefcase-fill text-primary mt-0.5" />
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              We support entrepreneurs, startups, and established businesses by simplifying regulatory procedures and
              ensuring smooth coordination with relevant authorities.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Approach</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Every application and business requirement is unique. At CorePlus, we follow a structured and
              process-driven approach to ensure clarity and efficiency.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  step: '1',
                  title: 'Consultation & Assessment',
                  text: 'Understanding your travel or business requirements and identifying the right process.',
                },
                {
                  step: '2',
                  title: 'Documentation & Preparation',
                  text: 'Reviewing and preparing all required documents to meet current standards.',
                },
                {
                  step: '3',
                  title: 'Application Support',
                  text: 'Guiding you through submission, appointments, and procedural steps.',
                },
                {
                  step: '4',
                  title: 'Coordination & Follow-Up',
                  text: 'Providing continuous support until completion of the process.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-[1.75rem] border border-black/5 bg-gray-50 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              This approach helps reduce errors, avoid delays, and improve overall efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH COREPLUS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-primary">Why Work With CorePlus</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Choosing the right consultancy plays an important role in both visa applications and business setup
              processes. CorePlus offers:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Experience in handling international visa applications',
                'Strong understanding of documentation and compliance requirements',
                'Structured and transparent consultation process',
                'Personalized guidance based on individual profiles',
                'Support across complete business related service requirements',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4">
                  <i className="bi bi-check-lg text-primary mt-0.5 text-lg" />
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Our focus is on providing clear guidance and reliable support at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* START YOUR JOURNEY */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-white">Start Your Journey with Us</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Whether you are planning international travel or establishing a business in the UAE, CorePlus provides
              the guidance and support required to navigate the process efficiently.
            </p>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              Connect with our consultants today to get started.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary shadow-lg transition-all hover:bg-white/90"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
