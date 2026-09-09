import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { GHLInteractiveExplorer } from './components/GHLInteractiveExplorer';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NumbersSection } from './components/NumbersSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [inquirySummary, setInquirySummary] = useState<string>('');

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyToInquiry = (summary: string) => {
    setInquirySummary(summary);
    scrollToContact();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300">
        {/* Viewport Scroll Depth Reading Progress */}
        <ScrollProgressBar />

        {/* Navigation */}
        <Navbar onContactClick={scrollToContact} />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero
            onViewWork={scrollToPortfolio}
            onContactClick={scrollToContact}
          />

          {/* Quick Stats Bar */}
          <StatsBar />

          {/* About Me Section */}
          <AboutSection onContactClick={scrollToContact} />

          {/* Core Skills with Interactive Filter Tabs */}
          <SkillsSection />

          {/* Interactive GoHighLevel Automation & Workflow Simulator */}
          <GHLInteractiveExplorer onApplyToInquiry={handleApplyToInquiry} />

          {/* Selected Work / Portfolio Showcase */}
          <PortfolioSection />

          {/* Proven 6-Step Work Process */}
          <ProcessSection />

          {/* Client Testimonials */}
          <TestimonialsSection />

          {/* By The Numbers Expanded Track Record */}
          <NumbersSection />

          {/* Contact & Inquiry Section */}
          <ContactSection initialProjectSummary={inquirySummary} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Contact Button */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
