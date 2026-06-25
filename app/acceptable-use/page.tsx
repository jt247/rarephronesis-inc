import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable use policy for the Rare Phronesis website.",
};

export default function AcceptableUsePage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[860px] px-6 lg:px-12">
        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em" }}
        >
          Acceptable Use Policy
        </h1>
        <p className="mb-10 text-sm" style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}>
          Last updated: June 2025
        </p>

        <div className="flex flex-col gap-10 text-sm" style={{ color: "hsl(210 15% 62%)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>

          <Section title="1. Purpose">
            This Acceptable Use Policy (AUP) sets out the rules for how you may interact with rarephronesis.com and any services provided through it. By using this site, you agree to comply with this AUP.
          </Section>

          <Section title="2. Permitted use">
            You may use this website to learn about our services, submit genuine enquiries, request quotes, and subscribe to our newsletter. All use must be lawful, respectful, and in good faith.
          </Section>

          <Section title="3. Prohibited conduct">
            You must not:
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              {[
                "Submit false, misleading, or fraudulent information through any form.",
                "Use this site to transmit spam, unsolicited communications, or promotional material.",
                "Attempt to gain unauthorised access to any part of the site or its underlying systems.",
                "Use automated scripts, bots, or scrapers to extract content from this site without permission.",
                "Introduce viruses, malware, or any other harmful code.",
                "Use the site in any way that violates applicable laws or regulations.",
                "Impersonate any person or entity, or misrepresent your affiliation with any person or entity.",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "hsl(45 100% 44%)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Contact form use">
            Our contact forms are intended for genuine service enquiries only. Submitting spam, solicitations, or irrelevant promotional content through these forms is prohibited.
          </Section>

          <Section title="5. Newsletter">
            Newsletter subscriptions are for individuals who genuinely want to receive our content. Do not subscribe on behalf of others without their consent.
          </Section>

          <Section title="6. Enforcement">
            We reserve the right to refuse service, block access, or take other appropriate action against anyone who violates this policy.
          </Section>

          <Section title="7. Contact">
            To report a violation or ask a question about this policy, email{" "}
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
