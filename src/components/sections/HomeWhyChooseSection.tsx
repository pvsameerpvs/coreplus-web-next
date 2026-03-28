interface WhyFeature {
  color: string;
  delay: number;
  description: string;
  icon: string;
  title: string;
}

const WHY_FEATURES: WhyFeature[] = [
  {
    icon: 'bi-lightning-charge-fill',
    color: 'bg-blue-100 text-blue-600',
    title: 'Speed & Efficiency',
    description: 'We value your time. Our streamlined processes ensure the fastest turnaround for visas and licenses.',
    delay: 100,
  },
  {
    icon: 'bi-shield-fill-check',
    color: 'bg-green-100 text-green-600',
    title: 'Transparent Pricing',
    description: 'No hidden fees. We provide clear, upfront cost structures so you can budget with confidence.',
    delay: 200,
  },
  {
    icon: 'bi-people-fill',
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Expert Team',
    description: 'Our extensive knowledge of UAE laws ensures your business remains fully compliant at all times.',
    delay: 300,
  },
  {
    icon: 'bi-headset',
    color: 'bg-cyan-100 text-cyan-600',
    title: '24/7 Support',
    description: 'We are always just a call or message away to assist you with any inquiries or emergencies.',
    delay: 400,
  },
];

function WhyFeatureCard({ color, delay, description, icon, title }: WhyFeature) {
  return (
    <div
      className="rounded-2xl border border-black/[0.05] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay={String(delay)}
    >
      <div className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${color}`}>
        <i className={`bi ${icon} text-3xl`} />
      </div>
      <h4 className="mb-3 text-base font-bold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default function HomeWhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
          <h5 className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">Why Choose CorePlus</h5>
          <h2 className="mb-3 text-4xl font-bold">We Simplify Your Corporate Journey</h2>
          <p className="text-gray-500">
            Experience seamless business setup and support services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_FEATURES.map((feature) => (
            <WhyFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
