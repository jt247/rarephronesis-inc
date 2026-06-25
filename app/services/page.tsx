import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Rare Phronesis",
  description:
    "Startup advisory and consulting, SaaS and product development, and business website development. See how Rare Phronesis works with founders and businesses at every stage.",
};

const gold = "hsl(45 100% 44%)";
const ink = "hsl(210 20% 92%)";
const muted = "hsl(210 15% 58%)";
const surface = "hsl(210 55% 12%)";
const border = "hsl(210 35% 20%)";
const bg = "hsl(210 65% 10%)";

function CTAButton() {
  return (
    <Link
      href="/work-with-us"
      className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 hover:brightness-110"
      style={{ backgroundColor: gold, color: bg, fontFamily: "var(--font-body)" }}
    >
      Work With Us
    </Link>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-start">
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: gold }} />
          <span className="text-sm" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold mb-3 tracking-widest uppercase"
      style={{ color: gold, fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold mb-5"
      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: ink, letterSpacing: "-0.02em", textWrap: "balance" }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold mb-5 tracking-widest uppercase"
      style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-md px-2 py-1 text-xs"
      style={{ backgroundColor: "hsl(210 45% 18%)", color: "hsl(210 20% 65%)", fontFamily: "var(--font-body)" }}
    >
      {children}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0 clamp(3rem, 5vw, 5rem)", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1
            className="font-display font-bold mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: ink, letterSpacing: "-0.025em", textWrap: "balance", maxWidth: "18ch" }}
          >
            Services Built Around Where You&apos;re At
          </h1>
          <p
            className="max-w-2xl"
            style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}
          >
            Whether you need strategic direction, a product built from scratch, or a professional website, we work across three core areas, plus the add ons that come with them.
          </p>
        </div>
      </div>

      {/* TIER 1: STARTUP ADVISORY AND CONSULTING */}
      <section id="advisory" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Tier 1</SectionLabel>
          <SectionHeading>Startup Advisory and Consulting</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <p style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
                We work alongside founders as product, technical, and growth advisors. This isn&apos;t advice from the sidelines. When a project needs it, we help build out the right team, set the strategy, and stay involved through execution, all the way to the result.
              </p>
            </div>
            <div>
              <SubHeading>What this covers</SubHeading>
              <BulletList items={[
                "Product strategy and direction, deciding what to build and why",
                "Technical architecture and infrastructure decisions",
                "Growth strategy and positioning",
                "Team build out and oversight when a project needs hands beyond ours",
                "Staying involved from strategy through execution, not handing off after a deck",
              ]} />
            </div>
          </div>

          {/* Case studies */}
          <div className="mb-10">
            <SubHeading>Case Studies</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                { name: "EasyCare", tag: "Product, Technical, Growth" },
                { name: "RentBook", tag: "Product, Technical" },
                { name: "FoodBridge", tag: "Product, Technical, Growth" },
              ].map(({ name, tag }) => (
                <div
                  key={name}
                  className="rounded-xl p-5"
                  style={{ border: `1px solid ${border}`, backgroundColor: surface }}
                >
                  <p className="font-display font-semibold mb-2" style={{ color: ink, fontSize: "0.95rem" }}>
                    {name}
                  </p>
                  <Tag>{tag}</Tag>
                </div>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="text-sm transition-colors duration-150 hover:brightness-110"
              style={{ color: gold, fontFamily: "var(--font-body)" }}
            >
              See the full story behind each project on our Portfolio page
            </Link>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* TIER 2: SAAS AND PRODUCT DEVELOPMENT */}
      <section id="saas" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", backgroundColor: surface, borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Tier 2</SectionLabel>
          <SectionHeading>SaaS and Product Development</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <p style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
                We design and build real products ourselves, not prototypes handed off for someone else to finish. Our focus is helping founders validate ideas fast, then build for scale once that validation holds. Development moves at AI assisted speed when speed and validation matter most, and at full custom build depth when a project calls for it. The right approach depends on your scope, timeline, and budget, not a fixed playbook.
              </p>
            </div>
            <div>
              <SubHeading>What this covers</SubHeading>
              <BulletList items={[
                "Web app development",
                "Mobile app development, iOS and Android",
                "MVP build and rapid validation",
                "Full product builds taken to scale",
                "Admin dashboards and internal tooling",
              ]} />
            </div>
          </div>

          {/* Products */}
          <div className="mb-10">
            <SubHeading>Our Products</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  name: "Product Nerve AI",
                  platform: "Mobile and Web",
                  body: "A venture intelligence platform helping founders and startups validate, build, and scale their businesses.",
                },
                {
                  name: "LogPal AI",
                  platform: "Mobile",
                  body: "A personal productivity companion that captures meetings by voice, online or offline, and turns them into summaries and reports automatically.",
                },
                {
                  name: "AttriHub",
                  platform: "Web",
                  body: "A simple, no code attribution and UTM tool for growth teams.",
                },
                {
                  name: "Planitics AI",
                  platform: "Web",
                  body: "A growth intelligence platform helping marketing and growth teams plan, simulate, and analyze brand campaigns.",
                },
                {
                  name: "Product Slice HQ",
                  platform: "Web, mobile coming later",
                  body: "A free resource community for product and growth teams.",
                },
                {
                  name: "ProductVerseHQ",
                  platform: "Web",
                  body: "A portfolio directory for products built with AI.",
                },
              ].map(({ name, platform, body }) => (
                <div
                  key={name}
                  className="rounded-xl p-6"
                  style={{ border: `1px solid ${border}`, backgroundColor: bg }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="font-display font-semibold" style={{ color: ink, fontSize: "0.95rem" }}>
                      {name}
                    </p>
                    <Tag>{platform}</Tag>
                  </div>
                  <p className="text-sm" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* TIER 3: BUSINESS WEBSITE DEVELOPMENT */}
      <section id="websites" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Tier 3</SectionLabel>
          <SectionHeading>Business Website Development</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <p style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
                A strong website is often the first real impression a business makes. We build professional, conversion ready sites, and the digital infrastructure behind them, so that first impression works in your favor, not against it.
              </p>
            </div>
            <div>
              <SubHeading>What this covers</SubHeading>
              <BulletList items={[
                "Custom website design and development",
                "Conversion focused page structure and copy direction",
                "Digital business setup, see below",
                "Ongoing care and updates where needed",
              ]} />
            </div>
          </div>

          {/* Our work */}
          <div className="mb-10">
            <SubHeading>Our Work</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              {[
                {
                  name: "Orabel Homes and Properties",
                  tag: "Real Estate",
                  body: "A property rental, sales, and leasing company. We built their website and led a full digital business setup and optimization.",
                },
                {
                  name: "Tianah Global Logistics",
                  tag: "Logistics",
                  body: "A logistics company moving goods between Nigeria, Canada, the UK, and beyond. We designed their website and built out their core digital infrastructure.",
                },
                {
                  name: "Rejobos Multi Concept Limited",
                  tag: "Travel and Visa Services",
                  body: "A travel company processing visas of all kinds for individuals and corporate clients. We built their website, led full digital setup, and supported their brand and optimization.",
                },
              ].map(({ name, tag, body }) => (
                <div
                  key={name}
                  className="rounded-xl p-6 flex flex-col"
                  style={{ border: `1px solid ${border}`, backgroundColor: surface }}
                >
                  <div className="mb-3">
                    <p className="font-display font-semibold mb-2" style={{ color: ink, fontSize: "0.95rem" }}>
                      {name}
                    </p>
                    <Tag>{tag}</Tag>
                  </div>
                  <p className="text-sm mb-5 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
                    {body}
                  </p>
                  <Link
                    href="/portfolio"
                    className="text-xs font-medium transition-colors duration-150 hover:brightness-110"
                    style={{ color: gold, fontFamily: "var(--font-body)" }}
                  >
                    See full details on our Portfolio
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="text-sm transition-colors duration-150 hover:brightness-110"
              style={{ color: gold, fontFamily: "var(--font-body)" }}
            >
              See our full portfolio for more
            </Link>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* ADD ON: DIGITAL BUSINESS SETUP */}
      <section id="digital-setup" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", backgroundColor: surface, borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Add On</SectionLabel>
          <SectionHeading>Digital Business Setup</SectionHeading>
          <p className="mb-10 max-w-2xl" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            A website alone isn&apos;t enough to actually operate online. We help set up everything around it: analytics and integrations, custom email, domain setup, social and digital infrastructure, and foundational branding. This pairs naturally with website development, but stands on its own for businesses that already have a site and need the infrastructure behind it sorted out properly.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* ADD ON: GROWTH SERVICES */}
      <section id="growth" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Add On</SectionLabel>
          <SectionHeading>Growth Services</SectionHeading>
          <p className="mb-10 max-w-2xl" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            Paid and performance advertising, and growth advisory for businesses that already have a product or platform and need to drive real traction. This works alongside any of the three core services above, most often layered onto an existing advisory or product engagement.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* ADD ON: TRAINING */}
      <section id="training" style={{ padding: "clamp(4rem, 6vw, 7rem) 0", backgroundColor: surface, borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionLabel>Add On</SectionLabel>
          <SectionHeading>Training</SectionHeading>
          <p className="mb-10 max-w-2xl" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            Hands on, practical training for teams who want to build these skills in house rather than outsource them indefinitely. No passive courses, every session is built around real, applied work.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* FINAL PAGE CTA */}
      <section style={{ padding: "clamp(5rem, 8vw, 10rem) 0" }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: ink, letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            Not Sure Which Service Fits?
          </h2>
          <p className="mb-8" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Tell us what you&apos;re working on and we&apos;ll point you in the right direction.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
}
