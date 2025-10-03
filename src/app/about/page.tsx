import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import AboutHero from '@/components/sections/AboutHero';
import OurStory from '@/components/sections/OurStory';
import CoreBeliefs from '@/components/sections/CoreBeliefs';
import MeetTeam from '@/components/sections/MeetTeam';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <CoreBeliefs />
      <MeetTeam />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
