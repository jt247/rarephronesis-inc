import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import {
  BUY_URL,
  DEMO_URL,
  FREE_URL,
  META_DESCRIPTION,
  META_TITLE,
  PAGE_PATH,
  SAMPLE_REPORT_URL,
  SHARE_IMAGE,
  SHARE_IMAGE_ALT,
  SITE_URL,
  closing,
  compare,
  faq,
  hero,
  licence,
  limits,
  parts,
  problem,
  steps,
  tools,
  tryIt,
} from "@/lib/content/hullproof";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: "Rare Phronesis",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1920, height: 1080, alt: SHARE_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [{ url: SHARE_IMAGE, alt: SHARE_IMAGE_ALT }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hullproof Pro",
  description: hero.lead,
  image: `${SITE_URL}${SHARE_IMAGE}`,
  url: `${SITE_URL}${PAGE_PATH}`,
  brand: { "@type": "Brand", name: "Rare Phronesis Limited" },
  offers: {
    "@type": "Offer",
    price: "16.50",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: BUY_URL,
  },
};

const gold = "hsl(45 100% 44%)";
const ink = "hsl(210 20% 92%)";
const muted = "hsl(210 15% 62%)";
const surface = "hsl(210 55% 12%)";
const border = "hsl(210 35% 20%)";
const bg = "hsl(210 65% 10%)";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

interface ButtonLinkProps {
  href: string;
  variant: "primary" | "secondary";
  newTab?: boolean;
  children: React.ReactNode;
}

function ButtonLink({ href, variant, newTab = true, children }: ButtonLinkProps) {
  const style =
    variant === "primary"
      ? { backgroundColor: gold, color: bg }
      : { border: `1px solid ${gold}`, color: ink };
  const hover = variant === "primary" ? "hover:brightness-110" : "hover:bg-white/5";
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      {...(newTab ? { target: "_blank" } : {})}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150 ${hover} ${focusRing}`}
      style={{ ...style, fontFamily: "var(--font-body)" }}
    >
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

function ButtonRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>;
}

function Section({
  labelId,
  last = false,
  children,
}: {
  labelId: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={labelId}
      style={{
        padding: "clamp(3.5rem, 6vw, 6.5rem) 0",
        borderBottom: last ? undefined : `1px solid ${border}`,
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">{children}</div>
    </section>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display font-bold mb-6"
      style={{
        fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
        color: ink,
        letterSpacing: "-0.02em",
        textWrap: "balance",
      }}
    >
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: muted,
        fontFamily: "var(--font-body)",
        lineHeight: 1.75,
        maxWidth: "68ch",
        textWrap: "pretty",
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: gold }}
          />
          <span style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CompareTable() {
  const headCell = "px-4 py-3 text-left text-sm font-semibold";
  return (
    <>
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left" style={{ fontFamily: "var(--font-body)" }}>
          <caption className="sr-only">{compare.caption}</caption>
          <thead>
            <tr style={{ backgroundColor: surface, borderBottom: `1px solid ${border}`, color: ink }}>
              <th scope="col" className={headCell}>
                Area
              </th>
              <th scope="col" className={headCell}>
                Free
              </th>
              <th scope="col" className={headCell} style={{ color: gold }}>
                Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {compare.rows.map((row) => (
              <tr key={row.area} style={{ borderBottom: `1px solid ${border}` }}>
                <th
                  scope="row"
                  className="px-4 py-4 align-top text-sm font-semibold"
                  style={{ color: ink, width: "18%" }}
                >
                  {row.area}
                </th>
                <td className="px-4 py-4 align-top text-sm" style={{ color: muted, lineHeight: 1.6 }}>
                  {row.free}
                </td>
                <td
                  className="px-4 py-4 align-top text-sm"
                  style={{ color: ink, lineHeight: 1.6, backgroundColor: "hsl(45 100% 44% / 0.05)" }}
                >
                  {row.pro}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex flex-col md:hidden" aria-label={compare.caption}>
        {compare.rows.map((row) => (
          <li key={row.area} className="py-5" style={{ borderBottom: `1px solid ${border}` }}>
            <p className="font-display mb-3 font-semibold" style={{ color: ink }}>
              {row.area}
            </p>
            <dl className="flex flex-col gap-3 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
              <div>
                <dt className="font-semibold" style={{ color: ink }}>
                  Free
                </dt>
                <dd style={{ color: muted }}>{row.free}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: gold }}>
                  Pro
                </dt>
                <dd style={{ color: ink }}>{row.pro}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function HullproofPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        style={{
          padding: "clamp(4rem, 8vw, 8rem) 0 clamp(3.5rem, 6vw, 6rem)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1
            id="hero-heading"
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
              color: ink,
              letterSpacing: "-0.025em",
              textWrap: "balance",
              maxWidth: "24ch",
            }}
          >
            {hero.title}
          </h1>
          <p
            className="mb-8"
            style={{
              color: muted,
              fontFamily: "var(--font-body)",
              lineHeight: 1.75,
              fontSize: "1.1rem",
              maxWidth: "62ch",
              textWrap: "pretty",
            }}
          >
            {hero.lead}
          </p>
          <ButtonRow>
            <ButtonLink href={BUY_URL} variant="primary" newTab={false}>
              {hero.primary}
            </ButtonLink>
            <ButtonLink href={FREE_URL} variant="secondary">
              {hero.secondary}
            </ButtonLink>
          </ButtonRow>
          <p className="mt-6 text-sm" style={{ color: ink, fontFamily: "var(--font-body)" }}>
            {hero.priceLine}
          </p>
          <p className="mt-1 text-sm" style={{ color: muted, fontFamily: "var(--font-body)" }}>
            {hero.launchLine}
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section labelId="problem-heading">
        <H2 id="problem-heading">{problem.title}</H2>
        <div className="flex flex-col gap-5">
          {problem.paragraphs.map((p) => (
            <Prose key={p}>{p}</Prose>
          ))}
        </div>
      </Section>

      {/* WHAT HULLPROOF IS */}
      <Section labelId="parts-heading">
        <H2 id="parts-heading">{parts.title}</H2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {parts.items.map((item) => (
            <div key={item.title} className="pt-5" style={{ borderTop: `2px solid ${gold}` }}>
              <h3 className="font-display mb-3 text-lg font-semibold" style={{ color: ink }}>
                {item.title}
              </h3>
              <p style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section labelId="steps-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <H2 id="steps-heading">{steps.title}</H2>
          <ol className="flex flex-col gap-6">
            {steps.items.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ border: `1px solid ${gold}`, color: gold }}
                >
                  {i + 1}
                </span>
                <span
                  className="pt-1.5"
                  style={{ color: ink, fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* WORKS WITH YOUR AI TOOL */}
      <Section labelId="tools-heading">
        <H2 id="tools-heading">{tools.title}</H2>
        <Prose>{tools.intro}</Prose>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="font-display mb-4 text-lg font-semibold" style={{ color: ink }}>
              {tools.enforce.title}
            </h3>
            <BulletList items={tools.enforce.items} />
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-semibold" style={{ color: ink }}>
              {tools.advice.title}
            </h3>
            <BulletList items={tools.advice.items} />
          </div>
        </div>
      </Section>

      {/* FREE AND PRO */}
      <Section labelId="compare-heading">
        <H2 id="compare-heading">{compare.title}</H2>
        <div className="mb-10 mt-8">
          <CompareTable />
        </div>
        <ButtonRow>
          <ButtonLink href={FREE_URL} variant="secondary">
            {compare.freeButton}
          </ButtonLink>
          <ButtonLink href={BUY_URL} variant="primary" newTab={false}>
            {compare.proButton}
          </ButtonLink>
        </ButtonRow>
      </Section>

      {/* TRY IT BEFORE YOU BUY */}
      <Section labelId="try-heading">
        <H2 id="try-heading">{tryIt.title}</H2>
        <div className="mb-8">
          <Prose>{tryIt.body}</Prose>
        </div>
        <ButtonRow>
          <ButtonLink href={SAMPLE_REPORT_URL} variant="secondary">
            {tryIt.sample}
          </ButtonLink>
          <ButtonLink href={DEMO_URL} variant="secondary">
            {tryIt.demo}
          </ButtonLink>
        </ButtonRow>
      </Section>

      {/* HONEST LIMITS */}
      <Section labelId="limits-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <H2 id="limits-heading">{limits.title}</H2>
          <BulletList items={limits.items} />
        </div>
      </Section>

      {/* LICENCE AND TERMS */}
      <Section labelId="licence-heading">
        <H2 id="licence-heading">{licence.title}</H2>
        <Prose>{licence.body}</Prose>
      </Section>

      {/* QUESTIONS */}
      <Section labelId="faq-heading">
        <H2 id="faq-heading">{faq.title}</H2>
        <div className="max-w-3xl" style={{ borderTop: `1px solid ${border}` }}>
          {faq.items.map((item) => (
            <details key={item.q} className="group" style={{ borderBottom: `1px solid ${border}` }}>
              <summary
                className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden ${focusRing}`}
                style={{ color: ink, fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                <span>{item.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 motion-safe:transition-transform group-open:rotate-180"
                  style={{ color: gold }}
                />
              </summary>
              <p
                className="pb-5"
                style={{ color: muted, fontFamily: "var(--font-body)", lineHeight: 1.75, maxWidth: "62ch" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* CLOSING BAND */}
      <section
        aria-labelledby="closing-heading"
        style={{ backgroundColor: surface, padding: "clamp(3.5rem, 6vw, 6rem) 0" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <H2 id="closing-heading">{closing.title}</H2>
          <div className="mb-8">
            <Prose>{closing.lead}</Prose>
          </div>
          <ButtonRow>
            <ButtonLink href={FREE_URL} variant="secondary">
              {compare.freeButton}
            </ButtonLink>
            <ButtonLink href={BUY_URL} variant="primary" newTab={false}>
              {compare.proButton}
            </ButtonLink>
          </ButtonRow>
          <p className="mt-6 text-sm" style={{ color: muted, fontFamily: "var(--font-body)" }}>
            {hero.launchLine}
          </p>
          <p className="mt-1 text-sm" style={{ color: muted, fontFamily: "var(--font-body)" }}>
            {closing.small}
          </p>
        </div>
      </section>
    </div>
  );
}
