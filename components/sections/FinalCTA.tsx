import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14 text-center"
          style={{ backgroundColor: "hsl(210 55% 12%)", border: "1px solid hsl(210 35% 20%)" }}
        >
          {/* Background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              width: "500px",
              height: "500px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "hsl(45 100% 44% / 0.04)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative">
            <h2
              id="final-cta-heading"
              className="font-display font-bold mb-4 mx-auto"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
                maxWidth: "20ch",
              }}
            >
              Whatever Stage You&apos;re At, Let&apos;s Build It Right
            </h2>
            <p
              className="mb-8 mx-auto text-sm"
              style={{
                color: "hsl(210 15% 58%)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.75,
                maxWidth: "48ch",
              }}
            >
              Advisory, product development, or a professional website, tell us what you are working on.
            </p>
            <Link
              href="/work-with-us"
              className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110 inline-block"
              style={{
                backgroundColor: "hsl(45 100% 44%)",
                color: "hsl(210 65% 10%)",
                fontFamily: "var(--font-body)",
              }}
            >
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
