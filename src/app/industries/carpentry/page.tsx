import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function CarpentryPage() {
  const carpentryPainPoints = [
    "Missing project enquiries while in the workshop.",
    "Custom quote requests taking hours to prepare.",
    "Customers want detailed designs before committing.",
    "Juggling multiple projects with different timelines."
  ];

  const carpentryBenefits = [
    "Capture every enquiry → grow your project pipeline.",
    "Automated initial quotes speed up the sales process.",
    "Professional communication showcases your craftsmanship.",
    "Smart scheduling keeps projects on track."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Carpentry"
        industryLabel="CARPENTRY SERVICES"
        title="AI Automation For Carpenters — Never Miss Another Custom Project"
        description="From bespoke furniture to home renovations, Trademate handles your enquiries, quotes, and project scheduling so you can focus on crafting, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Carpentry"
        title="The Problem Most Carpenters Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={carpentryPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Carpentry"
        title="Why Carpenters Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={carpentryBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Carpentry"
        title="Ready To Automate Your Carpentry Business?"
        description="Enjoy our limited-time offer on professional carpentry services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Carpentry services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}

