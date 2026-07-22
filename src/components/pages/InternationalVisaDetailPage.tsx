import Image from 'next/image';
import Link from 'next/link';
import WhatsAppForm from '@/components/ui/WhatsAppForm';
import type { VisaDetailPage, VisaDetailSection } from '@/lib/visa-detail-pages';

interface InternationalVisaDetailPageProps {
  page: VisaDetailPage;
  parentHref?: string;
  parentLabel?: string;
  overviewIconClassName?: string;
  overviewLabel?: string;
  heroEyebrow?: string;
  backHref?: string;
  backLabel?: string;
  includesText?: string;
  bestForText?: string;
  supportTitle?: string;
  supportText?: string;
}

function getSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function VisaSection({ section, index }: { section: VisaDetailSection; index: number }) {
  const sectionBackground = index % 2 === 0 ? 'bg-white' : 'bg-slate-50';
  const sectionId = getSectionId(section.title);

  return (
    <section id={sectionId} className={`scroll-mt-32 ${sectionBackground}`}>
      <div className="rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,44,89,0.06)] backdrop-blur-sm md:p-10">
        <div className="mb-8 flex flex-col gap-4 border-b border-black/5 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
              Section {String(index + 1).padStart(2, '0')}
            </p> */}
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-primary md:text-4xl">{section.title}</h2>
          </div>
          {/* <a
            href={`#${sectionId}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/70 transition-colors hover:text-primary"
          >
            <i className="bi bi-link-45deg text-base" />
            Direct Link
          </a> */}
        </div>

        <div className="space-y-8">
          {section.paragraphs && (
            <div className="space-y-5">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.title}-paragraph-${paragraphIndex}`}
                  className="text-[1.02rem] leading-8 text-slate-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="grid gap-4 md:grid-cols-2">
              {section.bullets.map((bullet, bulletIndex) => (
                <li
                  key={`${section.title}-bullet-${bulletIndex}`}
                  className="flex items-start gap-4 rounded-3xl border border-primary/10 bg-[linear-gradient(135deg,rgba(15,44,89,0.04),rgba(218,192,163,0.14))] p-5 shadow-sm"
                >
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/15">
                    <i className="bi bi-check2 text-base" />
                  </div>
                  <span className="text-sm leading-7 text-slate-700 md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.cards && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {section.cards.map((card, cardIndex) => (
                <article
                  key={card.title}
                  className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(15,44,89,0.08)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#0F2C59,#DAC0A3)]" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-lg font-bold text-primary">
                    {String(cardIndex + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">{card.title}</h3>
                  {card.description && <p className="text-sm leading-7 text-slate-600">{card.description}</p>}
                  {card.bullets && (
                    <ul className="mt-4 space-y-3">
                      {card.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${card.title}-bullet-${bulletIndex}`}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                        >
                          <i className="bi bi-arrow-right-short mt-0.5 text-lg text-secondary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {section.table && (
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_60px_rgba(15,44,89,0.08)]">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead style={{ background: 'linear-gradient(135deg, #0F2C59, #1a4f9c)' }}>
                    <tr>
                      <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-white">
                        {section.table.columns[0]}
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-white">
                        {section.table.columns[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr
                        key={row.label}
                        className={`border-t border-black/5 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}`}
                      >
                        <td className="px-5 py-4 align-top font-semibold text-primary">{row.label}</td>
                        <td className="px-5 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {section.table.note && (
                <div className="border-t border-black/5 bg-primary/[0.03] px-5 py-4">
                  <p className="text-sm leading-7 text-slate-500">{section.table.note}</p>
                </div>
              )}
            </div>
          )}

          {section.steps && (
            <div className="grid gap-5">
              {section.steps.map((step, stepIndex) => (
                <article
                  key={step.title}
                  className="grid gap-5 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(15,44,89,0.08)] md:grid-cols-[88px_1fr] md:items-start"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#0F2C59,#1a4f9c)] text-lg font-bold text-white shadow-lg shadow-primary/20 md:h-20 md:w-20 md:text-xl">
                    {String(stepIndex + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-primary">{step.title}</h3>
                    <p className="text-sm leading-7 text-slate-600 md:text-base">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {section.buttonLabel && section.buttonHref && (
            <div className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(15,44,89,0.06),rgba(218,192,163,0.18))] p-6">
              <Link
                href={section.buttonHref}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#0F2C59' }}
              >
                {section.buttonLabel}
              </Link>
            </div>
          )}

          {section.images && section.images.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {section.images.map((img, imgIndex) => {
                const imgSrc = typeof img === 'string' ? img : img.src;
                const imgAlt = typeof img === 'string' ? '' : img.alt;
                return (
                  <div key={imgIndex} className="overflow-hidden rounded-2xl">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      width={400}
                      height={300}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )}

          {section.faqs && (
            <div className="space-y-4">
              {section.faqs.map((faq, faqIndex) => (
                <details
                  key={faq.question}
                  className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(15,44,89,0.08)] open:border-primary/20 open:bg-primary/[0.02]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-primary">
                    <span>{faq.question}</span>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary transition-colors group-open:bg-primary group-open:text-white">
                      <i className="bi bi-plus-lg text-sm transition-transform group-open:rotate-45" />
                    </div>
                  </summary>
                  <div className="mt-5 flex items-start gap-4 border-t border-black/5 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      {String(faqIndex + 1).padStart(2, '0')}
                    </span>
                    <p className="leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function InternationalVisaDetailPage({
  page,
  parentHref = '/visa-requirements/international',
  parentLabel = 'International Visas',
  overviewIconClassName = 'bi bi-passport-fill',
  overviewLabel = 'Guide Overview',
  // heroEyebrow = 'Core Plus Visa Assistance',
  backHref = '/visa-requirements/international',
  backLabel = 'View All International Visas',
  includesText = 'Full application guidance, document sections, processing details, fee information, and FAQs.',
  bestForText = 'UAE residents looking for a clearer, step-by-step visa preparation flow before applying.',
  supportTitle = 'Talk to a Visa Consultant',
  supportText = 'Keep your content, documents, and next steps organized with one guided consultation.',
}: InternationalVisaDetailPageProps) {
  const sectionLinks = page.sections.map((section) => ({
    id: getSectionId(section.title),
    title: section.title,
  }));

  return (
    <>
      <div style={{ marginTop: '80px' }} />

      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '760px',
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={page.heroImage}
            alt={page.heroTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute left-[-8%] top-12 z-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-2rem] z-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative z-20">
          <div className="container mx-auto max-w-7xl px-4 py-24 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-start">
              <div className="max-w-3xl">
                <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href={parentHref} className="transition-colors hover:text-white">
                    {parentLabel}
                  </Link>
                  <span>/</span>
                  <span className="text-white">{page.title}</span>
                </div>

                {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white">{heroEyebrow}</p> */}
                <h1
                  className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl"
                  style={{ color: '#FFFFFF' }}
                >
                  {page.heroTitle}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-xl">{page.heroSubtitle}</p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={page.heroButtonHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/12 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/18 hover:shadow-2xl"
                  >
                    {page.heroButtonLabel}
                  </Link>
                  <Link
                    href={backHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    {backLabel}
                  </Link>
                </div>

               
              </div>

              <div className="space-y-6">
               

                <aside className="min-h-[28rem] rounded-[2rem] border border-white/35 bg-[linear-gradient(155deg,rgba(7,24,49,0.9),rgba(15,44,89,0.82))] p-6 text-white shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                  <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl text-white">
                      <i className="bi bi-chat-dots-fill" />
                    </div>
                    <div>
                      <p className="mt-2 text-2xl font-bold text-white">Contact Us</p>
                    </div>
                  </div>

                  <WhatsAppForm compact className="bg-white/95 p-4 shadow-[0_14px_38px_rgba(0,0,0,0.26)]" />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f9_100%)] py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[290px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_24px_80px_rgba(15,44,89,0.08)]">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-secondary">On This Page</p>
                  <nav className="space-y-2">
                    {sectionLinks.map((sectionLink, index) => (
                      <a
                        key={sectionLink.id}
                        href={`#${sectionLink.id}`}
                        className="flex items-start gap-3 rounded-2xl px-3 py-3 text-sm text-slate-600 transition hover:bg-primary/[0.04] hover:text-primary"
                      >
                        <span className="mt-0.5 text-xs font-bold uppercase tracking-[0.28em] text-primary/60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="leading-6">{sectionLink.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(15,44,89,0.06),rgba(218,192,163,0.18))] p-6 shadow-[0_24px_80px_rgba(15,44,89,0.08)]">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-secondary">Need Support?</p>
                  <h2 className="mt-3 text-2xl font-bold text-primary">{supportTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{supportText}</p>
                  <Link
                    href={page.heroButtonHref}
                    className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: '#0F2C59' }}
                  >
                    {page.heroButtonLabel}
                  </Link>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              {page.sections.map((section, index) => (
                <VisaSection key={section.title} section={section} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
