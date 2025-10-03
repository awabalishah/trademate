import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function ElectricalPage() {
  const electricalPainPoints = [
    "Missing emergency calls while on other jobs.",
    "Manual scheduling causing double bookings.",
    "Customers waiting hours for callbacks.",
    "Time-consuming paperwork and compliance forms."
  ];

  const electricalBenefits = [
    "Respond to emergencies instantly → win more urgent jobs.",
    "Professional automated scheduling prevents conflicts.",
    "24/7 availability impresses customers.",
    "Automated compliance documentation saves hours."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Electrical"
        industryLabel="ELECTRICAL SERVICES"
        title="AI Automation For Electricians — Never Miss Another Emergency Call"
        description="From urgent electrical repairs to scheduled installations, Trademate handles your enquiries, bookings, and compliance so you can focus on wiring, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Electrical"
        title="The Problem Most Electricians Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={electricalPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Electrical"
        title="Why Electricians Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={electricalBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Electrical"
        title="Ready To Automate Your Electrical Business?"
        description="Enjoy our limited-time offer on professional electrical services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Electrical services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}
