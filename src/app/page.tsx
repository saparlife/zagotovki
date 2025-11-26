import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Author from '@/components/Author';
import Program from '@/components/Program';
import AppSection from '@/components/AppSection';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Author />
        <Program />
        <AppSection />
        <Reviews />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
