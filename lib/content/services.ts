export type ServiceTier = {
  id: "advisory" | "saas" | "websites";
  title: string;
  tagline: string;
  description: string;
  pillars: string[];
};

export type AddOn = {
  id: string;
  title: string;
  description: string;
};

export const serviceTiers: ServiceTier[] = [
  {
    id: "advisory",
    title: "Startup Advisory & Consulting",
    tagline: "Strategic clarity from someone who's been in the room.",
    description:
      "Product strategy, technical advisory, and growth advisory for founders and early-stage startups. We work alongside you to shape what you build, how you build it, and how you take it to market.",
    pillars: ["Product Strategy", "Technical Advisory", "Growth Advisory"],
  },
  {
    id: "saas",
    title: "SaaS & Product Development",
    tagline: "From idea to working product — web, mobile, or both.",
    description:
      "We design and build the actual product. MVP to scale, with an AI-assisted build process that compresses timelines without cutting corners. Web, mobile, or cross-platform.",
    pillars: ["Web Applications", "Mobile Apps", "MVP to Scale", "AI-Assisted Build"],
  },
  {
    id: "websites",
    title: "Business Website Development",
    tagline: "Professional brand websites that actually convert.",
    description:
      "Marketing and brand websites for companies that need to show up credibly and move visitors toward action. Clean, fast, built to last.",
    pillars: ["Brand & Marketing Sites", "Real Estate", "Logistics", "Travel & Hospitality"],
  },
];

export const addOns: AddOn[] = [
  {
    id: "digital-setup",
    title: "Digital Business Setup",
    description:
      "Analytics and integrations, custom email, domain setup, social and digital infrastructure, logo and branding basics.",
  },
  {
    id: "growth",
    title: "Growth Services",
    description:
      "Paid and performance advertising, growth advisory, and campaign strategy for startups ready to scale.",
  },
  {
    id: "training",
    title: "Training & Workshops",
    description:
      "Hands-on workshops for teams and founders — product thinking, growth fundamentals, and execution frameworks.",
  },
];
