import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function LocksmithPage() {
  const locksmithPainPoints = [
    "Missing emergency lockout calls in the middle of the night.",
    "Customers finding competitors first during panic situations.",
    "Manual pricing for different lock types taking too long.",
    "Difficult to manage 24/7 availability expectations."
  ];

  const locksmithBenefits = [
    "Never miss an emergency call → capture urgent business.",
    "Instant response builds trust in crisis situations.",
    "Automated pricing for common services saves time.",
    "24/7 AI availability while you stay in control."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Locksmith"
        industryLabel="LOCKSMITH SERVICES"
        title="AI Automation For Locksmiths — Never Miss Another Emergency Lockout"
        description="From emergency lockouts to security upgrades, Trademate handles your enquiries, bookings, and quotes so you can focus on securing properties, not admin"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Locksmith"
        title="The Problem Most Locksmiths Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={locksmithPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Locksmith"
        title="Why Locksmiths Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={locksmithBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Locksmith"
        title="Ready To Automate Your Locksmith Business?"
        description="Enjoy our limited-time offer on professional locksmith services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Locksmith services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}

