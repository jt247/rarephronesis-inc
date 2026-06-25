const points = [
  {
    title: "Advisory-first positioning",
    body: "We lead with strategy, not deliverables. That means clients get a partner who understands the problem before recommending the solution.",
  },
  {
    title: "Full-stack capability",
    body: "Product, technical, and growth under one roof. No handoff gaps, no misaligned incentives between advisors and builders.",
  },
  {
    title: "AI-assisted delivery",
    body: "We use AI tooling at every stage of the build process — not as a shortcut, but as a force multiplier that lets us move faster without cutting quality.",
  },
  {
    title: "Founder-to-founder honesty",
    body: "We've built and shipped products ourselves. We'll tell you what we think, not just what you want to hear.",
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <h2
              id="why-heading"
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Why Rare Phronesis
            </h2>
            <p
              className="mb-6"
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
            >
              &ldquo;Phronesis&rdquo; is the ancient Greek word for practical wisdom — knowing not just what to do, but how to do it in a specific situation. That&apos;s the operating principle: not generic advice, not template solutions, but situational judgement built from real experience.
            </p>
            <p
              style={{ color: "hsl(210 15% 50%)", fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "0.9rem" }}
            >
              Founded by Joshua Theophilus — product leader, builder, and growth strategist with a track record across consumer apps, SaaS platforms, and startup advisory across Africa, the UK, and the US.
            </p>
          </div>

          {/* Right — points in asymmetric stagger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map(({ title, body }, i) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{
                  border: "1px solid hsl(210 35% 22%)",
                  backgroundColor: i % 2 === 0 ? "hsl(210 55% 12%)" : "hsl(210 55% 11%)",
                  marginTop: i === 1 || i === 3 ? "1.5rem" : 0,
                }}
              >
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ backgroundColor: "hsl(45 100% 44%)" }}
                />
                <p
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: "0.95rem", color: "hsl(210 20% 92%)" }}
                >
                  {title}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
