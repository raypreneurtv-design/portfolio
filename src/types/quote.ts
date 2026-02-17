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
