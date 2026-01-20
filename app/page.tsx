import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWidgets from '@/components/layout/FloatingWidgets';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
