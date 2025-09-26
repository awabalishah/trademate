export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  trade: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  trade: string;
  service: string;
  message: string;
}

export interface Trade {
  id: string;
  name: string;
  icon: string;
  description: string;
}
