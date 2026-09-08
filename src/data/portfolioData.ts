import { Project, SkillGroup, ProcessStep, Testimonial, StatHighlight } from '../types';

import rameloPortrait from '../assets/images/ramelo_real_headshot_1788758449661.jpg';
import projectYogaExpo from '../assets/images/project_yoga_expo_1788755593779.jpg';
import projectLunaFast from '../assets/images/project_lunafast_1788755615422.jpg';
import projectRealEstate from '../assets/images/project_realestate_1788755634388.jpg';
import projectBoutiqueBiz from '../assets/images/project_boutique_biz_1788755655313.jpg';
import projectHealthPortal from '../assets/images/project_health_portal_1788755704052.jpg';
import projectAgencyFunnel from '../assets/images/project_agency_funnel_1788755725017.jpg';

export const PERSONAL_INFO = {
  name: 'Ramelo Lozada',
  brandName: 'LOZADA',
  role: 'Senior WordPress Developer & Designer',
  experienceYears: '8+',
  location: 'Iloilo City, Philippines',
  timezone: 'Asia/Manila (GMT+8)',
  email: 'rflozada111@gmail.com',
  phone: '+63 917 842 1920',
  availability: 'Available for New Projects & Contracts',
  availabilityStatus: 'Open for Q2/Q3 Engagements',
  heroValueProp:
    'Bridging pixel-perfect UI/UX design with robust, high-performance WordPress & WooCommerce architectures that scale businesses and turn visitors into loyal customers.',
  bioShort:
    'Senior WordPress Developer & UI/UX Designer with over 8 years of specialized hands-on expertise building custom WordPress themes, high-converting WooCommerce stores, GoHighLevel marketing funnels, and enterprise-grade web experiences. Based in Iloilo, Philippines, serving top-tier clients across North America, Europe, Australia, and Southeast Asia.',
  portrait: rameloPortrait,
  socialLinks: {
    github: 'https://github.com/rflozada',
    linkedin: 'https://linkedin.com/in/ramelolozada',
    email: 'mailto:rflozada111@gmail.com',
    whatsapp: 'https://wa.me/639178421920',
    wordpress: 'https://profiles.wordpress.org/rflozada',
  },
};

export const STATS_HIGHLIGHTS: StatHighlight[] = [
  {
    label: 'Years Experience',
    value: '8+',
    description: 'Specialized WordPress engineering, theme craftsmanship, and UI/UX design',
    iconName: 'Award',
  },
  {
    label: 'Websites Launched',
    value: '150+',
    description: 'From boutique WooCommerce shops to high-traffic multinational portals',
    iconName: 'Globe',
  },
  {
    label: 'Client Satisfaction',
    value: '99.4%',
    description: 'Consistent 5-star ratings across Upwork, direct contracts, and long-term agency retainers',
    iconName: 'HeartHandshake',
  },
  {
    label: 'Avg PageSpeed Score',
    value: '98/100',
    description: 'Sub-second load times and passing Core Web Vitals across desktop and mobile devices',
    iconName: 'Zap',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Engineered for clean code, lightning speeds, custom theme hooks, and seamless integrations.',
    iconName: 'Code',
    skills: [
      { name: 'WordPress Core & Architecture', level: 98, experience: '8+ yrs', highlight: true },
      { name: 'Custom Theme & Plugin Development', level: 95, experience: '7+ yrs', highlight: true },
      { name: 'WooCommerce & Custom Checkouts', level: 94, experience: '7+ yrs', highlight: true },
      { name: 'PHP 8.x & MySQL Optimization', level: 90, experience: '8+ yrs' },
      { name: 'Modern JavaScript (ES6+), React & REST APIs', level: 86, experience: '5+ yrs' },
      { name: 'HTML5, Semantic UI, Tailwind CSS & SASS', level: 96, experience: '8+ yrs' },
      { name: 'Core Web Vitals & Server-Level Caching', level: 95, experience: '6+ yrs', highlight: true },
    ],
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    description: 'Designing intuitive, high-conversion interfaces that elevate brand authority.',
    iconName: 'Palette',
    skills: [
      { name: 'UI/UX Wireframing & Prototyping (Figma)', level: 92, experience: '6+ yrs', highlight: true },
      { name: 'Adobe Creative Suite (Photoshop & Illustrator)', level: 90, experience: '8+ yrs' },
      { name: 'Canva Pro & Brand Asset Systems', level: 94, experience: '6+ yrs' },
      { name: 'Design Systems & Responsive Layouts', level: 95, experience: '8+ yrs', highlight: true },
      { name: 'Conversion Rate Optimization (CRO) UI', level: 90, experience: '5+ yrs' },
    ],
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Performance',
    description: 'Ranking high on search engines while keeping load times under 1 second globally.',
    iconName: 'TrendingUp',
    skills: [
      { name: 'Technical & On-Page SEO Architecture', level: 92, experience: '7+ yrs', highlight: true },
      { name: 'Google Search Console & Schema.org Markup', level: 94, experience: '6+ yrs' },
      { name: 'Cloudflare CDN, Edge Rules & Security Hardening', level: 90, experience: '6+ yrs' },
      { name: 'Asset Minification & Database Query Tuning', level: 93, experience: '7+ yrs', highlight: true },
      { name: 'Google Analytics 4 & Tag Manager Event Tracking', level: 88, experience: '5+ yrs' },
    ],
  },
  {
    id: 'other-tools',
    title: 'Tools, CRM & AI Workflows',
    description: 'Modern automation toolchains, CRM funnels, and AI-accelerated delivery.',
    iconName: 'Cpu',
    skills: [
      { name: 'Elementor Pro & Theme Builder Mastery', level: 98, experience: '8+ yrs', highlight: true },
      { name: 'GoHighLevel (GHL) Funnels & Automations', level: 92, experience: '4+ yrs', highlight: true },
      { name: 'AI Engineering Workflows (ChatGPT, Claude, Gemini)', level: 95, experience: '3+ yrs', highlight: true },
      { name: 'Gutenberg Full Site Editing (FSE) & ACF Pro', level: 92, experience: '5+ yrs' },
      { name: 'Git, GitHub, CI/CD Staging & Deployments', level: 88, experience: '6+ yrs' },
      { name: 'Zapier, Make & Webhook Event Pipelines', level: 89, experience: '5+ yrs' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'the-yoga-expo',
    title: 'The Yoga Expo',
    subtitle: 'North America’s Premier Yoga & Wellness Event Platform',
    category: 'WordPress & WooCommerce',
    thumbnail: projectYogaExpo,
    shortDescription:
      'High-traffic ticketed festival and workshop booking portal with dynamic class schedule filters, WooCommerce ticketing, and sponsor management.',
    fullDescription:
      'The Yoga Expo is one of the largest consumer yoga and holistic health events in the United States. Ramelo architected a modern, lightning-fast digital home that serves tens of thousands of attendees per season. The platform features dynamic teacher schedules, ticket tier checkouts with Stripe and Apple Pay, exhibitor interactive booth maps, and automated email ticketing passes.',
    challenge:
      'The previous website struggled under massive traffic surges during ticket drop announcements, and users found it difficult to filter through 100+ concurrent yoga workshops across multiple cities.',
    solution:
      'Engineered a lightweight custom WordPress theme coupled with high-efficiency AJAX filtering for workshop schedules, robust WooCommerce checkout pipeline, Redis object caching, and Cloudflare enterprise edge caching.',
    results: [
      '310% increase in mobile ticket purchase completion rate',
      '0.74s average page load speed under 15,000 concurrent visitors',
      'Seamless multi-city schedule switcher without page reloads',
    ],
    techTags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Stripe API', 'Cloudflare', 'Custom JS'],
    liveUrl: 'https://theyogaexpo.org',
    demoBadge: 'Featured Client',
    year: '2023 - Present',
  },
  {
    id: 'lunafast',
    title: 'LunaFast Health & Fasting',
    subtitle: 'Intermittent Fasting Tracking SaaS & Nutrition Portal',
    category: 'Web Apps',
    thumbnail: projectLunaFast,
    shortDescription:
      'Sleek wellness SaaS marketing engine with interactive fasting calculator, subscription paywalls, and high-converting member onboarding.',
    fullDescription:
      'LunaFast empowers health enthusiasts to practice intermittent fasting and circadian nutrition. Ramelo created a modern dark-mode aesthetic with interactive fasting duration widgets, membership tiers managed seamlessly via MemberPress, and dynamic meal plan delivery.',
    challenge:
      'The client needed a frictionless landing experience that educates users on fasting protocols and immediately guides them into an active recurring trial membership.',
    solution:
      'Built an interactive browser-based fasting timer widget, smooth micro-interactions using modern Tailwind and React micro-components inside a bespoke WordPress framework, and integrated recurrent billing.',
    results: [
      '42% uplift in free-to-paid membership trial conversion',
      '99+ Performance score on Google Lighthouse Mobile',
      'Automated personalized onboarding email drip sequence',
    ],
    techTags: ['WordPress', 'Tailwind CSS', 'MemberPress', 'React Micro-UI', 'Custom PHP', 'Zapier'],
    liveUrl: 'https://lunafast.com',
    demoBadge: 'SaaS & Membership',
    year: '2024',
  },
  {
    id: 'apex-coastal-realty',
    title: 'Apex Coastal Living',
    subtitle: 'Luxury Architecture & Waterfront Estates Showcase',
    category: 'Custom Solutions',
    thumbnail: projectRealEstate,
    shortDescription:
      'Elite luxury real estate platform featuring high-resolution architectural gallery, MLS-ready property filtering, and 3D virtual tour embeds.',
    fullDescription:
      'A luxury coastal realty group required a premium, visually arresting property portal to market multi-million-dollar beachfront properties to international buyers. The design emphasizes breathtaking photography, clean architectural lines, and intuitive property parameter search.',
    challenge:
      'Heavy uncompressed property photography and video tours were dragging page load times above 6 seconds, leading to high bounce rates among affluent buyers.',
    solution:
      'Integrated Advanced Custom Fields (ACF Pro) with custom post types, Next-Gen WebP image transformation with responsive srcset, lazy-loading 3D Matterport embeds, and geolocation map clustering.',
    results: [
      'Page weight decreased from 14.8MB to 1.6MB without sacrificing visual clarity',
      'Lead inquiry submissions rose by 64% within the first 60 days',
      'Ranked #1 for regional luxury waterfront property keywords',
    ],
    techTags: ['WordPress', 'ACF Pro', 'Google Maps API', 'Tailwind', 'Matterport 3D', 'Technical SEO'],
    liveUrl: 'https://apexcoastal.example.com',
    demoBadge: 'Luxury Real Estate',
    year: '2023',
  },
  {
    id: 'artisan-roast-co',
    title: 'Artisan Roast & Co.',
    subtitle: 'Specialty Coffee Subscription & Lifestyle Store',
    category: 'WordPress & WooCommerce',
    thumbnail: projectBoutiqueBiz,
    shortDescription:
      'Direct-to-consumer e-commerce experience with custom coffee bean grind selector, recurring delivery subscriptions, and one-click checkout.',
    fullDescription:
      'Artisan Roast & Co. crafts ethically sourced single-origin coffee. Ramelo transformed their digital storefront into an experiential boutique with roast profile charts, custom subscription cadence selectors, and GoHighLevel customer retention triggers.',
    challenge:
      'High cart abandonment on checkout and an outdated inventory management system that failed to update bean batch availability in real-time.',
    solution:
      'Customized WooCommerce checkout funnel with minimal distraction, integrated WooCommerce Subscriptions with flexible skip/swap options, and configured automated SMS delivery updates.',
    results: [
      'Cart abandonment decreased by 28%',
      'Active monthly coffee subscribers grew by 180% over 6 months',
      'Average order value (AOV) increased by $14 via automated checkout upsells',
    ],
    techTags: ['WooCommerce', 'WooCommerce Subscriptions', 'GoHighLevel CRM', 'Sass', 'Speed Cache'],
    liveUrl: 'https://artisanroast.example.com',
    demoBadge: 'E-Commerce & Subs',
    year: '2023 - 2024',
  },
  {
    id: 'healthpulse-clinic',
    title: 'HealthPulse Medical & Dental',
    subtitle: 'Multi-Location Healthcare Provider & Appointment Portal',
    category: 'Custom Solutions',
    thumbnail: projectHealthPortal,
    shortDescription:
      'HIPAA-conscious medical portal with real-time doctor availability calendars, online patient intake forms, and clinic branch locator.',
    fullDescription:
      'HealthPulse operates multiple clinical centers. Ramelo built an accessible, reassuring, and streamlined web presence where patients can easily find specialists, verify insurance acceptance, and book appointments 24/7.',
    challenge:
      'Front desk staff were overwhelmed with phone calls for simple appointment bookings and new patient registration paperwork.',
    solution:
      'Implemented an automated booking engine synchronized with Google Calendar and clinical management software, secure encrypted intake forms, and a responsive location finder.',
    results: [
      'Over 600 monthly appointments booked autonomously online',
      'Saved clinical administrative staff ~15 hours per week',
      '100% WCAG AA accessibility compliance score',
    ],
    techTags: ['WordPress', 'Custom Post Types', 'Booking Engine API', 'Accessible UI', 'Schema Markup'],
    liveUrl: 'https://healthpulse.example.com',
    demoBadge: 'Healthcare Portal',
    year: '2024',
  },
  {
    id: 'scalesprint-agency',
    title: 'ScaleSprint Growth Funnel',
    subtitle: 'B2B Growth Consultancy & Lead Generation Engine',
    category: 'Elementor & Funnels',
    thumbnail: projectAgencyFunnel,
    shortDescription:
      'High-converting B2B agency sales funnel built on GoHighLevel & Elementor with interactive ROI calculator and instant calendar booking.',
    fullDescription:
      'ScaleSprint helps SaaS founders scale enterprise pipelines. Ramelo engineered a high-velocity landing funnel featuring interactive growth calculators, animated case study metrics, and automated CRM deal pipeline triggers.',
    challenge:
      'Low lead quality and a high drop-off rate on generic static contact forms.',
    solution:
      'Designed a multi-step qualification quiz funnel connected directly to GoHighLevel pipelines with round-robin calendar assignment and SMS lead reminders.',
    results: [
      'Generated 340+ qualified enterprise sales calls in first quarter',
      'Lead qualification accuracy improved by 45%',
      'Achieved 100% automated follow-up within 2 minutes of submission',
    ],
    techTags: ['GoHighLevel', 'Elementor Pro', 'Custom JavaScript', 'Zapier', 'Analytics GA4'],
    liveUrl: 'https://scalesprint.example.com',
    demoBadge: 'High-Converting Funnel',
    year: '2024 - 2025',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Deep Dive & Strategy',
    description:
      'Uncovering your core business goals, target audience psychology, competitor gaps, and key technical specifications to define a clear roadmap.',
    deliverables: ['Project Scope Document', 'Tech Stack Selection', 'Site Architecture Map'],
    duration: 'Week 1',
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'Plan',
    tagline: 'Wireframing & UX Architecture',
    description:
      'Structuring user journeys, high-converting content hierarchy, responsive wireframes, and database relationships before touching any code.',
    deliverables: ['Low-Fidelity Wireframes', 'Content Outline', 'Database Schema & Hooks'],
    duration: 'Week 1 - 2',
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'Design',
    tagline: 'Pixel-Perfect UI & Visual Identity',
    description:
      'Crafting custom high-fidelity visual mockups in Figma, complete with typography scales, color harmony, interactive component states, and mobile adaptation.',
    deliverables: ['Figma High-Res Mockups', 'Design System Assets', 'Interactive Clickable Prototype'],
    duration: 'Week 2 - 3',
    iconName: 'Palette',
  },
  {
    number: '04',
    title: 'Develop',
    tagline: 'Clean Code & Custom WordPress Build',
    description:
      'Translating designs into semantic, lightweight, and modular WordPress code with custom post types, ACF Pro fields, WooCommerce setups, or Elementor Pro mastery.',
    deliverables: ['Staging Environment Build', 'Custom Theme/Plugins', 'API & CRM Integrations'],
    duration: 'Week 3 - 5',
    iconName: 'Code2',
  },
  {
    number: '05',
    title: 'Test',
    tagline: 'Performance, Security & Cross-Device QA',
    description:
      'Rigorous cross-browser testing, Core Web Vitals optimization, mobile viewport sanity checks, payment gateway sandboxing, and security hardening.',
    deliverables: ['Speed Audit Report (90+)', 'Cross-Browser QA Checklist', 'Security Hardening Checklist'],
    duration: 'Week 5 - 6',
    iconName: 'ShieldCheck',
  },
  {
    number: '06',
    title: 'Deploy',
    tagline: 'Zero-Downtime Launch & Handover',
    description:
      'Flawless production deployment with SSL setup, Cloudflare caching rules, 301 redirect validation, and a comprehensive video tutorial training for your team.',
    deliverables: ['Live Production Launch', 'Loom Video CMS Walkthrough', '30-Day Post-Launch Support'],
    duration: 'Launch Day & Beyond',
    iconName: 'Rocket',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Managing Director & Founder',
    company: 'The Yoga Expo (USA)',
    location: 'Fort Lauderdale, Florida',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote:
      'Ramelo is simply the most dependable and skilled WordPress developer I have worked with in over a decade of running national events. When our website needed to handle tens of thousands of concurrent ticket buyers, Ramelo overhauled the architecture and got our page load speed under a second. Our attendee ticket sales broke every prior record!',
    rating: 5,
    projectWorkedOn: 'The Yoga Expo Platform',
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Chief Marketing Officer',
    company: 'LunaFast Health',
    location: 'Austin, Texas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Ramelo’s combination of modern design sense and deep WordPress/PHP technical mastery is extremely rare. He didn’t just execute our wireframes—he suggested UX tweaks that directly improved our free-to-paid conversion by 42%. Communication was always prompt and crystal clear.',
    rating: 5,
    projectWorkedOn: 'LunaFast Web App & Funnels',
  },
  {
    id: '3',
    name: 'David Harrington',
    role: 'Principal Broker',
    company: 'Harrington Coastal Properties',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'Our luxury property listings demand uncompromising elegance and flawless responsiveness. Ramelo built a custom ACF Pro WordPress setup that our non-technical staff can update in two clicks, and international clients constantly compliment the speed and clean presentation.',
    rating: 5,
    projectWorkedOn: 'Luxury Real Estate Portal',
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'E-Commerce Operations Lead',
    company: 'Artisan Roast & Co.',
    location: 'Vancouver, Canada',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote:
      'WooCommerce can get messy quickly, but Ramelo writes pristine, modular code that never breaks after core updates. He set up our subscription engine, optimized our checkout flow, and eliminated our cart abandonment bottlenecks. A true professional.',
    rating: 5,
    projectWorkedOn: 'WooCommerce Store & CRM Sync',
  },
];

export const BY_THE_NUMBERS_EXTENDED = [
  {
    number: '8+',
    label: 'Years of Experience',
    detail: 'Continuous evolution with modern WordPress, PHP 8+, and modern headless workflows',
  },
  {
    number: '150+',
    label: 'Websites Launched',
    detail: 'Successful deliveries spanning e-commerce, B2B SaaS, healthcare, and event portals',
  },
  {
    number: '12+',
    label: 'Countries Served',
    detail: 'Trusted by founders and agencies in the US, UK, Australia, Canada, Singapore, and beyond',
  },
  {
    number: '99.4%',
    label: 'Client Satisfaction',
    detail: 'Repeat clients and multi-year agency partnerships built on trust and reliable execution',
  },
  {
    number: '100%',
    label: 'On-Time Milestones',
    detail: 'Clear communication, transparent progress updates, and dependable delivery timelines',
  },
  {
    number: '2.4x',
    label: 'Average Conversion Lift',
    detail: 'Measurable ROI through targeted CRO layouts, faster speeds, and intuitive UX design',
  },
];
