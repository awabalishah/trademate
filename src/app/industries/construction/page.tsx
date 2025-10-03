import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function ConstructionPage() {
  const constructionPainPoints = [
    "Missing project enquiries while on site.",
    "Manual quote generation taking hours.",
    "Clients waiting days for project updates.",
    "Complex project documentation and compliance."
  ];

  const constructionBenefits = [
    "Instant project enquiries → win more contracts.",
    "Automated quote generation saves hours.",
    "Real-time project updates impress clients.",
    "Streamlined documentation and compliance."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Construction"
        industryLabel="CONSTRUCTION SERVICES"
        title="AI Automation For Builders — Never Miss Another Project Enquiry"
        description="From project enquiries to completion certificates, Trademate handles your leads, quotes, and project management so you can focus on building, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Construction"
        title="The Problem Most Builders Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={constructionPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Construction"
        title="Why Builders Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={constructionBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Construction"
        title="Ready To Automate Your Construction Business?"
        description="Enjoy our limited-time offer on professional construction services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Construction services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}
