import { Hero } from "@/components/marketing/Hero";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { PortalPreview } from "@/components/marketing/PortalPreview";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Faq } from "@/components/marketing/Faq";
import { FinalCta } from "@/components/marketing/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <HowItWorks />
      <PortalPreview />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
