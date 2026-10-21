import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeIntroSection } from "@/components/sections/HomeIntroSection";
import { SurfaceTransformation } from "@/components/sections/SurfaceTransformation";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HomeTeamPreview } from "@/components/sections/HomeTeamPreview";
import { CTASection } from "@/components/sections/CTASection";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeIntroSection />
      <SurfaceTransformation />
      <ServicesPreviewSection />
      <BenefitsSection />
      <HomeTeamPreview />
      <CTASection
        title="Request product information, pricing, or jobwork quotations."
        description="Industrial buyers and engineering teams — share your application context and we will respond through our business contact channels."
        primaryHref="/contact"
        primaryLabel="Contact Konark Chemicals"
        secondaryHref="/products"
        secondaryLabel="Browse products"
        dark
      />
    </>
  );
}
