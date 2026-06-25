"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        padding: "clamp(4rem, 7vw, 8rem) 0",
        backgroundColor: "hsl(210 55% 11%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2
          id="faq-heading"
          className="font-display font-bold mb-12"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "hsl(210 20% 92%)",
            letterSpacing: "-0.025em",
          }}
        >
          Common Questions
        </h2>

        <div className="max-w-3xl flex flex-col divide-y" style={{ borderColor: "hsl(210 35% 20%)" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ borderColor: "hsl(210 35% 20%)" }}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span
                  className="font-display font-semibold text-sm sm:text-base"
                  style={{ color: "hsl(210 20% 88%)" }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 mt-0.5 text-lg font-light transition-transform duration-200"
                  style={{
                    color: "hsl(45 100% 44%)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <p
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
