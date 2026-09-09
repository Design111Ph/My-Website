import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Compass,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const iconComponents = {
  Search: Search,
  Compass: Compass,
  Palette: Palette,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
};

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0F1D]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology & Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            A Proven 6-Step Work Process
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            From initial conversion mapping to bulletproof snapshot deployment. A battle-tested
            framework ensuring airtight automations, high-converting funnels, and zero lead leakage.
          </p>
        </div>

        {/* Process Steps Timeline Bar (Desktop indicator) */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-2 rounded-2xl bg-[#111C30]/80 border border-slate-800">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconComponents[step.iconName as keyof typeof iconComponents] || Search;
            const isCurrent = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isCurrent
                    ? 'bg-slate-800 border border-slate-700 shadow-md'
                    : 'hover:bg-slate-800/40 text-slate-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono ${
                    isCurrent
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950'
                      : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  {step.number}
                </div>
                <div className="truncate">
                  <div
                    className={`text-xs font-bold truncate ${
                      isCurrent ? 'text-amber-300' : 'text-slate-200'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {step.duration}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Process Cards Grid (All 6 Steps detailed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconComponents[step.iconName as keyof typeof iconComponents] || Search;
            const isHighlighted = activeStepIndex === idx;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 backdrop-blur-md cursor-pointer flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-[#14223A] border-2 border-amber-400/80 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'bg-[#111C30]/70 border border-slate-800 hover:border-slate-700 hover:bg-[#132036]'
                }`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-300">
                        STEP {step.number}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-teal-300/90 mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-2.5 font-mono">
                    Key Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
