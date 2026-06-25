import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ThreeWaysSection } from "@/components/sections/ThreeWaysSection";
import { AdvisorySection } from "@/components/sections/AdvisorySection";
import { SaaSSection } from "@/components/sections/SaaSSection";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { AddOnsSection } from "@/components/sections/AddOnsSection";
import { WhySection } from "@/components/sections/WhySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Rare Phronesis — Product, Technical & Growth Partner for Startups",
  description:
    "Rare Phronesis is a product, technical, and growth partner for startups and founders — we advise, build, and grow the systems that take an idea to a working business.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ThreeWaysSection />
      <AdvisorySection />
      <SaaSSection />
      <WebsitesSection />
      <AddOnsSection />
      <WhySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
