import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesShowcase from "@/components/ServicesShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ServicesShowcase />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
