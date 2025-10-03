import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function PlumbingPage() {
  const plumbingPainPoints = [
    "Chasing leads manually.",
    "Missing calls while on the job.",
    "Customers frustrated by slow replies.",
    "Time wasted sending invoices and reminders."
  ];

  const plumbingBenefits = [
    "Respond faster than competitors → win more jobs.",
    "Look professional with branded communication.",
    "Reduce no-shows with automated reminders.",
    "Save hours per week on paperwork."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Plumbing"
        industryLabel="PLUMBING SERVICES"
        title="AI Automation For Plumbers — Never Miss Another Emergency Call"
        description="From urgent leak repairs to scheduled jobs, Trademate handles your enquiries, bookings, and invoices so you can focus on fixing, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Plumbing"
        title="The Problem Most Plumbers Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={plumbingPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Plumbing"
        title="Why Plumbers Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={plumbingBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Plumbing"
        title="Ready To Automate Your Plumbing Business?"
        description="Enjoy our limited-time offer on professional home cleaning services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Plumber backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}
