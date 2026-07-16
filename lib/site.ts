export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://appstackers.io";

export const APP_URL = "https://app.appstackers.io";
export const CONTACT_EMAIL = "hello@appstackers.io";

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  logo: string;
  color: string;
  glow: string;
};

export const products: Product[] = [
  {
    name: "GroupScout",
    slug: "groupscout",
    tagline: "Find your next 1,000 customers.",
    description:
      "AI that scouts online groups and communities for buying-intent conversations, so you show up exactly where your customers are already asking.",
    features: [
      "Intent detection across communities",
      "Real-time opportunity alerts",
      "Hand-off ready lead summaries",
    ],
    logo: "/logos/groupscout-logo-coloured.svg",
    color: "#5a54be",
    glow: "rgba(90, 84, 190, 0.35)",
  },
  {
    name: "MeetingSync",
    slug: "meetingsync",
    tagline: "Meetings that run themselves.",
    description:
      "Your AI meeting copilot — capture every call, extract the decisions and action items, and sync them straight into your calendar and tools.",
    features: [
      "Automatic notes and summaries",
      "Action items assigned in seconds",
      "Calendar and workflow sync",
    ],
    logo: "/logos/meetingsync-logo-coloured.svg",
    color: "#4c32eb",
    glow: "rgba(76, 50, 235, 0.35)",
  },
  {
    name: "Polyscribe",
    slug: "polyscribe",
    tagline: "Every word. Any language.",
    description:
      "Multilingual AI transcription that turns audio and video into accurate, searchable text — with speakers identified and moments easy to find.",
    features: [
      "Multilingual transcription",
      "Speaker detection built in",
      "Searchable, exportable archives",
    ],
    logo: "/logos/pollyscribe-logo-coloured.svg",
    color: "#fab50a",
    glow: "rgba(250, 181, 10, 0.30)",
  },
  {
    name: "GroupZen",
    slug: "groupzen",
    tagline: "Community management on autopilot.",
    description:
      "Keep your communities healthy and humming — AI-assisted moderation, member insights, and engagement tools that scale with your audience.",
    features: [
      "AI-assisted moderation",
      "Member and engagement insights",
      "Grows with your community",
    ],
    logo: "/logos/groupzen-logo-coloured.svg",
    color: "#39b786",
    glow: "rgba(57, 183, 134, 0.35)",
  },
];

export const faqs = [
  {
    q: "What does Appstackers actually do?",
    a: "Two things, done obsessively well. We build and run our own suite of AI products — GroupScout, MeetingSync, Polyscribe, GroupZen and more on the way — and we build custom AI software for companies that want to ship, not just experiment.",
  },
  {
    q: "Can I try the products before committing?",
    a: "Yes. Every Appstackers product is built to prove its value fast. Head to the app, pick a product, and you’ll be up and running in minutes — no lengthy onboarding calls required.",
  },
  {
    q: "Do you build custom AI solutions?",
    a: "We do. From LLM-powered apps and agents to automation pipelines and data integrations, we take projects from idea to production. The same team that ships our products ships yours.",
  },
  {
    q: "How fast can you take a project from idea to launch?",
    a: "Weeks, not quarters. We prototype early, put working software in your hands fast, and iterate from real feedback. Speed is a feature of everything we build.",
  },
  {
    q: "How do I get in touch?",
    a: "Email us at hello@appstackers.io or jump straight into the app. We read everything and respond fast.",
  },
];
