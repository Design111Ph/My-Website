export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'WordPress & WooCommerce' | 'Elementor & Funnels' | 'Custom Solutions' | 'Web Apps';
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  techTags: string[];
  liveUrl?: string;
  demoBadge?: string;
  year: string;
}

export interface SkillItem {
  name: string;
  level: number; // percentage 0-100
  experience: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  projectWorkedOn: string;
}

export interface StatHighlight {
  label: string;
  value: string;
  unit?: string;
  description: string;
  iconName: string;
}
