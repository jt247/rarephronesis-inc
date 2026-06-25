import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactTabs } from "./ContactTabs";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Get in touch with Rare Phronesis — general inquiry, request a service, or get a quote.",
};

export default function WorkWithUsPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-lg mb-12">
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            Work With Us
          </h1>
          <p
            style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
          >
            Tell us what you need. We review every submission and respond within 1–2 business days to discuss next steps.
          </p>
        </div>
        <Suspense fallback={null}>
          <ContactTabs />
        </Suspense>
      </div>
    </div>
  );
}
