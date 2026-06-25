import Link from "next/link";
import { getCaseStudiesByCategory } from "@/lib/content/case-studies";

const projects = getCaseStudiesByCategory("advisory");

const pillarsDetail = [
  { title: "Product Strategy", desc: "Market positioning, feature prioritisation, roadmap, user research — building the right thing." },
  { title: "Technical Advisory", desc: "Architecture decisions, tech stack, build vs. buy, engineering hiring — building it right." },
  { title: "Growth Advisory", desc: "Acquisition, retention, monetisation strategy — growing it sustainably." },
];

export function AdvisorySection() {
  return (
    <section
      id="advisory"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0", backgroundColor: "hsl(210 55% 12%)" }}
      aria-labelledby="advisory-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Offset layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left col */}
          <div>
            <p
              className="text-xs font-semibold mb-4 tracking-widest"
              style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
            >
              Tier 1
            </p>
            <h2
              id="advisory-heading"
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Startup Advisory & Consulting
            </h2>
            <p
              className="mb-8"
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75, maxWidth: "46ch" }}
            >
              Strategic clarity from someone who&apos;s built and grown products. We work alongside founders across three advisory pillars — not as generalists, but with a specific track record in each.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-5 mb-10">
              {pillarsDetail.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "hsl(45 100% 44%)", marginTop: "0.45rem" }}
                  />
                  <div>
                    <p className="font-display font-semibold text-sm mb-1" style={{ color: "hsl(210 20% 92%)" }}>{title}</p>
                    <p className="text-sm" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/work-with-us?tab=request&tier=advisory"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110"
              style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
            >
              Get advisory support →
            </Link>
          </div>

          {/* Right col — case studies */}
          <div className="flex flex-col gap-5">
            <p
              className="text-xs font-semibold tracking-widest mb-1"
              style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
            >
              Advisory work
            </p>
            {projects.map((p) => (
              <div
                key={p.id}
                className="rounded-xl p-6"
                style={{ border: "1px solid hsl(210 35% 22%)", backgroundColor: "hsl(210 55% 10%)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
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
                        className="rounded-md px-2.5 py-1 text-xs font-medium"
                        style={{ backgroundColor: "hsl(45 100% 44% / 0.1)", color: "hsl(45 100% 50%)", fontFamily: "var(--font-body)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
