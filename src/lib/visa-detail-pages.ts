import { VISA_DATA } from './constants';
import type { VisaEntry } from './types';

export interface VisaDetailCardItem {
  title: string;
  description?: string;
  bullets?: string[];
}

export interface VisaDetailFaqItem {
  question: string;
  answer: string;
}

export interface VisaDetailStepItem {
  title: string;
  description: string;
}

export interface VisaDetailTableRow {
  label: string;
  value: string;
}

export interface VisaDetailSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: VisaDetailCardItem[];
  steps?: VisaDetailStepItem[];
  table?: {
    columns: [string, string];
    rows: VisaDetailTableRow[];
    note?: string;
  };
  faqs?: VisaDetailFaqItem[];
  buttonLabel?: string;
  buttonHref?: string;
}

export interface VisaDetailPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonLabel: string;
  heroButtonHref: string;
  heroImage: string;
  sections: VisaDetailSection[];
}

const CONTACT_HREF = '/contact';

export const VISA_DETAIL_PAGES: Record<string, VisaDetailPage> = {
  uk: {
    slug: 'uk',
    title: 'UK Visa',
    metaTitle: 'UK Visa from UAE | Apply for UK Visit Visa from Dubai',
    metaDescription:
      'Apply for a UK visa from the UAE with trusted visa consultants in Dubai. Get guidance on documents, eligibility, fees, and the application process.',
    heroTitle: 'UK Visa from UAE',
    heroSubtitle:
      'Start your UK visit visa application with trusted visa consultants in Dubai. Get expert guidance on documents, eligibility, and the application process.',
    heroButtonLabel: 'Check Visa Eligibility',
    heroButtonHref: CONTACT_HREF,
    heroImage: '/images/visa_processing 12.jpg',
    sections: [
      {
        title: 'Apply for a UK Visa from UAE with Trusted Visa Consultants',
        paragraphs: [
          'Planning to visit the United Kingdom from the UAE? Whether you are travelling for tourism, a business meeting, or to visit family, you will need a UK visa before entering the country. The United Kingdom has its own immigration system and is not part of the Schengen area, meaning a separate UK visa is required for UAE residents.',
          'The UK visa application process involves selecting the correct visa category, preparing supporting documents, completing the online application, and attending a biometric appointment. For many applicants, managing these requirements independently can be confusing and time-consuming.',
          'Core Plus is a Dubai-based visa consultancy that assists UAE residents with the UK visitor visa application process. Our consultants help review documents, guide you through the application process, and ensure your file is complete and properly prepared before submission.',
        ],
      },
      {
        title: 'What Is a UK Visa and Do UAE Residents Need One?',
        paragraphs: [
          'Yes. UAE residents require a visa to travel to the United Kingdom regardless of nationality. The most common visa type applied for by UAE residents is the UK Standard Visitor Visa, which allows travellers to visit the UK for tourism, short business visits, or family visits.',
          'This visa typically allows a stay of up to 6 months per visit. Long-term multiple-entry visas are also available for 2 years, 5 years, or 10 years, while each stay is still limited to six months.',
        ],
      },
      {
        title: 'Key Facts - UK Visa for UAE Residents',
        bullets: [
          'Standard Visitor Visa allows stays of up to 6 months per visit.',
          'Multiple-entry visas may be issued for 2, 5, or 10 years.',
          'A biometric appointment is required at a UK visa centre in Dubai.',
          'Standard processing time is approximately 15 working days.',
          'Priority and Super Priority processing options may be available for faster visa decisions.',
        ],
      },
      {
        title: 'Types of UK Visit Visas Available from Dubai',
        paragraphs: [
          'UAE residents can apply for different UK visitor visa types depending on the purpose of travel. Core Plus assists with the following visitor visa categories:',
        ],
        cards: [
          {
            title: 'UK Tourist Visa',
            description:
              'The most common visa for UAE residents visiting the UK for holidays, sightseeing, or short leisure trips. This visa allows travel throughout the UK for tourism purposes.',
          },
          {
            title: 'UK Business Visitor Visa',
            description:
              'For professionals travelling to the UK for short-term business activities such as meetings, conferences, training sessions, or negotiations. An invitation letter from the UK company may be required.',
          },
          {
            title: 'UK Family Visit Visa',
            description:
              "For UAE residents visiting close family members living in the UK. Applicants typically need an invitation letter and proof of the host's residence status in the UK.",
          },
        ],
      },
      {
        title: 'UK Visa Requirements for UAE Residents',
        paragraphs: [
          'To apply for a UK visa from the UAE, applicants must meet certain basic eligibility requirements.',
        ],
        table: {
          columns: ['Requirement', 'Details'],
          rows: [
            { label: 'Valid Passport', value: 'Must be valid for at least 6 months from the date of entry.' },
            { label: 'UAE Residence Visa', value: 'Must be valid for at least 3 months from the date of entry.' },
            { label: 'Financial Proof', value: 'Bank statements showing sufficient funds.' },
            { label: 'Employment Proof', value: 'No objection letter from the company.' },
            { label: 'Accommodation', value: 'Hotel booking or invitation letter.' },
            { label: 'Biometric Appointment', value: 'Fingerprints and photograph submission.' },
          ],
          note: 'Each application is assessed individually by UKVI based on travel purpose, financial stability, and ties to the UAE.',
        },
      },
      {
        title: 'UK Visa Documents Required for UAE Residents',
        paragraphs: [
          'A properly prepared document file is important for a successful visa application. UAE residents generally need the following documents when applying for a UK visitor visa.',
        ],
        cards: [
          {
            title: 'Personal Documents',
            bullets: [
              'Valid passport with at least one blank page.',
              'UAE residence visa copy.',
              'Emirates ID copy.',
            ],
          },
          {
            title: 'Financial Documents',
            bullets: ['Bank statements for the last 3 months.', 'Salary certificate or proof of income.'],
          },
          {
            title: 'Travel Documents',
            bullets: [
              'Flight itinerary.',
              'Hotel booking or accommodation details.',
              'Travel itinerary for the UK visit.',
            ],
          },
          {
            title: 'Employment Documents',
            bullets: ['No Objection Certificate (NOC) from employer.', 'Payslips or employment confirmation letter.'],
          },
        ],
        bullets: [
          'Document requirements may vary depending on nationality and employment status.',
          'Core Plus provides a personalised checklist after consultation.',
        ],
      },
      {
        title: 'How Long Does a UK Visa Take from Dubai?',
        paragraphs: ['UK visa processing time depends on the service option selected.'],
        table: {
          columns: ['Service', 'Processing Time'],
          rows: [
            { label: 'Standard Processing', value: 'Around 15 working days.' },
            { label: 'Priority Service', value: 'Around 5 working days.' },
            { label: 'Super Priority', value: 'Next working day, subject to availability.' },
          ],
          note: 'Processing time begins from the date of biometric submission at the visa centre. Applicants are advised to apply at least 4-6 weeks before travel to avoid delays.',
        },
      },
      {
        title: 'How Much Is the UK Visa Fee from the UAE?',
        paragraphs: ['UK visa fees are set by the UK Home Office.'],
        table: {
          columns: ['Visa Type', 'Approx AED'],
          rows: [
            { label: 'Visitor Visa - 6 months', value: 'Approx. AED 1,100' },
            { label: 'Multiple Entry - 2 years', value: 'Approx. AED 3,100' },
            { label: 'Multiple Entry - 5 years', value: 'Approx. AED 4,900' },
            { label: 'Multiple Entry - 10 years', value: 'Approx. AED 6,200' },
          ],
          note: 'Additional fees may apply if priority processing services are selected.',
        },
      },
      {
        title: 'How to Apply for a UK Visa from Dubai - Step by Step',
        steps: [
          {
            title: 'Consultation and Eligibility Check',
            description: 'Your travel purpose and documents are reviewed to determine the correct visa category.',
          },
          {
            title: 'Document Preparation',
            description: 'A personalised checklist is provided and your documents are verified.',
          },
          {
            title: 'Online Application Submission',
            description: 'The visa application form is completed through the UKVI portal.',
          },
          {
            title: 'Biometric Appointment',
            description: 'Applicants visit a visa centre in Dubai to submit fingerprints and photographs.',
          },
          {
            title: 'Application Processing',
            description: 'UKVI reviews the application and issues a decision.',
          },
        ],
        paragraphs: [
          'With our professional guidance, the process becomes smoother and helps avoid common application mistakes.',
        ],
      },
      {
        title: 'UK Visa Rejection Reasons and How to Improve Your Approval Chances',
        paragraphs: [
          'UK visa refusals commonly occur due to insufficient financial evidence, incomplete documentation, or weak proof of ties to the UAE. Maintaining consistent bank records, submitting accurate documents, and clearly explaining your travel purpose can significantly improve approval chances.',
          'A carefully prepared application gives you a stronger chance of approval and reduces the risk of avoidable delays or refusals.',
        ],
      },
      {
        title: 'Why Apply for a UK Visa Through a Consultant in Dubai?',
        paragraphs: ['Applying for a UK visa involves several steps and detailed documentation. Working with an experienced visa consultant can help ensure the application is accurate and properly prepared.'],
        cards: [
          {
            title: 'Reduce Application Errors',
            description: 'A consultant reviews your documents and identifies potential issues before submission.',
          },
          {
            title: 'Save Time',
            description:
              'Professional guidance simplifies the process and avoids confusion when completing forms and preparing documents.',
          },
          {
            title: 'Application Guidance',
            description:
              'Consultants help ensure your documents meet UKVI requirements and assist with appointment preparation.',
          },
        ],
      },
      {
        title: 'Why Choose Core Plus for Your UK Visa Assistance?',
        paragraphs: [
          'Core Plus is a Dubai-based visa consultancy assisting UAE residents with international visitor visa applications.',
          'Our services include:',
        ],
        bullets: [
          'Document verification by experienced consultants.',
          'Guidance on visitor visa applications.',
          'Personalised application support.',
          'Transparent consultation process.',
          'Assistance with biometric appointment preparation.',
        ],
      },
      {
        title: 'Ready to Apply for Your UK Visa from Dubai?',
        paragraphs: [
          'Planning your UK trip from the UAE? Core Plus can assist you throughout the visa application process, from document preparation to final submission.',
          'Connect with our visa consultants today to begin your UK visa application.',
        ],
        buttonLabel: 'Connect Us',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: 'Do UAE residents need a visa for the UK?',
            answer:
              'Yes. UAE residents require a visa before travelling to the United Kingdom. The most common option is the UK Standard Visitor Visa.',
          },
          {
            question: 'How long does a UK visa take from Dubai?',
            answer:
              'Standard processing usually takes around 15 working days after biometric submission. Priority services may reduce processing time.',
          },
          {
            question: 'How much bank balance is required for a UK visa?',
            answer:
              'There is no official minimum amount, but applicants should show sufficient funds to cover travel, accommodation, and expenses during their stay.',
          },
          {
            question: 'What documents are required for a UK visa?',
            answer:
              'Applicants typically need a valid passport, UAE residence visa, bank statements, employment proof, accommodation details, and a travel itinerary.',
          },
          {
            question: 'How long is a UK visitor visa valid?',
            answer:
              'The standard visitor visa allows stays of up to 6 months per visit. Long-term multiple-entry visas may be issued for 2, 5, or 10 years.',
          },
        ],
      },
    ],
  },
  schengen: {
    slug: 'schengen',
    title: 'Schengen Visa',
    metaTitle: 'Schengen Visa from Dubai | Apply Schengen Visa from UAE',
    metaDescription:
      'Apply for a Schengen visa from Dubai with professional visa consultants. Get complete document support and a smoother application process for UAE residents.',
    heroTitle: 'Schengen Visa from Dubai',
    heroSubtitle:
      'Apply for your Schengen visa from Dubai with professional visa consultants. Complete document support and a smooth application process for UAE residents.',
    heroButtonLabel: 'Get Visa Assistance',
    heroButtonHref: CONTACT_HREF,
    heroImage: '/images/shengon visa.jpg',
    sections: [
      {
        title: 'Apply for a Schengen Visa from Dubai with Trusted Visa Consultants',
        paragraphs: [
          'Planning a trip to Europe from the UAE? If you are a UAE resident or expatriate, you will need a Schengen visa from Dubai to visit the European countries within the Schengen zone.',
          'The application process can involve multiple steps such as preparing financial documents, booking appointments, and submitting accurate information to the relevant embassy. Even small errors can delay approval or lead to visa rejection.',
          'At Core Plus, we provide professional Schengen visa assistance in Dubai to simplify the entire process. Our experienced visa consultants help UAE residents prepare their documents, submit applications correctly, and schedule embassy appointments smoothly.',
          'Whether you are applying for a Schengen tourist visa from Dubai, a business visa, or a visit visa to Europe, our team ensures your application meets the requirements of the relevant Schengen embassy.',
        ],
        bullets: [
          'Professional visa consultation.',
          'Complete document verification.',
          'Visa application assistance.',
          'Appointment booking guidance.',
        ],
      },
      {
        title: 'Schengen Visa Overview for UAE Residents',
        paragraphs: [
          'A Schengen visa allows travelers to visit multiple European countries within the Schengen Area using a single visa. This visa is ideal for tourism, family visits, business travel, or short-term stays in Europe.',
          'The Schengen zone currently includes 29 European countries, allowing free movement between member states without additional border checks.',
          'With a valid Schengen visa from the UAE, travelers can visit several countries within the permitted stay period.',
          'Because each Schengen embassy may have slightly different requirements, many travelers prefer to apply through Schengen visa consultants in Dubai to ensure the application is submitted correctly.',
        ],
        bullets: [
          'France',
          'Germany',
          'Italy',
          'Spain',
          'Switzerland',
          'Netherlands',
          'Austria',
          'Belgium',
        ],
      },
      {
        title: 'Types of Schengen Visas Available',
        paragraphs: ['Depending on your travel purpose, several Schengen visa categories are available.'],
        cards: [
          {
            title: 'Schengen Tourist Visa',
            description:
              'The Schengen tourist visa from Dubai is the most common visa for travelers visiting Europe for tourism, holidays, or sightseeing.',
            bullets: [
              'Short-term stay of up to 90 days within 180 days.',
              'Valid for travel across multiple Schengen countries.',
              'Ideal for vacations and leisure travel.',
            ],
          },
          {
            title: 'Schengen Business Visa',
            description: 'The Schengen business visa allows professionals to travel to Europe for:',
            bullets: ['Business meetings.', 'Corporate visits.', 'Trade exhibitions.', 'Conferences.'],
          },
          {
            title: 'Multiple Entry Schengen Visa',
            description:
              'Some applicants may qualify for a multiple-entry Schengen visa, allowing several visits within the visa validity period.',
          },
        ],
      },
      {
        title: 'Schengen Visa Requirements for UAE Residents',
        paragraphs: [
          'To apply for a Schengen visa from Dubai, applicants must meet the eligibility requirements set by the respective embassy.',
          'Meeting these requirements helps improve the chances of visa approval.',
        ],
        bullets: [
          'Valid passport with at least 3 months validity.',
          'Valid UAE residence visa with more than 3 months validity from the return date from the Schengen area.',
          'Clear travel purpose.',
          'Confirmed travel itinerary.',
          'Proof of accommodation.',
          'Travel insurance covering the Schengen area.',
          'Proof of sufficient financial funds.',
          'Employment or business proof.',
        ],
      },
      {
        title: 'Documents Required for Schengen Visa from UAE',
        paragraphs: [
          'When applying for a Schengen visa from Dubai, you must submit supporting documents along with your visa application.',
          'Our visa experts review your documents carefully to ensure they meet the embassy requirements.',
        ],
        bullets: [
          'Valid passport with previous travel history.',
          'Valid UAE residence visa with more than 3 months validity from the return date from the Schengen area.',
          'Passport-size photographs.',
          'Completed Schengen visa application form.',
          'Bank statements for the last 6 months.',
          'Salary certificate or employment letter.',
          'Flight reservation or travel itinerary.',
          'Hotel booking or accommodation proof.',
          'Travel insurance covering the Schengen area.',
        ],
      },
      {
        title: 'Schengen Visa Processing Time from Dubai',
        paragraphs: ['Processing time may vary depending on the embassy and travel season.'],
        table: {
          columns: ['Visa Type', 'Estimated Processing Time'],
          rows: [{ label: 'Schengen Tourist Visa', value: '15 working days.' }],
          note: 'Applicants can apply for a Schengen visa up to 6 months before the travel date.',
        },
      },
      {
        title: 'Schengen Visa Fees from Dubai',
        paragraphs: ['The cost of a Schengen visa from the UAE may vary depending on nationality and service provider.'],
        table: {
          columns: ['Visa Type', 'Estimated Fee'],
          rows: [{ label: 'Schengen Visa', value: 'AED 499*' }],
        },
      },
      {
        title: 'Step-by-Step Process to Apply for a Schengen Visa from Dubai',
        paragraphs: ['Applying for a Schengen visa involves several steps.'],
        steps: [
          {
            title: 'Step 1 - Choose the Correct Embassy',
            description: 'Select the embassy of the country where you will spend most of your stay.',
          },
          {
            title: 'Step 2 - Prepare Required Documents',
            description: 'Gather all required documents including financial proof and travel details.',
          },
          {
            title: 'Step 3 - Submit Visa Application',
            description: 'Complete the Schengen visa application form and submit it with supporting documents.',
          },
          {
            title: 'Step 4 - Attend Biometric Appointment',
            description: 'Provide biometric data at the visa application centre.',
          },
          {
            title: 'Step 5 - Visa Processing',
            description: 'The embassy reviews your application and supporting documents.',
          },
          {
            title: 'Step 6 - Receive Your Visa',
            description: 'Once approved, your passport will be returned with the Schengen visa.',
          },
        ],
      },
      {
        title: 'Common Reasons Schengen Visa Applications Get Rejected',
        paragraphs: ['Visa refusals usually occur due to incomplete or incorrect applications.'],
        bullets: [
          'Insufficient bank balance.',
          'Missing documents.',
          'Incorrect travel itinerary.',
          'Lack of travel insurance.',
          'Inconsistent financial proof.',
          'Weak ties to the UAE.',
        ],
      },
      {
        title: 'Tips to Improve Your Schengen Visa Approval Chances',
        paragraphs: [
          'To improve approval chances when applying for a Schengen visa from Dubai, consider the following tips:',
        ],
        bullets: [
          'Maintain sufficient bank balance.',
          'Provide a clear travel itinerary and bookings.',
          'Ensure documents are complete and accurate.',
          'Submit valid travel insurance.',
          'Apply well before your travel date.',
          'Seek assistance from experienced visa consultants.',
        ],
      },
      {
        title: 'Why Apply Through a Schengen Visa Consultant in Dubai?',
        paragraphs: ['Applying through professional Schengen visa consultants in Dubai offers several advantages.'],
        bullets: [
          'Professional document verification.',
          'Accurate visa application preparation.',
          'Embassy appointment assistance.',
          'Reduced chances of visa rejection.',
          'Faster and smoother application process.',
        ],
      },
      {
        title: 'Why Choose Core Plus for Your Schengen Visa Application?',
        paragraphs: [
          'Core Plus is a trusted visa consultancy in Dubai providing professional visa services for UAE residents.',
          'Our services include:',
        ],
        bullets: [
          'Visa consultation and eligibility assessment.',
          'Document verification and preparation.',
          'Visa application assistance.',
          'Appointment booking guidance.',
          'Corporate visa services.',
        ],
      },
      {
        title: 'Start Your Schengen Visa Application Today',
        paragraphs: [
          'Planning a trip to Europe from the UAE? Let our experienced visa consultants assist you with the application process.',
          'At Core Plus, we help UAE residents apply for their Schengen visa from Dubai with professional support and step-by-step guidance.',
          'Contact our visa consultants today to begin your Schengen visa application.',
        ],
        buttonLabel: 'Connect Us',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: 'How can I get a Schengen visa from Dubai?',
            answer:
              'You can apply by preparing the required documents, completing the visa application form, and attending a biometric appointment at the visa application centre.',
          },
          {
            question: 'Which is the easiest Schengen country to get a visa from Dubai?',
            answer:
              'Countries such as France, Spain, Italy, and Greece are often considered popular options for Schengen visa applications due to higher approval rates.',
          },
          {
            question: 'What is the minimum bank balance for a Schengen visa?',
            answer:
              'Applicants should show sufficient funds to cover travel expenses, accommodation, and daily costs during their stay in Europe.',
          },
          {
            question: 'How long is a Schengen visa valid?',
            answer: 'A Schengen visa typically allows stays of up to 90 days within a 180-day period.',
          },
          {
            question: 'What are the four types of Schengen visas?',
            answer: 'The main types include tourist visa, business visa, transit visa, and visit visa.',
          },
          {
            question: 'Which embassy gives the fastest Schengen visa?',
            answer:
              'Processing time normally is around 15 working days, but it can take up to 45 days depending on the embassy and the season.',
          },
        ],
      },
    ],
  },
  japan: {
    slug: 'japan',
    title: 'Japan Visa',
    metaTitle: 'Japan Visa for UAE Residents | Apply Japan Visa from Dubai',
    metaDescription:
      'Apply for a Japan visa from Dubai with expert visa consultants. Tourist, visit, and e-visa services for UAE residents with fast processing.',
    heroTitle: 'Japan Visa for UAE Residents',
    heroSubtitle:
      'Apply for your Japan visa from Dubai with expert visa consultants. Fast document verification and professional application assistance for UAE residents.',
    heroButtonLabel: 'Get Visa Assistance',
    heroButtonHref: CONTACT_HREF,
    heroImage: '/images/johan-godinez-dDYRYivNzbI-unsplash.jpg',
    sections: [
      {
        title: 'Trusted Japan Visa Services in Dubai for UAE Residents',
        paragraphs: [
          'Planning a trip to Japan from the UAE for tourism, business, or visiting family? Most travelers must apply for a Japan visa for UAE residents before traveling, and the process requires proper documentation, financial proof, and a correctly submitted application.',
          'At Core Plus, we make the process of applying for a Japan visa from Dubai simple and stress-free. Our experienced visa consultants assist with every stage of the application, from document verification and application preparation to submission guidance, ensuring your application meets the requirements of Japanese immigration authorities.',
          'Whether you are applying for a Japan visit visa, our team helps you prepare a strong application and avoid common mistakes that may delay visa approval.',
        ],
        bullets: [
          'Professional visa consultation.',
          'Document verification before submission.',
          'Visa application assistance.',
          'Step-by-step guidance from visa experts.',
        ],
      },
      {
        title: 'Why Choose Core Plus for Your Japan Visa from Dubai?',
        paragraphs: [
          'Applying for a visa without expert guidance can lead to application errors, delays, or rejection. Our professional visa consultants help ensure your application is accurate and submitted correctly.',
          'With Core Plus you get:',
        ],
        bullets: [
          'Experienced Japan visa consultants in Dubai.',
          'Complete document verification before submission.',
          'Assistance with application form preparation.',
          'Support for visa processing and tracking.',
          'Reduced risk of visa rejection.',
        ],
      },
      {
        title: 'Japan Visa Services for UAE Residents',
        paragraphs: ['We help travelers apply for different Japan visa categories depending on the purpose of travel.'],
        cards: [
          {
            title: 'Japan Tourist Visa from Dubai',
            description:
              'The Japan tourist visa is the most commonly issued visa for UAE residents visiting Japan for tourism, sightseeing, or leisure travel.',
            bullets: [
              'Stay of up to 15 days per visit.',
              'Ideal for tourism and short trips.',
              'Suitable for first-time visitors to Japan.',
            ],
          },
          {
            title: 'Japan Business Visa',
            description: 'The Japan business visa allows professionals to travel to Japan for:',
            bullets: ['Business meetings.', 'Corporate visits.', 'Conferences.', 'Professional engagements.'],
          },
          {
            title: 'Japan Visit Visa',
            description: 'This visa is issued to travelers visiting family members or friends living in Japan.',
          },
          {
            title: 'Japan Multiple Entry Visa',
            description:
              'Some nationalities may qualify for a Japan multiple-entry visa for up to 5 years, allowing several visits within the visa validity period.',
          },
        ],
      },
      {
        title: 'Process to Get Your Japan Visa from Dubai',
        paragraphs: ['Applying for a Japan visa from the UAE becomes much easier with professional assistance.'],
        steps: [
          {
            title: 'Step 1 - Consultation with Visa Experts',
            description: 'Our consultants evaluate your travel purpose and determine the correct visa type.',
          },
          {
            title: 'Step 2 - Document Verification',
            description: 'We review your documents to ensure they meet Japanese visa requirements.',
          },
          {
            title: 'Step 3 - Application Submission',
            description: 'Your visa application is prepared and submitted correctly.',
          },
          {
            title: 'Step 4 - Receive Your Visa',
            description: 'Once approved, your passport is returned with your Japan visa.',
          },
        ],
      },
      {
        title: 'Japan Visa Processing Time from Dubai',
        paragraphs: ['Processing times depend on the visa type and application volume.'],
        table: {
          columns: ['Visa Type', 'Processing Time'],
          rows: [{ label: 'Standard Japan Visa', value: '8-10 working days.' }],
          note: 'Processing begins once the application and documents are submitted successfully.',
        },
      },
      {
        title: 'Documents Required for Japan Visa from UAE',
        paragraphs: ['Applicants must submit supporting documents when applying for a Japan visa from Dubai.'],
        bullets: [
          'Valid passport with travel history.',
          'UAE residence visa copy.',
          'Passport-size photographs.',
          'Completed visa application form.',
          'Electronic bank statements for the last 3 months.',
          'Employment letter or salary certificate.',
          'Flight booking and travel itinerary.',
          'Hotel reservation or accommodation proof.',
        ],
      },
      {
        title: 'Common Reasons Japan Visa Applications Get Rejected',
        paragraphs: ['Visa applications may be rejected due to errors or missing information.'],
        bullets: [
          'Incomplete documentation.',
          'Insufficient financial proof.',
          'Incorrect visa application details.',
          'Unclear travel purpose.',
        ],
      },
      {
        title: 'Get Professional Help for Your Japan Visa from Dubai',
        paragraphs: [
          'Applying for a Japan visa can be complicated if you are unfamiliar with the documentation and application process.',
          'At Core Plus, our visa specialists provide personalized support to ensure your application is properly prepared and submitted.',
          'Whether you need a Japan visit visa, our team guides you through every step.',
        ],
        buttonLabel: 'Get Started Today',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: 'Do UAE residents need a visa to travel to Japan?',
            answer:
              'Yes. Most UAE residents must obtain a visa before traveling to Japan unless they hold passports from visa-exempt countries.',
          },
          {
            question: 'How can I apply for a Japanese visa from Dubai?',
            answer:
              'You can apply by preparing the required documents, completing the visa application form, and submitting your application through an authorized visa service provider.',
          },
          {
            question: 'What are the Japan visa requirements for UAE residents?',
            answer:
              'Applicants must provide a valid passport, UAE residence visa, bank statements, NOC, travel itinerary, hotel booking, and a completed visa application form.',
          },
          {
            question: 'How long does it take to process a Japan visa from Dubai?',
            answer: 'Japan visa processing usually takes 5-7 working days, depending on the visa type and application volume.',
          },
          {
            question: 'What bank balance is required for a Japan visa?',
            answer:
              'Applicants should maintain sufficient funds to cover travel expenses and accommodation during their stay in Japan.',
          },
          {
            question: 'Can visa consultants help with Japan visa applications?',
            answer:
              'Yes. Professional visa consultants in Dubai can assist with document verification, application preparation, and submission guidance to improve approval chances.',
          },
        ],
      },
    ],
  },
  usa: {
    slug: 'usa',
    title: 'USA Visa',
    metaTitle: 'US Visa from Dubai | USA Visit Visa Assistance for UAE Residents',
    metaDescription:
      'Apply for a USA visit visa from Dubai with experienced visa consultants. Get help with DS-160, documents, appointments, and interview preparation.',
    heroTitle: 'US Visa from Dubai',
    heroSubtitle:
      'Apply for a USA visit visa from Dubai with guidance from experienced visa consultants. Core Plus helps UAE residents prepare documents, complete the DS-160 form, and navigate the US visa application process smoothly.',
    heroButtonLabel: 'Check Visa Eligibility',
    heroButtonHref: CONTACT_HREF,
    heroImage: '/images/visa2.jpg',
    sections: [
      {
        title: 'Expert Assistance for US Visa Applications from the UAE',
        paragraphs: [
          'Planning to visit the United States from the UAE? Whether it is for a vacation, an important business meeting, or to spend time with family, securing the right US visa is the first step toward your journey.',
          'For many applicants, the visa process can feel complex and time-consuming. That is where Core Plus makes the difference. Our experienced visa consultants assist throughout the entire application process, from preparing the required documents to organizing appointments and ensuring everything is submitted correctly.',
          'With the right guidance and support, your US visa application becomes simpler, smoother, and stress-free.',
        ],
      },
      {
        title: 'What Is a US Visa for UAE Residents?',
        paragraphs: [
          'A US visa is an authorization that allows foreign nationals to travel to the United States for specific purposes.',
          'For most UAE residents, the common option is the B1/B2 Visitor Visa, which allows temporary visits for tourism, business activities, or family visits.',
        ],
        bullets: [
          'UAE residents must apply for a visa before travelling to the USA.',
          'The B1/B2 visa allows tourism and business travel.',
          'Applicants must complete the DS-160 online form.',
          'A biometric appointment and visa interview are required.',
        ],
      },
      {
        title: 'Types of US Visit Visas from Dubai',
        cards: [
          {
            title: 'B1 Visa - Business Visitor',
            description: 'This visa is issued for short business trips such as meetings, conferences, or negotiations.',
            bullets: ['Business meetings.', 'Professional conferences.', 'Short training programs.'],
          },
          {
            title: 'B2 Visa - Tourist Visa',
            description: 'The B2 visa is for leisure travel and personal visits.',
            bullets: ['Tourism and sightseeing.', 'Visiting friends or family.', 'Medical treatment.'],
          },
        ],
        paragraphs: ['In most cases, applicants receive a combined B1/B2 visa.'],
      },
      {
        title: 'US Visa Requirements for UAE Residents',
        paragraphs: ['Applicants must meet basic eligibility requirements before applying.'],
        table: {
          columns: ['Requirement', 'Details'],
          rows: [
            { label: 'Valid Passport', value: 'Must be valid beyond the intended travel period.' },
            { label: 'UAE Residence Visa', value: 'A valid UAE residence visa is required.' },
            { label: 'DS-160 Form', value: 'Online visa application form.' },
            { label: 'Visa Fee Payment', value: 'Required before booking appointments.' },
            { label: 'Biometric Appointment', value: 'Fingerprints and photograph.' },
            { label: 'Visa Interview', value: 'Conducted at the US Embassy or Consulate.' },
          ],
        },
      },
      {
        title: 'Documents Required for US Visa from Dubai',
        paragraphs: ['Applicants should prepare the following documents.'],
        cards: [
          {
            title: 'Personal Documents',
            bullets: [
              'Valid passport.',
              'UAE residence visa copy.',
              'Emirates ID copy.',
              'DS-160 confirmation page.',
            ],
          },
          {
            title: 'Financial Documents',
            bullets: ['Bank statements for the last 3-6 months.', 'Salary certificate or proof of income.'],
          },
        ],
      },
      {
        title: 'US Visa Processing Time from Dubai',
        paragraphs: ['The visa timeline depends on appointment availability and processing by the US embassy.'],
        table: {
          columns: ['Stage', 'Estimated Time'],
          rows: [
            { label: 'DS-160 Application', value: 'Next day.' },
            { label: 'Appointment Scheduling', value: 'Depends on availability.' },
            { label: 'Interview', value: 'On the scheduled date.' },
            { label: 'Passport Return', value: 'Around 3 days after the appointment.' },
          ],
          note: 'Applicants should apply several weeks before travel.',
        },
      },
      {
        title: 'US Visa Fee from Dubai',
        paragraphs: ['The standard US visitor visa application fee is:'],
        table: {
          columns: ['Visa Type', 'Fee'],
          rows: [
            { label: 'USA Visa', value: 'AED 1,050' },
            { label: 'Urgent appointment within 90 days', value: 'AED 1,000' },
          ],
          note: 'Additional costs may apply depending on appointment services and visa assistance.',
        },
      },
      {
        title: 'How to Apply for a US Visa from Dubai',
        steps: [
          {
            title: 'Step 1',
            description: 'Complete the DS-160 online visa application form.',
          },
          {
            title: 'Step 2',
            description: 'Pay the visa application fee.',
          },
          {
            title: 'Step 3',
            description: 'Schedule biometric and interview appointments.',
          },
          {
            title: 'Step 4',
            description: 'Attend the biometric appointment.',
          },
          {
            title: 'Step 5',
            description: 'Attend the visa interview at the US Embassy or Consulate.',
          },
          {
            title: 'Step 6',
            description: 'Receive your passport if the visa is approved.',
          },
        ],
      },
      {
        title: 'Common Reasons US Visa Applications Get Rejected',
        paragraphs: [
          'Visa refusals often occur when applicants cannot clearly demonstrate their travel purpose or ties to their country of residence.',
          'Preparing accurate documents and presenting a clear travel purpose can improve approval chances.',
        ],
        bullets: [
          'Insufficient financial documentation.',
          'Weak ties to the UAE.',
          'Incomplete or inconsistent information.',
          'Unclear travel plans.',
        ],
      },
      {
        title: 'Why Apply Through a Visa Consultant in Dubai?',
        paragraphs: ['Working with experienced visa consultants can simplify the US visa process. Benefits include:'],
        bullets: [
          'Professional document review.',
          'Guidance for DS-160 application.',
          'Appointment scheduling support.',
          'Interview preparation advice.',
        ],
      },
      {
        title: 'Why Choose Core Plus for Your US Visa from Dubai?',
        paragraphs: [
          'Core Plus is a professional visa consultancy in Dubai assisting UAE residents with international visit visa applications.',
          'Our services include:',
        ],
        bullets: [
          'Visa consultation and eligibility guidance.',
          'Document verification.',
          'Application preparation support.',
          'Appointment booking guidance.',
          'Visa interview preparation.',
        ],
      },
      {
        title: 'Start Your US Visa Application Today',
        paragraphs: [
          'Planning to travel to the United States from the UAE? Our experienced visa consultants are ready to assist you with the application process.',
          'Contact Core Plus today and get professional guidance for your US visa from Dubai.',
        ],
        buttonLabel: 'Talk to a Visa Consultant',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: 'How much is the US visa fee in the UAE?',
            answer:
              'The US visa fee in the UAE depends on the visa type and current embassy fee updates. Applicants should check the latest fee before applying, as charges may vary by visa category.',
          },
          {
            question: 'How long does a US visa take from Dubai?',
            answer: 'Processing time depends on appointment availability and embassy processing.',
          },
          {
            question: 'Do UAE residents need an interview for a US visa?',
            answer: 'Yes, most applicants must attend a visa interview.',
          },
          {
            question: 'How long is a US visitor visa valid?',
            answer: 'Many applicants receive multiple-entry visas valid for up to 10 years.',
          },
          {
            question: 'What documents are required for a US visa?',
            answer:
              'Applicants typically need a passport, DS-160 confirmation page, and financial proof along with other supporting documents.',
          },
        ],
      },
    ],
  },
  saudi: {
    slug: 'saudi',
    title: 'Saudi Visa',
    metaTitle: 'Saudi Visa from Dubai | Saudi Arabia Visa for UAE Residents',
    metaDescription:
      'Apply for a Saudi visa from Dubai with expert assistance. Core Plus helps UAE residents apply for Saudi e-visas and tourist visas with a simple process.',
    heroTitle: 'Saudi Visa from Dubai',
    heroSubtitle:
      'Apply for a Saudi tourist or multiple-entry visa from Dubai. Expert visa consultants helping UAE residents every step of the way.',
    heroButtonLabel: 'Apply Now',
    heroButtonHref: CONTACT_HREF,
    heroImage: '/images/visa_processing.jpg',
    sections: [
      {
        title: 'Saudi Visa from Dubai for UAE Residents',
        paragraphs: [
          'Planning a trip to Saudi Arabia? Core Plus helps UAE residents apply for a Saudi visa from Dubai through the convenient e-visa system. Our team provides professional guidance with the application process, document checks, and submission support so your visa application is completed accurately and efficiently.',
        ],
      },
      {
        title: 'Travel to Saudi Arabia from the UAE',
        paragraphs: [
          'Saudi Arabia is one of the most significant destinations in the Islamic world and a country rich in history, culture, and heritage. Cities such as Makkah and Madinah hold deep religious importance, while destinations like Riyadh, Jeddah, and AlUla attract travelers interested in culture, tourism, and business.',
          'Today, UAE residents can easily travel to the Kingdom by applying for a Saudi Arabia visa from the UAE through the online visa system. With the right guidance, the process can be simple and quick.',
        ],
      },
      {
        title: 'Saudi E-Visa for UAE Residents',
        paragraphs: [
          'The Saudi e-visa for UAE residents allows travelers to visit Saudi Arabia for tourism and short stays. Since the visa is issued electronically, applicants can complete most of the process online.',
          'This visa makes it easier for visitors from the UAE to explore Saudi Arabia\'s religious landmarks, historic sites, modern cities, and cultural destinations.',
          'Core Plus assists applicants throughout the process to ensure the visa application is submitted correctly.',
        ],
      },
      {
        title: 'Saudi Multiple Entry Visa for UAE Residents',
        paragraphs: [
          'For travelers who plan to visit Saudi Arabia more than once, a Saudi multiple-entry visa can be a convenient option. This visa allows visitors to enter the country several times within the visa validity period.',
          'Many UAE residents choose this option for family visits, tourism, or business travel. Our visa consultants can help determine the most suitable option, whether you need a Saudi tourist visa from the UAE or a multiple-entry visa.',
        ],
      },
      {
        title: 'Simple Process to Apply for a Saudi Visa',
        paragraphs: ['Applying for a Saudi Arabia visit visa from Dubai is straightforward when you have professional assistance.'],
        steps: [
          {
            title: 'Step 1 - Consultation',
            description: 'Our team reviews your travel purpose and eligibility.',
          },
          {
            title: 'Step 2 - Document Check',
            description: 'We verify your documents to ensure everything is correct.',
          },
          {
            title: 'Step 3 - Application Submission',
            description: 'Your visa application is submitted through the official system.',
          },
          {
            title: 'Step 4 - Receive Your Visa',
            description: 'Once approved, the visa is issued electronically and ready for travel.',
          },
        ],
      },
      {
        title: 'Documents Required for Saudi Visa',
        paragraphs: ['Applicants usually need the following documents:'],
        bullets: [
          'Valid passport with at least six months validity.',
          'UAE residence visa copy.',
          'Passport-size photograph.',
          'Basic travel details.',
        ],
      },
      {
        title: 'Saudi Visa Processing Time',
        paragraphs: [
          'The processing time for a Saudi Arabia visa from the UAE is typically fast.',
          'Most applications are processed within 24 to 72 hours, depending on the applicant\'s nationality and the details provided in the application.',
        ],
      },
      {
        title: 'Why Apply Through Core Plus',
        paragraphs: [
          'UAE residents choose Core Plus for reliable support when applying for a Saudi visa from Dubai.',
          'Our services include:',
        ],
        bullets: [
          'Visa eligibility guidance.',
          'Document verification.',
          'Online application support.',
          'Assistance with tourist and multiple-entry visas.',
          'Clear guidance throughout the process.',
        ],
      },
      {
        title: 'Start Your Saudi Visa Application',
        paragraphs: [
          'If you are planning to visit Saudi Arabia from the UAE, our consultants can guide you through the entire process.',
          'Contact Core Plus today to apply for your Saudi tourist visa from the UAE or get assistance with your Saudi visa application.',
        ],
        buttonLabel: 'Apply Now',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: 'Can UAE residents apply for a Saudi visa?',
            answer:
              'Yes. UAE residents and expatriates can apply for a Saudi Arabia visa from the UAE for tourism, business visits, or family visits.',
          },
          {
            question: 'How much does a Saudi visa cost from the UAE?',
            answer:
              'The cost of a Saudi visa may vary depending on the visa type, applicant nationality, and current processing requirements. To get the latest visa fees and accurate details, it is best to consult a visa expert before applying.',
          },
          {
            question: 'Can I enter Saudi Arabia with a UAE visa?',
            answer: 'No. A UAE residence visa does not allow entry into Saudi Arabia. Travelers must obtain a valid Saudi visa before traveling.',
          },
          {
            question: 'Can I get a Saudi multiple-entry visa?',
            answer: 'Yes. UAE residents can apply for a Saudi multiple-entry visa that allows multiple visits within the visa validity period.',
          },
          {
            question: 'How do I apply for a Saudi tourist visa from Dubai?',
            answer:
              'You can apply by submitting your passport details, residence visa, photograph, and travel documents through a visa consultancy or an authorized visa service provider.',
          },
        ],
      },
    ],
  },
};

function isVisaCategory(category: string): category is VisaEntry['category'] {
  return category === 'uae' || category === 'international';
}

function getVisaByCategoryAndSlug(category: VisaEntry['category'], slug: string) {
  return VISA_DATA.find((visa) => visa.category === category && visa.id === slug) ?? null;
}

function buildOverviewParagraphs(visa: VisaEntry) {
  if (visa.category === 'uae') {
    return [
      `${visa.title} applications in the UAE require the right documents, the correct eligibility path, and a properly prepared file before submission.`,
      `Core Plus assists applicants in Dubai and across the UAE with ${visa.title.toLowerCase()} support, including document review, requirement guidance, and application preparation.`,
    ];
  }

  return [
    `Planning to apply for a ${visa.title.toLowerCase()} from Dubai? UAE residents often need careful document preparation, travel proof, and the correct application strategy before submission.`,
    `Core Plus helps UAE residents prepare for the ${visa.title.toLowerCase()} process with document guidance, requirement checks, and practical support at every stage.`,
  ];
}

function buildHighlights(visa: VisaEntry) {
  const highlights = [
    visa.category === 'uae' ? 'Application support for UAE-based processing.' : 'Application support for UAE residents applying from Dubai.',
    `Current pricing reference: ${visa.price}.`,
  ];

  if (visa.processingTime) {
    highlights.push(`Estimated processing time: ${visa.processingTime}.`);
  }

  if (visa.subcategories?.length) {
    highlights.push(`Multiple application pathways available under ${visa.title}.`);
  }

  if (visa.pricing?.length) {
    highlights.push('Multiple pricing or validity options are available depending on the visa type.');
  }

  return highlights;
}

function buildRequirementSection(visa: VisaEntry): VisaDetailSection {
  if (visa.subcategories?.length) {
    return {
      title: `${visa.title} Requirements and Eligibility`,
      paragraphs: [
        `Applicants for ${visa.title.toLowerCase()} should prepare the correct supporting documents based on their specific case type.`,
      ],
      cards: visa.subcategories.map((subcategory) => ({
        title: subcategory.label,
        bullets: subcategory.items,
      })),
    };
  }

  return {
    title: `${visa.title} Documents Required`,
    paragraphs: [
      `The following documents are commonly required when applying for ${visa.title.toLowerCase()}. Final requirements can vary depending on nationality, status, and the type of application.`,
    ],
    bullets: visa.requirements ?? ['Passport copy', 'Relevant supporting documents', 'Application form and travel details'],
  };
}

function buildPricingSection(visa: VisaEntry): VisaDetailSection | null {
  if (visa.pricing?.length) {
    return {
      title: `${visa.title} Fees and Validity Options`,
      table: {
        columns: ['Option', 'Amount'],
        rows: visa.pricing.map((pricing) => ({ label: pricing.label, value: pricing.amount })),
        note: `Base displayed pricing for this visa starts from ${visa.price}.`,
      },
    };
  }

  return {
    title: `${visa.title} Fees and Processing`,
    table: {
      columns: ['Item', 'Details'],
      rows: [
        { label: 'Price', value: visa.price },
        { label: 'Processing Time', value: visa.processingTime ?? 'Contact us for current timelines.' },
        {
          label: 'Application Support',
          value:
            visa.category === 'uae'
              ? 'Core Plus can assist with document checks, eligibility review, and application guidance in the UAE.'
              : 'Core Plus can assist with document checks, travel document preparation, and application support from Dubai.',
        },
      ],
    },
  };
}

function buildGenericVisaDetailPage(visa: VisaEntry): VisaDetailPage {
  const isUaeVisa = visa.category === 'uae';
  const pricingSection = buildPricingSection(visa);

  return {
    slug: visa.id,
    title: visa.title,
    metaTitle: isUaeVisa
      ? `${visa.title} in UAE | ${visa.title} Assistance by Core Plus`
      : `${visa.title} from Dubai | ${visa.title} Assistance for UAE Residents`,
    metaDescription: isUaeVisa
      ? `Apply for ${visa.title.toLowerCase()} in the UAE with Core Plus. Get help with documents, requirements, pricing, and processing guidance.`
      : `Apply for ${visa.title.toLowerCase()} from Dubai with Core Plus. Get support with documents, requirements, pricing, and processing guidance.`,
    heroTitle: isUaeVisa ? `${visa.title} in UAE` : `${visa.title} from Dubai`,
    heroSubtitle: isUaeVisa
      ? `Get expert guidance for ${visa.title.toLowerCase()} applications in the UAE, including documents, eligibility, pricing, and processing support.`
      : `Apply for your ${visa.title.toLowerCase()} from Dubai with expert visa consultants. Get support with documents, eligibility, pricing, and the application process.`,
    heroButtonLabel: 'Check Visa Eligibility',
    heroButtonHref: CONTACT_HREF,
    heroImage: visa.image,
    sections: [
      {
        title: `Apply for ${visa.title} with Core Plus`,
        paragraphs: buildOverviewParagraphs(visa),
      },
      {
        title: `${visa.title} Highlights`,
        bullets: buildHighlights(visa),
      },
      buildRequirementSection(visa),
      pricingSection,
      {
        title: `How We Help with ${visa.title}`,
        steps: [
          {
            title: 'Consultation and Eligibility Review',
            description: `We review your case and confirm the most suitable route for your ${visa.title.toLowerCase()} application.`,
          },
          {
            title: 'Document Preparation',
            description: 'Your checklist is reviewed so the file is complete, clear, and ready for submission.',
          },
          {
            title: 'Application Guidance',
            description:
              visa.category === 'uae'
                ? 'We guide you through the UAE processing steps, supporting forms, and required attachments.'
                : 'We guide you through the visa process, embassy requirements, and supporting documentation from Dubai.',
          },
          {
            title: 'Submission Readiness',
            description: 'Before you proceed, we help ensure your documents and application details are properly prepared.',
          },
        ],
      },
      {
        title: `Why Choose Core Plus for ${visa.title}`,
        bullets: [
          'Experienced consultants for UAE and international visa support.',
          'Document review before submission.',
          'Clear guidance on requirements and timelines.',
          'Transparent support throughout the application process.',
          'Practical help to reduce common application mistakes.',
        ],
      },
      {
        title: `Ready to Start Your ${visa.title} Application?`,
        paragraphs: [
          `If you are planning to apply for ${visa.title.toLowerCase()}, Core Plus can support you with the next steps, document review, and application preparation.`,
        ],
        buttonLabel: 'Connect Us',
        buttonHref: CONTACT_HREF,
      },
      {
        title: "FAQ's",
        faqs: [
          {
            question: `What documents are usually needed for ${visa.title}?`,
            answer:
              visa.requirements?.join(' ') ??
              `Requirements depend on the case type, but applicants usually need a passport, supporting documents, and a properly prepared application file.`,
          },
          {
            question: `How much does ${visa.title} cost?`,
            answer: `${visa.title} pricing currently starts at ${visa.price}. Contact Core Plus for the latest case-based estimate and support options.`,
          },
          {
            question: `How long does ${visa.title} take?`,
            answer: visa.processingTime
              ? `The estimated processing time for ${visa.title.toLowerCase()} is ${visa.processingTime}.`
              : `Processing time for ${visa.title.toLowerCase()} depends on the case type and current authority timelines.`,
          },
          {
            question: `Can Core Plus help with ${visa.title}?`,
            answer: `Yes. Core Plus can help review your documents, explain the requirements, and guide you through the ${visa.title.toLowerCase()} application process.`,
          },
        ],
      },
    ].filter(Boolean) as VisaDetailSection[],
  };
}

export function getVisaDetailPage(category: string, slug: string) {
  if (!isVisaCategory(category)) {
    return null;
  }

  const customPage = category === 'international' ? VISA_DETAIL_PAGES[slug] ?? null : null;

  if (customPage) {
    return customPage;
  }

  const visa = getVisaByCategoryAndSlug(category, slug);

  if (!visa) {
    return null;
  }

  return buildGenericVisaDetailPage(visa);
}

export function getVisaDetailParams() {
  return VISA_DATA.map((visa) => ({
    category: visa.category,
    slug: visa.id,
  }));
}

export function getVisaDetailHref(visa: Pick<VisaEntry, 'id' | 'category'>) {
  return `/visa-requirements/${visa.category}/${visa.id}`;
}
