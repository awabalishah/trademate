import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function HandymanPage() {
  const handymanPainPoints = [
    "Juggling multiple small jobs and missing new calls.",
    "Every job is different making quotes time-consuming.",
    "Customers need quick responses for urgent odd jobs.",
    "Managing diverse service offerings and pricing."
  ];

  const handymanBenefits = [
    "Never miss an enquiry → maximize job bookings.",
    "Quick automated responses win you the job first.",
    "Professional image builds customer confidence.",
    "Flexible scheduling handles diverse job types easily."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Handyman"
        industryLabel="HANDYMAN SERVICES"
        title="AI Automation For Handymen — Never Miss Another Job"
        description="From odd jobs to home repairs, Trademate handles your enquiries, bookings, and quotes so you can focus on fixing things, not chasing leads"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Handyman"
        title="The Problem Most Handymen Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={handymanPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Handyman"
        title="Why Handymen Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={handymanBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Handyman"
        title="Ready To Automate Your Handyman Business?"
        description="Enjoy our limited-time offer on professional handyman services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Handyman services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}


