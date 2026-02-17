import { N8nClient } from './n8nClient';
import { FullQuoteFormData } from '@/lib/validations/quoteSchema';
import { WebhookResponse } from '@/types/webhook';

const QUOTE_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_QUOTE_WEBHOOK_URL || '';

export async function submitQuoteRequest(data: FullQuoteFormData): Promise<WebhookResponse> {
  if (!QUOTE_WEBHOOK_URL) {
    console.warn('Quote webhook URL not configured');
    return {
      success: true,
      message: 'Quote request received (demo mode)',
    };
  }

  const client = new N8nClient({ url: QUOTE_WEBHOOK_URL });
  const metadata = N8nClient.createMetadata('quote', 'quote-form');

  const payload = {
    data: {
      businessName: data.businessInfo.businessName,
      businessType: data.businessInfo.businessType,
      website: data.businessInfo.website || '',
      businessPhone: data.businessInfo.phone,
      services: data.serviceSelection.services,
      currentChallenges: data.serviceSelection.currentChallenges || '',
      contactName: data.contactInfo.fullName,
      contactEmail: data.contactInfo.email,
      contactPhone: data.contactInfo.phone,
      preferredContact: data.contactInfo.preferredContact,
    },
    metadata,
  };

  return client.send(payload);
}

export async function submitQuickQuote(data: {
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
}): Promise<WebhookResponse> {
  if (!QUOTE_WEBHOOK_URL) {
    console.warn('Quote webhook URL not configured');
    return {
      success: true,
      message: 'Quick quote request received (demo mode)',
    };
  }

  const client = new N8nClient({ url: QUOTE_WEBHOOK_URL });
  const metadata = N8nClient.createMetadata('quote', 'quick-quote');

  const payload = {
    data: {
      ...data,
      formType: 'quick-quote',
    },
    metadata,
  };

  return client.send(payload);
}
