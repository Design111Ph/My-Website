import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="relative bg-[#070B14] border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 via-orange-500 to-teal-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0F172A] rounded-[6px] flex items-center justify-center font-bold text-sm text-amber-400 font-mono">
                  L
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-slate-100">
                {PERSONAL_INFO.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Crafting high-performance, conversion-driven GoHighLevel funnels, automated CRM architectures, and bespoke sub-accounts from Iloilo, Philippines to the world.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#ghl-interactive" className="hover:text-amber-400 transition-colors">
              GHL Simulator
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">
              Portfolio
            </a>
            <a href="#process" className="hover:text-amber-400 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-social-linkedin"
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-500/10 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              id="footer-social-github"
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-500/10 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              id="footer-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-500/10 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              id="footer-social-whatsapp"
              href={PERSONAL_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-500/10 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="group p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-500/10 hover:scale-110 active:scale-95 transition-all duration-200 ml-2 cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ramelo Lozada. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Senior GoHighLevel Architect & Automation Specialist</span>
            <span>•</span>
            <span className="text-teal-400 font-mono">Iloilo City, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
