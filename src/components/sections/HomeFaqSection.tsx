import { HOME_FAQS } from '@/lib/home-content';

export default function HomeFaqSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">Frequently Asked Questions About Visa Services in Dubai</h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {HOME_FAQS.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-[1.75rem] border border-black/5 bg-gray-50 p-6 shadow-sm transition-all duration-300 open:bg-white open:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 70)}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-primary">
                <span>{faq.question}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45">
                  <i className="bi bi-plus-lg" />
                </span>
              </summary>
              <p className="mt-4 pr-12 leading-7 text-gray-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
