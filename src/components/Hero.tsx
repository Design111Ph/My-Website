import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Layers,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWork: () => void;
  onContactClick: () => void;
}

export function Hero({ onViewWork, onContactClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/10 via-teal-500/10 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Iloilo City, Philippines</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">UTC+8</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>8+ Years Crafting Digital Experiences</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-4">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Ramelo Lozada
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl sm:text-2xl font-semibold text-slate-200">
                WordPress Developer & Designer
              </span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-teal-400" />
              <span className="hidden sm:inline-block text-sm font-medium text-teal-300/90">
                UI/UX & WooCommerce Architect
              </span>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.heroValueProp}
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full max-w-xl text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom WordPress Themes & Headless</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Conversion-Focused WooCommerce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>95+ PageSpeed & Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GoHighLevel & Marketing Funnels</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="hero-cta-portfolio"
                onClick={onViewWork}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#111C30] hover:bg-[#16243d] border border-slate-700/90 hover:border-slate-600 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Let's Talk</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </button>
            </div>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Direct Channels:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111C30] border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111C30] border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-[#111C30] border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111C30] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.wordpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#111C30] border border-slate-800 text-xs font-semibold text-slate-300 hover:text-teal-400 hover:border-slate-700 transition-colors flex items-center gap-1.5"
                  aria-label="WordPress.org Profile"
                >
                  <span className="font-serif font-bold text-teal-400 text-sm">W</span>
                  <span>.org</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Headshot & Softly-Framed Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Soft Ambient Glow Backdrop (No harsh vignette, soft gradient) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-teal-500/20 rounded-3xl blur-2xl transform scale-95 -z-10" />

            {/* Frame Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] p-2 sm:p-2.5 rounded-[28px] bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {/* Inner Soft Image Container */}
              <div className="relative rounded-[22px] overflow-hidden aspect-square sm:aspect-[4/4.5] bg-[#0E1726]">
                <img
                  id="hero-headshot-image"
                  src={PERSONAL_INFO.portrait}
                  alt="Ramelo Lozada - Senior WordPress Developer & Designer"
                  className="w-full h-full object-cover object-top sm:object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft gradient base lighting to integrate smoothly with dark palette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#0B1120]/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Projects</span>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B1120]/85 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                      <span>Ramelo Lozada</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                        PRO
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Senior WordPress Dev & UI Designer
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-teal-300">
                      Iloilo, PH
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Mini-Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#111C30]/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">98/100</div>
                  <div className="text-[10px] text-slate-400">PageSpeed Score</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#111C30]/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">150+ Sites</div>
                  <div className="text-[10px] text-slate-400">Delivered Globally</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
