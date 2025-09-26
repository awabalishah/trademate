import { Service, Testimonial, Trade } from '@/types';

export const services: Service[] = [
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Streamline your operations with custom automation solutions that save time and reduce errors.',
    features: [
      'Customer management automation',
      'Invoice generation and tracking',
      'Appointment scheduling systems',
      'Lead capture and follow-up',
      'Reporting and analytics'
    ],
    icon: '🤖',
    price: 'From £299/month'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Professional websites that showcase your work and generate more leads for your business.',
    features: [
      'Mobile-responsive design',
      'SEO optimization',
      'Contact forms and lead capture',
      'Portfolio galleries',
      'Online booking systems'
    ],
    icon: '💻',
    price: 'From £1,499'
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Marketing',
    description: 'Get found online with our comprehensive SEO and digital marketing strategies.',
    features: [
      'Local SEO optimization',
      'Google My Business setup',
      'Social media management',
      'Content marketing',
      'Online reputation management'
    ],
    icon: '📈',
    price: 'From £199/month'
  },
  {
    id: 'query-management',
    title: 'Query Management',
    description: 'Never miss a lead again with our professional query management and response system.',
    features: [
      '24/7 lead monitoring',
      'Automated responses',
      'Lead qualification',
      'Appointment booking',
      'Follow-up sequences'
    ],
    icon: '📞',
    price: 'From £149/month',
    popular: true
  }
];

export const trades: Trade[] = [
  { id: 'plumber', name: 'Plumbers', icon: '🔧', description: 'Professional plumbing services' },
  { id: 'electrician', name: 'Electricians', icon: '⚡', description: 'Electrical installation and repair' },
  { id: 'builder', name: 'Builders', icon: '🏗️', description: 'Construction and renovation' },
  { id: 'painter', name: 'Painters', icon: '🎨', description: 'Interior and exterior painting' },
  { id: 'carpenter', name: 'Carpenters', icon: '🔨', description: 'Custom woodwork and repairs' },
  { id: 'roofer', name: 'Roofers', icon: '🏠', description: 'Roofing installation and repair' },
  { id: 'hvac', name: 'HVAC Engineers', icon: '❄️', description: 'Heating and cooling systems' },
  { id: 'landscaper', name: 'Landscapers', icon: '🌱', description: 'Garden design and maintenance' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mike Johnson',
    company: 'Johnson Plumbing Ltd',
    trade: 'Plumber',
    content: 'Trademate transformed our business. We went from 5 jobs a week to 15+ thanks to their automation and SEO work. Best investment we\'ve made!',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Williams',
    company: 'Williams Electrical',
    trade: 'Electrician',
    content: 'The website they built for us looks professional and brings in quality leads every week. The query management system is a game-changer.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Brown',
    company: 'Brown Construction',
    trade: 'Builder',
    content: 'Our online presence has never been stronger. The SEO work has us ranking #1 for local searches. Highly recommended!',
    rating: 5
  }
];
