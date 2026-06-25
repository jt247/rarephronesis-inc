import type { Metadata } from "next";
import { caseStudies, getCaseStudiesByCategory } from "@/lib/content/case-studies";
import { serviceTiers } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies across Rare Phronesis's three service tracks — startup advisory, SaaS and product development, and business website development.",
};

const categoryLabels: Record<string, string> = {
  advisory: "Startup Advisory & Consulting",
  saas: "SaaS & Product Development",
  websites: "Business Website Development",
};

export default function PortfolioPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0 clamp(3rem, 5vw, 5rem)", borderBottom: "1px solid hsl(210 35% 20%)" }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.025em" }}
          >
            Portfolio
          </h1>
          <p
            className="max-w-xl"
            style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "1.05rem" }}
          >
            {caseStudies.length} projects across advisory, product builds, and business websites.
          </p>
        </div>
      </div>

      {/* Categories */}
      {(["advisory", "saas", "websites"] as const).map((cat, ci) => {
        const projects = getCaseStudiesByCategory(cat);
        return (
          <section
            key={cat}
            style={{
              padding: "clamp(3.5rem, 6vw, 6rem) 0",
              backgroundColor: ci % 2 === 1 ? "hsl(210 55% 12%)" : "transparent",
              borderBottom: "1px solid hsl(210 35% 20%)",
            }}
          >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="mb-8">
                <p
                  className="text-xs font-semibold mb-2 tracking-widest"
                  style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)", textTransform: "uppercase" }}
                >
                  {serviceTiers.find((t) => t.id === cat)?.tagline}
                </p>
                <h2
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.02em" }}
                >
                  {categoryLabels[cat]}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className="rounded-xl p-6 flex flex-col"
                    style={{
                      border: "1px solid hsl(210 35% 22%)",
                      backgroundColor: ci % 2 === 1 ? "hsl(210 55% 10%)" : "hsl(210 55% 12%)",
                      marginTop: i % 3 === 1 ? "1rem" : 0,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <p
                        className="font-display font-semibold"
                        style={{ fontSize: "0.95rem", color: "hsl(210 20% 92%)" }}
                      >
                        {p.name}
                      </p>
                      {p.industry && (
                        <span
                          className="text-xs rounded-md px-2 py-1 shrink-0"
                          style={{ backgroundColor: "hsl(210 45% 18%)", color: "hsl(210 20% 65%)", fontFamily: "var(--font-body)" }}
                        >
                          {p.industry}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm flex-1 mb-4"
                      style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}
                    >
                      {p.body}
                    </p>
                    {p.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded px-2 py-0.5 text-xs"
                            style={{ backgroundColor: "hsl(45 100% 44% / 0.1)", color: "hsl(45 100% 50%)", fontFamily: "var(--font-body)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium"
                        style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
                      >
                        Visit →
                      </a>
                    ) : (
                      <span className="text-xs" style={{ color: "hsl(210 15% 35%)", fontFamily: "var(--font-body)" }}>
                        Link coming soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
