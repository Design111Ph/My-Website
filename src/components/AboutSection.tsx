import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { connectToWhatsApp } from '../utils/whatsapp';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [iloiloTime, setIloiloTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        });
        setIloiloTime(formatter.format(now));
      } catch (e) {
        setIloiloTime('UTC+8');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GoHighLevel Specialist Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            About Ramelo Lozada
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            A seasoned GoHighLevel (GHL) specialist, CRM architect, and funnel engineer dedicated to building
            automated revenue engines, high-converting pipelines, and bulletproof sub-accounts.
          </p>
        </div>

        {/* Main Content Grid: Narrative (7 cols) + Contact Snapshot (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Background & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111C30]/70 border border-slate-800 backdrop-blur-md">
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>8+ Years of Technical & Automation Craftsmanship</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Based in <strong className="text-slate-100 font-semibold">Iloilo City, Philippines</strong>,
                  I specialize in turning <span className="text-amber-400 font-semibold">GoHighLevel (GHL)</span> into a scalable revenue machine for marketing agencies, clinics, SaaS startups, high-ticket coaches, and real estate brokerages worldwide.
                </p>
                <p>
                  Unlike typical implementers who rely on cookie-cutter snapshots, I engineer bespoke solutions:
                  I code <span className="text-teal-300 font-medium">custom CSS and JavaScript</span> to make GHL funnels look like premium custom web apps, architect <span className="text-amber-300 font-medium">multi-branch conditional workflows (if/else logic)</span>, and deploy <span className="text-orange-300 font-medium">Speed-to-Lead 2-way SMS engines</span> that respond to inbound prospects in under 45 seconds.
                </p>
                <p>
                  Whether it’s architecting turnkey agency SaaS snapshots with Stripe rebilling, setting up automated calendar booking engines that eliminate appointment no-shows, or connecting external platforms (WordPress, Shopify, Stripe, Meta Ads) via webhooks and Make.com, I build resilient systems that run 24/7 without breaking.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-amber-400 font-bold text-sm mb-1">Custom GHL Code</div>
                  <div className="text-xs text-slate-400">Custom CSS, sticky order buttons, and styled survey logic.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-teal-400 font-bold text-sm mb-1">Speed-to-Lead</div>
                  <div className="text-xs text-slate-400">Sub-minute 2-way SMS & Missed Call Text Back (MCTB).</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-orange-400 font-bold text-sm mb-1">Turnkey Snapshots</div>
                  <div className="text-xs text-slate-400">Deployable sub-accounts with pre-configured custom fields & tags.</div>
                </div>
              </div>
            </div>

            {/* Resume Summary Highlights */}
            <div className="p-6 rounded-2xl bg-[#111C30]/50 border border-slate-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                What Sets My GoHighLevel Builds Apart
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Turnkey industry snapshots & SaaS mode rebilling setup</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-branch conditional workflows with if/else decision logic</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Speed-to-lead SMS & automated Missed Call Text Back (MCTB)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom CSS/JS injected funnels & bespoke 2-step checkouts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Webhook integrations with Zapier, Make.com & Stripe APIs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>WordPress / WooCommerce to GoHighLevel data bridge sync</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Snapshot & Availability Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Snapshot Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#111C30] to-[#0D1525] border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div>
                  <span
                    id="about-snapshot-label"
                    className="text-xs font-mono uppercase tracking-widest text-[#ecffe2] block"
                  >
                    Snapshot
                  </span>
                  <h3
                    id="about-snapshot-heading"
                    className="text-lg font-bold text-[#7be9c1]"
                  >
                    Contact & Status
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active & Available</span>
                </div>
              </div>

              {/* Data Items */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-mono">Primary Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & Messaging */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/15 text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                        <span>Direct / WhatsApp</span>
                        <span className="text-[10px] text-emerald-400/80 font-mono">App Direct</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      connectToWhatsApp({
                        phone: PERSONAL_INFO.phone,
                        message: 'Hi Ramelo! I saw your background profile and would like to chat about GoHighLevel architecture.',
                        mode: 'auto',
                      });
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0"
                    title="Chat on WhatsApp (Connects directly to WhatsApp Desktop app on PC/Mac)"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat</span>
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/15 text-orange-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Current Base</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      Iloilo City, Western Visayas, Philippines
                    </div>
                  </div>
                </div>

                {/* Live Local Time */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">Local Time in Iloilo</div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200 font-mono">
                        {iloiloTime || 'Asia/Manila (GMT+8)'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                    GMT+8
                  </span>
                </div>

                {/* Availability Scope */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Engagement Models</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      Full Build Projects, Ongoing Retainers, & Agency Partnerships
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button inside snapshot */}
              <button
                onClick={onContactClick}
                className="w-full mt-6 py-3 px-4 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
