"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "hsl(210 65% 10% / 0.92)",
        borderColor: "hsl(210 35% 20%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
          style={{ color: "hsl(210 20% 92%)" }}
        >
          Rare{" "}
          <span style={{ color: "hsl(45 100% 44%)" }}>Phronesis</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  color: active ? "hsl(45 100% 44%)" : "hsl(210 15% 55%)",
                  fontFamily: "var(--font-body)",
                }}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/work-with-us"
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 hover:brightness-110"
            style={{
              backgroundColor: "hsl(45 100% 44%)",
              color: "hsl(210 65% 10%)",
              fontFamily: "var(--font-body)",
            }}
          >
            Work With Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: "hsl(210 20% 92%)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "hsl(210 65% 10%)",
            borderColor: "hsl(210 35% 20%)",
          }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-1"
                style={{
                  color: active ? "hsl(45 100% 44%)" : "hsl(210 15% 55%)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/work-with-us"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-center mt-2"
            style={{
              backgroundColor: "hsl(45 100% 44%)",
              color: "hsl(210 65% 10%)",
              fontFamily: "var(--font-body)",
            }}
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
