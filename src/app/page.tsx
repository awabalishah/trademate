import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Solution from '@/components/sections/Solution';
import Testimonials from '@/components/sections/Testimonials';
import Promotion from '@/components/sections/Promotion';
import FAQ from '@/components/sections/FAQ';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Solution />
      <Testimonials />
      <Promotion />
      <FAQ />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}