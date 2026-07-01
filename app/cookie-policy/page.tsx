import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Rare Phronesis uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[860px] px-6 lg:px-12">
        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em" }}
        >
          Cookie Policy
        </h1>
        <p className="mb-10 text-sm" style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}>
          Last updated: June 2025
        </p>

        <div className="flex flex-col gap-10 text-sm" style={{ color: "hsl(210 15% 62%)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>

          <Section title="1. What are cookies?">
            Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve user experience, and provide information to site owners.
          </Section>

          <Section title="2. How we use cookies">
            We use cookies for analytics and marketing purposes only. Specifically, we use Meta Pixel, Google Analytics 4, and PostHog to understand how visitors use our site and to measure the performance of our marketing. We do not use cookies for any other purpose, and we do not share your data with any other third parties.
          </Section>

          <Section title="3. Types of cookies we use">
            <table className="w-full mt-3 text-xs border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid hsl(210 35% 22%)" }}>
                  {["Type", "Purpose", "Duration"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-2 pr-4 font-semibold"
                      style={{ color: "hsl(210 20% 70%)", fontFamily: "var(--font-display)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Essential", "Required for the site to function correctly (e.g. form security).", "Session"],
                  ["Analytics and Marketing", "Meta Pixel, Google Analytics 4, and PostHog. Used to understand how visitors use the site and measure marketing performance. No data is shared with any other third parties.", "Up to 2 years"],
                ].map(([type, purpose, duration]) => (
                  <tr key={type} style={{ borderBottom: "1px solid hsl(210 35% 18%)" }}>
                    <td className="py-3 pr-4 font-medium" style={{ color: "hsl(210 20% 76%)" }}>{type}</td>
                    <td className="py-3 pr-4">{purpose}</td>
                    <td className="py-3 whitespace-nowrap">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="4. Newsletter and form submissions">
            When you subscribe to our newsletter or submit a contact form, we store your email address in our email platform (Resend) to communicate with you. This is not a cookie — it is data you provide directly. See our{" "}
            <a href="/privacy" style={{ color: "hsl(45 100% 44%)" }}>Privacy Policy</a> for full details on how this data is handled and how to request deletion.
          </Section>

          <Section title="5. Your choices">
            Most browsers allow you to refuse or delete cookies through their settings. Disabling essential cookies may affect the functionality of this site. Disabling analytics cookies will not affect your ability to use the site.
          </Section>

          <Section title="6. Updates to this policy">
            We may update this Cookie Policy when we add new functionality or tools. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes.
          </Section>

          <Section title="7. Contact">
            Questions about our use of cookies? Email{" "}
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
