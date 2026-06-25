import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Rare Phronesis",
  description:
    "See the startups we've advised, the products we've built, and the businesses whose websites we've designed. Full case studies across advisory, product development, and website design.",
};

const gold = "hsl(45 100% 44%)";
const ink = "hsl(210 20% 92%)";
const muted = "hsl(210 15% 58%)";
const surface = "hsl(210 55% 12%)";
const border = "hsl(210 35% 20%)";
const bg = "hsl(210 65% 10%)";

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

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 hover:brightness-110"
      style={{ color: gold, fontFamily: "var(--font-body)" }}
    >
      {label} &rarr;
    </a>
  );
}

function ComingSoon() {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs"
      style={{ color: "hsl(210 15% 38%)", fontFamily: "var(--font-body)" }}
    >
      Coming soon
    </span>
  );
}

function SectionHeader({
  label,
  heading,
  intro,
}: {
  label: string;
  heading: string;
  intro: string;
}) {
  return (
    <div className="mb-12">
      <p
        className="text-xs font-semibold mb-3 tracking-widest uppercase"
        style={{ color: gold, fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
      <h2
        className="font-display font-bold mb-4"
        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: ink, letterSpacing: "-0.02em", textWrap: "balance" }}
      >
        {heading}
      </h2>
      <p
        className="max-w-2xl"
        style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75 }}
      >
        {intro}
      </p>
    </div>
  );
}

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

export default function PortfolioPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0 clamp(3rem, 5vw, 5rem)", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1
            className="font-display font-bold mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: ink, letterSpacing: "-0.025em" }}
          >
            Our Work
          </h1>
          <p
            className="max-w-xl"
            style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}
          >
            Startups we&apos;ve advised, products we&apos;ve built, and businesses we&apos;ve helped get online. Here&apos;s the full picture.
          </p>
        </div>
      </div>

      {/* CATEGORY 1: STARTUP ADVISORY AND CONSULTING */}
      <section style={{ padding: "clamp(4rem, 6vw, 7rem) 0", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeader
            label="Category 1"
            heading="Startup Advisory and Consulting"
            intro="Strategic and technical partnership with founders building something new, from early direction to full execution."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* EzzyCare */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: surface }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>EzzyCare</p>
                <Tag>Product, Technical, Growth</Tag>
              </div>
              <p className="text-sm mb-5 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                EzzyCare is a healthcare SaaS platform that has been in operation for three years and already validated in market. The founder brought us in to rebuild and reposition the platform for scale.
              </p>
              <p className="text-sm mb-5" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                What we&apos;re building: a full rebuild of the application across native iOS and Android apps, a redesigned web app, and a new operations intelligence dashboard for real time business oversight. Alongside the rebuild, we&apos;re expanding EzzyCare&apos;s model from a single sided platform into a full enterprise offering, adding hospital partnerships that extend appointment booking and consultations, alongside the existing private doctor booking experience for individual users.
              </p>
              <p className="text-sm mb-6" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                In short: a single sided consumer app becoming a true B2B and B2C healthcare platform.
              </p>
              <ExternalLink href="https://ezzycare.com" label="ezzycare.com" />
            </div>

            {/* RentBook */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: surface }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>RentBook</p>
                <Tag>Product, Technical</Tag>
              </div>
              <p className="text-sm mb-5 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                RentBook is building what is set to become one of the first platforms of its kind in its market, an end to end property rental experience with no real precedent to follow.
              </p>
              <p className="text-sm mb-5" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                What we&apos;re building: two native mobile apps, iOS and Android, alongside a full web platform. The build includes a corporate model from the outset, designed to serve enterprise property management needs alongside individual renters and landlords.
              </p>
              <p className="text-sm mb-6" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                Because RentBook is building genuinely new ground in its market, some of the specific mechanics of how the platform works are kept close for now. What we can say: this is a full ground up build, architected for long term scale from day one.
              </p>
              <ComingSoon />
            </div>

            {/* FoodBridgeNG */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: surface }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>FoodBridgeNG</p>
                <Tag>Product, Technical, Growth</Tag>
              </div>
              <p className="text-sm mb-5 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                FoodBridgeNG is an agri tech platform connecting consumers directly to producers, manufacturers, and farmers, removing the markup that comes with traditional supply chains so people get fresh food at fairer prices.
              </p>
              <p className="text-sm mb-6" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                What we&apos;re building: a direct to consumer marketplace model, built to scale across both the producer and consumer sides of the platform.
              </p>
              <ExternalLink href="https://foodbridgeng.com" label="foodbridgeng.com" />
            </div>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* CATEGORY 2: SAAS AND PRODUCT DEVELOPMENT */}
      <section style={{ padding: "clamp(4rem, 6vw, 7rem) 0", backgroundColor: surface, borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeader
            label="Category 2"
            heading="SaaS and Product Development"
            intro="Products we've designed and built ourselves, from first MVP to platforms ready for scale."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Product Nerve AI */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: bg }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>Product Nerve AI</p>
                <Tag>Mobile and Web</Tag>
              </div>
              <p className="text-sm mb-6 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                A venture intelligence platform helping founders and startups validate, build, and scale their businesses.
              </p>
              <ExternalLink href="https://productnerve.com" label="productnerve.com" />
            </div>

            {/* LogPal AI */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: bg }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>LogPal AI</p>
                <Tag>Mobile</Tag>
              </div>
              <p className="text-sm mb-6 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                A personal productivity companion that captures meetings by voice, online or offline, and turns them into summaries and reports automatically.
              </p>
              <ComingSoon />
            </div>

            {/* AttriHub */}
            <div
              className="rounded-xl p-7 flex flex-col"
              style={{ border: `1px solid ${border}`, backgroundColor: bg }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-display font-semibold" style={{ color: ink, fontSize: "1rem" }}>AttriHub</p>
                <Tag>Web</Tag>
              </div>
              <p className="text-sm mb-6 flex-1" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                A simple, no code attribution and UTM tool for growth teams.
              </p>
              <ExternalLink href="https://attrihub.com" label="attrihub.com" />
            </div>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* CATEGORY 3: BUSINESS WEBSITE DEVELOPMENT */}
      <section style={{ padding: "clamp(4rem, 6vw, 7rem) 0", borderBottom: `1px solid ${border}` }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <SectionHeader
            label="Category 3"
            heading="Business Website Development"
            intro="Professional websites and digital infrastructure for businesses that need a strong online presence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Orabel Homes and Properties",
                tag: "Real Estate",
                body: "A property rental, sales, and leasing company. We built their website and led a full digital business setup and optimization.",
                url: "https://orabelhomeproperties.com",
                label: "orabelhomeproperties.com",
              },
              {
                name: "Tianah Global Logistics",
                tag: "Logistics",
                body: "A logistics company moving goods between Nigeria, Canada, the UK, and beyond. We designed their website and built out their core digital infrastructure.",
                url: "https://tianahglobalhq.com",
                label: "tianahglobalhq.com",
              },
              {
                name: "Rejobos Multi Concept Limited",
                tag: "Travel and Visa Services",
                body: "A travel company processing visas of all kinds for individuals and corporate clients. We built their website, led full digital setup, and supported their brand and optimization.",
                url: "https://rejobosmcl.com",
                label: "rejobosmcl.com",
              },
              {
                name: "Cozyhavens Cleaning Services",
                tag: "Construction Cleaning and Home Management",
                body: "A company offering heavy duty and professional construction cleaning and home management services. We built their website and supported their digital setup.",
                url: "https://cosyhaven.com",
                label: "cosyhaven.com",
              },
            ].map(({ name, tag, body, url, label }) => (
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
                <ExternalLink href={url} label={label} />
              </div>
            ))}
          </div>

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
            Ready to See What We Can Build for You?
          </h2>
          <p className="mb-8" style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Whatever stage your business is at, let&apos;s talk about it.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
}
