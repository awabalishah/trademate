import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import PricingHero from '@/components/sections/PricingHero';
import PricingPlans from '@/components/sections/PricingPlans';
import PricingFAQ from '@/components/sections/PricingFAQ';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </main>
  );
}

