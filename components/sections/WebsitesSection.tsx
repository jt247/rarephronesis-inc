import Link from "next/link";
import { getCaseStudiesByCategory } from "@/lib/content/case-studies";

const top3 = getCaseStudiesByCategory("websites").slice(0, 3);
const rest = getCaseStudiesByCategory("websites").slice(3);

export function WebsitesSection() {
  return (
    <section
      id="websites"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0", backgroundColor: "hsl(210 55% 12%)" }}
      aria-labelledby="websites-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-12 max-w-xl">
          <p
            className="text-xs font-semibold mb-4 tracking-widest"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
          >
            Tier 3
          </p>
          <h2
            id="websites-heading"
            className="font-display font-bold mb-5"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Business Website Development
          </h2>
          <p
            style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
          >
            Professional marketing and brand websites that represent your business credibly and move visitors toward action. Clean, fast, built to last — and optionally paired with our Digital Business Setup add-on.
          </p>
        </div>

        {/* Staggered 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {top3.map((p, i) => (
            <div
              key={p.id}
              className="rounded-xl p-6 flex flex-col"
              style={{
                border: "1px solid hsl(210 35% 22%)",
                backgroundColor: "hsl(210 55% 10%)",
                marginTop: i === 1 ? "1.5rem" : 0,
              }}
            >
              <div
                className="text-xs font-semibold mb-4 px-2.5 py-1 rounded-md self-start"
                style={{ backgroundColor: "hsl(210 45% 18%)", color: "hsl(210 20% 65%)", fontFamily: "var(--font-body)" }}
              >
                {p.industry}
              </div>
              <p className="font-display font-semibold mb-2" style={{ color: "hsl(210 20% 92%)", fontSize: "1rem" }}>{p.name}</p>
              <p className="text-sm flex-1 mb-4" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>{p.oneLiner}</p>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}>Visit site →</a>
              ) : (
                <span className="text-xs" style={{ color: "hsl(210 15% 35%)", fontFamily: "var(--font-body)" }}>Link TBD</span>
              )}
            </div>
          ))}
        </div>

        {/* Remainder + links */}
        <div className="flex flex-wrap items-center gap-4 mt-2 mb-10">
          {rest.map((p) => (
            <span
              key={p.id}
              className="text-sm"
              style={{ color: "hsl(210 15% 50%)", fontFamily: "var(--font-body)" }}
            >
              {p.name}
            </span>
          ))}
          <Link
            href="/portfolio"
            className="text-sm font-medium ml-2"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
          >
            Full portfolio →
          </Link>
        </div>

        {/* Add-on mention */}
        <div
          className="rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
          style={{ border: "1px solid hsl(45 100% 44% / 0.15)", backgroundColor: "hsl(45 100% 44% / 0.05)" }}
        >
          <div>
            <p className="font-display font-semibold mb-1" style={{ color: "hsl(210 20% 92%)", fontSize: "0.95rem" }}>
              Also need: Digital Business Setup?
            </p>
            <p className="text-sm" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
              Analytics, custom email, domain, social infrastructure — bundled as an add-on.
            </p>
          </div>
          <Link
            href="/services#digital-setup"
            className="shrink-0 text-sm font-semibold"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
          >
            See details →
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/work-with-us?tab=request&tier=websites"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110"
            style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
          >
            Build your website →
          </Link>
        </div>
      </div>
    </section>
  );
}
