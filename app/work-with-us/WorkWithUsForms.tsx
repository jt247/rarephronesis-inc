"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_OPTIONS = [
  "Startup Advisory and Consulting",
  "SaaS and Product Development",
  "Business Website Development",
  "Digital Business Setup (Add-on)",
  "Growth Services (Add-on)",
  "Paid and Performance Advertising (Add-on)",
  "Growth Advisory (Add-on)",
  "Team Training (Add-on)",
];

const inputStyle = {
  backgroundColor: "hsl(210 35% 18%)",
  border: "1px solid hsl(210 35% 22%)",
  color: "hsl(210 20% 92%)",
  fontFamily: "var(--font-body)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.875rem",
  outline: "none",
} as const;

const labelStyle = {
  color: "hsl(210 15% 55%)",
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  fontWeight: 600,
} as const;

function SuccessMessage() {
  return (
    <div
      className="rounded-xl p-8 text-center"
      style={{ backgroundColor: "hsl(210 45% 16%)", border: "1px solid hsl(210 35% 22%)" }}
    >
      <p className="font-display font-semibold mb-2" style={{ color: "hsl(210 20% 92%)" }}>
        Submission received
      </p>
      <p className="text-sm" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
        We will review your brief and get back to you within 1 to 2 business days to discuss next steps.
      </p>
    </div>
  );
}

function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    location: "",
    targetMarket: "",
    idealCustomer: "",
    currentChallenge: "",
    goal: "",
    notes: "",
    email: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "brief",
          name: form.contactName,
          email: form.email,
          "Business Name": form.businessName,
          "Contact Name": form.contactName,
          "Where the Business Operates": form.location,
          "Target Market": form.targetMarket,
          "Ideal Customer": form.idealCustomer,
          "Current Challenge": form.currentChallenge,
          "Goal": form.goal,
          "Additional Notes": form.notes,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Business Name">
          <input type="text" required placeholder="Your business name" style={inputStyle}
            value={form.businessName} onChange={(e) => setForm((f) => ({ ...f, businessName: e.target.value }))} />
        </Field>
        <Field label="Your Name">
          <input type="text" required placeholder="Business owner or contact" style={inputStyle}
            value={form.contactName} onChange={(e) => setForm((f) => ({ ...f, contactName: e.target.value }))} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Where the Business Operates">
          <input type="text" required placeholder="Country, region, or global" style={inputStyle}
            value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
        </Field>
        <Field label="Target Market">
          <input type="text" required placeholder="Who you serve or want to serve" style={inputStyle}
            value={form.targetMarket} onChange={(e) => setForm((f) => ({ ...f, targetMarket: e.target.value }))} />
        </Field>
      </div>
      <Field label="Ideal Customer Profile">
        <textarea rows={3} required placeholder="Describe your ideal user or customer" style={{ ...inputStyle, resize: "vertical" }}
          value={form.idealCustomer} onChange={(e) => setForm((f) => ({ ...f, idealCustomer: e.target.value }))} />
      </Field>
      <Field label="Current Challenge">
        <textarea rows={3} required placeholder="What is the main problem you are solving?" style={{ ...inputStyle, resize: "vertical" }}
          value={form.currentChallenge} onChange={(e) => setForm((f) => ({ ...f, currentChallenge: e.target.value }))} />
      </Field>
      <Field label="What You Want to Achieve">
        <textarea rows={3} required placeholder="What does success look like for this project?" style={{ ...inputStyle, resize: "vertical" }}
          value={form.goal} onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))} />
      </Field>
      <Field label="Additional Notes (optional)">
        <textarea rows={3} placeholder="Anything else we should know?" style={{ ...inputStyle, resize: "vertical" }}
          value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
      </Field>
      <Field label="Your Email">
        <input type="email" required placeholder="your@email.com" style={inputStyle}
          value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
      </Field>
      <ErrorNote status={status} />
      <SubmitButton status={status} label="Submit Brief" />
    </form>
  );
}

function ServiceDropdown({ selected, onToggle }: { selected: string[]; onToggle: (s: string) => void }) {
  const [open, setOpen] = useState(false);

  const label =
    selected.length === 0
      ? "Choose services"
      : selected.length === 1
      ? selected[0]
      : `${selected.length} services selected`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full text-left"
        style={{
          ...inputStyle,
          color: selected.length === 0 ? "hsl(210 15% 40%)" : "hsl(210 20% 92%)",
        }}
      >
        <span className="truncate pr-2">{label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 150ms" }}
        >
          <path d="M2 4L6 8L10 4" stroke="hsl(210 15% 50%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-10 w-full mt-1 rounded-lg overflow-hidden"
          style={{
            backgroundColor: "hsl(210 45% 14%)",
            border: "1px solid hsl(210 35% 22%)",
            boxShadow: "0 8px 24px hsl(210 65% 5% / 0.6)",
          }}
        >
          {SERVICE_OPTIONS.map((option) => {
            const checked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => onToggle(option)}
                className="flex items-center gap-3 w-full text-left px-4 py-3 transition-colors duration-100"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: checked ? "hsl(210 20% 92%)" : "hsl(210 15% 62%)",
                  backgroundColor: checked ? "hsl(210 40% 18%)" : "transparent",
                  borderBottom: "1px solid hsl(210 35% 18%)",
                }}
              >
                <span
                  className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center"
                  style={{
                    backgroundColor: checked ? "hsl(45 100% 44%)" : "transparent",
                    border: `1.5px solid ${checked ? "hsl(45 100% 44%)" : "hsl(210 35% 35%)"}`,
                  }}
                >
                  {checked && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="hsl(210 65% 10%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [services, setServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    timeline: "",
  });

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (services.length === 0) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quote",
          name: form.name,
          email: form.email,
          "Services": services.join(", "),
          "Goal": form.goal,
          "Expected Timeline": form.timeline,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Field label="Select Services (choose all that apply)">
        <ServiceDropdown selected={services} onToggle={toggleService} />
        {services.length === 0 && (
          <p className="text-xs mt-1" style={{ color: "hsl(210 15% 45%)", fontFamily: "var(--font-body)" }}>
            Select at least one service to continue.
          </p>
        )}
      </Field>
      <Field label="What Do You Want to Achieve?">
        <textarea rows={4} required placeholder="Describe your goal for this service" style={{ ...inputStyle, resize: "vertical" }}
          value={form.goal} onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))} />
      </Field>
      <Field label="Expected Duration or Timeline">
        <input type="text" required placeholder="e.g. 6 to 8 weeks, ASAP, Q3 launch" style={inputStyle}
          value={form.timeline} onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))} />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name">
          <input type="text" required placeholder="Full name" style={inputStyle}
            value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </Field>
        <Field label="Your Email">
          <input type="email" required placeholder="your@email.com" style={inputStyle}
            value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        </Field>
      </div>
      <ErrorNote status={status} />
      <SubmitButton status={status} label="Get a Quote" />
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function ErrorNote({ status }: { status: Status }) {
  if (status !== "error") return null;
  return (
    <p className="text-sm" style={{ color: "hsl(0 70% 60%)", fontFamily: "var(--font-body)" }}>
      Something went wrong. Please try again or email us at hello@rarephronesis.com.
    </p>
  );
}

function SubmitButton({ status, label }: { status: Status; label: string }) {
  return (
    <button
      type="submit"
      disabled={status === "sending"}
      className="rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 hover:brightness-110 disabled:opacity-60 self-start"
      style={{ backgroundColor: "hsl(45 100% 44%)", color: "hsl(210 65% 10%)", fontFamily: "var(--font-body)" }}
    >
      {status === "sending" ? "Sending..." : label}
    </button>
  );
}

export { BriefForm, QuoteForm };
