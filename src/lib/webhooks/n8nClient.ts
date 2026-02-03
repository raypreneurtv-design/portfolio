import { WebhookConfig, WebhookPayload, WebhookResponse, WebhookMetadata } from '@/types/webhook';

export class N8nClient {
  private config: WebhookConfig;

  constructor(config: WebhookConfig) {
    this.config = {
      timeout: 10000,
      retries: 2,
      ...config,
    };
  }

  async send(payload: WebhookPayload): Promise<WebhookResponse> {
    const { url, timeout, retries, headers } = this.config;

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= (retries || 0); attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json().catch(() => ({}));

        return {
          success: true,
          message: 'Submission successful',
          id: data.id || data.executionId,
        };
      } catch (error) {
        lastError = error as Error;

        if (attempt < (retries || 0)) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
        }
      }
    }

    console.error('Webhook submission failed:', lastError);

    return {
      success: false,
      error: lastError?.message || 'Failed to submit form',
    };
  }

  static createMetadata(formType: WebhookMetadata['formType'], source: string = 'website'): WebhookMetadata {
    const metadata: WebhookMetadata = {
      source,
      timestamp: new Date().toISOString(),
      formType,
    };

    if (typeof window !== 'undefined') {
      metadata.pageUrl = window.location.href;
      metadata.userAgent = navigator.userAgent;

      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: Record<string, string> = {};

      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams[param] = value;
      });

      if (Object.keys(utmParams).length > 0) {
        metadata.utmParams = utmParams;
      }
    }

    return metadata;
  }
}

export const createN8nClient = (webhookUrl: string): N8nClient => {
  return new N8nClient({ url: webhookUrl });
};
