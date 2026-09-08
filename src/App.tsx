import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NumbersSection } from './components/NumbersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
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

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
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

        {/* Core Skills with Animated Progress Bars */}
        <SkillsSection />

        {/* Selected Work / Portfolio Showcase */}
        <PortfolioSection />

        {/* Proven 6-Step Work Process */}
        <ProcessSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* By The Numbers Expanded Track Record */}
        <NumbersSection />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
