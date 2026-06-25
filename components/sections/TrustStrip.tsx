const clients = [
  "EasyCare",
  "RentBook",
  "FoodBridge",
  "LogPal AI",
  "Referlytics",
  "Orabel Homes",
  "Tianah Logistics",
  "Rijobos",
];

const stats = [
  { value: "12+", label: "Products built" },
  { value: "3", label: "Startup advisory tracks" },
  { value: "4", label: "Countries served" },
];

export function TrustStrip() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "hsl(210 35% 20%)", backgroundColor: "hsl(210 55% 12%)" }}
      aria-label="Client trust and statistics"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-10">
        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b" style={{ borderColor: "hsl(210 35% 20%)" }}>
          {stats.map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2.5">
              <span
                className="font-display font-bold"
                style={{ fontSize: "1.75rem", color: "hsl(45 100% 44%)" }}
              >
                {value}
              </span>
              <span
                className="text-sm"
                style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Client names */}
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <p
            className="text-xs font-medium shrink-0 self-center"
            style={{ color: "hsl(210 15% 40%)", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            Clients &amp; products
          </p>
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-medium"
              style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
