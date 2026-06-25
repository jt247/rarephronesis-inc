import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{ padding: "clamp(5rem, 10vw, 10rem) 0 clamp(4rem, 8vw, 8rem)" }}
    >
      {/* Geometric background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(300px, 50vw, 700px)",
            height: "clamp(300px, 50vw, 700px)",
            top: "-20%",
            right: "-10%",
            background: "hsl(45 100% 44% / 0.05)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(200px, 30vw, 400px)",
            height: "clamp(200px, 30vw, 400px)",
            bottom: "0%",
            left: "-5%",
            background: "hsl(210 65% 30% / 0.12)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12" style={{ zIndex: 1 }}>
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              textWrap: "balance",
            }}
          >
            Rare Phronesis is a product, technical, and growth partner for startups and founders.
          </h1>
          <p
            className="mb-10"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "hsl(210 15% 60%)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.75,
              maxWidth: "58ch",
            }}
          >
            We advise, build, and grow the systems that take an idea to a working business, from early stage strategy to the products, platforms, and websites that bring it to life.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work-with-us"
              className="rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110"
              style={{
                backgroundColor: "hsl(45 100% 44%)",
                color: "hsl(210 65% 10%)",
                fontFamily: "var(--font-body)",
              }}
            >
              Work With Us
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium transition-colors duration-150 hover:text-primary"
              style={{
                color: "hsl(210 15% 58%)",
                fontFamily: "var(--font-body)",
              }}
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
