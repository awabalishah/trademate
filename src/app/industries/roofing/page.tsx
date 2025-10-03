import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function RoofingPage() {
  const roofingPainPoints = [
    "Missing urgent leak repair calls during storms.",
    "Complicated roof inspection quotes taking days.",
    "Customers getting multiple quotes while you respond.",
    "Weather-dependent scheduling causing constant rescheduling."
  ];

  const roofingBenefits = [
    "Respond to emergency calls instantly → win urgent jobs.",
    "Automated quote generation speeds up sales.",
    "Professional communication builds trust.",
    "Smart scheduling handles weather delays automatically."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Roofing"
        industryLabel="ROOFING SERVICES"
        title="AI Automation For Roofers — Never Miss Another Emergency Repair"
        description="From leak repairs to full roof replacements, Trademate handles your enquiries, quotes, and scheduling so you can focus on roofing, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Roofing"
        title="The Problem Most Roofers Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={roofingPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Roofing"
        title="Why Roofers Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={roofingBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Roofing"
        title="Ready To Automate Your Roofing Business?"
        description="Enjoy our limited-time offer on professional roofing services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Roofing services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}

