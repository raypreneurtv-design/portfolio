// HVAC quote chat types
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface QuoteBreakdownItem {
  item: string;
  description: string;
  cost: string;
}

export interface QuoteData {
  serviceType: string;
  systemType: string;
  homeSize: string;
  location: string;
  equipmentCost: string;
  laborCost: string;
  totalRange: string;
  timeline: string;
  breakdown: QuoteBreakdownItem[];
}

export interface ChatApiRequest {
  messages: { role: "user" | "assistant"; content: string }[];
}

export interface ChatApiResponse {
  message: string;
  quote?: QuoteData;
}

export interface PdfRequest {
  quote: QuoteData;
  email: string;
}

// Quote form types (used by QuoteForm component)
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
