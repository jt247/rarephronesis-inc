import type { Metadata } from "next";
import Link from "next/link";
import { serviceTiers, addOns } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full detail on Rare Phronesis's three service tiers — Startup Advisory & Consulting, SaaS & Product Development, and Business Website Development — plus add-on services.",
};

const tierDetail: Record<string, { bullets: string[] }> = {
  advisory: {
    bullets: [
      "Product strategy — market positioning, roadmap, feature prioritisation, user research",
      "Technical advisory — architecture, tech stack choices, build vs. buy, engineering leadership",
      "Growth advisory — acquisition channels, retention strategy, monetisation frameworks",
      "Fractional CTO / technical co-founder engagements",
      "Ongoing advisory retainers or project-scoped engagements",
    ],
  },
  saas: {
    bullets: [
      "Full-stack web application design and development",
      "iOS and Android mobile app design and development",
      "Cross-platform apps (web + mobile) from a single engagement",
      "MVP scoping and rapid delivery — typically 6–12 weeks",
      "AI-assisted build process that compresses timelines",
      "Post-launch iteration and scale support",
    ],
  },
  websites: {
    bullets: [
      "Professional marketing and brand websites",
      "Conversion-focused design and copy structure",
      "SEO foundation built in (meta, schema, sitemap)",
      "Mobile-first, performance-optimised build",
      "Optional ongoing website care plans",
      "Real estate, logistics, travel, hospitality, and service businesses",
    ],
  },
};

const addOnDetail: Record<string, { bullets: string[] }> = {
  "digital-setup": {
    bullets: [
      "Google Analytics 4 and Tag Manager setup",
      "Custom domain email (e.g. you@yourbrand.com)",
      "Domain registration and DNS configuration",
      "Social media profile setup and optimisation",
      "Logo and basic brand identity (if not yet in place)",
      "Third-party tool and integration setup",
    ],
  },
  growth: {
    bullets: [
      "Paid performance advertising (Meta, Google, TikTok)",
      "Campaign strategy and creative direction",
      "Growth advisory for scaling acquisition and retention",
      "Ad account setup, tracking, and reporting",
    ],
  },
  training: {
    bullets: [
      "Product thinking workshops for founders and teams",
      "Growth fundamentals and execution frameworks",
      "Custom workshop design for your team's specific gaps",
      "Remote or in-person delivery",
    ],
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div
        style={{ padding: "clamp(4rem, 7vw, 8rem) 0 clamp(3rem, 5vw, 5rem)", borderBottom: "1px solid hsl(210 35% 20%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            Services
          </h1>
          <p
            className="max-w-xl"
            style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}
          >
            Three core service tiers, structured around how founders actually need support — strategy first, then build, then market presence.
          </p>
        </div>
      </div>

      {/* Core tiers */}
      {serviceTiers.map((tier, i) => (
        <section
          key={tier.id}
          id={tier.id}
          style={{
            padding: "clamp(4rem, 6vw, 7rem) 0",
            backgroundColor: i % 2 === 1 ? "hsl(210 55% 12%)" : "transparent",
            borderBottom: "1px solid hsl(210 35% 20%)",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20">
              <div>
                <p
                  className="text-xs font-semibold mb-3 tracking-widest"
                  style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
                >
                  Tier {i + 1}
                </p>
                <h2
                  className="font-display font-bold mb-4"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.02em", textWrap: "balance" }}
                >
                  {tier.title}
                </h2>
                <p
                  className="mb-6"
                  style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
                >
                  {tier.description}
                </p>
                <Link
                  href={`/work-with-us?tab=request&tier=${tier.id}`}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 hover:brightness-110"
                  style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
                >
                  Get started →
                </Link>
              </div>
              <div>
                <p
                  className="text-xs font-semibold mb-4 tracking-widest"
                  style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
                >
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-3">
                  {tierDetail[tier.id]?.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "hsl(45 100% 44%)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "hsl(210 15% 62%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section style={{ padding: "clamp(4rem, 6vw, 7rem) 0" }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mb-10">
            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.02em" }}
            >
              Add-on services
            </h2>
            <p
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75, maxWidth: "52ch" }}
            >
              These services complement the three core tiers — they come up naturally once you&apos;re engaged, and they&apos;re priced and scoped as extensions of the primary engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                id={addon.id}
                className="rounded-xl p-7"
                style={{ border: "1px solid hsl(210 35% 22%)", backgroundColor: "hsl(210 55% 12%)" }}
              >
                <p
                  className="font-display font-semibold mb-3"
                  style={{ fontSize: "1rem", color: "hsl(210 20% 92%)" }}
                >
                  {addon.title}
                </p>
                <p
                  className="text-sm mb-5"
                  style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}
                >
                  {addon.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {addOnDetail[addon.id]?.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: "hsl(45 100% 44%)" }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "hsl(210 15% 52%)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110"
              style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
