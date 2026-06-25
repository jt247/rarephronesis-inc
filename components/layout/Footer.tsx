"use client";

import Link from "next/link";
import { useState } from "react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.8.1v-3.5a6.37 6.37 0 00-.8-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.82a4.84 4.84 0 01-1-.13z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.963-.065-1.19.408-2.285 1.33-3.082.88-.762 2.084-1.2 3.583-1.291.89-.055 1.738.009 2.537.186l.04.008-.002-.055c-.022-.747-.084-1.47-.465-2.015-.33-.473-.91-.731-1.727-.769h-.088c-.795 0-1.792.283-2.376 1.063l-1.57-1.263c.82-1.132 2.263-1.81 3.859-1.81l.14.001c1.476.07 2.617.56 3.394 1.455.675.778 1.056 1.818 1.12 3.065.344.165.67.357.977.574 1.136.804 1.963 1.887 2.39 3.135.595 1.738.466 4.358-1.602 6.39-1.834 1.8-4.074 2.628-7.264 2.65zm-.156-8.086c-.463 0-.895.05-1.287.147-.888.218-1.834.737-1.776 1.793.032.578.32 1.063.81 1.365.513.313 1.172.457 1.86.414 1.074-.058 1.88-.455 2.395-1.18.389-.547.614-1.286.675-2.209a6.625 6.625 0 00-2.677-.33z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/acceptable-use", label: "Acceptable Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

const socials = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: TikTokIcon, href: "#", label: "TikTok" },
  { Icon: ThreadsIcon, href: "#", label: "Threads" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubStatus(res.ok ? "done" : "error");
    } catch {
      setSubStatus("error");
    }
  }

  return (
    <footer
      className="border-t"
      style={{ borderColor: "hsl(210 35% 20%)" }}
      role="contentinfo"
    >
      {/* Newsletter strip */}
      <div
        className="border-b"
        style={{
          backgroundColor: "hsl(210 55% 12%)",
          borderColor: "hsl(210 35% 20%)",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-display font-semibold text-base" style={{ color: "hsl(210 20% 92%)" }}>
              Get occasional insight
            </p>
            <p className="text-sm mt-1" style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}>
              Building products, growing startups, and what we are shipping next.
            </p>
          </div>
          {subStatus === "done" ? (
            <p className="text-sm" style={{ color: "hsl(45 100% 44%)", fontFamily: "var(--font-body)" }}>
              You are subscribed.
            </p>
          ) : (
            <form className="flex gap-3 w-full md:w-auto" onSubmit={handleSubscribe} aria-label="Newsletter signup">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 md:w-64 rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{
                  backgroundColor: "hsl(210 35% 18%)",
                  border: "1px solid hsl(210 35% 20%)",
                  color: "hsl(210 20% 92%)",
                  fontFamily: "var(--font-body)",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={subStatus === "sending"}
                className="rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-150 hover:brightness-110 whitespace-nowrap disabled:opacity-60"
                style={{
                  backgroundColor: "hsl(45 100% 44%)",
                  color: "hsl(210 65% 10%)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-lg font-bold tracking-tight mb-3" style={{ color: "hsl(210 20% 92%)" }}>
              Rare <span style={{ color: "hsl(45 100% 44%)" }}>Phronesis</span>
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
            >
              A product, technical, and growth partner for startups and founders. We advise, build, and grow the systems that take an idea to a working business.
            </p>
            <a
              href="mailto:hello@rarephronesis.com"
              className="inline-flex items-center gap-2 mt-5 text-sm transition-colors duration-150 hover:text-primary"
              style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
            >
              <MailIcon />
              hello@rarephronesis.com
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-display font-semibold text-sm mb-4" style={{ color: "hsl(210 20% 92%)" }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150 hover:text-primary"
                    style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors duration-150 hover:text-primary"
                  style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <p className="font-display font-semibold text-sm mb-4" style={{ color: "hsl(210 20% 92%)" }}>
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150 hover:text-primary"
                    style={{ color: "hsl(210 15% 55%)", fontFamily: "var(--font-body)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social + copyright */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderColor: "hsl(210 35% 20%)" }}
        >
          <nav className="flex items-center gap-5" aria-label="Social media links">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={label}
                className="transition-colors duration-150 hover:text-primary"
                style={{ color: "hsl(210 15% 55%)" }}
              >
                <Icon />
              </a>
            ))}
          </nav>
          <p className="text-xs" style={{ color: "hsl(210 15% 40%)", fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Rare Phronesis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
