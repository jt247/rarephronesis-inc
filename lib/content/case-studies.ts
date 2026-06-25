export type CaseStudy = {
  id: string;
  name: string;
  category: "advisory" | "saas" | "websites";
  oneLiner: string;
  pillars?: string[];
  outcome?: string;
  industry?: string;
  url?: string; // PLACEHOLDER — to be provided by Joshua
};

export const caseStudies: CaseStudy[] = [
  // ── Advisory ──────────────────────────────────────────────────
  {
    id: "easycare",
    name: "EasyCare",
    category: "advisory",
    oneLiner: "Healthcare platform advisory across product, technical, and growth.",
    pillars: ["Product Strategy", "Technical Advisory", "Growth Advisory"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "rentbook",
    name: "RentBook",
    category: "advisory",
    oneLiner: "Property rental product advisory — from concept to market-ready.",
    pillars: ["Product Strategy", "Technical Advisory"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "foodbridge",
    name: "FoodBridge",
    category: "advisory",
    oneLiner: "Food-tech advisory covering product, technical, and growth strategy.",
    pillars: ["Product Strategy", "Technical Advisory", "Growth Advisory"],
    url: undefined, // PLACEHOLDER
  },

  // ── SaaS & Product ────────────────────────────────────────────
  {
    id: "logpal-ai",
    name: "LogPal AI",
    category: "saas",
    oneLiner: "AI-powered mobile logging app — designed and built end-to-end.",
    pillars: ["Mobile App", "AI Integration"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "product-nerve-ai",
    name: "Product Nerve AI",
    category: "saas",
    oneLiner: "AI product intelligence platform — mobile and web.",
    pillars: ["Mobile App", "Web App", "AI Integration"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "referlytics",
    name: "Referlytics",
    category: "saas",
    oneLiner: "Referral analytics platform — mobile and web.",
    pillars: ["Mobile App", "Web App"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "productverse-hq",
    name: "ProductVerseHQ",
    category: "saas",
    oneLiner: "Product community and knowledge platform.",
    pillars: ["Web App"],
    url: undefined, // PLACEHOLDER
  },
  {
    id: "product-slice-hq",
    name: "Product Slice HQ",
    category: "saas",
    oneLiner: "Product thinking publication and writing platform.",
    pillars: ["Web App"],
    url: undefined, // PLACEHOLDER
  },

  // ── Business Websites ─────────────────────────────────────────
  {
    id: "orabel-homes",
    name: "Orabel Homes & Properties",
    category: "websites",
    oneLiner: "Real estate brand website built for credibility and lead generation.",
    industry: "Real Estate",
    url: undefined, // PLACEHOLDER
  },
  {
    id: "tianah-logistics",
    name: "Tianah Global Logistics",
    category: "websites",
    oneLiner: "Logistics company brand site — professional and conversion-focused.",
    industry: "Logistics",
    url: undefined, // PLACEHOLDER
  },
  {
    id: "rijobos",
    name: "Rijobos Multi Concept",
    category: "websites",
    oneLiner: "Travel and hospitality brand website.",
    industry: "Travel",
    url: undefined, // PLACEHOLDER
  },
  {
    id: "cozy-evans",
    name: "Cozy Evans Cleaning Services",
    category: "websites",
    oneLiner: "Cleaning services brand site — local, professional, trust-first.",
    industry: "Cleaning Services",
    url: undefined, // PLACEHOLDER
  },
];

export function getCaseStudiesByCategory(category: CaseStudy["category"]) {
  return caseStudies.filter((c) => c.category === category);
}
