import type { Metadata } from "next";
import { BriefForm, QuoteForm } from "./WorkWithUsForms";

export const metadata: Metadata = {
  title: "Work With Us | Rare Phronesis",
  description: "Submit a project brief or get a quote. Advisory, SaaS and product development, and business website development.",
};

function PathCard({
  badge,
  title,
  framing,
  children,
}: {
  badge: string;
  title: string;
  framing: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col rounded-2xl p-8 lg:p-10"
      style={{ backgroundColor: "hsl(210 45% 14%)", border: "1px solid hsl(210 35% 22%)" }}
    >
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-5 self-start"
        style={{
          backgroundColor: "hsl(45 100% 44% / 0.15)",
          color: "hsl(45 100% 44%)",
          fontFamily: "var(--font-body)",
        }}
      >
        {badge}
      </span>
      <h2
        className="font-display font-bold mb-3"
        style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", color: "hsl(210 20% 92%)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <p
        className="text-sm mb-8 leading-relaxed"
        style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)" }}
      >
        {framing}
      </p>
      {children}
    </div>
  );
}

export default function WorkWithUsPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "hsl(210 20% 92%)",
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            Work With Us
          </h1>
          <p style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}>
            Choose the path that fits where you are. If you know exactly what you need, submit a brief and we will get moving. If you are still working out the scope, ask for a quote and we will tell you what it takes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <PathCard
            badge="Path A"
            title="Submit a Brief"
            framing="Already know what you need? Tell us everything and we will get moving."
          >
            <BriefForm />
          </PathCard>

          <PathCard
            badge="Path B"
            title="Get a Quote"
            framing="Not sure yet? Pick a service, tell us your goal, and we will tell you what it takes."
          >
            <QuoteForm />
          </PathCard>
        </div>
      </div>
    </div>
  );
}
