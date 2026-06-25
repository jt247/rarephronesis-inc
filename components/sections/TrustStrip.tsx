const stats = [
  { value: "8", label: "products shipped" },
  { value: "4", label: "years operating" },
  { value: "21+", label: "founders and businesses advised" },
  { value: "4", label: "countries served" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Company stats"
      style={{
        borderTop: "1px solid hsl(210 35% 20%)",
        borderBottom: "1px solid hsl(210 35% 20%)",
        backgroundColor: "hsl(210 55% 12%)",
        padding: "clamp(2.5rem, 4vw, 3.5rem) 0",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-display font-bold"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "hsl(45 100% 44%)", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {value}
              </span>
              <span
                className="mt-1.5 text-sm"
                style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
