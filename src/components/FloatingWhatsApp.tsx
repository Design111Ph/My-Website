import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, CheckCheck, ArrowRight, Check, Shuffle, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QuickTopic {
  id: string;
  badge: string;
  topicTitle: string;
  greetings: string[];
}

const QUICK_TOPICS: QuickTopic[] = [
  {
    id: 'snapshot',
    badge: 'Snapshots & Setup',
    topicTitle: 'GHL Sub-Account & Snapshot Setup',
    greetings: [
      'Hi Ramelo! I saw your portfolio and would like to hire you to build a turnkey GoHighLevel sub-account and custom snapshot with pipeline tracking and automated tags. What is your current availability?',
      'Hey Ramelo! I need an experienced GHL architect to design and deploy an industry snapshot for my clients with standardized custom fields and smart lists. Can we discuss turnaround time and pricing?',
      'Hello Ramelo! We are onboarding multiple client accounts into GoHighLevel and need a streamlined snapshot template with ready-to-use workflows. Let’s connect on WhatsApp!',
    ],
  },
  {
    id: 'speed-to-lead',
    badge: 'Speed-to-Lead',
    topicTitle: 'Speed-to-Lead 2-Way SMS & MCTB',
    greetings: [
      'Hi Ramelo! I need help setting up sub-minute Speed-to-Lead 2-way SMS workflows and Missed Call Text Back (MCTB) in GoHighLevel to capture inbound leads immediately. Can we chat?',
      'Hey Ramelo, our inbound lead response time is losing us sales. Can you engineer an automated 2-way SMS sequence with round-robin appointment routing for our team?',
      'Hi Ramelo! Looking to implement your Missed Call Text Back system and instant WhatsApp lead qualification sequence. When are you free for a quick consultation?',
    ],
  },
  {
    id: 'funnel-code',
    badge: 'Custom Funnels',
    topicTitle: 'Custom Funnel & 2-Step Order Form',
    greetings: [
      'Hi Ramelo! I want to design and engineer a high-converting GoHighLevel sales funnel with custom CSS/JS styling, 2-step checkout, and bump offers. Could we review my project requirements?',
      'Hey Ramelo! My current GHL pages look too generic. I need your custom CSS/JS styling expertise to create a branded, responsive VSL landing page with dynamic order bumps.',
      'Hello Ramelo! We have design files ready and need a GoHighLevel funnel engineer to build them out with mobile-first CRO, 2-step order forms, and 1-click upsells. Let’s connect!',
    ],
  },
  {
    id: 'saas-mode',
    badge: 'SaaS Rebilling',
    topicTitle: 'Agency SaaS Mode & Rebilling',
    greetings: [
      'Hi Ramelo! I am scaling an agency and need a GHL specialist to configure SaaS mode, automated sub-account provisioning, and Stripe rebilling. Let’s connect on WhatsApp!',
      'Hey Ramelo! We are rolling out a white-label GoHighLevel SaaS offer. Can you set up Stripe automatic rebilling for phone/email credits and auto-provision snapshots upon client signup?',
      'Hi Ramelo! Looking for an expert to audit our agency’s GHL SaaS configuration, tier pricing permissions, and client onboarding sequences. Are you open for a project?',
    ],
  },
  {
    id: 'integrations',
    badge: 'Webhooks & APIs',
    topicTitle: 'WordPress to GHL Webhook Sync',
    greetings: [
      'Hi Ramelo! I need a reliable webhook integration connecting my WordPress/WooCommerce site to GoHighLevel pipelines and automations via Make.com/Zapier. When can we discuss?',
      'Hey Ramelo! We have customer purchases and custom form submissions in WordPress that need real-time sync into GoHighLevel custom fields and calendars. Can you build this bridge?',
      'Hello Ramelo! I need an advanced API and webhook workflow connecting external third-party tools to GoHighLevel opportunity stages and contact tags. Let’s chat!',
    ],
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(QUICK_TOPICS[0].id);
  const [topicVariationIndices, setTopicVariationIndices] = useState<Record<string, number>>({
    snapshot: 0,
    'speed-to-lead': 0,
    'funnel-code': 0,
    'saas-mode': 0,
    integrations: 0,
  });
  const [customMessage, setCustomMessage] = useState<string>(QUICK_TOPICS[0].greetings[0]);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const [textareaFlashed, setTextareaFlashed] = useState(false);
  const [shuffleNotice, setShuffleNotice] = useState<string | null>(null);

  // Live local time in Iloilo City, Philippines (GMT+8)
  const getIloiloTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Manila',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };
  const [iloiloTime, setIloiloTime] = useState<string>(getIloiloTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setIloiloTime(getIloiloTime());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const popoverRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const actionButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  const activeTopic = QUICK_TOPICS.find((t) => t.id === selectedTopicId) || QUICK_TOPICS[0];
  const currentVariationIndex = topicVariationIndices[selectedTopicId] || 0;

  const handleSelectTopic = (topic: QuickTopic) => {
    setSelectedTopicId(topic.id);
    const varIdx = topicVariationIndices[topic.id] || 0;
    const greeting = topic.greetings[varIdx] || topic.greetings[0];
    setCustomMessage(greeting);
    setIsButtonHighlighted(true);
    setTextareaFlashed(true);
    setShuffleNotice(null);

    // Briefly flash the textarea border
    setTimeout(() => {
      setTextareaFlashed(false);
    }, 1200);

    // Focus textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleShuffleGreeting = () => {
    const totalVariations = activeTopic.greetings.length;
    const nextIdx = (currentVariationIndex + 1) % totalVariations;

    setTopicVariationIndices((prev) => ({
      ...prev,
      [activeTopic.id]: nextIdx,
    }));

    const newGreeting = activeTopic.greetings[nextIdx];
    setCustomMessage(newGreeting);
    setIsButtonHighlighted(true);
    setTextareaFlashed(true);
    setShuffleNotice(`Variation ${nextIdx + 1} of ${totalVariations}`);

    setTimeout(() => {
      setTextareaFlashed(false);
    }, 1200);

    setTimeout(() => {
      setShuffleNotice(null);
    }, 2400);

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleStartChat = (messageToSend?: string) => {
    const text = encodeURIComponent(messageToSend || customMessage || 'Hi Ramelo! I would like to discuss a GoHighLevel project.');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={popoverRef} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="mb-3.5 w-[calc(100vw-2.5rem)] sm:w-[400px] rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl shadow-emerald-950/40 overflow-hidden backdrop-blur-xl"
            id="whatsapp-chat-card"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 p-1 rounded-lg text-emerald-100/80 hover:text-white hover:bg-emerald-600/50 transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={PERSONAL_INFO.portrait}
                    alt={PERSONAL_INFO.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/40 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0F172A]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    {PERSONAL_INFO.name}
                    <span className="text-[10px] bg-emerald-800/80 text-emerald-200 px-1.5 py-0.5 rounded font-mono font-medium">
                      GHL Pro
                    </span>
                  </h4>
                  <p className="text-[11px] text-emerald-100/90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online • Typically replies in &lt;15 mins
                  </p>
                </div>
              </div>

              {/* Indicator: My local time in Iloilo */}
              <div className="mt-3 pt-2.5 border-t border-emerald-600/50 flex items-center justify-between text-[11px] text-emerald-100/95">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>
                    My local time: <strong className="text-white font-mono font-semibold">{iloiloTime}</strong> (Iloilo)
                  </span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800/70 text-emerald-200 font-mono font-medium">
                  GMT+8
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3.5 bg-[#0B1120]/95 max-h-[75vh] overflow-y-auto">
              {/* Message from Ramelo */}
              <div className="p-3 rounded-xl rounded-tl-sm bg-slate-800/90 border border-slate-700/70 text-xs text-slate-200 shadow-sm leading-relaxed">
                <p className="font-semibold text-amber-400 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Direct WhatsApp Channel
                </p>
                <p>
                  Hi there! 👋 Select a quick topic below to auto-craft your inquiry message, or customize your text before starting the chat:
                </p>
                <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-end gap-1 font-mono">
                  <span>Just now</span>
                  <CheckCheck className="w-3 h-3 text-emerald-400" />
                </div>
              </div>

              {/* Quick Inquiry Options */}
              <div>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <p className="text-[11px] uppercase font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Quick Topics:</span>
                  </p>

                  {/* 'Shuffle greeting' button within the topic selector */}
                  <button
                    type="button"
                    id="shuffle-greeting-btn"
                    onClick={handleShuffleGreeting}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-300 hover:text-emerald-200 text-[11px] font-semibold transition-all cursor-pointer shadow-sm active:scale-95 group"
                    title={`Cycle through ${activeTopic.greetings.length} personalized greeting variations for ${activeTopic.badge}`}
                  >
                    <Shuffle className="w-3 h-3 text-emerald-400 group-hover:rotate-180 transition-transform duration-300" />
                    <span>Shuffle greeting</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/25 text-emerald-300 font-mono">
                      {currentVariationIndex + 1}/{activeTopic.greetings.length}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {QUICK_TOPICS.map((topic) => {
                    const isSelected = selectedTopicId === topic.id;
                    const topicVarIdx = topicVariationIndices[topic.id] || 0;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleSelectTopic(topic)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all border flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-emerald-950/70 to-slate-900 border-emerald-400 text-white font-medium ring-1 ring-emerald-400 shadow-sm'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700 hover:text-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-semibold shrink-0 ${
                              isSelected
                                ? 'bg-emerald-400 text-slate-950'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {topic.badge}
                          </span>
                          <span className="truncate">{topic.topicTitle}</span>
                        </div>
                        {isSelected ? (
                          <span className="shrink-0 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold font-mono">
                            <Check className="w-3.5 h-3.5" />
                            <span>Variation {topicVarIdx + 1}/{topic.greetings.length}</span>
                          </span>
                        ) : (
                          <span className="shrink-0 text-slate-400 text-[11px]">Select →</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Input Box with Visual Feedback */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <label htmlFor="whatsapp-custom-msg" className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <span>Your WhatsApp Message</span>
                    {selectedTopicId && (
                      <span className="text-[10px] text-emerald-400 font-mono font-medium">
                        (Pre-filled with {activeTopic?.badge})
                      </span>
                    )}
                  </label>
                  <span className="text-[10px] text-slate-400">Editable</span>
                </div>

                <div className="relative">
                  <textarea
                    id="whatsapp-custom-msg"
                    ref={textareaRef}
                    rows={3}
                    value={customMessage}
                    onChange={(e) => {
                      setCustomMessage(e.target.value);
                      setIsButtonHighlighted(true);
                    }}
                    placeholder="Type your message here..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900/90 text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all resize-none leading-relaxed ${
                      textareaFlashed
                        ? 'border-2 border-emerald-400 ring-2 ring-emerald-400/40 bg-slate-900 shadow-md shadow-emerald-500/10'
                        : 'border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                  />
                  {textareaFlashed && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-2.5 top-2 px-2 py-0.5 rounded bg-emerald-400 text-slate-950 text-[10px] font-bold shadow-sm flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{shuffleNotice ? `Shuffled (${shuffleNotice})` : 'Pre-filled!'}</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Attention Prompt when Topic is Selected */}
              {isButtonHighlighted && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Greeting ready! Click below to start WhatsApp</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                </motion.div>
              )}

              {/* Action Button - Strongly Highlighted to Draw Attention */}
              <motion.button
                ref={actionButtonRef}
                type="button"
                onClick={() => handleStartChat()}
                animate={
                  isButtonHighlighted
                    ? {
                        scale: [1, 1.025, 1],
                        boxShadow: [
                          '0 0 0 rgba(16, 185, 129, 0.2)',
                          '0 0 20px rgba(52, 211, 153, 0.45)',
                          '0 0 0 rgba(16, 185, 129, 0.2)',
                        ],
                      }
                    : {}
                }
                transition={
                  isButtonHighlighted
                    ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                    : {}
                }
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isButtonHighlighted
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 text-slate-950 ring-2 ring-emerald-300 shadow-xl shadow-emerald-500/30'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-[0.98]'
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
                <span className="truncate">
                  {isButtonHighlighted
                    ? `Open WhatsApp with "${activeTopic?.badge || 'Selected Topic'}"`
                    : `Open WhatsApp (${PERSONAL_INFO.phone})`}
                </span>
                <Send className="w-3.5 h-3.5 ml-0.5 shrink-0" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="flex items-center gap-2.5">
        {/* Tooltip Badge on Desktop */}
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F172A]/90 border border-emerald-500/30 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md hover:border-emerald-500/60 hover:text-white transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
            <span className="text-[10px] text-emerald-400 font-mono">Instant</span>
          </motion.button>
        )}

        {/* Main WhatsApp Circular Trigger */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp conversation with Ramelo Lozada"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-900/50 hover:shadow-emerald-500/40 border border-emerald-400/40 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />

          {/* Active status pip */}
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-[#0B1120] shadow-sm" />

          {isOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-white" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
