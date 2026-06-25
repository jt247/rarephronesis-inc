import Link from "next/link";

const ways = [
  {
    title: "Startup Advisory and Consulting",
    body: "Strategic and technical guidance for founders building something new. We help you set direction, build a team around the work if needed, and see the project through from strategy to execution.",
    linkLabel: "Explore Advisory",
    href: "#advisory",
  },
  {
    title: "SaaS and Product Development",
    body: "We design and build the actual product ourselves, web, mobile, or both, from first MVP to platforms ready for scale.",
    linkLabel: "Explore Product Development",
    href: "#saas",
  },
  {
    title: "Business Website Development",
    body: "Professional, conversion ready websites for businesses that need a strong digital front door, built right, not templated.",
    linkLabel: "Explore Website Development",
    href: "#websites",
  },
];

export function ThreeWaysSection() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-12">
          <h2
            id="how-we-work-heading"
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.025em",
            }}
          >
            How We Work With You
          </h2>
          <p
            style={{
              color: "hsl(210 15% 58%)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.75,
              maxWidth: "55ch",
            }}
          >
            Whatever stage you are at, validating an idea, building the product, or getting your business online, we meet you there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map(({ title, body, linkLabel, href }, i) => (
            <div
              key={title}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: "hsl(210 45% 14%)",
                border: i === 1 ? "1px solid hsl(45 100% 44% / 0.4)" : "1px solid hsl(210 35% 20%)",
                marginTop: i === 1 ? "1.5rem" : "0",
              }}
            >
              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: "1.1rem", color: "hsl(210 20% 92%)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
              >
                {body}
              </p>
              <a
                href={href}
                className="text-sm font-semibold transition-colors duration-150 hover:opacity-80 self-start"
                style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
              >
                {linkLabel} &darr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
