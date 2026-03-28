import { HOME_WHY_FEATURES, type HomeWhyFeature } from '@/lib/home-content';

function WhyFeatureCard({ color, delay, description, icon, title }: HomeWhyFeature) {
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
          <h5 className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">Why Choose Core Plus</h5>
          <h2 className="mb-3 text-4xl font-bold">Why Choose Core Plus – A Leading Visa Consultancy in Dubai</h2>
          <p className="text-gray-500">
            Our visa consultants help simplify international visa applications for UAE residents by providing
            professional guidance and reliable support at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOME_WHY_FEATURES.map((feature) => (
            <WhyFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
