export interface WebhookPayload {
  data: Record<string, unknown>;
  metadata: WebhookMetadata;
}

export interface WebhookMetadata {
  source: string;
  timestamp: string;
  formType: 'quote' | 'demo' | 'contact';
  pageUrl?: string;
  userAgent?: string;
  utmParams?: UtmParams;
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface WebhookResponse {
  success: boolean;
  message?: string;
  id?: string;
  error?: string;
}

export interface WebhookConfig {
  url: string;
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}
