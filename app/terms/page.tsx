import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Rare Phronesis website and services.",
};

export default function TermsPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[860px] px-6 lg:px-12">
        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em" }}
        >
          Terms of Service
        </h1>
        <p className="mb-10 text-sm" style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}>
          Last updated: June 2025
        </p>

        <div className="flex flex-col gap-10 text-sm" style={{ color: "hsl(210 15% 62%)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>

          <Section title="1. Acceptance of terms">
            By accessing or using rarephronesis.com, you agree to be bound by these Terms of Service. If you do not agree, do not use this site.
          </Section>

          <Section title="2. Services">
            Rare Phronesis provides product, technical, and growth consulting services. Specific engagement terms, deliverables, timelines, and fees are governed by separate written agreements between Rare Phronesis and each client. These Terms of Service apply solely to the use of this website.
          </Section>

          <Section title="3. Intellectual property">
            All content on this website — including text, design, graphics, and code — is the property of Rare Phronesis and may not be copied, reproduced, or distributed without prior written permission.
          </Section>

          <Section title="4. No warranties">
            This website is provided &ldquo;as is&rdquo; without warranty of any kind. We do not guarantee that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </Section>

          <Section title="5. Limitation of liability">
            To the fullest extent permitted by law, Rare Phronesis is not liable for any indirect, incidental, special, or consequential damages arising from your use of this website or any content on it.
          </Section>

          <Section title="6. Third-party links">
            This site may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any third-party sites.
          </Section>

          <Section title="7. Governing law">
            These terms are governed by the laws of Lagos, Nigeria. Any disputes arising from your use of this website or these Terms will be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria.
          </Section>

          <Section title="8. Changes">
            We may update these Terms at any time. Continued use of the site after changes constitutes acceptance of the revised Terms.
          </Section>

          <Section title="9. Contact">
            Questions about these Terms? Email{" "}
            <a href="mailto:hello@rarephronesis.com" style={{ color: "hsl(45 100% 44%)" }}>
              hello@rarephronesis.com
            </a>.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-semibold mb-3" style={{ fontSize: "1.05rem", color: "hsl(210 20% 88%)" }}>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
