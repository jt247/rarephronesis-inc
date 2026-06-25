import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Rare Phronesis collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[860px] px-6 lg:px-12">
        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em" }}
        >
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm" style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}>
          Last updated: June 2025
        </p>

        <div className="flex flex-col gap-10" style={{ color: "hsl(210 15% 62%)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
          <Section title="1. Who we are">
            Rare Phronesis (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a product, technical, and growth consulting company. Our website is rarephronesis.com. For privacy enquiries, contact us at{" "}
            <a href="mailto:hello@rarephronesis.com" style={{ color: "hsl(45 100% 44%)" }}>hello@rarephronesis.com</a>.
            {/* PLACEHOLDER: Add registered business address before going live */}
          </Section>

          <Section title="2. What data we collect">
            <p>We collect personal data in the following ways:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Contact forms:</strong> Name, email address, company name (optional), project description, budget, and timeline when you submit a General Inquiry, Service Request, or Quote request.</Li>
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Newsletter signup:</strong> Email address when you subscribe to our mailing list.</Li>
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Usage data:</strong> Standard web analytics (page views, referral sources, device type) via anonymised analytics tools. We do not use advertising cookies.</Li>
            </ul>
          </Section>

          <Section title="3. How we use your data">
            <ul className="flex flex-col gap-2 pl-4">
              <Li>To respond to your enquiry or request within 1–2 business days.</Li>
              <Li>To send you transactional confirmation emails after form submissions.</Li>
              <Li>To send you newsletter updates if you subscribed (you can unsubscribe at any time).</Li>
              <Li>To understand how our website is used so we can improve it.</Li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Legal basis for processing (GDPR)">
            For users in the European Economic Area (EEA) and UK, we process your data under the following lawful bases:
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Legitimate interests:</strong> Responding to enquiries and operating the website.</Li>
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Consent:</strong> Newsletter subscriptions (you can withdraw consent at any time by unsubscribing).</Li>
            </ul>
          </Section>

          <Section title="5. Data retention">
            We retain contact form submissions for up to 24 months for business records and follow-up purposes. Newsletter subscriber data is retained until you unsubscribe. Analytics data is retained in aggregated, anonymised form.
          </Section>

          <Section title="6. Data deletion requests">
            You have the right to request deletion of your personal data at any time. To submit a deletion request, email{" "}
            <a href="mailto:hello@rarephronesis.com" style={{ color: "hsl(45 100% 44%)" }}>hello@rarephronesis.com</a>{" "}
            with the subject line &ldquo;Data Deletion Request&rdquo; and the email address associated with your data. We will process your request within 30 days.
          </Section>

          <Section title="7. Your rights">
            Depending on your location, you may have the right to: access, correct, or delete your personal data; object to or restrict processing; data portability; and lodge a complaint with a supervisory authority. Contact us to exercise any of these rights.
          </Section>

          <Section title="8. Third-party services">
            We use the following third-party services:
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Resend:</strong> Email delivery for form confirmations and newsletters. Resend processes data in accordance with their privacy policy.</Li>
              <Li><strong style={{ color: "hsl(210 20% 80%)" }}>Vercel:</strong> Website hosting and serverless functions.</Li>
              {/* PLACEHOLDER: Add any analytics provider (e.g. Plausible, PostHog) here before go-live */}
            </ul>
          </Section>

          <Section title="9. Cookies">
            We use only essential cookies required for the site to function. We do not use tracking or advertising cookies. See our <a href="/cookie-policy" style={{ color: "hsl(45 100% 44%)" }}>Cookie Policy</a> for full details.
          </Section>

          <Section title="10. Changes to this policy">
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes. Continued use of the site constitutes acceptance of the updated policy.
          </Section>

          <Section title="11. Contact">
            For any privacy-related questions, contact us at{" "}
            <a href="mailto:hello@rarephronesis.com" style={{ color: "hsl(45 100% 44%)" }}>hello@rarephronesis.com</a>.
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
      <div className="text-sm">{children}</div>
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "hsl(45 100% 44%)" }} />
      <span>{children}</span>
    </li>
  );
}
