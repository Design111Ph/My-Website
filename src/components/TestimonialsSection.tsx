import { motion } from 'motion/react';
import { Star, Sparkles, Quote, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Trusted by Founders & Product Leads
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Real feedback from clients across the United States, Australia, and Canada who trusted
            Ramelo with mission-critical web platforms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111C30]/80 border border-slate-800 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Top Row: Stars + Project Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20">
                    {t.projectWorkedOn}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-slate-700/40 absolute -top-3 -left-2 -z-10" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Client Info Row */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Client" />
                    </h4>
                    <div className="text-xs text-slate-400">
                      {t.role}, <span className="text-slate-300">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
