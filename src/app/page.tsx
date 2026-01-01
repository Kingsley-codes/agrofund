import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TrustSection />
      <HowItWorks />
      <FeaturedOpportunities />
      <SuccessStories />
      <Footer />

      {/* <HeroSection />
      
      */}
    </>
  );
}
