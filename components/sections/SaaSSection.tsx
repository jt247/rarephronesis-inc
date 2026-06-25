import Link from "next/link";
import { getCaseStudiesByCategory } from "@/lib/content/case-studies";

const top3 = getCaseStudiesByCategory("saas").slice(0, 3);
const secondary = getCaseStudiesByCategory("saas").slice(3);

export function SaaSSection() {
  return (
    <section
      id="saas"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
      aria-labelledby="saas-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Right col first on desktop via order */}
          <div className="lg:order-2">
            <p
              className="text-xs font-semibold mb-4 tracking-widest"
              style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
            >
              Tier 2
            </p>
            <h2
              id="saas-heading"
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              SaaS & Product Development
            </h2>
            <p
              className="mb-6"
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75, maxWidth: "46ch" }}
            >
              We design and build the actual product — web, mobile, or both. Our AI-assisted build process is a genuine differentiator: it compresses delivery timelines without cutting corners on architecture or UX quality.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["Web Applications", "Mobile Apps", "MVP to Scale", "AI-Assisted Build", "Cross-Platform"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md px-3 py-1.5 text-xs font-medium"
                  style={{ border: "1px solid hsl(210 35% 24%)", color: "hsl(210 20% 72%)", fontFamily: "var(--font-body)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/work-with-us?tab=request&tier=saas"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110"
              style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
            >
              Start your product build →
            </Link>
          </div>

          {/* Case studies */}
          <div className="lg:order-1 flex flex-col gap-5">
            {top3.map((p) => (
              <div
                key={p.id}
                className="rounded-xl p-6"
                style={{ border: "1px solid hsl(210 35% 22%)", backgroundColor: "hsl(210 55% 12%)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-display font-semibold" style={{ color: "hsl(210 20% 92%)", fontSize: "1rem" }}>{p.name}</p>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs shrink-0" style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}>Visit →</a>
                  ) : (
                    <span className="text-xs shrink-0" style={{ color: "hsl(210 15% 35%)", fontFamily: "var(--font-body)" }}>Link TBD</span>
                  )}
                </div>
                <p className="text-sm mb-3" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>{p.oneLiner}</p>
                {p.pillars && (
                  <div className="flex flex-wrap gap-2">
                    {p.pillars.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md px-2.5 py-1 text-xs"
                        style={{ backgroundColor: "hsl(45 100% 44% / 0.1)", color: "hsl(45 100% 50%)", fontFamily: "var(--font-body)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Secondary row */}
            {secondary.length > 0 && (
              <div className="flex gap-4 flex-wrap">
                {secondary.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-lg px-4 py-3 flex-1 min-w-[140px]"
                    style={{ border: "1px solid hsl(210 35% 20%)", backgroundColor: "hsl(210 55% 11%)" }}
                  >
                    <p className="font-display font-semibold text-sm mb-1" style={{ color: "hsl(210 20% 80%)" }}>{p.name}</p>
                    <p className="text-xs" style={{ color: "hsl(210 15% 48%)", fontFamily: "var(--font-body)" }}>{p.oneLiner}</p>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/portfolio"
              className="text-sm font-medium"
              style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
            >
              Full portfolio →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
