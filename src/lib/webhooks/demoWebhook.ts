import { N8nClient } from './n8nClient';
import { DemoRequestFormData } from '@/lib/validations/contactSchema';
import { WebhookResponse } from '@/types/webhook';

const DEMO_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_DEMO_WEBHOOK_URL || '';
const CONTACT_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL || '';

export async function submitDemoRequest(data: DemoRequestFormData): Promise<WebhookResponse> {
  if (!DEMO_WEBHOOK_URL) {
    console.warn('Demo webhook URL not configured');
    return {
      success: true,
      message: 'Demo request received (demo mode)',
    };
  }

  const client = new N8nClient({ url: DEMO_WEBHOOK_URL });
  const metadata = N8nClient.createMetadata('demo', 'demo-form');

  const payload = {
    data,
    metadata,
  };

  return client.send(payload);
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}): Promise<WebhookResponse> {
  if (!CONTACT_WEBHOOK_URL) {
    console.warn('Contact webhook URL not configured');
    return {
      success: true,
      message: 'Contact request received (demo mode)',
    };
  }

  const client = new N8nClient({ url: CONTACT_WEBHOOK_URL });
  const metadata = N8nClient.createMetadata('contact', 'contact-form');

  const payload = {
    data,
    metadata,
  };

  return client.send(payload);
}
