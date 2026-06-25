import Link from "next/link";
import { serviceTiers } from "@/lib/content/services";

export function FinalCTA() {
  return (
    <section
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-2xl p-10 md:p-14"
          style={{ backgroundColor: "hsl(210 55% 12%)", border: "1px solid hsl(210 35% 22%)" }}
        >
          {/* Geometric accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
            style={{ background: "hsl(45 100% 44%)", filter: "blur(80px)" }}
          />

          <div className="relative max-w-xl mb-10">
            <h2
              id="final-cta-heading"
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              Ready to build something that works?
            </h2>
            <p
              style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
            >
              Pick the track that fits where you are — advisory, product build, or a business website. We&apos;ll take it from there.
            </p>
          </div>

          {/* Tier quick-links */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {serviceTiers.map((tier) => (
              <Link
                key={tier.id}
                href={`/work-with-us?tab=request&tier=${tier.id}`}
                className="rounded-xl p-5 transition-all duration-150 hover:brightness-110"
                style={{ border: "1px solid hsl(210 35% 26%)", backgroundColor: "hsl(210 55% 10%)" }}
              >
                <p
                  className="font-display font-semibold text-sm mb-1"
                  style={{ color: "hsl(210 20% 92%)" }}
                >
                  {tier.title}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "hsl(210 15% 50%)", fontFamily: "var(--font-body)" }}
                >
                  {tier.tagline}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/work-with-us"
            className="relative inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold text-sm transition-all duration-150 hover:brightness-110"
            style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
