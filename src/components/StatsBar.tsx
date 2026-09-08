import { motion } from 'motion/react';
import { Award, Globe, HeartHandshake, Zap } from 'lucide-react';
import { STATS_HIGHLIGHTS } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Globe: Globe,
  HeartHandshake: HeartHandshake,
  Zap: Zap,
};

export function StatsBar() {
  return (
    <section id="stats-bar" className="relative py-8 -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_HIGHLIGHTS.map((stat, idx) => {
            const Icon = iconMap[stat.iconName as keyof typeof iconMap] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#111C30]/80 hover:bg-[#15233c] border border-slate-800 hover:border-slate-700/80 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/10"
              >
                {/* Accent top edge subtle gradient */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:bg-amber-500/15 text-slate-300 group-hover:text-amber-400 border border-slate-700/60 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-1 group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-1.5">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
