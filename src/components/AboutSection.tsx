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
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
            <span>Senior Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            About Ramelo Lozada
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            A seasoned WordPress engineer and designer dedicated to building conversion-focused,
            ultra-fast, and custom digital experiences that solve real business problems.
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
                <span>8+ Years of Technical Craftsmanship</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Based in <strong className="text-slate-100 font-semibold">Iloilo City, Philippines</strong>,
                  I’ve spent the last 8+ years immersed in the WordPress ecosystem—evolving from custom theme development
                  and complex WooCommerce setups into full-funnel digital architecture, UI/UX prototyping, and
                  modern headless integrations.
                </p>
                <p>
                  Unlike developers who merely stitch plugins together or designers who don’t understand database queries,
                  I bridge the gap: I design in <span className="text-teal-300 font-medium">Figma</span> with user psychology
                  and conversion rates in mind, then engineer clean, modular <span className="text-amber-300 font-medium">PHP, WordPress, & Tailwind</span> code
                  that delivers Google PageSpeed scores in the high 90s.
                </p>
                <p>
                  My work powers high-traffic consumer ticketing platforms like{' '}
                  <span className="text-slate-100 font-medium">The Yoga Expo</span>, specialized health SaaS portals like{' '}
                  <span className="text-slate-100 font-medium">LunaFast</span>, multi-million-dollar real estate brokerages,
                  and automated marketing engines built on <span className="text-orange-300 font-medium">GoHighLevel</span>.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-amber-400 font-bold text-sm mb-1">Pixel Precision</div>
                  <div className="text-xs text-slate-400">Zero clunky templates. Clean responsive layouts built for conversion.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-teal-400 font-bold text-sm mb-1">Extreme Speed</div>
                  <div className="text-xs text-slate-400">Asset minification, edge caching, and lightweight semantic code.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-orange-400 font-bold text-sm mb-1">Business First</div>
                  <div className="text-xs text-slate-400">Clear communication, transparent timelines, and measurable ROI.</div>
                </div>
              </div>
            </div>

            {/* Resume Summary Highlights */}
            <div className="p-6 rounded-2xl bg-[#111C30]/50 border border-slate-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                What Sets My Work Apart
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deep expertise in ACF Pro & Custom Gutenberg Blocks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-ticket WooCommerce subscriptions & custom checkouts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>GoHighLevel CRM funnels, pipeline automation & webhooks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>AI-accelerated development (ChatGPT, Claude, Gemini pipelines)</span>
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
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Snapshot
                  </span>
                  <h3 className="text-lg font-bold text-slate-100">
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
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/15 text-teal-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Direct / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
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
