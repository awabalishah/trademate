import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function HeatingPage() {
  const heatingPainPoints = [
    "Missing boiler breakdown calls during peak season.",
    "Manual appointment scheduling causing delays.",
    "Customers frustrated by long wait times.",
    "Complex paperwork for gas safety certificates."
  ];

  const heatingBenefits = [
    "Instant response to heating emergencies → higher customer satisfaction.",
    "Smart scheduling prevents appointment conflicts.",
    "24/7 availability for urgent heating issues.",
    "Automated certificate generation saves time."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Heating & Gas"
        industryLabel="HEATING & GAS SERVICES"
        title="AI Automation For Heating Engineers — Never Miss Another Boiler Emergency"
        description="From urgent heating repairs to annual servicing, Trademate handles your enquiries, bookings, and gas safety certificates so you can focus on keeping homes warm, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Heating & Gas"
        title="The Problem Most Heating Engineers Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={heatingPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Heating & Gas"
        title="Why Heating Engineers Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={heatingBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Heating & Gas"
        title="Ready To Automate Your Heating Business?"
        description="Enjoy our limited-time offer on professional heating services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Heating & Gas services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}
