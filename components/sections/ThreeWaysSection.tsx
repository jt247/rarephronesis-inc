import Link from "next/link";
import { Lightbulb, Code2, Globe } from "lucide-react";

const tiers = [
  {
    icon: Lightbulb,
    id: "advisory",
    title: "Startup Advisory & Consulting",
    description: "Product strategy, technical advisory, and growth advisory for founders who need a sharp, experienced partner in their corner.",
    anchor: "#advisory",
    contactHref: "/work-with-us?tab=request&tier=advisory",
  },
  {
    icon: Code2,
    id: "saas",
    title: "SaaS & Product Development",
    description: "We design and build the product — web, mobile, or both. MVP to scale, using an AI-assisted build process that compresses timelines.",
    anchor: "#saas",
    contactHref: "/work-with-us?tab=request&tier=saas",
  },
  {
    icon: Globe,
    id: "websites",
    title: "Business Website Development",
    description: "Professional marketing and brand websites that represent your business credibly and move visitors toward action.",
    anchor: "#websites",
    contactHref: "/work-with-us?tab=request&tier=websites",
  },
];

export function ThreeWaysSection() {
  return (
    <section
      className="relative"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
      aria-labelledby="three-ways-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-14 max-w-xl">
          <h2
            id="three-ways-heading"
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "hsl(210 20% 92%)",
              textWrap: "balance",
              letterSpacing: "-0.02em",
            }}
          >
            Three ways we work with you
          </h2>
          <p
            className="text-base"
            style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
          >
            Advisory signals credibility. Build work proves capability. Websites are the accessible entry. A visitor self-sorts within one scroll.
          </p>
        </div>

        {/* Asymmetric grid — tiers offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {tiers.map(({ icon: Icon, id, title, description, anchor, contactHref }, i) => (
            <div
              key={id}
              className="relative flex flex-col p-8 md:p-10"
              style={{
                backgroundColor: i === 1 ? "hsl(210 55% 14%)" : "transparent",
                border: i === 1 ? "1px solid hsl(45 100% 44% / 0.2)" : "1px solid hsl(210 35% 20%)",
                borderRadius: "var(--radius)",
                marginTop: i === 1 ? "-1.5rem" : 0,
                marginBottom: i === 1 ? "-1.5rem" : 0,
              }}
            >
              <div
                className="mb-5 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "hsl(45 100% 44% / 0.12)" }}
              >
                <Icon size={20} style={{ color: "hsl(45 100% 44%)" }} />
              </div>
              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: "1.1rem", color: "hsl(210 20% 92%)", letterSpacing: "-0.01em" }}
              >
                {title}
              </h3>
              <p
                className="text-sm flex-1 mb-6"
                style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
              >
                {description}
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href={anchor}
                  className="text-sm font-medium transition-colors duration-150 hover:opacity-80"
                  style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
                >
                  Learn more →
                </Link>
                <Link
                  href={contactHref}
                  className="text-xs transition-colors duration-150"
                  style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}
                >
                  Get started with this →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
