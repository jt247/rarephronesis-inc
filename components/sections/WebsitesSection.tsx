import Link from "next/link";

const caseStudies = [
  {
    name: "Orabel Homes and Properties",
    tag: "Real Estate",
    body: "A property rental, sales, and leasing company. We built their website and led a full digital setup.",
    url: "https://orabelhomeproperties.com",
    linkLabel: "orabelhomeproperties.com",
  },
  {
    name: "Tianah Global Logistics",
    tag: "Logistics",
    body: "Moving goods between Nigeria, Canada, the UK, and beyond. We designed their site and digital infrastructure.",
    url: "https://tianahglobalhq.com",
    linkLabel: "tianahglobalhq.com",
  },
  {
    name: "Rejobos Multi Concept Limited",
    tag: "Travel and Visa Services",
    body: "Visa processing for individuals and corporate clients. We built their site and supported their full digital setup.",
    url: "https://rejobosmcl.com",
    linkLabel: "rejobosmcl.com",
  },
];

export function WebsitesSection() {
  return (
    <section
      id="websites"
      aria-labelledby="websites-heading"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2
            id="websites-heading"
            className="font-display font-bold mb-5"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.025em",
            }}
          >
            Business Website Development
          </h2>
          <p style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}>
            A strong website is often the first real impression a business makes. We build professional, conversion ready sites, and the digital infrastructure behind them, so that first impression works in your favor.
          </p>
        </div>

        {/* Staggered 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {caseStudies.map(({ name, tag, body, url, linkLabel }, i) => (
            <div
              key={name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                backgroundColor: "hsl(210 45% 14%)",
                border: "1px solid hsl(210 35% 20%)",
                marginTop: i === 1 ? "1.5rem" : "0",
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
                {tag}
              </span>
              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: "1rem", color: "hsl(210 20% 92%)" }}
              >
                {name}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)" }}
              >
                {body}
              </p>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-semibold transition-colors duration-150 hover:opacity-80"
                  style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
                >
                  {linkLabel} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm mb-10" style={{ color: "hsl(210 15% 50%)", fontFamily: "var(--font-body)" }}>
          Plus more.{" "}
          <Link href="/portfolio" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(45 100% 44%)" }}>
            See our full portfolio &rarr;
          </Link>
        </p>

        {/* Digital Business Setup callout */}
        <div
          className="rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center gap-6 mb-10"
          style={{ backgroundColor: "hsl(210 55% 12%)", border: "1px solid hsl(210 35% 22%)" }}
        >
          <div className="flex-1">
            <h3
              className="font-display font-semibold mb-2"
              style={{ fontSize: "1.05rem", color: "hsl(210 20% 92%)" }}
            >
              Digital Business Setup
            </h3>
            <p className="text-sm" style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
              Beyond the website itself: analytics, custom email, domains, social and digital infrastructure, and foundational branding.
            </p>
          </div>
          <Link
            href="/services#digital-setup"
            className="whitespace-nowrap text-sm font-semibold transition-colors duration-150 hover:opacity-80 shrink-0"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
          >
            See what&apos;s included &rarr;
          </Link>
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
