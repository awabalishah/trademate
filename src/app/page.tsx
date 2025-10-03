import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import YourProblem from '@/components/sections/YourProblem';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Solution from '@/components/sections/Solution';
import Testimonials from '@/components/sections/Testimonials';
import Promotion from '@/components/sections/Promotion';
import FAQ from '@/components/sections/FAQ';
import PricingPlans from '@/components/sections/PricingPlans';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <YourProblem />
      <Solution />
      <Testimonials />
      <Promotion />
      <FAQ />
      <PricingPlans />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}