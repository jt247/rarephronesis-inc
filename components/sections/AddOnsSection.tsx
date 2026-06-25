import Link from "next/link";

export function AddOnsSection() {
  return (
    <section
      aria-labelledby="addons-heading"
      style={{
        padding: "clamp(3rem, 5vw, 5rem) 0",
        backgroundColor: "hsl(210 55% 11%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ backgroundColor: "hsl(210 45% 14%)", border: "1px solid hsl(210 35% 20%)" }}
        >
          <div className="flex-1">
            <h2
              id="addons-heading"
              className="font-display font-semibold mb-3"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", color: "hsl(210 20% 92%)" }}
            >
              And When You Need More
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", maxWidth: "60ch" }}
            >
              Growth services, paid and performance advertising, growth advisory, and training for teams who want to build these skills in house. Available alongside any of the work above.
            </p>
          </div>
          <Link
            href="/services"
            className="whitespace-nowrap text-sm font-semibold transition-colors duration-150 hover:opacity-80 shrink-0"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
          >
            See all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
