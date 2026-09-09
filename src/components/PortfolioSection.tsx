import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ExternalLink, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'WordPress & WooCommerce',
    'Web Apps',
    'Custom Solutions',
    'Elementor & Funnels',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Selected Work & Production Builds
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            A curated showcase of high-impact WordPress portals, custom WooCommerce engines,
            and conversion-optimized digital products delivered for international clients.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#111C30]/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.025 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.05 }}
              className="group flex flex-col rounded-2xl bg-[#111C30]/80 border border-slate-800 hover:border-amber-400/50 overflow-hidden backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-colors duration-300 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111C30] via-transparent to-transparent opacity-60" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B1120]/80 backdrop-blur-md text-amber-300 border border-slate-700/80">
                    {project.category}
                  </span>
                  {project.demoBadge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                      {project.demoBadge}
                    </span>
                  )}
                </div>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-[#0B1120]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 shadow-lg transform translate-y-2 group-hover:translate-y-0 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      title="Visit Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-teal-300/90 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-5">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techTags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techTags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-slate-400">
                        +{project.techTags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-all hover:translate-x-1 cursor-pointer"
                    >
                      <span>Read Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-slate-400 hover:text-amber-300 flex items-center gap-1 transition-all hover:scale-105"
                      >
                        <span>Demo Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111C30] via-[#14233D] to-[#111C30] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-1">
              Have a custom WordPress or WooCommerce challenge?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              From enterprise speed optimization to custom plugin logic and CRM funnels.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-400 transition-all shrink-0 shadow-md"
          >
            Discuss Your Project
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
