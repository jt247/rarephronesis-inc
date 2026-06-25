import Link from "next/link";
import { addOns } from "@/lib/content/services";

export function AddOnsSection() {
  return (
    <section
      style={{ padding: "clamp(3rem, 5vw, 6rem) 0" }}
      aria-labelledby="addons-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ border: "1px solid hsl(210 35% 22%)", backgroundColor: "hsl(210 55% 11%)" }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="max-w-lg">
              <h2
                id="addons-heading"
                className="font-display font-bold mb-3"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.02em" }}
              >
                Things we also help with
              </h2>
              <p
                className="text-sm"
                style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
              >
                These aren&apos;t standalone tiers — they&apos;re add-ons that come up naturally once you&apos;re engaged in one of the three core services.
              </p>
            </div>
            <Link
              href="/services"
              className="shrink-0 text-sm font-semibold self-start"
              style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
            >
              Full detail on /services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div key={addon.id}>
                <p
                  className="font-display font-semibold mb-2 text-sm"
                  style={{ color: "hsl(210 20% 88%)" }}
                >
                  {addon.title}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "hsl(210 15% 52%)", fontFamily: "var(--font-body)", lineHeight: 1.65 }}
                >
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
