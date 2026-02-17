import { z } from 'zod';

export const businessInfoSchema = z.object({
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name must be less than 100 characters'),
  businessType: z.enum(
    ['hvac', 'plumbing', 'roofing', 'landscaping', 'electrical', 'cleaning', 'pest-control', 'other'],
    { required_error: 'Please select your business type' }
  ),
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
});

export const serviceSelectionSchema = z.object({
  services: z
    .array(z.enum(['instant-quote', 'ai-receptionist', 'chat-widget', 'lead-capture', 'appointment-booking']))
    .min(1, 'Please select at least one service'),
  currentChallenges: z
    .string()
    .max(500, 'Please keep your response under 500 characters')
    .optional(),
});

export const contactInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  preferredContact: z.enum(['email', 'phone', 'text'], {
    required_error: 'Please select your preferred contact method',
  }),
});

export const fullQuoteSchema = z.object({
  businessInfo: businessInfoSchema,
  serviceSelection: serviceSelectionSchema,
  contactInfo: contactInfoSchema,
});

export type BusinessInfoFormData = z.infer<typeof businessInfoSchema>;
export type ServiceSelectionFormData = z.infer<typeof serviceSelectionSchema>;
export type ContactInfoFormData = z.infer<typeof contactInfoSchema>;
export type FullQuoteFormData = z.infer<typeof fullQuoteSchema>;
