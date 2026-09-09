import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GitBranch,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  Calculator,
  ArrowRight,
  TrendingUp,
  Zap,
  Sliders,
  DollarSign,
  Users,
  ShieldAlert,
} from 'lucide-react';
import { GHL_WORKFLOW_PRESETS } from '../data/portfolioData';

interface GHLInteractiveExplorerProps {
  onApplyToInquiry?: (projectSummary: string) => void;
}

export function GHLInteractiveExplorer({ onApplyToInquiry }: GHLInteractiveExplorerProps) {
  // Tab: 'workflow-simulator' or 'roi-calculator'
  const [activeTab, setActiveTab] = useState<'workflow' | 'roi'>('workflow');

  // Workflow simulator state
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>(GHL_WORKFLOW_PRESETS[0].id);
  const [simulationStep, setSimulationStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // ROI Calculator state
  const [industry, setIndustry] = useState<'agency' | 'clinic' | 'realty' | 'coaching' | 'contractor'>('clinic');
  const [monthlyLeads, setMonthlyLeads] = useState<number>(120);
  const [dealValue, setDealValue] = useState<number>(750);
  const [currentNoShowRate, setCurrentNoShowRate] = useState<number>(25);

  const activeWorkflow =
    GHL_WORKFLOW_PRESETS.find((w) => w.id === selectedWorkflowId) || GHL_WORKFLOW_PRESETS[0];

  const handleStartSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < activeWorkflow.steps.length) {
        setSimulationStep(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 850);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimulationStep(-1);
  };

  // ROI Math calculations
  const recoveredAppointments = Math.round((monthlyLeads * (currentNoShowRate / 100)) * 0.65);
  const estimatedRevenueLift = Math.round(recoveredAppointments * dealValue * 0.4);
  const hoursSavedWeekly = Math.min(35, Math.max(8, Math.round(monthlyLeads * 0.12)));

  const handleApplyConfig = () => {
    const summary = `GHL Build for ${industry.toUpperCase()}: ${monthlyLeads} leads/mo, estimated recovery of ${recoveredAppointments} appointments/mo (~$${estimatedRevenueLift.toLocaleString()} lift). Desired workflow: ${activeWorkflow.name}.`;
    if (onApplyToInquiry) {
      onApplyToInquiry(summary);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ghl-interactive" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0F1E]/80 border-t border-slate-800/80">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C30] border border-slate-800 text-xs font-semibold text-amber-400 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive GoHighLevel Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Live Workflow Simulator & ROI Estimator
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Experience how Ramelo’s custom GoHighLevel automations execute in real time, or calculate the
            measurable revenue lift and time saved for your specific business model.
          </p>

          {/* Toggle Tabs */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#111C30]/90 border border-slate-800">
            <button
              id="ghl-tab-workflow"
              onClick={() => setActiveTab('workflow')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'workflow'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Workflow Simulator</span>
            </button>

            <button
              id="ghl-tab-roi"
              onClick={() => setActiveTab('roi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'roi'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>ROI & Automation Calculator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Workflow Simulator */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Workflow Selectors & Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider px-1">
                Select Architecture Blueprint
              </h3>
              <div className="space-y-3">
                {GHL_WORKFLOW_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    id={`ghl-preset-${preset.id}`}
                    onClick={() => {
                      setSelectedWorkflowId(preset.id);
                      setSimulationStep(-1);
                      setIsSimulating(false);
                    }}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedWorkflowId === preset.id
                        ? 'bg-[#15233c] border-amber-400/60 shadow-lg shadow-amber-500/10'
                        : 'bg-[#111C30]/70 border-slate-800 hover:border-slate-700 hover:bg-[#111C30]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-medium text-amber-400">
                        {preset.category}
                      </span>
                      {selectedWorkflowId === preset.id && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 mb-1">
                      {preset.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {preset.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Simulation Controls */}
              <div className="p-4 rounded-xl bg-[#111C30]/80 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300">
                  Interactive Simulator Controls
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    id="ghl-simulate-btn"
                    onClick={handleStartSimulation}
                    disabled={isSimulating}
                    className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSimulating ? 'Simulating...' : 'Simulate Inbound Lead'}</span>
                  </button>

                  <button
                    id="ghl-reset-btn"
                    onClick={handleResetSimulation}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Simulate a live contact payload moving through triggers, delays, and logic branches.
                </p>
              </div>
            </div>

            {/* Right Col: Interactive Visual Pipeline (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#111C30]/80 border border-slate-800 backdrop-blur-md shadow-2xl relative">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                    Live Execution Pipeline
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {activeWorkflow.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">
                    Status:
                  </span>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      isSimulating
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                        : simulationStep >= activeWorkflow.steps.length - 1
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isSimulating
                      ? `Executing Step ${simulationStep + 1}/${activeWorkflow.steps.length}`
                      : simulationStep >= activeWorkflow.steps.length - 1
                      ? 'Execution Complete (100% Success)'
                      : 'Idle - Ready for Trigger'}
                  </span>
                </div>
              </div>

              {/* Step Sequence Flow */}
              <div className="space-y-4 relative">
                {activeWorkflow.steps.map((step, idx) => {
                  const isActive = simulationStep === idx;
                  const isDone = simulationStep > idx;

                  return (
                    <motion.div
                      key={step.id}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        borderColor: isActive
                          ? 'rgba(251, 191, 36, 0.8)'
                          : isDone
                          ? 'rgba(52, 211, 153, 0.4)'
                          : 'rgba(51, 65, 85, 0.6)',
                      }}
                      className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#172545] to-[#121c32] shadow-lg shadow-amber-500/10'
                          : isDone
                          ? 'bg-[#111C30]/90'
                          : 'bg-[#0E1726]/60 opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                              isDone
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : isActive
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-100">
                            {step.title}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-semibold shrink-0 ${
                            step.type === 'trigger'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : step.type === 'delay'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : step.type === 'condition'
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                          }`}
                        >
                          {step.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 ml-9 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA within simulator */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Want this exact automated pipeline customized and deployed into your GoHighLevel sub-account?
                </div>
                <button
                  onClick={handleApplyConfig}
                  className="py-2.5 px-5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Build This Workflow For Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ROI & Automation Calculator */}
        {activeTab === 'roi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#111C30]/80 border border-slate-800 backdrop-blur-md shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  Parameters
                </span>
                <h3 className="text-xl font-bold text-slate-100">
                  Tailor to Your Business Metrics
                </h3>
              </div>

              {/* Industry Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Business Niche
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'clinic', name: 'MedSpa & Clinics' },
                    { id: 'agency', name: 'Agency / SaaS' },
                    { id: 'realty', name: 'Real Estate' },
                    { id: 'coaching', name: 'Coaching / Course' },
                    { id: 'contractor', name: 'Home Services' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setIndustry(item.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                        industry === item.id
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-5 pt-2">
                {/* Monthly Leads */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-2">
                    <span>Monthly Inbound Leads / Inquiries</span>
                    <span className="font-mono text-amber-400">{monthlyLeads} leads/mo</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>20</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>

                {/* Average Deal Value */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-2">
                    <span>Average Customer / Booking Value (USD)</span>
                    <span className="font-mono text-teal-400">${dealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="5000"
                    step="50"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full accent-teal-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>$150</span>
                    <span>$2,500</span>
                    <span>$5,000+</span>
                  </div>
                </div>

                {/* Current No-Show Rate */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-2">
                    <span>Estimated No-Show or Lead Leakage Rate</span>
                    <span className="font-mono text-orange-400">{currentNoShowRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={currentNoShowRate}
                    onChange={(e) => setCurrentNoShowRate(Number(e.target.value))}
                    className="w-full accent-orange-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>10% (Low)</span>
                    <span>25% (Typical)</span>
                    <span>50% (High Leakage)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Projection (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111C30] to-[#0E1726] border border-amber-500/30 backdrop-blur-md shadow-2xl relative space-y-6">
              <div className="absolute top-0 right-8 px-3 py-1 rounded-b-xl bg-amber-500/20 border-b border-x border-amber-500/30 text-[11px] font-mono text-amber-300 font-bold">
                Projected GHL Impact
              </div>

              <div>
                <span
                  id="ghl-roi-gains-label"
                  className="text-xs font-mono uppercase tracking-wider text-[#ffefc4] !text-[#ffefc4] block mb-1"
                >
                  Estimated Monthly Gains
                </span>
                <h3
                  id="ghl-roi-impact-heading"
                  className="text-xl font-bold text-[#ffbd34] !text-[#ffbd34]"
                >
                  What GoHighLevel Will Do For You
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Revenue Lift Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Est. Monthly Revenue Lift</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    +${estimatedRevenueLift.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    From recovered no-shows & &lt;45s speed-to-lead
                  </div>
                </div>

                {/* Hours Saved Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Staff Hours Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    ~{hoursSavedWeekly} hrs<span className="text-sm font-normal text-slate-400">/week</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    No more manual reminder calls & text chasing
                  </div>
                </div>

                {/* Recovered Appointments */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Users className="w-4 h-4 text-teal-400" />
                    <span>Recovered Bookings</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    +{recoveredAppointments} <span className="text-sm font-normal text-slate-400">slots</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Via 2-way confirmation SMS & Missed Call Text Back
                  </div>
                </div>

                {/* Lead Contact Speed */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Zap className="w-4 h-4 text-orange-400" />
                    <span>Speed-to-Lead</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    &lt; 45 sec
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Instant 2-way SMS engagement before leads go cold
                  </div>
                </div>
              </div>

              {/* Ready to implement */}
              <div className="pt-2">
                <button
                  id="ghl-apply-calc-btn"
                  onClick={handleApplyConfig}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lock In This Setup with Ramelo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
