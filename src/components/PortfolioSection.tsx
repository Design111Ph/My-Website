import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  Layers,
  Cpu,
  LayoutTemplate,
  Zap,
  Cable,
  Users,
  Eye,
  Search,
  X,
  Filter,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface CategoryConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  businessNeed: string;
  icon: typeof Layers;
  match: (project: Project) => boolean;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'all',
    name: 'All Work',
    shortName: 'All',
    tagline: 'Complete Track Record',
    businessNeed:
      'Turnkey GoHighLevel snapshots, conversion funnels, custom webhooks, and multi-channel automation pipelines.',
    icon: Layers,
    match: () => true,
  },
  {
    id: 'saas',
    name: 'SaaS & CRM',
    shortName: 'SaaS',
    tagline: 'Snapshots & Sub-Accounts',
    businessNeed:
      'White-label SaaS snapshot architecture, automated client onboarding, Stripe rebilling & high-ticket CRM sales pipelines.',
    icon: Cpu,
    match: (p) => p.category.includes('SaaS') || p.category.includes('CRM'),
  },
  {
    id: 'funnels',
    name: 'Sales Funnels',
    shortName: 'Funnels',
    tagline: 'Landing Pages & Surveys',
    businessNeed:
      'High-converting multi-step landing pages, dynamic qualification surveys, VSL funnels & 2-step checkout order forms.',
    icon: LayoutTemplate,
    match: (p) => p.category.includes('Funnel') || p.category.includes('Website'),
  },
  {
    id: 'automations',
    name: 'Automations',
    shortName: 'Automations',
    tagline: '2-Way SMS & Booking',
    businessNeed:
      'Speed-to-lead <45s routing, automated 2-way SMS booking, Missed Call Text Back (MCTB) & no-show recovery engines.',
    icon: Zap,
    match: (p) => p.category.includes('Automation') || p.category.includes('Workflow'),
  },
  {
    id: 'integrations',
    name: 'Integrations',
    shortName: 'Integrations',
    tagline: 'Webhooks & APIs',
    businessNeed:
      'Bidirectional API webhooks, Make.com/Zapier bridges, WooCommerce/WordPress sync & custom payment triggers.',
    icon: Cable,
    match: (p) => p.category.includes('Integration') || p.category.includes('Webhook'),
  },
  {
    id: 'memberships',
    name: 'Memberships',
    shortName: 'Memberships',
    tagline: 'Portals & Vaults',
    businessNeed:
      'Gated customer portals, course delivery vaults, gamified module drip workflows & community discussion spaces in GHL.',
    icon: Users,
    match: (p) => p.category.includes('Membership') || p.category.includes('Portal'),
  },
];

const POPULAR_TAGS = [
  'All Tech',
  '2-Way SMS',
  'Make.com',
  'Stripe Rebilling',
  'Custom CSS',
  'Speed-to-Lead',
  'Smart Calendars',
  'Webhooks',
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All Tech');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Compute item count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = PROJECTS.filter(cat.match).length;
    });
    return counts;
  }, []);

  const currentCategoryConfig = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // Combined filtering: Category + Tag + Search Keyword
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // 1. Category check
      const catConfig = CATEGORIES.find((c) => c.id === selectedCategory);
      const matchesCategory = catConfig ? catConfig.match(project) : true;
      if (!matchesCategory) return false;

      // 2. Tag filter check
      if (selectedTag !== 'All Tech') {
        const matchesTag = project.techTags.some((tag) =>
          tag.toLowerCase().includes(selectedTag.toLowerCase())
        );
        if (!matchesTag) return false;
      }

      // 3. Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.subtitle.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.techTags.some((t) => t.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedTag('All Tech');
    setSearchQuery('');
  };

  const isFiltered =
    selectedCategory !== 'all' ||
    selectedTag !== 'All Tech' ||
    searchQuery.trim().length > 0;

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Child 1: Section Header & Category Filter Controls */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Production Builds</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Selected Work & Production Deployments
          </h2>

          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            Filter by your specific business model and automation requirements—from agency SaaS snapshots
            and 2-way SMS engines to bespoke webhook bridges and high-converting funnels.
          </p>

          {/* Primary Category Filter Bar */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[#111C30]/90 border border-slate-800 shadow-xl backdrop-blur-md">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={isSelected}
                    className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-[1.02]'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110 ${
                        isSelected ? 'text-slate-950' : 'text-amber-400/80 group-hover:text-amber-300'
                      }`}
                    />
                    <span className="hidden sm:inline">{cat.name}</span>
                    <span className="sm:hidden">{cat.shortName}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none ${
                        isSelected
                          ? 'bg-slate-950/20 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400 group-hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Secondary Controls: Search & Popular Tech Quick-Filters */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword or stack..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#0F172A]/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-white rounded"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Quick Tech Tag Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-1 scrollbar-none text-xs">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:block mr-1" />
                {POPULAR_TAGS.map((tag) => {
                  const isTagActive = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap font-medium transition-colors cursor-pointer ${
                        isTagActive
                          ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 font-semibold'
                          : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Business Need Context Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#111C30]/60 border border-slate-800/90 text-left flex items-start gap-3 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    Target Business Need:
                    <span className="text-slate-200 font-normal">
                      {currentCategoryConfig.name}
                    </span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      Showing {filteredProjects.length} of {PROJECTS.length} projects
                    </span>
                    {isFiltered && (
                      <button
                        onClick={handleResetFilters}
                        className="text-[11px] text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1 cursor-pointer font-medium ml-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Reset
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentCategoryConfig.businessNeed}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Child 2: Projects Display (Grid or Empty State) */}
        <div>
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    id={`portfolio-card-${project.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeOut', delay: idx * 0.04 }}
                    whileHover={{ y: -6, scale: 1.02 }}
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
                            title="Visit Live Site"
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
                              onClick={(e) => {
                                e.stopPropagation();
                                setSearchQuery(tag);
                              }}
                              className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 text-[10px] font-medium text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                              title={`Filter by ${tag}`}
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
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="py-16 px-6 text-center rounded-2xl bg-[#111C30]/50 border border-slate-800/80 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">
                No matching projects found
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto mb-6">
                We couldn&apos;t find any case studies matching your current category, search query, or tech tag.
                Try choosing another category or clearing your search filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-semibold text-xs inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Child 3: Bottom Callout banner (preserved structure & IDs for previous CSS selector styling) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111C30] via-[#14233D] to-[#111C30] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4
              id="portfolio-callout-heading"
              className="text-lg font-bold text-[#ffbd34] !text-[#ffbd34] mb-1"
            >
              Have a custom WordPress or WooCommerce challenge?
            </h4>
            <p
              id="portfolio-callout-desc"
              className="text-xs sm:text-sm text-[#ffbd34] !text-[#ffbd34]"
            >
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
