import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { SurfaceTransformation } from "@/components/sections/SurfaceTransformation";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { InquirySection } from "@/components/sections/InquirySection";
import { ContactSection } from "@/components/sections/ContactSection";
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
      <ProductSection />
      <SurfaceTransformation />
      <BenefitsSection />
      <ApplicationsSection />
      <ProcessSection />
      <QualitySection />
      <InquirySection />
      <ContactSection />
    </>
  );
}
