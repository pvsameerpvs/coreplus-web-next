export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  iconColor: string;
}

export interface VisaSubcategory {
  label: string;
  items: string[];
}

export interface VisaPricing {
  label: string;
  amount: string;
}

export interface VisaEntry {
  id: string;
  title: string;
  image: string;
  price: string;
  category: 'uae' | 'international';
  flag?: string;
  requirements?: string[];
  subcategories?: VisaSubcategory[];
  notes?: string;
  pricing?: VisaPricing[];
  processingTime?: string;
}

export interface StatItem {
  value: number;
  label: string;
  sublabel: string;
  icon: string;
  iconColor: string;
}

export interface TestimonialItem {
  initials: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  delay: number;
}
