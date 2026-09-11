import { Project, SkillGroup, ProcessStep, Testimonial, StatHighlight, GHLWorkflowStep } from '../types';

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
  role: 'GoHighLevel (GHL) Specialist & CRM Architect',
  experienceYears: '8+',
  location: 'Iloilo City, Philippines',
  timezone: 'Asia/Manila (GMT+8)',
  email: 'rflozada111@gmail.com',
  phone: '+63 919 539 9729',
  availability: 'Available for GHL Builds & Custom Snapshots',
  availabilityStatus: 'Open for Q2/Q3 Engagements',
  heroValueProp:
    'Engineering high-converting GoHighLevel sales funnels, multi-channel automated workflows, and robust CRM pipeline architectures that convert cold traffic into qualified booked appointments on autopilot.',
  bioShort:
    'GoHighLevel (GHL) Specialist, CRM Architect & Funnel Engineer with over 8 years of technical web & marketing automation experience. Specializing in end-to-end GoHighLevel sub-account setups, custom snapshot engineering, advanced multi-branch automation workflows, 2-way SMS speed-to-lead engines, custom CSS/JS styling, and API/webhook integrations for agencies, clinics, coaches, and SaaS businesses worldwide.',
  portrait: rameloPortrait,
  socialLinks: {
    github: 'https://github.com/rflozada',
    linkedin: 'https://linkedin.com/in/ramelolozada',
    email: 'mailto:rflozada111@gmail.com',
    whatsapp: 'https://wa.me/639195399729',
    calendly: 'https://calendly.com',
  },
};

export const STATS_HIGHLIGHTS: StatHighlight[] = [
  {
    label: 'GHL Funnels & Snapshots',
    value: '120+',
    description: 'Custom industry snapshots, high-converting funnels, and turnkey sub-accounts deployed',
    iconName: 'Award',
  },
  {
    label: 'Speed-to-Lead Response',
    value: '< 45s',
    description: 'Automated 2-way SMS, Missed Call Text Back (MCTB), and instant lead notification routing',
    iconName: 'Zap',
  },
  {
    label: 'Client Pipeline Value',
    value: '$14M+',
    description: 'High-ticket sales opportunities tracked and nurtured through custom GHL pipeline stages',
    iconName: 'Globe',
  },
  {
    label: 'Automation Reliability',
    value: '99.9%',
    description: 'Flawless trigger execution across webhooks, workflows, calendar syncs, and payment gateways',
    iconName: 'HeartHandshake',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'pipeline-management',
    title: 'Pipeline Management',
    description:
      'Basic reporting, along with unlimited contacts, smart lists, and a unified conversation feed across calls, SMS, WhatsApp, email, and social messages.',
    iconName: 'Kanban',
    badge: 'CRM & Omnichannel Feed',
    keyFeatures: ['Unified Conversation Feed', 'Unlimited Contacts', 'Smart Lists', 'Basic Reporting', 'Social & WhatsApp Sync'],
    skills: [
      { name: 'Unified Conversation Feed (Calls, SMS, WhatsApp, Email, Social)', level: 99, experience: '6+ yrs', highlight: true },
      { name: 'Unlimited Contacts Architecture & Smart Lists Tagging', level: 98, experience: '6+ yrs', highlight: true },
      { name: 'Custom Pipeline Stages & Deal Value Forecasting', level: 97, experience: '5+ yrs', highlight: true },
      { name: 'Real-Time Lead Attribution & Conversion Reporting', level: 95, experience: '5+ yrs' },
      { name: 'Lead Routing Rules, Round-Robin & User Permissions', level: 96, experience: '5+ yrs' },
    ],
  },
  {
    id: 'funnel-website-builder',
    title: 'Funnel & Website Builder',
    description:
      "A drag-and-drop builder with templates for lead capture pages, sales funnels, VSL pages, opt-in forms, and full websites, all hosted on GoHighLevel's own infrastructure (including live chat & Intercom-style unified widgets).",
    iconName: 'LayoutTemplate',
    badge: "Hosted on GHL's Infrastructure",
    keyFeatures: ['Drag-and-Drop Builder', 'VSL & Lead Capture Pages', 'Sales Funnels & Opt-Ins', 'GHL Cloud Hosting', 'Intercom-Style Chat Widget'],
    skills: [
      { name: 'Lead Capture Pages, VSL Pages & Multi-Step Sales Funnels', level: 99, experience: '6+ yrs', highlight: true },
      { name: '2-Step Order Forms, One-Click Upsells & Order Bumps', level: 97, experience: '5+ yrs', highlight: true },
      { name: 'Custom CSS & JavaScript Injections for GHL Styling', level: 98, experience: '8+ yrs', highlight: true },
      { name: "Native GoHighLevel Infrastructure Hosting, DNS & SSL", level: 99, experience: '8+ yrs' },
      { name: 'Live Chat & Intercom-Style Omnichannel Web Widget', level: 95, experience: '5+ yrs' },
    ],
  },
  {
    id: 'email-sms-marketing',
    title: 'Email & SMS Marketing',
    description:
      "Campaign builder, automated sequences, and two-way SMS, with built-in phone/text calling (LC Phone, powered by Twilio) so you don't need a separate Twilio account.",
    iconName: 'Mail',
    badge: 'Built-in LC Phone & Drips',
    keyFeatures: ['Built-in LC Phone', 'Two-Way SMS', 'Campaign Builder', 'Automated Sequences', 'A2P 10DLC Compliance'],
    skills: [
      { name: 'Built-in LC Phone (Twilio-Powered) & 2-Way SMS Calling', level: 99, experience: '5+ yrs', highlight: true },
      { name: 'Dynamic Email Campaign Builder & Automated Drip Sequences', level: 97, experience: '6+ yrs', highlight: true },
      { name: 'Speed-to-Lead Workflows & Missed Call Text Back (MCTB)', level: 98, experience: '5+ yrs', highlight: true },
      { name: 'A2P 10DLC Compliance, Brand Registration & Number Warmup', level: 96, experience: '4+ yrs' },
      { name: 'Broadcast Newsletters, Triggered SMS & Deliverability Tuning', level: 95, experience: '6+ yrs' },
    ],
  },
  {
    id: 'courses-memberships',
    title: 'Courses, Memberships & Communities',
    description:
      'An LMS-style course builder, membership access controls, and private community spaces, similar to Skool or Circle.',
    iconName: 'GraduationCap',
    badge: 'Skool & Circle Alternative',
    keyFeatures: ['LMS Course Builder', 'Membership Access Controls', 'Private Community Spaces', 'Video Hosting & Drip Content', 'Member Gamification'],
    skills: [
      { name: 'LMS-Style Course Builder with Video Hosting & Drip Modules', level: 96, experience: '4+ yrs', highlight: true },
      { name: 'Tiered Membership Access Controls & Content Paywalls', level: 97, experience: '5+ yrs', highlight: true },
      { name: 'Private Community Spaces & Discussion Feeds (Skool/Circle Style)', level: 95, experience: '3+ yrs', highlight: true },
      { name: 'Automated Student Onboarding & Certificate Issuance', level: 94, experience: '4+ yrs' },
      { name: 'Subscription Rebilling, Churn Prevention & Member Portals', level: 96, experience: '5+ yrs' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description:
      'Conversation AI for inbound chat/SMS, AI content generation, AI review responses, and AI appointment booking (these run on add-on credits rather than being flat-rate included).',
    iconName: 'Bot',
    badge: 'Conversation AI & Booking',
    keyFeatures: ['Inbound Chat/SMS AI', 'AI Appointment Booking', 'AI Content Generation', 'AI Review Responses', 'Add-on Credit Optimization'],
    skills: [
      { name: 'Conversation AI for Inbound 2-Way Chat & SMS Qualification', level: 96, experience: '3+ yrs', highlight: true },
      { name: 'AI Automated Appointment Booking & Calendar Availability Sync', level: 97, experience: '3+ yrs', highlight: true },
      { name: 'AI Review Auto-Responses & Sentiment Tone Modulation', level: 95, experience: '3+ yrs', highlight: true },
      { name: 'Knowledge-Base Training & Custom FAQ Prompt Architectures', level: 94, experience: '3+ yrs' },
      { name: 'Add-On Credit Usage Guardrails & Cost Optimization', level: 96, experience: '3+ yrs' },
    ],
  },
  {
    id: 'reputation-management',
    title: 'Reputation Management',
    description:
      'Automated review-request sequences that text or email customers after a purchase or appointment, then track review volume and ratings on Google and Facebook.',
    iconName: 'Star',
    badge: 'Google & Facebook Ratings',
    keyFeatures: ['Automated Review Sequences', 'Google & Facebook Tracking', 'Post-Purchase Triggers', 'Sentiment Filtering', 'Review Widget Injections'],
    skills: [
      { name: 'Automated Post-Purchase & Post-Appointment Review Requests', level: 98, experience: '5+ yrs', highlight: true },
      { name: 'Google Business Profile & Facebook Review Sync & Tracking', level: 97, experience: '5+ yrs', highlight: true },
      { name: 'Negative Review Redirection & 5-Star Safeguard Logic', level: 99, experience: '4+ yrs', highlight: true },
      { name: 'Review Volume Velocity & Rating Growth Dashboard Analytics', level: 94, experience: '5+ yrs' },
      { name: 'Dynamic Review Display Badges on Funnels & Landing Pages', level: 96, experience: '5+ yrs' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'apex-agency-saas-snapshot',
    title: 'Agency Growth Engine & Turnkey Snapshot',
    subtitle: 'Full-Stack GHL SaaS Snapshot with Automated Client Onboarding',
    category: 'SaaS Snapshots & CRM',
    thumbnail: projectAgencyFunnel,
    shortDescription:
      'Complete GoHighLevel SaaS architecture featuring automated sub-account provisioning, Stripe rebilling, 14-day client onboarding sequences, and pre-built pipeline stages.',
    fullDescription:
      'Engineered for a fast-scaling digital marketing agency, this comprehensive GoHighLevel snapshot was designed to turn their agency into a recurring-revenue software machine. Ramelo architected the entire sub-account structure, custom values, pre-configured appointment calendars, custom CSS dashboard branding, and automated client onboarding pipelines.',
    challenge:
      'Manual client setup took over 4 hours per customer, resulting in high churn during the initial 30 days and frequent misconfigurations across pipelines and lead tags.',
    solution:
      'Created a single-click deployable GHL snapshot equipped with automated Stripe checkout webhooks that provision sub-accounts, trigger a 14-day dynamic Loom-guided onboarding workflow, and auto-assign Twilio phone numbers and compliance A2P registration.',
    results: [
      'Client onboarding time reduced from 4 hours to under 8 minutes',
      '84% 90-day client retention rate across 75+ active agency sub-accounts',
      '$48,000+ in automated monthly software rebilling revenue tracked',
    ],
    techTags: ['GoHighLevel SaaS', 'Custom Snapshot', 'Stripe Rebilling', 'Make.com', 'Custom CSS', 'A2P 10DLC'],
    liveUrl: 'https://agency.example.com',
    demoBadge: 'Turnkey GHL Snapshot',
    year: '2024 - Present',
  },
  {
    id: 'healthpulse-medspa-booking',
    title: 'HealthPulse MedSpa Booking Engine',
    subtitle: '24/7 Calendar System, 2-Way SMS & No-Show Recovery Machine',
    category: 'Automations & Workflows',
    thumbnail: projectHealthPortal,
    shortDescription:
      'Multi-provider aesthetic clinic booking ecosystem with automated 2-way SMS confirmations, deposit collection, and automated 5-star Google review generation.',
    fullDescription:
      'HealthPulse operates multiple high-volume aesthetic wellness clinics. Ramelo architected a resilient GoHighLevel appointment booking and patient communication engine. The system integrates custom intake forms, dynamic practitioner calendar assignment, automated deposit payments via Stripe, and an automated 5-star Google review request flow.',
    challenge:
      'The clinic was losing $12,000+ per month due to a 28% appointment no-show rate and front-desk staff spending 3+ hours daily on manual phone confirmations.',
    solution:
      'Constructed a multi-step booking funnel with required credit card deposits, paired with a multi-touch SMS reminder workflow (48h, 24h, 2h) requesting "YES" confirmations, plus an automated Missed Call Text Back (MCTB) sequence.',
    results: [
      'Appointment no-show rate plummeted from 28% to just 5.8%',
      '420+ automated bookings scheduled monthly without staff intervention',
      '190+ verified 5-star Google reviews generated within the first 90 days',
    ],
    techTags: ['GHL Workflows', '2-Way SMS', 'Smart Calendars', 'Stripe Deposits', 'Reputation AI', 'MCTB'],
    liveUrl: 'https://medspa.example.com',
    demoBadge: 'High-Converting Engine',
    year: '2024',
  },
  {
    id: 'scalesprint-b2b-qualification',
    title: 'ScaleSprint B2B Qualification Funnel',
    subtitle: 'Dynamic Survey Logic & Instant Speed-to-Lead Pipeline',
    category: 'GHL Funnels & Websites',
    thumbnail: projectLunaFast,
    shortDescription:
      'High-velocity sales qualification funnel built in GHL with conditional survey branching, automated qualification scoring, and round-robin closer calendar routing.',
    fullDescription:
      'ScaleSprint delivers enterprise growth consulting. Ramelo designed and coded a custom GoHighLevel landing page and multi-step qualification survey funnel with bespoke CSS styling, custom progress bars, interactive revenue range selectors, and instant calendar booking for qualified prospects.',
    challenge:
      'The sales team was flooded with low-budget inquiries, while high-value enterprise prospects were dropping off due to long, generic static forms.',
    solution:
      'Implemented conditional survey logic inside GoHighLevel that segments leads in real time. High-tier leads are immediately routed to senior partner calendars with 60-second SMS speed-to-lead triggers; unqualified leads are routed to a low-ticket video course.',
    results: [
      '380+ qualified executive sales calls booked in the first quarter',
      'Average speed-to-lead automated SMS response time: 38 seconds',
      'Conversion rate on landing page traffic increased by 64%',
    ],
    techTags: ['GHL Funnel Builder', 'Survey Branching', 'Custom CSS/JS', 'Speed-to-Lead', 'Round-Robin Calendars'],
    liveUrl: 'https://scalesprint.example.com',
    demoBadge: 'B2B Sales Funnel',
    year: '2024 - 2025',
  },
  {
    id: 'apex-coastal-realty-crm',
    title: 'Apex Coastal Living VIP Pipeline',
    subtitle: 'Automated Luxury Property Lead Capture & Agent Dispatch',
    category: 'SaaS Snapshots & CRM',
    thumbnail: projectRealEstate,
    shortDescription:
      'Luxury real estate GoHighLevel ecosystem featuring listing funnels, gated virtual tour lead captures, and automated agent SMS lead routing.',
    fullDescription:
      'A luxury waterfront realty brokerage required an automated client acquisition and follow-up engine capable of handling multi-million-dollar buyer and seller inquiries. Ramelo designed the custom GHL sub-account with segmented buyer/seller pipelines, automated mortgage qualification tagging, and instant broker mobile push notifications.',
    challenge:
      'Valuable luxury property leads from Meta and Google ads were going cold because brokers took 4+ hours to make initial contact.',
    solution:
      'Engineered an instant Speed-to-Lead workflow: within 45 seconds of form submission, the system sends a personalized SMS from the local broker with a video tour link, while placing an automated phone whisper call directly to the assigned agent.',
    results: [
      '$9.2M in closed property transactions attributed to GHL automated lead nurture',
      'Lead contact rate improved from 31% to 89% with sub-minute SMS response',
      'Saved agents 12+ hours weekly with automated property criteria matching',
    ],
    techTags: ['GoHighLevel CRM', 'Whisper Calls', 'Twilio SMS', 'Custom Fields', 'Meta Lead Ads Sync'],
    liveUrl: 'https://apexcoastal.example.com',
    demoBadge: 'Real Estate CRM',
    year: '2023 - 2024',
  },
  {
    id: 'the-yoga-expo-ghl-bridge',
    title: 'The Yoga Expo Omni-Channel Engine',
    subtitle: 'WordPress/WooCommerce to GoHighLevel Webhook Automation',
    category: 'Integrations & Webhooks',
    thumbnail: projectYogaExpo,
    shortDescription:
      'High-capacity event marketing engine bridging high-traffic WordPress ticket sales with GoHighLevel 2-way SMS broadcasts, abandoned cart recovery, and sponsor pipelines.',
    fullDescription:
      'The Yoga Expo is North America’s premier holistic health expo. Ramelo built a resilient bidirectional webhook bridge between the primary ticketing platform and GoHighLevel. The setup handles attendee registration tagging, multi-city SMS broadcast scheduling, abandoned checkout SMS re-engagement, and exhibitor pipeline tracking.',
    challenge:
      'Email open rates were declining and thousands of ticket buyers were abandoning the checkout page without any automated mobile SMS follow-up.',
    solution:
      'Configured custom webhooks via Make.com and GHL API to detect cart abandonment, automatically trigger a timed 15-minute SMS recovery with dynamic checkout links, and deliver digital ticketing passes via MMS on event morning.',
    results: [
      '310% increase in mobile abandoned checkout recovery',
      '$42,000+ in recovered ticket sales across 3 national expo tours',
      '18,000+ attendee SMS broadcasts dispatched with zero delivery delays',
    ],
    techTags: ['GHL Webhooks', 'Make.com', 'WooCommerce Bridge', 'MMS Pass Delivery', 'SMS Broadcasts'],
    liveUrl: 'https://theyogaexpo.org',
    demoBadge: 'Omni-Channel Bridge',
    year: '2023 - Present',
  },
  {
    id: 'innercircle-mastermind-portal',
    title: 'InnerCircle Mastermind & Vault',
    subtitle: 'GHL Memberships, 2-Step Order Form & Community Hub',
    category: 'Memberships & Portals',
    thumbnail: projectBoutiqueBiz,
    shortDescription:
      'High-ticket coaching sales funnel with 2-step order form, automated course credential provisioning, and gamified module unlock drip workflow in GHL Memberships.',
    fullDescription:
      'A coaching and consulting brand needed an integrated all-in-one platform to sell and deliver their flagship training program. Ramelo designed a sleek dark-mode sales funnel with one-click order bumps, connected to GoHighLevel’s Membership portal with custom CSS styling and automated weekly module release workflows.',
    challenge:
      'The client was using 4 fragmented tools (ClickFunnels, Teachable, ActiveCampaign, and Circle), costing over $800/month and causing constant integration breakdown.',
    solution:
      'Consolidated everything into a single GoHighLevel sub-account: custom branded funnel with 2-step order form, Stripe recurring subscription billing, GHL membership portal, and community discussion rooms.',
    results: [
      'Saved $9,600 annually in redundant software subscription fees',
      '99.4% automated membership login delivery with zero manual support tickets',
      '38% customer uptake on the checkout order bump offer',
    ],
    techTags: ['GHL Memberships', '2-Step Order Form', 'Order Bumps', 'Custom CSS Portal', 'Drip Automations'],
    liveUrl: 'https://innercircle.example.com',
    demoBadge: 'Course & Community',
    year: '2024',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit & Strategy',
    tagline: 'Lead Flow Mapping & Blueprint',
    description:
      'Deep analysis of your target audience, current customer journey, conversion bottlenecks, and tech stack to architect an airtight GoHighLevel system blueprint.',
    deliverables: ['GHL Workflow Architecture Map', 'Custom Field & Tag Taxonomy', 'Funnel Wireframe Strategy'],
    duration: 'Week 1',
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'Sub-Account Setup',
    tagline: 'Pipelines, Custom Values & Assets',
    description:
      'Setting up your GHL sub-account foundation: custom fields, smart lists, opportunity pipeline stages, custom values, calendar booking rules, and user permission groups.',
    deliverables: ['Custom Fields & Tags Setup', 'Sales Pipeline Stages', 'Calendar & Availability Rules'],
    duration: 'Week 1 - 2',
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'Funnel & UI Craft',
    tagline: 'High-Converting Pages & Custom CSS/JS',
    description:
      'Designing and coding responsive, high-converting GHL landing pages, multi-step qualification surveys, 2-step order forms, and custom CSS enhancements that stand out.',
    deliverables: ['Mobile-Optimized GHL Funnel', 'Custom CSS Styling & Sticky CTAs', 'Conversion-Tuned Copy Layout'],
    duration: 'Week 2 - 3',
    iconName: 'Palette',
  },
  {
    number: '04',
    title: 'Automations & Flows',
    tagline: 'Multi-Branch Workflows & 2-Way SMS',
    description:
      'Building intelligent automated workflows: speed-to-lead SMS, Missed Call Text Back (MCTB), calendar confirmation drips, review generation, and pipeline auto-advancement.',
    deliverables: ['Speed-to-Lead Workflows', 'Appointment Reminder Sequence', 'Review & Reputation Funnel'],
    duration: 'Week 3 - 4',
    iconName: 'Code2',
  },
  {
    number: '05',
    title: 'Integrations & QA',
    tagline: 'Webhooks, Payment Gateways & Stress Testing',
    description:
      'Connecting Stripe, Zapier, Make.com, Meta CAPI, and WordPress bridges. Rigorous end-to-end sandbox testing of form submissions, webhook payloads, and phone routing.',
    deliverables: ['Payment & Webhook Validation', 'A2P 10DLC Compliance Checks', 'End-to-End Test Run Checklist'],
    duration: 'Week 4 - 5',
    iconName: 'ShieldCheck',
  },
  {
    number: '06',
    title: 'Handover & Scaling',
    tagline: 'Snapshot Packaging & Video Training',
    description:
      'Packaging the build into a clean, reusable GHL snapshot, accompanied by bespoke Loom video walkthroughs and standard operating procedures (SOPs) for your team.',
    deliverables: ['Deployable GHL Snapshot', 'Loom Video Training Library', '30-Day Post-Launch Support'],
    duration: 'Launch & Beyond',
    iconName: 'Rocket',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Agency Founder & SaaS Operator',
    company: 'Nexus Scale Marketing (USA)',
    location: 'Miami, Florida',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote:
      'Ramelo is hands down the best GoHighLevel specialist I have ever hired. He built our entire agency SaaS snapshot from scratch, including automated sub-account provisioning and custom CSS dashboard styling. Our client onboarding time dropped from 4 hours to literally 8 minutes. Our client retention has never been higher!',
    rating: 5,
    projectWorkedOn: 'GHL SaaS Snapshot & Sub-Accounts',
  },
  {
    id: '2',
    name: 'Dr. Marcus Vance',
    role: 'Clinical Director & Co-Owner',
    company: 'HealthPulse Aesthetics & MedSpa',
    location: 'Austin, Texas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Before working with Ramelo, our medspa was suffering from a 28% no-show rate. Ramelo completely revamped our GoHighLevel booking pipeline with 2-way SMS verification, automated calendar reminders, and Missed Call Text Back. Our no-show rate plummeted to under 6%, saving us over $10,000 every single month.',
    rating: 5,
    projectWorkedOn: 'MedSpa GHL Booking & 2-Way SMS Engine',
  },
  {
    id: '3',
    name: 'David Harrington',
    role: 'Managing Broker',
    company: 'Harrington Coastal Realty',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'Speed to lead is everything in luxury real estate. Ramelo engineered a GoHighLevel pipeline that sends a personalized video SMS within 45 seconds of a buyer ad submission. Our lead contact rate jumped from 31% to 89%, directly generating millions in closed property volume this year.',
    rating: 5,
    projectWorkedOn: 'Luxury Real Estate CRM & Speed-to-Lead',
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'Chief Operations Officer',
    company: 'ScaleSprint Growth Consultancy',
    location: 'Vancouver, Canada',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote:
      'Most GHL builders just drop in generic templates. Ramelo writes custom CSS and JavaScript that makes GoHighLevel funnels look like bespoke custom web apps. His multi-branch workflow logic and Stripe integration are bulletproof. An indispensable asset to our team.',
    rating: 5,
    projectWorkedOn: 'B2B GHL Funnel & Qualification Engine',
  },
];

export const BY_THE_NUMBERS_EXTENDED = [
  {
    number: '120+',
    label: 'GHL Funnels & Snapshots',
    detail: 'Turnkey sub-accounts and high-converting marketing funnels deployed across 15+ distinct industries',
  },
  {
    number: '< 45s',
    label: 'Avg Speed-to-Lead Response',
    detail: 'Instant automated 2-way SMS and missed-call follow-ups ensuring zero lead drop-off',
  },
  {
    number: '$14M+',
    label: 'Pipeline Value Tracked',
    detail: 'High-ticket client sales opportunities systematically managed and closed through GHL CRM stages',
  },
  {
    number: '78%',
    label: 'Avg No-Show Reduction',
    detail: 'Dramatic increase in calendar attendance through smart multi-channel SMS and email confirmation drips',
  },
  {
    number: '99.9%',
    label: 'Automation Uptime',
    detail: 'Reliable webhook execution, payment gateway synchronization, and calendar integrations',
  },
  {
    number: '3.2x',
    label: 'Average Conversion Lift',
    detail: 'Measurable ROI through custom CSS styling, conditional survey branching, and rapid follow-ups',
  },
];

export const GHL_WORKFLOW_PRESETS = [
  {
    id: 'speed-to-lead',
    name: 'Speed-to-Lead & Missed Call Text Back (MCTB)',
    category: 'Lead Capture & Immediate Engagement',
    description:
      'Instantly captures inbound missed calls or web form submissions, sending an intelligent 2-way SMS in under 30 seconds to convert cold inquiries before they call a competitor.',
    steps: [
      {
        id: 's1',
        type: 'trigger' as const,
        title: 'Trigger: Inbound Missed Call or Form Submitted',
        description: 'Customer submits web form or calls company phone when lines are busy.',
        badge: 'Event Trigger',
      },
      {
        id: 's2',
        type: 'action' as const,
        title: 'Action: Tag Contact & Create Pipeline Opportunity',
        description: 'Add tag "Hot Lead" & place in "New Lead - Needs Response" pipeline stage.',
        badge: 'CRM Pipeline',
      },
      {
        id: 's3',
        type: 'delay' as const,
        title: 'Wait: 25 Seconds Natural Delay',
        description: 'Simulates authentic human response delay rather than an obvious instant bot.',
        badge: 'Smart Delay',
      },
      {
        id: 's4',
        type: 'action' as const,
        title: 'Action: Send 2-Way Conversational SMS',
        description: '"Hi {{contact.first_name}}! Sorry we missed your call. How can we help you today?"',
        badge: 'Twilio SMS',
      },
      {
        id: 's5',
        type: 'condition' as const,
        title: 'Condition: Did Contact Reply Within 15 Minutes?',
        description: 'Branch A (Yes): Alert assigned sales rep & push to "Engaged". Branch B (No): Trigger email follow-up.',
        badge: 'If/Else Logic',
      },
    ],
  },
  {
    id: 'appointment-no-show',
    name: 'High-Ticket Appointment & No-Show Killer',
    category: 'Calendar Bookings & Attendance',
    description:
      'Multi-touch confirmation cadence that drives calendar show-up rates from 65% to 92%+ with automated SMS reminders and pre-call value qualification.',
    steps: [
      {
        id: 'b1',
        type: 'trigger' as const,
        title: 'Trigger: Customer Books Appointment on GHL Calendar',
        description: 'Booking confirmed on round-robin team calendar with timezone detection.',
        badge: 'Calendar Event',
      },
      {
        id: 'b2',
        type: 'action' as const,
        title: 'Action: Send Instant Booking Confirmation SMS + Calendar File',
        description: 'Provides Zoom meeting link, calendar invite (.ics), and preparational video briefing.',
        badge: 'Instant Delivery',
      },
      {
        id: 'b3',
        type: 'delay' as const,
        title: 'Wait: Until 24 Hours Before Call',
        description: 'Dynamic wait condition calibrated to the scheduled appointment timestamp.',
        badge: 'Time-Based Trigger',
      },
      {
        id: 'b4',
        type: 'action' as const,
        title: 'Action: 24h Confirmation Request SMS',
        description: '"Quick question {{contact.first_name}}, are we still on for tomorrow at {{appointment.start_time}}? Reply YES to confirm."',
        badge: '2-Way Verification',
      },
      {
        id: 'b5',
        type: 'action' as const,
        title: 'Action: 15-Minute Urgent Reminder & Closer Notification',
        description: 'Sends direct SMS with 1-click room link to customer & rings closer on mobile.',
        badge: 'Omni-Channel Alert',
      },
    ],
  },
  {
    id: 'review-reputation',
    name: 'Automated 5-Star Google Review Generator',
    category: 'Reputation & Social Proof',
    description:
      'Automatically collects verified Google reviews from happy clients upon service completion while filtering negative feedback internally.',
    steps: [
      {
        id: 'r1',
        type: 'trigger' as const,
        title: 'Trigger: Pipeline Stage Moved to "Deal Won / Service Completed"',
        description: 'Staff member or invoice payment marks project successfully concluded.',
        badge: 'Pipeline Trigger',
      },
      {
        id: 'r2',
        type: 'delay' as const,
        title: 'Wait: 2 Hours Post-Service',
        description: 'Allows customer to enjoy their completed experience before prompting feedback.',
        badge: 'Timing Buffer',
      },
      {
        id: 'r3',
        type: 'action' as const,
        title: 'Action: Send Personalized SMS Feedback Inquiry',
        description: '"How did we do today {{contact.first_name}}? Tap here to rate your experience: 1 to 5 stars."',
        badge: 'SMS Rating Request',
      },
      {
        id: 'r4',
        type: 'condition' as const,
        title: 'Condition: Rating >= 4 Stars vs Below 4 Stars',
        description: 'Branch A (4-5 Stars): Direct redirect to Google Business profile. Branch B (1-3 Stars): Private internal support ticket.',
        badge: 'Smart Sentiment Filter',
      },
      {
        id: 'r5',
        type: 'action' as const,
        title: 'Action: Apply "Google Review Submitted" Tag & Send Thank You',
        description: 'Removes customer from future review requests and sends appreciation voucher.',
        badge: 'Reputation Complete',
      },
    ],
  },
  {
    id: 'saas-onboarding',
    name: 'SaaS Sub-Account Provisioning & Onboarding',
    category: 'Agency SaaS & Rebilling',
    description:
      'Seamless automated client onboarding for agency SaaS mode: provisions sub-accounts, deploys snapshots, sends logins, and tracks feature adoption.',
    steps: [
      {
        id: 'sb1',
        type: 'trigger' as const,
        title: 'Trigger: Stripe Checkout Subscription Payment Succeeded',
        description: 'Customer purchases SaaS plan on agency pricing page.',
        badge: 'Stripe Webhook',
      },
      {
        id: 'sb2',
        type: 'action' as const,
        title: 'Action: Provision GHL Sub-Account from Snapshot Template',
        description: 'Clones pre-built industry snapshot with all funnels, pipelines & workflows.',
        badge: 'Sub-Account Creation',
      },
      {
        id: 'sb3',
        type: 'action' as const,
        title: 'Action: Generate User Login & Send Welcome Credentials',
        description: 'Sends custom email + SMS with white-labeled login URL and temporary password.',
        badge: 'Auth Dispatch',
      },
      {
        id: 'sb4',
        type: 'delay' as const,
        title: 'Wait: 3 Days After Signup',
        description: 'Checks if user has connected their Google Business Profile or Facebook Page.',
        badge: 'Health Check',
      },
      {
        id: 'sb5',
        type: 'condition' as const,
        title: 'Condition: Is Integrations Connected?',
        description: 'If not connected -> Send Loom step-by-step tutorial SMS to prevent churn.',
        badge: 'Churn Shield',
      },
    ],
  },
];
