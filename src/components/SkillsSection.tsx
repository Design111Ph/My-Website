import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Kanban,
  LayoutTemplate,
  Mail,
  GraduationCap,
  Bot,
  Star,
  Sparkles,
  CheckCircle2,
  Layers,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const groupIcons: Record<string, LucideIcon> = {
  Kanban,
  LayoutTemplate,
  Mail,
  GraduationCap,
  Bot,
  Star,
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredGroups =
    activeTab === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === activeTab);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0F1D]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GoHighLevel Architectural Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Core Skills & Specializations
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Over 8 years of technical web expertise engineered into 6 core GoHighLevel specializations—from
            unified omnichannel pipelines and custom-coded funnels to built-in LC Phone SMS, private LMS communities,
            and conversation AI bots.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#111C30]/80 border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              All 6 Specializations ({SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)} Skills)
            </button>
            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === group.id
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Skill Groups Grid (2-col or 3-col on lg screens for perfect 2x3 symmetry) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredGroups.map((group, groupIdx) => {
            const Icon = groupIcons[group.iconName] || Wrench;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#111C30]/85 border border-slate-800 backdrop-blur-md hover:border-amber-500/40 transition-all shadow-xl group hover:shadow-amber-500/5"
              >
                {/* Group Header */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {group.badge && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-[11px] font-medium text-amber-300">
                        {group.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                    {group.description}
                  </p>

                  {/* Key Features Chips */}
                  {group.keyFeatures && (
                    <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-slate-800/80">
                      {group.keyFeatures.map((feat) => (
                        <span
                          key={feat}
                          className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Progress Bars List */}
                <div className="space-y-3.5 mt-6 pt-4 border-t border-slate-800/60">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate max-w-[70%]" title={skill.name}>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" title="Core Specialty" />
                          )}
                          <span className="truncate">{skill.name}</span>
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-slate-400 text-[11px] font-mono">
                            {skill.experience}
                          </span>
                          <span className="font-mono font-semibold text-amber-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Bar Track & Fill */}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 + skillIdx * 0.05, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300'
                              : 'bg-gradient-to-r from-teal-400 to-emerald-400'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Tool Ecosystem Chips */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111C30]/50 border border-slate-800 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-4 font-mono">
            GoHighLevel Infrastructure & Integrated Tooling
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              'GoHighLevel (GHL)',
              'LC Phone (Twilio)',
              'LC Email (Mailgun)',
              'GHL Conversation AI',
              'A2P 10DLC Compliance',
              'GHL LMS Courses',
              'Skool/Circle Style Communities',
              'Unified Conversation Feed',
              'Unlimited Contacts & Smart Lists',
              'GHL Drag-and-Drop Builder',
              'Custom CSS & JS Injections',
              'Google & FB Review Sequences',
              'Stripe SaaS Rebilling',
              'Make.com & Zapier Webhooks',
              'WordPress to GHL Sync',
              'Meta CAPI & Google Ads Tracking',
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
