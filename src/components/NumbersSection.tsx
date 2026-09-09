import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Award, Globe, Users, Clock, Zap } from 'lucide-react';
import { BY_THE_NUMBERS_EXTENDED } from '../data/portfolioData';

const statIcons = [Award, Globe, Users, TrendingUp, Clock, Zap];

export function NumbersSection() {
  return (
    <section id="numbers" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0F1D]/50 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cumulative Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            By the Numbers
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Quantifiable performance, sustained reliability, and measurable client results
            delivered over 8 years in digital development.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BY_THE_NUMBERS_EXTENDED.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-6 sm:p-7 rounded-2xl bg-[#111C30]/80 border border-slate-800 hover:border-slate-700/80 backdrop-blur-md transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:bg-amber-500/15 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 mb-2 tracking-tight">
                  {stat.number}
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1.5 group-hover:text-amber-300 transition-colors">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
