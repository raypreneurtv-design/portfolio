import { Feature } from '@/types/business';

export const features: Feature[] = [
  {
    id: 'private-ai',
    title: 'Private AI, Installed',
    description: 'Your own AI running on your own hardware, not rented from a big provider. Set up, secured, and wired into how you already work.',
    icon: 'server',
    subFeatures: [
      'Runs locally on your machines',
      'Your data never leaves the building',
      'No per-seat cloud fees',
      'Connected to your existing tools',
    ],
    ctaText: 'Book a call',
    ctaLink: 'https://cal.com/ray-ndaula/30min',
  },
  {
    id: 'team-training',
    title: 'Team Training',
    description: 'I get your team actually using it. Plain-language training so the tools get used, not ignored after week one.',
    icon: 'cap',
    subFeatures: [
      'Hands-on walkthroughs',
      'Workflows built around your team',
      'On-site sessions available',
      'Ongoing support',
    ],
    ctaText: 'Book a call',
    ctaLink: 'https://cal.com/ray-ndaula/30min',
  },
  {
    id: 'automations',
    title: 'Automation Pipelines',
    description: 'The workflows that handle the busywork for you, built with n8n. This is where the AI receptionist and lead follow-up live.',
    icon: 'phone',
    subFeatures: [
      'AI phone receptionist',
      'Speed-to-lead follow-up',
      'Lead capture & routing',
      'Custom n8n workflows',
    ],
    ctaText: 'See how it works',
    ctaLink: '/#how-it-works',
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
