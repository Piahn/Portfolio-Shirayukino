import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { CtaBanner } from "@/components/CtaBanner";
import { BlogPreview } from "@/components/BlogPreview";
import { WhySection } from "@/components/WhySection";
import { ProcessSection } from "@/components/ProcessSection";
import { StepsSection } from "@/components/StepsSection";
import { TrustBanner } from "@/components/TrustBanner";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CtaBanner />
      <BlogPreview />
      <WhySection />
      <ProcessSection />
      <StepsSection />
      <TrustBanner />
      <CaseStudies />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
