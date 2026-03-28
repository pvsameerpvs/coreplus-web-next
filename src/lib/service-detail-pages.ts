import { SERVICES } from './constants';
import type { VisaDetailPage } from './visa-detail-pages';

interface ServiceDetailPageData {
  page: VisaDetailPage;
  overviewIconClassName: string;
}

const CONTACT_HREF = '/contact';

const SERVICE_DETAIL_PAGES: Record<string, ServiceDetailPageData> = {
  pro: {
    overviewIconClassName: 'bi bi-briefcase-fill',
    page: {
      slug: 'pro',
      title: 'PRO Services',
      metaTitle: 'PRO Services in UAE | Core Plus Business Support',
      metaDescription:
        'Get reliable PRO services in the UAE with Core Plus. We assist with licensing, government approvals, document processing, and business support.',
      heroTitle: 'PRO Services in UAE',
      heroSubtitle:
        'Professional handling of government-related documentation, approvals, and legal processes for companies and individuals in the UAE.',
      heroButtonLabel: 'Talk to a Service Specialist',
      heroButtonHref: CONTACT_HREF,
      heroImage: '/images/pro image.png',
      sections: [
        {
          title: 'Professional PRO Support for Businesses in the UAE',
          paragraphs: [
            'PRO services play a vital role in keeping businesses compliant and moving smoothly in the UAE. From document submission to approvals and renewals, every stage requires accurate follow-up and timely coordination.',
            'Core Plus supports businesses and individuals with experienced PRO assistance so you can save time, reduce administrative pressure, and stay focused on your operations.',
          ],
        },
        {
          title: 'What Our PRO Services Cover',
          bullets: [
            'Trade license application and renewal.',
            'Establishment card services.',
            'Notarization and attestation.',
            'Emirates ID typing.',
            'Medical typing.',
            'Equivalency certificate support.',
            'Tasheel and Amer services.',
            'Government approvals and liaisons.',
          ],
        },
        {
          title: 'How Core Plus Helps',
          cards: [
            {
              title: 'Compliance Support',
              description:
                'We help businesses stay aligned with UAE document and approval requirements through better follow-up and process handling.',
            },
            {
              title: 'Faster Coordination',
              description:
                'Our team supports the timely movement of applications, renewals, and supporting paperwork with the relevant authorities.',
            },
            {
              title: 'Administrative Relief',
              description:
                'By handling process-heavy tasks, we reduce the internal workload on your operations, HR, and management teams.',
            },
          ],
        },
        {
          title: 'Typical PRO Service Flow',
          steps: [
            {
              title: 'Requirement Review',
              description: 'We assess the request, the business activity, and the required authority process.',
            },
            {
              title: 'Document Collection',
              description: 'Your supporting documents are checked to ensure the file is ready before submission.',
            },
            {
              title: 'Submission and Follow-Up',
              description: 'We coordinate the process, submit where required, and keep track of progress.',
            },
            {
              title: 'Completion and Handover',
              description: 'Once approved or finalized, we help complete the final step and confirm the next requirement if any.',
            },
          ],
        },
        {
          title: 'Why Choose Core Plus for PRO Services',
          bullets: [
            'Experienced handling of UAE government processes.',
            'Clear coordination and document review.',
            'Support for both companies and individual cases.',
            'Reliable follow-up from start to completion.',
            'Practical business support with less administrative friction.',
          ],
        },
        {
          title: 'Need PRO Support for Your Business?',
          paragraphs: [
            'If you need help with licensing, approvals, renewals, or government-related business processes, Core Plus can support you with dependable PRO services in the UAE.',
          ],
          buttonLabel: 'Connect Us',
          buttonHref: CONTACT_HREF,
        },
      ],
    },
  },
  visa: {
    overviewIconClassName: 'bi bi-passport-fill',
    page: {
      slug: 'visa',
      title: 'Visa Processing',
      metaTitle: 'Visa Processing Services in UAE | Core Plus',
      metaDescription:
        'Get visa processing support in the UAE with Core Plus. We assist with UAE visa applications, document checks, and smoother submission preparation.',
      heroTitle: 'Visa Processing Services',
      heroSubtitle:
        'Expert support for UAE visa applications, document preparation, eligibility guidance, and smoother visa processing from Dubai.',
      heroButtonLabel: 'Check Visa Options',
      heroButtonHref: '/visa-requirements/uae',
      heroImage: '/images/visa_processing 12.jpg',
      sections: [
        {
          title: 'Visa Processing Support in the UAE',
          paragraphs: [
            'Applying for a visa in the UAE can involve different document sets, categories, processing timelines, and case-specific requirements. A properly prepared file can make the process clearer and more efficient.',
            'Core Plus supports applicants with visa-processing guidance, document checks, and practical help in preparing for the right application route.',
          ],
        },
        {
          title: 'UAE Visa Categories We Support',
          cards: [
            {
              title: 'Golden Visa',
              description: 'Support for eligible professionals, investors, and property owners preparing for long-term UAE residence applications.',
            },
            {
              title: 'Employment Visa',
              description: 'Guidance for work-related visa processing, document preparation, and compliance with employer-side requirements.',
            },
            {
              title: 'Family and Residence Visas',
              description: 'Support for spouse, children, parent, and dependent-based residence applications in the UAE.',
            },
            {
              title: 'Freelance and Investor Visas',
              description: 'Application support for business owners, freelancers, and self-sponsored residence pathways.',
            },
            {
              title: 'Tourist and Visit Visas',
              description: 'Help with visit visa requirements, travel documents, and short-stay processing preparation.',
            },
          ],
        },
        {
          title: 'What We Help With',
          bullets: [
            'Eligibility review and application route guidance.',
            'Document checklist preparation.',
            'Requirement validation before submission.',
            'Application preparation support.',
            'Clear guidance on current processing expectations.',
          ],
        },
        {
          title: 'Our Visa Processing Workflow',
          steps: [
            {
              title: 'Case Review',
              description: 'We understand the visa category, purpose, and required supporting documents for your case.',
            },
            {
              title: 'Document Preparation',
              description: 'Your checklist is reviewed and refined to reduce missing items and common application mistakes.',
            },
            {
              title: 'Application Readiness',
              description: 'We help ensure the file is complete and aligned before you proceed with the next processing step.',
            },
            {
              title: 'Ongoing Guidance',
              description: 'Our team remains available to clarify questions and help with follow-up requirements where needed.',
            },
          ],
        },
        {
          title: 'Why Choose Core Plus for Visa Processing',
          bullets: [
            'Support across multiple UAE visa categories.',
            'Better document preparation before submission.',
            'Clear case-based guidance and requirement review.',
            'Practical help for both individual and business-related visa cases.',
          ],
        },
        {
          title: 'Need Help with a UAE Visa Application?',
          paragraphs: [
            'Explore UAE visa categories or speak with Core Plus to find the right path for your application and document preparation.',
          ],
          buttonLabel: 'View UAE Visas',
          buttonHref: '/visa-requirements/uae',
        },
      ],
    },
  },
  company: {
    overviewIconClassName: 'bi bi-building-fill-check',
    page: {
      slug: 'company',
      title: 'Company Formation & Licensing',
      metaTitle: 'Company Formation and Licensing in UAE | Core Plus',
      metaDescription:
        'Start and manage your UAE company setup with Core Plus. Get support for licensing, renewals, approvals, and business formation guidance.',
      heroTitle: 'Company Formation & Licensing',
      heroSubtitle:
        'From new business setup to renewals and regulatory support, Core Plus helps businesses manage company formation and licensing in the UAE.',
      heroButtonLabel: 'Start Your Business Setup',
      heroButtonHref: CONTACT_HREF,
      heroImage: '/images/business set up.jpg',
      sections: [
        {
          title: 'Build Your Business the Right Way in the UAE',
          paragraphs: [
            'Starting a company in the UAE involves several important decisions including licensing, structure, registration, documentation, and authority approvals. Each setup path has its own process and compliance requirements.',
            'Core Plus helps entrepreneurs and companies navigate the business setup journey with practical support from the earliest planning stage through licensing and documentation follow-up.',
          ],
        },
        {
          title: 'What This Service Includes',
          bullets: [
            'Trade license application support.',
            'License renewal guidance.',
            'Business registration document preparation.',
            'Notarization and attestation coordination.',
            'Establishment card support.',
            'General company-setup process guidance.',
          ],
        },
        {
          title: 'Setup Support Areas',
          cards: [
            {
              title: 'New Company Formation',
              description:
                'Support for planning the setup process, preparing documentation, and moving through the required registration steps.',
            },
            {
              title: 'Licensing and Renewals',
              description:
                'Guidance for obtaining or renewing the right trade license and maintaining compliance with ongoing requirements.',
            },
            {
              title: 'Business Documentation',
              description:
                'Help with the administrative and supporting documents required throughout setup and operational stages.',
            },
          ],
        },
        {
          title: 'Our Company Setup Process',
          steps: [
            {
              title: 'Consultation and Planning',
              description: 'We review your activity, setup goals, and business requirements to identify the right path.',
            },
            {
              title: 'Document Preparation',
              description: 'We help prepare and organize the documents needed for the formation and licensing process.',
            },
            {
              title: 'Application Coordination',
              description: 'We support the movement of the case through the relevant process steps and submission stages.',
            },
            {
              title: 'Post-Setup Support',
              description: 'After setup, we can continue helping with renewals, supporting approvals, and document-related tasks.',
            },
          ],
        },
        {
          title: 'Why Choose Core Plus for Company Formation',
          bullets: [
            'Practical guidance from setup to licensing.',
            'Better preparation for business documentation.',
            'Support for renewals and follow-up processes.',
            'Clear, business-focused assistance tailored to UAE requirements.',
          ],
        },
        {
          title: 'Ready to Set Up Your Company?',
          paragraphs: [
            'If you are planning a new UAE company setup or need licensing support for an existing business, Core Plus can help you move forward with clarity and confidence.',
          ],
          buttonLabel: 'Connect Us',
          buttonHref: CONTACT_HREF,
        },
      ],
    },
  },
  'global-visa': {
    overviewIconClassName: 'bi bi-globe2',
    page: {
      slug: 'global-visa',
      title: 'Global Visa Assistance',
      metaTitle: 'Global Visa Assistance from Dubai | Core Plus',
      metaDescription:
        'Apply for international visas from Dubai with Core Plus. Get support for Schengen, UK, USA, Japan, Saudi, and other major destinations.',
      heroTitle: 'Global Visa Assistance',
      heroSubtitle:
        'Professional support for international visitor visa applications from Dubai, with document guidance and application assistance for major destinations worldwide.',
      heroButtonLabel: 'View International Visas',
      heroButtonHref: '/visa-requirements/international',
      heroImage: '/images/visa2.jpg',
      sections: [
        {
          title: 'International Visa Support from Dubai',
          paragraphs: [
            'Travelers applying from the UAE often need destination-specific visa support, because every embassy, visa center, and country can have different document rules, timelines, and case expectations.',
            'Core Plus assists UAE residents with global visitor visa guidance, helping prepare stronger files and clearer application journeys for many major travel destinations.',
          ],
        },
        {
          title: 'Popular Destinations We Support',
          cards: [
            {
              title: 'Europe',
              bullets: ['Schengen Visa', 'Ireland Visa'],
            },
            {
              title: 'United Kingdom and North America',
              bullets: ['UK Visa', 'USA Visa', 'Canada Visa'],
            },
            {
              title: 'Asia-Pacific',
              bullets: ['Japan Visa', 'Australia Visa', 'New Zealand Visa', 'Singapore Visa', 'Malaysia Visa'],
            },
            {
              title: 'Regional and Other Destinations',
              bullets: ['Saudi Visa', 'Turkey Visa', 'Thailand E-Visa', 'South Korea Visa', 'China Visa', 'Brazil Visa'],
            },
          ],
        },
        {
          title: 'What Our International Visa Service Covers',
          bullets: [
            'Destination-based document guidance.',
            'Application requirement review before submission.',
            'Support for travel, business, and visit-visa cases.',
            'Clear preparation for pricing and processing expectations.',
            'Guidance tailored to UAE resident applications.',
          ],
        },
        {
          title: 'How We Support Global Visa Applications',
          steps: [
            {
              title: 'Destination Review',
              description: 'We identify the visa destination and the core requirements that apply to your travel purpose.',
            },
            {
              title: 'Checklist Preparation',
              description: 'Your destination-specific document list is reviewed and organized before the next application step.',
            },
            {
              title: 'Application Guidance',
              description: 'We help you prepare for the process with clearer supporting documents, requirements, and next actions.',
            },
            {
              title: 'Submission Readiness',
              description: 'Before you proceed, we help ensure your file is properly prepared for the visa route you are taking.',
            },
          ],
        },
        {
          title: 'Why Choose Core Plus for International Visas',
          bullets: [
            'Support across multiple major visa destinations.',
            'Practical guidance for UAE-resident applications.',
            'Better preparation for embassy and visa-center requirements.',
            'A clearer visa journey with fewer avoidable document issues.',
          ],
        },
        {
          title: 'Planning an International Trip?',
          paragraphs: [
            'Explore our international visa pages or contact Core Plus for destination-specific guidance before you start your application.',
          ],
          buttonLabel: 'Explore International Visas',
          buttonHref: '/visa-requirements/international',
        },
      ],
    },
  },
};

export function getServiceDetailPage(slug: string) {
  return SERVICE_DETAIL_PAGES[slug] ?? null;
}

export function getServiceDetailSlugs() {
  return SERVICES.map((service) => service.id);
}
