"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

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

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "inquiry" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{ backgroundColor: "hsl(210 45% 16%)", border: "1px solid hsl(210 35% 22%)" }}
      >
        <p className="font-display font-semibold mb-2" style={{ color: "hsl(210 20% 92%)" }}>
          Message received
        </p>
        <p className="text-sm" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
          We will get back to you within 1 to 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            style={inputStyle}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
            Email
          </label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            style={inputStyle}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
          Message
        </label>
        <textarea
          required
          rows={6}
          placeholder="What is on your mind?"
          style={{ ...inputStyle, resize: "vertical" }}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>
      {status === "error" && (
        <p className="text-sm" style={{ color: "hsl(0 70% 60%)", fontFamily: "var(--font-body)" }}>
          Something went wrong. Please try again or email us directly at hello@rarephronesis.com.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 hover:brightness-110 disabled:opacity-60 self-start"
        style={{
          backgroundColor: "hsl(45 100% 44%)",
          color: "hsl(210 65% 10%)",
          fontFamily: "var(--font-body)",
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
