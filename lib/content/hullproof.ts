export const BUY_URL =
  "https://buy.polar.sh/polar_cl_QBorXMBiEvjQ9H6PFb0LDoD371YBsL83gYWrS4dOGuh";
export const FREE_URL = "https://github.com/jt247/hullproof-free";
export const SAMPLE_REPORT_URL =
  "https://github.com/jt247/hullproof-free/blob/main/docs/SAMPLE-AUDIT-REPORT.md";
export const DEMO_URL = "https://github.com/jt247/hullproof-demo";

export const SITE_URL = "https://rarephronesis.com";
export const PAGE_PATH = "/hullproof";
export const SHARE_IMAGE = "/images/hullproof-pro.png";
export const SHARE_IMAGE_ALT =
  "Hullproof Pro, a secure development standard for software built with AI coding tools.";

export const META_TITLE = "Hullproof, a secure development standard for AI built apps";
export const META_DESCRIPTION =
  "A written security standard, rule files for 15 AI coding tools and a read only audit that ends in a release verdict. Free edition on GitHub.";

export const hero = {
  title: "A secure development standard for software built with AI coding tools",
  lead: "Hullproof gives your AI coding tool the security rules to follow while it builds, a checklist to review the result, and a release gate that shows what is still open before you ship.",
  primary: "Get Hullproof Pro",
  secondary: "Start with the free edition",
  priceLine: "16.50 USD, taxes included. One time purchase. Delivered as a zip.",
  launchLine: "The first 500 buyers pay 13.25 USD with the code FIRST500.",
};

export const problem = {
  title: "AI tools build fast and skip the parts nobody asked for",
  paragraphs: [
    "AI coding tools write working software quickly. They also skip the parts that are easy to forget, such as who may read a row, what happens when a payment webhook is sent twice, and where a key ends up. Those gaps are easy to miss in review and costly to find after launch.",
    "Hullproof turns those parts into written requirements that your tool can follow and that you can check.",
  ],
};

export const parts = {
  title: "Three parts that work together",
  items: [
    {
      title: "A written standard",
      body: "Requirements with IDs, a severity and a source for each, grouped by area such as authentication, APIs, databases, AI features, infrastructure and privacy. Every requirement says what to do and how to check it.",
    },
    {
      title: "Instructions for your AI tool",
      body: "Rule files and an installer for fifteen AI tools, so the tool follows the standard while it writes code.",
    },
    {
      title: "A release gate",
      body: "A read only audit that reviews your own project, writes a report, and ends with a clear verdict: not ready, ready with accepted risk, or ready.",
    },
  ],
};

export const steps = {
  title: "From download to a release verdict",
  items: [
    "Download the kit and copy it into your project.",
    "Run the installer for your AI tool. It shows what it would change first.",
    "Build as usual. The rules are in place for your tool.",
    "Before a release, run the audit. It reads your project and writes a report.",
    "Fix what the report lists, run it again, and decide with the verdict in front of you.",
  ],
};

export const tools = {
  title: "Fifteen AI tools, in the app, the terminal or VS Code",
  intro:
    "Hullproof runs in the tool you already use. Seven tools can hold the audit to read only through hooks or settings, with limits such as trusting the project folder first. The other eight take the rules and the audit prompt as advice only. Each tool has its own page in the kit that says which applies.",
  enforce: {
    title: "Can enforce a read only audit (with limits)",
    items: [
      "Claude Code",
      "Codex",
      "Antigravity",
      "Gemini CLI",
      "Cursor",
      "Windsurf",
      "GitHub Copilot",
    ],
  },
  advice: {
    title: "Rules and prompts as advice",
    items: ["Lovable", "Replit", "Bolt", "Emergent", "v0", "ChatGPT", "Claude.ai", "Gemini app"],
  },
};

export const compare = {
  title: "Start free. Add Pro when you need the rest.",
  caption: "What each edition includes",
  rows: [
    {
      area: "Requirements",
      free: "Every BLOCKER and CRITICAL requirement, 110 in all",
      pro: "All 655 requirements, adding every HIGH, MEDIUM and LOW",
    },
    {
      area: "Release audit",
      free: "A pre launch checklist run in your AI tool",
      pro: "A full audit with evidence and an independent verification step",
    },
    {
      area: "API review",
      free: "The API requirements that are BLOCKER or CRITICAL",
      pro: "A review of your endpoints against the whole API standard",
    },
    {
      area: "Threat model",
      free: "A template you fill in",
      pro: "A threat model built with you from your repository",
    },
    {
      area: "Agents",
      free: "A read only pre launch auditor",
      pro: "Further agents that review, hunt, check coverage and try to disprove findings",
    },
    {
      area: "CI and tooling",
      free: "Not included",
      pro: "A machine readable requirements file and a CI gate example",
    },
    {
      area: "AI tool files",
      free: "Rules, prompts and installer for fifteen tools, scoped to the free requirements",
      pro: "The same tools with the full requirement set and the full audit prompt",
    },
    {
      area: "Templates and checklists",
      free: "Audit report, stage record, accepted risk, threat model, breach runbook",
      pro: "The same, plus incident, ownership, inventory and policy templates and further checklists",
    },
    {
      area: "Price",
      free: "Free, open source",
      pro: "16.50 USD, one time",
    },
  ],
  freeButton: "Get the free edition",
  proButton: "Get Hullproof Pro",
};

export const tryIt = {
  title: "See what an audit looks like",
  body: "The free edition is public, so you can read everything it contains. A sample audit report shows the format, and a small deliberately vulnerable demo app lets you run an audit on something safe.",
  sample: "Read the sample report",
  demo: "Open the demo app",
};

export const limits = {
  title: "Honest limits",
  items: [
    "It does not make an app secure, and it does not certify compliance. It checks your project against a written standard and tells you what it finds.",
    "It reviews code and files. Some checks need a dashboard export or a live test, and the report marks those instead of guessing.",
    "It does not replace a penetration test, a review by people, or legal advice.",
    "Outside the seven tools that can hold the audit to read only, the rules are advice. Keep code review, secret scanning and your release gate in place.",
    "Running an audit uses your AI tool, so cost and results depend on the model and the size of your project. A more capable model gives better reviews.",
    "It contains no exploit code and no attack tools. The audit reviews your own project.",
  ],
};

export const licence = {
  title: "Licence and terms",
  body: "The free edition uses Apache 2.0 for code and CC BY SA 4.0 for documentation. Hullproof Pro is licensed to a person, or to a company and its employees and contractors, for use on their own projects and on client projects they build or review. The files may not be redistributed, resold or placed in a public repository. Updates released to you are covered. All sales are final once the files are delivered, subject to the checkout provider's rules and applicable law. The full licence is inside the zip.",
};

export const faq = {
  title: "Questions",
  items: [
    {
      q: "Do I need Claude Code?",
      a: "No. Hullproof has a folder for fifteen AI tools. The installer places the right files for the one you use.",
    },
    {
      q: "Does Hullproof send my code anywhere?",
      a: "Hullproof is a set of files. An audit runs inside your AI tool, so your code goes wherever that tool sends it, under that tool's terms. Hullproof adds no service of its own.",
    },
    {
      q: "Will it make my app secure?",
      a: "No tool can promise that. Hullproof gives your AI tool clear rules and gives you a report and a verdict, so you know what is open before you release.",
    },
    {
      q: "Can my team use it?",
      a: "A company purchase covers the company's employees and contractors. A personal purchase covers one person.",
    },
    {
      q: "How do updates arrive?",
      a: "We replace the file in your customer portal, and the update is covered by your licence.",
    },
    {
      q: "What if I want a refund?",
      a: "Sales are final once the files are delivered, subject to the checkout provider's rules and applicable law. Read the free edition first to see what you are buying.",
    },
    {
      q: "Where do I get help?",
      a: "Open an issue on the free repository on GitHub.",
    },
  ],
};

export const closing = {
  title: "Start with the free edition",
  lead: "Read it, try it on the demo app, then add Pro when you want the rest.",
  small: "Sold by Rare Phronesis Limited. Digital download.",
};
