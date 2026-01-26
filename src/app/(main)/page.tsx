import HeroSection from "@/components/homepage/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import FeaturedOpportunities from "@/components/homepage/FeaturedOpportunities";
import SuccessStories from "@/components/homepage/SuccessStories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <FeaturedOpportunities />
      <SuccessStories />
    </>
  );
}
