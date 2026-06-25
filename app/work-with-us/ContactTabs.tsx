"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

type Tab = "inquiry" | "request" | "quote";

const tabs: { id: Tab; label: string }[] = [
  { id: "inquiry", label: "General Inquiry" },
  { id: "request", label: "Request a Service" },
  { id: "quote", label: "Get a Quote" },
];

const tierOptions = [
  { value: "advisory", label: "Startup Advisory & Consulting" },
  { value: "saas", label: "SaaS & Product Development" },
  { value: "websites", label: "Business Website Development" },
  { value: "digital-setup", label: "Digital Business Setup (Add-on)" },
  { value: "growth", label: "Growth Services (Add-on)" },
  { value: "training", label: "Training & Workshops (Add-on)" },
  { value: "other", label: "Something else / not sure yet" },
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

const inputStyle = {
  backgroundColor: "hsl(210 35% 16%)",
  border: "1px solid hsl(210 35% 24%)",
  color: "hsl(210 20% 88%)",
  fontFamily: "var(--font-body)",
  borderRadius: "0.625rem",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.875rem",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 500,
  marginBottom: "0.4rem",
  color: "hsl(210 15% 65%)",
  fontFamily: "var(--font-body)",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-16 gap-5">
      <CheckCircle size={40} style={{ color: "hsl(45 100% 44%)" }} />
      <div>
        <p className="font-display font-bold text-xl mb-2" style={{ color: "hsl(210 20% 92%)" }}>
          Message received
        </p>
        <p className="text-sm" style={{ color: "hsl(210 15% 58%)", fontFamily: "var(--font-body)" }}>
          We&apos;ll review your submission and get back to you within 1–2 business days.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-sm font-medium mt-2"
        style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}
      >
        Send another message
      </button>
    </div>
  );
}

function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "inquiry",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {
      // fail silently — UX shows success regardless; email can be resent
    }
    setLoading(false);
    setSent(true);
  }

  if (sent) return <SuccessMessage onReset={() => setSent(false)} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name">
          <input name="name" required style={inputStyle} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required style={inputStyle} placeholder="your@email.com" />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          name="message"
          required
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="What's on your mind?"
        />
      </Field>
      <SubmitButton loading={loading} />
    </form>
  );
}

function RequestForm({ defaultTier }: { defaultTier: string }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "request",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      tier: (form.elements.namedItem("tier") as HTMLSelectElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {
      // fail silently
    }
    setLoading(false);
    setSent(true);
  }

  if (sent) return <SuccessMessage onReset={() => setSent(false)} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name">
          <input name="name" required style={inputStyle} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required style={inputStyle} placeholder="your@email.com" />
        </Field>
      </div>
      <Field label="Company (optional)">
        <input name="company" style={inputStyle} placeholder="Your company or startup name" />
      </Field>
      <Field label="Service you need">
        <select name="tier" required defaultValue={defaultTier || ""} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="" disabled>Select a service</option>
          {tierOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about your project">
        <textarea
          name="description"
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="What are you building or trying to solve? Where are you now and where do you want to get to?"
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Budget range (optional)">
          <select name="budget" style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="">Not sure / prefer to discuss</option>
            {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Timeline (optional)">
          <select name="timeline" style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="">Flexible</option>
            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <SubmitButton loading={loading} />
    </form>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "quote",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      scope: (form.elements.namedItem("scope") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {
      // fail silently
    }
    setLoading(false);
    setSent(true);
  }

  if (sent) return <SuccessMessage onReset={() => setSent(false)} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="text-sm" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
        Tell us what you need a quote for and we&apos;ll get back to you with a scoped estimate — no commitment required.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name">
          <input name="name" required style={inputStyle} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required style={inputStyle} placeholder="your@email.com" />
        </Field>
      </div>
      <Field label="What do you need a quote for?">
        <select name="service" required style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="" disabled>Select a service</option>
          {tierOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>
      <Field label="Describe the scope">
        <textarea
          name="scope"
          required
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Describe what you need as specifically as you can — features, pages, platforms, integrations, timeline, etc."
        />
      </Field>
      <SubmitButton loading={loading} />
    </form>
  );
}

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center gap-2 self-start rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:brightness-110 disabled:opacity-60"
      style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
    >
      <Send size={15} />
      {loading ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactTabs() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as Tab | null;
  const tierParam = searchParams.get("tier") ?? "";

  const [active, setActive] = useState<Tab>(
    tabParam && tabs.some((t) => t.id === tabParam) ? tabParam : "inquiry"
  );

  useEffect(() => {
    if (tabParam && tabs.some((t) => t.id === tabParam)) {
      setActive(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
      {/* Tab list */}
      <nav
        className="flex lg:flex-col gap-2"
        role="tablist"
        aria-label="Contact form tabs"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className="text-left rounded-lg px-4 py-3 text-sm font-medium transition-all duration-150 w-full"
              style={{
                backgroundColor: isActive ? "hsl(45 100% 44% / 0.12)" : "transparent",
                color: isActive ? "hsl(45 100% 44%)" : "hsl(210 15% 55%)",
                border: isActive ? "1px solid hsl(45 100% 44% / 0.25)" : "1px solid transparent",
                fontFamily: "var(--font-body)",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Tab panels */}
      <div
        className="rounded-xl p-8 lg:p-10"
        style={{ border: "1px solid hsl(210 35% 22%)", backgroundColor: "hsl(210 55% 12%)" }}
      >
        {active === "inquiry" && <InquiryForm />}
        {active === "request" && <RequestForm defaultTier={tierParam} />}
        {active === "quote" && <QuoteForm />}
      </div>
    </div>
  );
}
