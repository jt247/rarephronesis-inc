import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rare Phronesis — Product, Technical & Growth Partner for Startups",
    template: "%s | Rare Phronesis",
  },
  description:
    "Rare Phronesis is a product, technical, and growth partner for startups and founders — we advise, build, and grow the systems that take an idea to a working business.",
  keywords: [
    "startup consulting",
    "startup advisory",
    "MVP development",
    "product strategy consultant",
    "technical advisory for founders",
    "SaaS product development",
    "business website development",
    "growth advisory for startups",
  ],
  authors: [{ name: "Rare Phronesis" }],
  creator: "Rare Phronesis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rarephronesis.com",
    siteName: "Rare Phronesis",
    title: "Rare Phronesis — Product, Technical & Growth Partner for Startups",
    description:
      "We advise, build, and grow the systems that take an idea to a working business.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Phronesis — Product, Technical & Growth Partner for Startups",
    description:
      "We advise, build, and grow the systems that take an idea to a working business.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
