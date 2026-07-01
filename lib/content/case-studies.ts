export type CaseStudy = {
  id: string;
  name: string;
  category: "advisory" | "saas" | "websites";
  tags: string[];
  body: string;
  url?: string;
  industry?: string;
};

export const caseStudies: CaseStudy[] = [
  // Advisory
  {
    id: "ezzycare",
    name: "EzzyCare",
    category: "advisory",
    tags: ["Product", "Technical", "Growth"],
    body: "Helping an established healthcare SaaS platform rebuild and expand into a full enterprise offering.",
    url: "https://ezzycare.com",
  },
  {
    id: "rentbook",
    name: "RentBook",
    category: "advisory",
    tags: ["Product", "Technical"],
    body: "Building a first of its kind, end to end property rental platform from the ground up.",
    url: undefined,
  },
  {
    id: "foodbridgeng",
    name: "FoodBridgeNG",
    category: "advisory",
    tags: ["Product", "Technical", "Growth"],
    body: "An agri tech platform connecting consumers directly to producers for fairer pricing.",
    url: "https://foodbridgeng.com",
  },

  // SaaS & Product
  {
    id: "product-nerve-ai",
    name: "Product Nerve AI",
    category: "saas",
    tags: ["Mobile and Web"],
    body: "A venture intelligence platform helping founders and startups validate, build, and scale their businesses.",
    url: "https://productnerve.com",
  },
  {
    id: "logpal-ai",
    name: "LogPal AI",
    category: "saas",
    tags: ["Mobile"],
    body: "A personal productivity companion that captures meetings by voice, online or offline, and turns them into summaries and reports automatically.",
    url: undefined,
  },
  {
    id: "bizpulse",
    name: "BizPulse",
    category: "saas",
    tags: ["Mobile"],
    body: "An AI business diagnostics tool giving small businesses a regular health check before small problems become big ones.",
    url: undefined,
  },
  {
    id: "attribub",
    name: "AttriHub",
    category: "saas",
    tags: ["Web"],
    body: "Attribution and analytics platform for growth teams.",
    url: "https://attrihub.com",
  },
  {
    id: "planitics-ai",
    name: "Planitics AI",
    category: "saas",
    tags: ["Mobile and Web"],
    body: "AI planning and execution platform for startups.",
    url: undefined,
  },
  {
    id: "product-slice-hq",
    name: "Product Slice HQ",
    category: "saas",
    tags: ["Web"],
    body: "Product thinking publication and writing platform.",
    url: undefined,
  },
  {
    id: "productverse-hq",
    name: "ProductVerseHQ",
    category: "saas",
    tags: ["Web"],
    body: "Product community and knowledge platform.",
    url: undefined,
  },
  // Business Websites
  {
    id: "orabel-homes",
    name: "Orabel Homes and Properties",
    category: "websites",
    tags: ["Real Estate"],
    body: "A property rental, sales, and leasing company. We built their website and led a full digital setup.",
    industry: "Real Estate",
    url: "https://orabelhomeproperties.com",
  },
  {
    id: "tianah-logistics",
    name: "Tianah Global Logistics",
    category: "websites",
    tags: ["Logistics"],
    body: "Moving goods between Nigeria, Canada, the UK, and beyond. We designed their site and digital infrastructure.",
    industry: "Logistics",
    url: "https://tianahglobalhq.com",
  },
  {
    id: "rejobos",
    name: "Rejobos Multi Concept Limited",
    category: "websites",
    tags: ["Travel and Visa Services"],
    body: "Visa processing for individuals and corporate clients. We built their site and supported their full digital setup.",
    industry: "Travel and Visa Services",
    url: "https://rejobosmcl.com",
  },
  {
    id: "cozyhavens",
    name: "Cozyhavens Cleaning Services",
    category: "websites",
    tags: ["Construction Cleaning and Home Management"],
    body: "A company offering heavy duty and professional construction cleaning and home management services. We built their website and supported their digital setup.",
    industry: "Construction Cleaning and Home Management",
    url: "https://cosyhaven.com",
  },
];

export function getCaseStudiesByCategory(category: CaseStudy["category"]) {
  return caseStudies.filter((c) => c.category === category);
}
