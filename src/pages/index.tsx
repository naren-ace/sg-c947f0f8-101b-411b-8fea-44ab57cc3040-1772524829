import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AceEngineSection } from "@/components/home/AceEngineSection";
import { AceSquadsSection } from "@/components/home/AceSquadsSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="ACE Innovations | Modern Engineering & Growth Studio"
        description="ACE Innovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale."
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AceEngineSection />
        <AceSquadsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}