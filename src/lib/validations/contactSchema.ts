import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export const demoRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  businessType: z.enum(
    ['hvac', 'plumbing', 'roofing', 'landscaping', 'electrical', 'cleaning', 'pest-control', 'other'],
    { required_error: 'Please select your business type' }
  ),
  currentMonthlyLeads: z.enum(['0-50', '50-100', '100-250', '250+'], {
    required_error: 'Please select your current lead volume',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;
