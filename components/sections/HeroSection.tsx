import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
      style={{ paddingTop: "clamp(5rem, 8vw, 9rem)", paddingBottom: "clamp(4rem, 7vw, 8rem)" }}
    >
      {/* Background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "hsl(45 100% 44%)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "hsl(210 60% 30%)", filter: "blur(100px)" }}
        />
        {/* Geometric accent lines */}
        <svg
          className="absolute right-0 top-0 w-[480px] h-[480px] opacity-5"
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="480,0 480,480 0,0" fill="hsl(45 100% 44%)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold mb-6 tracking-wide"
            style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
          >
            Product · Technical · Growth
          </p>

          <h1
            id="hero-heading"
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "hsl(210 20% 92%)",
              textWrap: "balance",
              letterSpacing: "-0.03em",
            }}
          >
            The partner that takes your idea to a{" "}
            <span style={{ color: "hsl(45 100% 44%)" }}>working business.</span>
          </h1>

          <p
            className="mb-10 max-w-xl"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "hsl(210 15% 60%)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Rare Phronesis is a product, technical, and growth partner for startups and founders — we advise, build, and grow the systems that take an idea to a working business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-sm transition-all duration-150 hover:brightness-110"
              style={{
                backgroundColor: "hsl(45 100% 44%)",
                color: "hsl(210 65% 10%)",
                fontFamily: "var(--font-body)",
              }}
            >
              Tell us what you need
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-sm transition-all duration-150 hover:brightness-110"
              style={{
                border: "1px solid hsl(210 35% 28%)",
                color: "hsl(210 20% 78%)",
                fontFamily: "var(--font-body)",
              }}
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-3">
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ backgroundColor: "hsl(210 35% 28%)" }}
          />
          <ChevronDown
            size={16}
            style={{ color: "hsl(210 15% 45%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
