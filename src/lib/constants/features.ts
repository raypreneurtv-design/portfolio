import { Feature } from '@/types/business';

export const features: Feature[] = [
  {
    id: 'smart-quote',
    title: 'Smart Quote Generation',
    description: 'Turn website visitors into qualified leads with instant, accurate quotes tailored to your services.',
    icon: 'calculator',
    subFeatures: [
      'Service-specific pricing logic',
      'Zip code coverage validation',
      'Instant email delivery',
      'CRM integration ready',
    ],
    ctaText: 'See Quote Demo',
    ctaLink: '#quote-demo',
  },
  {
    id: 'ai-receptionist',
    title: '24/7 AI Receptionist',
    description: 'Never miss a call again. Our AI answers, qualifies leads, and books appointments around the clock.',
    icon: 'phone',
    subFeatures: [
      'Natural voice conversations',
      'Appointment scheduling',
      'Call transcripts & summaries',
      'Overflow & after-hours routing',
    ],
    ctaText: 'Try Live Demo',
    ctaLink: '/demo',
  },
  {
    id: 'chat-widget',
    title: 'Intelligent Chat System',
    description: 'Engage every website visitor instantly with an AI chat that understands your business.',
    icon: 'chat',
    subFeatures: [
      'Lead qualification',
      'Service recommendations',
      'FAQ automation',
      'Human handoff when needed',
    ],
    ctaText: 'Chat Demo',
    ctaLink: '#chat-demo',
  },
];

export const serviceOptions = [
  {
    id: 'instant-quote',
    label: 'Instant Quote System',
    description: 'Let customers get quotes 24/7 without waiting',
  },
  {
    id: 'ai-receptionist',
    label: 'AI Phone Receptionist',
    description: 'Never miss a call with AI-powered answering',
  },
  {
    id: 'chat-widget',
    label: 'Website Chat Widget',
    description: 'Engage visitors and capture leads instantly',
  },
  {
    id: 'lead-capture',
    label: 'Lead Capture Forms',
    description: 'Smart forms that qualify and route leads',
  },
  {
    id: 'appointment-booking',
    label: 'Appointment Booking',
    description: 'Let customers book directly from your site',
  },
];
