export interface BusinessTypeInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  commonServices: string[];
  avgTicketSize: string;
  color: string;
}

export interface BusinessPreviewConfig {
  businessName: string;
  businessType: string;
  primaryColor: string;
  tagline: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  subFeatures: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  businessType: string;
}

export interface CaseStudy {
  title: string;
  businessType: string;
  result: string;
  description: string;
  metrics: { label: string; value: string }[];
  tag: string;
}
