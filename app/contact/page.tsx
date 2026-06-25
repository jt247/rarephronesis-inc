import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Rare Phronesis",
  description: "Send us a general inquiry. We respond within 1 to 2 business days.",
};

export default function ContactPage() {
  return (
    <div style={{ padding: "clamp(4rem, 7vw, 8rem) 0" }}>
      <div className="mx-auto max-w-[680px] px-6 lg:px-12">
        <h1
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "hsl(210 20% 92%)",
            letterSpacing: "-0.025em",
            textWrap: "balance",
          }}
        >
          Contact
        </h1>
        <p
          className="mb-10"
          style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)", lineHeight: 1.75 }}
        >
          Have a general question or just want to say hello? Send us a note and we will get back to you within 1 to 2 business days.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
