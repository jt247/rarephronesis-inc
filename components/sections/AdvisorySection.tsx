import Link from "next/link";

const caseStudies = [
  {
    name: "EasyCare",
    tags: ["Product", "Technical", "Growth"],
    body: "Helping an established healthcare SaaS platform rebuild and expand into a full enterprise offering.",
    href: "/services#advisory",
  },
  {
    name: "RentBook",
    tags: ["Product", "Technical"],
    body: "Building a first of its kind, end to end property rental platform from the ground up.",
    href: "/services#advisory",
  },
  {
    name: "FoodBridge",
    tags: ["Product", "Technical", "Growth"],
    body: "An agri tech platform connecting consumers directly to producers for fairer pricing.",
    href: "/services#advisory",
  },
];

export function AdvisorySection() {
  return (
    <section
      id="advisory"
      aria-labelledby="advisory-heading"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            <h2
              id="advisory-heading"
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              Startup Advisory and Consulting
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
            >
              We work alongside founders as product, technical, and growth advisors. We don&apos;t just advise from the sidelines either. When needed, we help build out the team, set strategy, and stay with the project from start to finish.
            </p>
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

          {/* Right column: case study cards */}
          <div className="flex flex-col gap-5">
            {caseStudies.map(({ name, tags, body, href }) => (
              <div
                key={name}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "hsl(210 45% 14%)",
                  border: "1px solid hsl(210 35% 20%)",
                }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: "hsl(210 35% 20%)",
                        color: "hsl(210 20% 72%)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="font-display font-semibold mb-2"
                  style={{ color: "hsl(210 20% 92%)", fontSize: "1rem" }}
                >
                  {name}
                </p>
                <p className="text-sm mb-4" style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                  {body}
                </p>
                <Link
                  href={href}
                  className="text-xs font-semibold transition-colors duration-150 hover:opacity-80"
                  style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
