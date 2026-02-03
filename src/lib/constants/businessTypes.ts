import { BusinessTypeInfo } from '@/types/business';

export const businessTypes: BusinessTypeInfo[] = [
  {
    id: 'hvac',
    name: 'HVAC',
    icon: '❄️',
    description: 'Heating, ventilation, and air conditioning services',
    commonServices: ['AC Repair', 'Furnace Installation', 'Duct Cleaning', 'Maintenance Plans'],
    avgTicketSize: '$150-$5,000',
    color: '#00a8ff',
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    description: 'Residential and commercial plumbing services',
    commonServices: ['Drain Cleaning', 'Water Heater', 'Pipe Repair', 'Emergency Service'],
    avgTicketSize: '$100-$3,000',
    color: '#0077cc',
  },
  {
    id: 'roofing',
    name: 'Roofing',
    icon: '🏠',
    description: 'Roof installation, repair, and inspection',
    commonServices: ['Roof Replacement', 'Leak Repair', 'Gutter Install', 'Storm Damage'],
    avgTicketSize: '$500-$15,000',
    color: '#6366f1',
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: '🌿',
    description: 'Lawn care and landscape design services',
    commonServices: ['Lawn Maintenance', 'Tree Service', 'Hardscaping', 'Irrigation'],
    avgTicketSize: '$50-$10,000',
    color: '#00ff87',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    description: 'Residential and commercial electrical work',
    commonServices: ['Panel Upgrade', 'Outlet Install', 'Lighting', 'EV Charger'],
    avgTicketSize: '$100-$5,000',
    color: '#fbbf24',
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '✨',
    description: 'Residential and commercial cleaning services',
    commonServices: ['Deep Clean', 'Move-out Clean', 'Office Cleaning', 'Recurring Service'],
    avgTicketSize: '$100-$500',
    color: '#ec4899',
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    icon: '🐛',
    description: 'Pest elimination and prevention services',
    commonServices: ['Termite Treatment', 'Rodent Control', 'Bed Bugs', 'Quarterly Plans'],
    avgTicketSize: '$100-$2,000',
    color: '#84cc16',
  },
  {
    id: 'other',
    name: 'Other',
    icon: '🏢',
    description: 'Other home service businesses',
    commonServices: ['Custom Services'],
    avgTicketSize: 'Varies',
    color: '#8b5cf6',
  },
];

export const getBusinessTypeById = (id: string): BusinessTypeInfo | undefined => {
  return businessTypes.find((bt) => bt.id === id);
};

export const businessTypeOptions = businessTypes.map((bt) => ({
  value: bt.id,
  label: bt.name,
  icon: bt.icon,
}));
