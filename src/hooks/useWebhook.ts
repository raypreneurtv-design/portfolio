'use client';

import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { WebhookResponse } from '@/types/webhook';

export interface UseWebhookOptions {
  onSuccess?: (response: WebhookResponse) => void;
  onError?: (error: string) => void;
  successMessage?: string;
  errorMessage?: string;
}

export interface UseWebhookReturn<T> {
  submit: (data: T) => Promise<WebhookResponse>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  reset: () => void;
}

export function useWebhook<T>(
  webhookFn: (data: T) => Promise<WebhookResponse>,
  options: UseWebhookOptions = {}
): UseWebhookReturn<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    onSuccess,
    onError,
    successMessage = 'Submitted successfully!',
    errorMessage = 'Something went wrong. Please try again.',
  } = options;

  const submit = useCallback(
    async (data: T): Promise<WebhookResponse> => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const response = await webhookFn(data);

        if (response.success) {
          setIsSuccess(true);
          toast.success(successMessage);
          onSuccess?.(response);
        } else {
          throw new Error(response.error || errorMessage);
        }

        return response;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : errorMessage;
        setIsError(true);
        setError(errorMsg);
        toast.error(errorMsg);
        onError?.(errorMsg);

        return {
          success: false,
          error: errorMsg,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [webhookFn, successMessage, errorMessage, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setError(null);
  }, []);

  return {
    submit,
    isLoading,
    isSuccess,
    isError,
    error,
    reset,
  };
}
