"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/content/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{ padding: "clamp(4rem, 7vw, 8rem) 0", backgroundColor: "hsl(210 55% 12%)" }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <div>
            <h2
              id="faq-heading"
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "hsl(210 20% 92%)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Common questions
            </h2>
            <p
              className="text-sm"
              style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
            >
              If your question isn&apos;t here, reach out via the contact form and we&apos;ll respond within 1–2 business days.
            </p>
          </div>

          <div className="flex flex-col divide-y" style={{ borderColor: "hsl(210 35% 20%)" }}>
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderColor: "hsl(210 35% 20%)" }}>
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className="font-display font-semibold text-sm"
                      style={{ color: "hsl(210 20% 88%)", lineHeight: 1.5 }}
                    >
                      {item.question}
                    </span>
                    <span className="shrink-0 mt-0.5" style={{ color: "hsl(45 100% 44%)" }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      className="pb-5 text-sm"
                      style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
