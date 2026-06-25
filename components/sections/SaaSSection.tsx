import Link from "next/link";

const spotlightProducts = [
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
    name: "BizPulse",
    platform: "Mobile",
    body: "An AI business diagnostics tool giving small businesses a regular health check before small problems become big ones.",
  },
];

const secondaryProducts = [
  "AttriHub",
  "Planitics AI",
  "Product Slice HQ",
  "ProductVerseHQ",
  "Resulo AI",
];

export function SaaSSection() {
  return (
    <section
      id="saas"
      aria-labelledby="saas-heading"
      style={{
        padding: "clamp(4rem, 7vw, 8rem) 0",
        backgroundColor: "hsl(210 55% 11%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2
            id="saas-heading"
            className="font-display font-bold mb-5"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.025em",
            }}
          >
            SaaS and Product Development
          </h2>
          <p
            style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
          >
            We design and build real products, not prototypes. Our focus is helping startups validate ideas fast, then build for scale once that validation holds. Development moves at AI assisted speed when that is the right call, and at full custom build depth when the project needs it. The right approach depends on your scope, timeline, and budget.
          </p>
        </div>

        {/* Spotlight: top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {spotlightProducts.map(({ name, platform, body }) => (
            <div
              key={name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                backgroundColor: "hsl(210 45% 14%)",
                border: "1px solid hsl(210 35% 20%)",
              }}
            >
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium mb-4 self-start"
                style={{
                  backgroundColor: "hsl(210 35% 20%)",
                  color: "hsl(210 20% 72%)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {platform}
              </span>
              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: "1.1rem", color: "hsl(210 20% 92%)" }}
              >
                {name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary row */}
        <div className="flex flex-wrap gap-3 mb-12">
          {secondaryProducts.map((name) => (
            <Link
              key={name}
              href="/portfolio"
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 hover:border-opacity-80"
              style={{
                border: "1px solid hsl(210 35% 24%)",
                color: "hsl(210 15% 62%)",
                fontFamily: "var(--font-body)",
              }}
            >
              {name} &rarr;
            </Link>
          ))}
        </div>

        <Link
          href="/work-with-us"
          className="rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 hover:brightness-110 inline-block"
          style={{
            backgroundColor: "hsl(45 100% 44%)",
            color: "hsl(210 65% 10%)",
            fontFamily: "var(--font-body)",
          }}
        >
          Work With Us
        </Link>
      </div>
    </section>
  );
}
