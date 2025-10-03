import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import IndustryPromotion from '@/components/sections/IndustryPromotion';

export default function PaintingPage() {
  const paintingPainPoints = [
    "Missing enquiries while on site covering large projects.",
    "Estimating room sizes and paint quantities manually.",
    "Customers shopping around for better quotes.",
    "Weather delays affecting exterior painting schedules."
  ];

  const paintingBenefits = [
    "Respond faster than competitors → win more contracts.",
    "Automated quote calculations save hours.",
    "Professional estimates impress homeowners.",
    "Smart rescheduling handles weather delays smoothly."
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <IndustryHero 
        industry="Painting & Decorating"
        industryLabel="PAINTING & DECORATING SERVICES"
        title="AI Automation For Painters & Decorators — Never Miss Another Project"
        description="From interior transformations to exterior painting, Trademate handles your enquiries, quotes, and scheduling so you can focus on painting, not paperwork"
        ctaText="Book a Free Demo"
      />
      <PainPoints 
        industry="Painting & Decorating"
        title="The Problem Most Painters & Decorators Face"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        painPoints={paintingPainPoints}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <Solution />
      <Benefits 
        industry="Painting & Decorating"
        title="Why Painters & Decorators Love Trademate"
        description="Start your journey towards data-driven success by taking advantage of our free trial."
        benefits={paintingBenefits}
        ctaText="Learn more about our features"
        ctaLink="/#services"
      />
      <IndustryPromotion 
        industry="Painting & Decorating"
        title="Ready To Automate Your Painting Business?"
        description="Enjoy our limited-time offer on professional painting and decorating services."
        mainHeading="Let Trademate Handle Your Leads."
        mainDescription="Experience top-tier Painting & Decorating services backed by trusted professionals."
        ctaText="Schedule a Free Consultation"
        ctaLink="/#contact"
      />
      <Footer />
    </main>
  );
}

