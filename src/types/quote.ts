export interface BusinessInfo {
  businessName: string;
  businessType: BusinessType;
  website?: string;
  phone: string;
}

export interface ServiceSelection {
  services: ServiceType[];
  currentChallenges?: string;
}

export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: PreferredContactMethod;
}

export interface QuoteFormData {
  businessInfo: BusinessInfo;
  serviceSelection: ServiceSelection;
  contactInfo: ContactInfo;
}

export type BusinessType =
  | 'hvac'
  | 'plumbing'
  | 'roofing'
  | 'landscaping'
  | 'electrical'
  | 'cleaning'
  | 'pest-control'
  | 'other';

export type ServiceType =
  | 'instant-quote'
  | 'ai-receptionist'
  | 'chat-widget'
  | 'lead-capture'
  | 'appointment-booking';

export type PreferredContactMethod = 'email' | 'phone' | 'text';

export interface QuoteSubmission extends QuoteFormData {
  source: string;
  timestamp: string;
  utmParams?: Record<string, string>;
}
