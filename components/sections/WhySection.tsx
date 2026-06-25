export function WhySection() {
  return (
    <section
      aria-labelledby="why-heading"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <h2
              id="why-heading"
              className="font-display font-bold mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.025em",
              }}
            >
              Why Rare Phronesis
            </h2>
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{ color: "hsl(210 15% 60%)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
            >
              <p>
                Rare Phronesis exists because most startups don&apos;t fail from a lack of ideas. They fail from a lack of structure around execution. We work as an embedded partner across product, technical, and growth, so founders get the depth of thinking a full in house team would provide, without the overhead of building one before they are ready.
              </p>
              <p>
                We have shipped 8 of our own products, advised more than 21 founders and businesses, and spent the last 4 years across 4 countries learning what actually separates an idea that ships from one that doesn&apos;t.
              </p>
              <p>
                We build with whatever approach the work calls for. AI assisted development when speed and validation matter most. Full custom development when the project needs depth. Either way, the goal is the same: help you validate fast, then build for scale.
              </p>
            </div>
          </div>

          {/* Right: staggered stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "8", label: "products shipped" },
              { value: "21+", label: "founders and businesses advised", offset: true },
              { value: "4", label: "years of operating experience", offset: true },
              { value: "4", label: "countries served" },
            ].map(({ value, label, offset }) => (
              <div
                key={label}
                className="rounded-2xl p-6 flex flex-col justify-end"
                style={{
                  backgroundColor: "hsl(210 45% 14%)",
                  border: "1px solid hsl(210 35% 20%)",
                  marginTop: offset ? "1.5rem" : "0",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "hsl(45 100% 44%)", letterSpacing: "-0.03em" }}
                >
                  {value}
                </span>
                <span
                  className="mt-1.5 text-xs"
                  style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
