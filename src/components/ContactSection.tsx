import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Custom WordPress Theme',
    budget: '$2,000 - $5,000',
    timeline: 'Within 1 month',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormState({
      name: '',
      email: '',
      projectType: 'Custom WordPress Theme',
      budget: '$2,000 - $5,000',
      timeline: 'Within 1 month',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Let’s Build Something Exceptional
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Ready to upgrade your website speed, launch a custom WordPress architecture, or build
            a high-converting sales funnel? Let’s connect today.
          </p>
        </div>

        {/* Contact Layout Grid (Form + Direct Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111C30]/80 border border-slate-800 backdrop-blur-md shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-amber-400">{formState.name || 'Friend'}</strong>.
                    Ramelo has received your project inquiry and will reply to{' '}
                    <span className="text-teal-300 font-mono">{formState.email}</span> within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300 mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        <option value="Custom WordPress Theme">Custom WordPress Theme</option>
                        <option value="WooCommerce Store Setup">WooCommerce E-Commerce Store</option>
                        <option value="Elementor Pro & Redesign">Elementor Pro / FSE Redesign</option>
                        <option value="GoHighLevel Marketing Funnel">GoHighLevel (GHL) Funnel</option>
                        <option value="Speed Optimization & Core Web Vitals">Speed & Core Web Vitals Overhaul</option>
                        <option value="Full Retainer / Agency Partnership">Monthly Retainer / Partnership</option>
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-300 mb-2">
                        Estimated Budget (USD)
                      </label>
                      <select
                        id="contact-budget"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        <option value="< $2,000">&lt; $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Monthly Retainer">Monthly Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, current challenges, and any specific deadlines..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2 font-mono">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Strict NDA & Privacy
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      &lt; 24h Response Time
                    </span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Direct Channels & Snapshot (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Connect Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111C30]/80 border border-slate-800 backdrop-blur-md">
              <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span>Prefer Direct Messaging?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Feel free to email directly or jump straight on WhatsApp / Telegram for rapid triage or quick questions.
              </p>

              <div className="space-y-3.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3.5 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/15 text-amber-400 group-hover:bg-amber-500/25 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-amber-300">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 flex items-center gap-3.5 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">WhatsApp Direct</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Location & Working Hours</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      Iloilo City, Philippines (Flexible US/AU/EU Overlap)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-teal-500/10 border border-amber-500/30">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
                Closing Guarantee
              </div>
              <h4 className="text-base font-bold text-slate-100 mb-2">
                Ready to elevate your digital presence?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Every project includes rigorous performance tuning, clean code documentation,
                and a personalized Loom video training for your team.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <span>Start with a friendly 20-min discovery call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
