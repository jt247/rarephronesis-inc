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
import { faqItems } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "Rare Phronesis | Product, Technical and Growth Partner for Startups",
  description:
    "Rare Phronesis helps startups and businesses validate, build, and scale through startup advisory, SaaS and product development, and professional website development. Work with us.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
