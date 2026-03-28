export interface HomeWhyFeature {
  color: string;
  delay: number;
  description: string;
  icon: string;
  title: string;
}

export interface HomeFaqItem {
  answer: string;
  question: string;
}

export const HOME_ABOUT_HIGHLIGHTS = [
  'Experienced Visa Consultants in Dubai',
  'Accurate Document Verification',
  'Transparent Visa Application Guidance',
  'Reliable Support for UAE Residents',
];

export const HOME_WHY_FEATURES: HomeWhyFeature[] = [
  {
    icon: 'bi-lightning-charge-fill',
    color: 'bg-blue-100 text-blue-600',
    title: 'Fast & Efficient Process',
    description:
      'Our consultants help streamline the visa preparation process so your application is submitted accurately and on time.',
    delay: 100,
  },
  {
    icon: 'bi-chat-square-dots-fill',
    color: 'bg-cyan-100 text-cyan-600',
    title: 'Transparent Consultation',
    description:
      'We provide clear guidance on visa requirements, documentation, and application procedures.',
    delay: 200,
  },
  {
    icon: 'bi-people-fill',
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Experienced Visa Experts',
    description:
      'Our team understands embassy requirements and helps ensure your visa application is properly prepared.',
    delay: 300,
  },
  {
    icon: 'bi-headset',
    color: 'bg-green-100 text-green-600',
    title: 'Dedicated Support',
    description:
      'Our consultants remain available to answer questions and guide you through each stage of the process.',
    delay: 400,
  },
];

export const HOME_SERVICE_SUMMARIES = [
  {
    id: 'visa',
    title: 'Visa Processing',
    description:
      'Professional assistance with international visit visa applications for UAE residents travelling abroad.',
  },
  {
    id: 'global-visa',
    title: 'Global Visa Assistance',
    description:
      'Expert guidance for visa requirements, documentation, and application procedures for major travel destinations.',
  },
  {
    id: 'pro',
    title: 'PRO Services',
    description:
      'Support with government-related documentation and administrative procedures in the UAE.',
  },
  {
    id: 'company',
    title: 'Company Formation & Licensing',
    description:
      'Consultation and assistance for business registration and licensing processes in the UAE.',
  },
] as const;

export const HOME_DESTINATIONS = [
  { id: 'uk', title: 'UK Visa from Dubai' },
  { id: 'schengen', title: 'Schengen Visa from Dubai' },
  { id: 'usa', title: 'USA Visa from Dubai' },
  { id: 'saudi', title: 'Saudi Visa from Dubai' },
  { id: 'japan', title: 'Japan Visa from Dubai' },
] as const;

export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: 'What does a visa consultant in Dubai do?',
    answer:
      'A visa consultant helps applicants prepare documents, understand visa requirements, and guide them through the visa application process.',
  },
  {
    question: 'Why should I use a Professional visa consultancy in Dubai?',
    answer:
      'Professional visa consultants help ensure your application is prepared correctly, reducing the risk of errors or delays.',
  },
  {
    question: 'Which countries can UAE residents apply visit visas for?',
    answer:
      'UAE residents can apply visit visas for destinations such as the UK, Schengen countries, the USA, Japan, Saudi Arabia, and many more.',
  },
  {
    question: 'How long does a visit visa application process take?',
    answer:
      'Processing times depend on the destination and embassy requirements, but most applications take between a few days and a few weeks*.',
  },
];

export const WHATSAPP_INQUIRY_OPTIONS = [
  'Visa Assistance',
  'Corporate Services',
  'PRO Services',
  'Other Enquiry',
];

export const GOOGLE_BUSINESS_PROFILE_URL = 'https://maps.app.goo.gl/tDMwimg8SQXMKJBW7';

export const GOOGLE_BUSINESS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.915448616873!2d55.30547741500285!3d25.2509324838831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43424b6fbc71%3A0x530dce3ba8babbad!2sCORE%20PLUS%20BUSINESS%20SET%20UP%20SERVICES%20L%20L%20C!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae';

export const HOME_TRUST_SIGNALS = [
  '1000+ Visa Applications Assisted',
  '75+ Countries Covered',
  'Trusted Visa Consultancy in Dubai',
];
