import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function GardeningPage() {
  const gardeningPainPoints = [
    "Missing enquiries during busy spring and summer seasons.",
    "Weather-dependent work causing constant rescheduling.",
    "Customers wanting instant quotes for garden projects.",
    "Managing regular maintenance schedules manually."
  ];

  const gardeningBenefits = [
    "Capture seasonal demand → maximize peak earnings.",
    "Automated scheduling handles weather-related changes.",
    "Quick responses win more landscaping contracts.",
    "Recurring service reminders retain loyal customers."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Gardening & Landscaping"
        industryLabel="GARDENING & LANDSCAPING SERVICES"
        title="AI Automation For Gardeners & Landscapers — Never Miss Peak Season"
        description="From lawn maintenance to landscape design, Trademate handles your enquiries, quotes, and seasonal scheduling so you can focus on creating beautiful gardens, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Gardening & Landscaping"
        title="The Problem Most Gardeners & Landscapers Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={gardeningPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Gardening & Landscaping"
        title="Why Gardeners & Landscapers Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={gardeningBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Gardening & Landscaping"
        title="Ready To Automate Your Gardening Business?"
        description="Enjoy our limited-time offer on professional gardening and landscaping services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Gardening & Landscaping services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}

