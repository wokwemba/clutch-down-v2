import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesShowcase from "@/components/ServicesShowcase";
import AppScreensSection from "@/components/AppScreensSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ServicesShowcase />
      <AppScreensSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
