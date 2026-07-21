export const profile = {
  name: "Mohamed Gaber",
  role: "Mobile App Developer",
  email: "jabrmhmd890@gmail.com",
  linkedin: "", // TODO: add LinkedIn profile URL
  location: "6th of October, Giza Governorate, Egypt",
  resume: "/Mohamed-Gaber-Resume.pdf",
  summary:
    "Mobile App Developer building cross-platform iOS and Android apps with React Native, Expo, and TypeScript. I ship production apps end-to-end: clean native UI and satisfying UX, Supabase/Postgres backends, Clerk auth, and RevenueCat monetization, with a focus on performance andreliability.",
};

/**
 * `placeholder` renders a dimmed, non-clickable badge that reserves the slot
 * without claiming anything. Hinty is built cross-platform but has no Play
 * listing yet, so it must not link out — swap in a `live` url on release.
 */
type Availability =
  | { status: "live"; url: string }
  | { status: "placeholder" }
  | { status: "none" };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  icon: string;
  accent: string;
  stack: string[];
  highlights: string[];
  ios: Availability;
  android: Availability;
};

export const projects: Project[] = [
  {
    slug: "wanas",
    name: "Wanas",
    tagline: "Dinner with strangers",
    category: "Social Networking",
    icon: "/apps/wanas.jpg",
    accent: "#e0803a",
    stack: ["React Native", "Expo", "Supabase", "NativeWind"],
    highlights: [
      "Built and shipped a cross-platform social dining app that connects strangers over shared meals.",
      "Developed a matching algorithm that automatically groups users into dinner parties, forming compatible tables without manual selection.",
      "Integrated Supabase for authentication and file storage, handling signup/login and uploaded profile images.",
      "Styled the full UI with NativeWind.",
    ],
    ios: {
      status: "live",
      url: "https://apps.apple.com/eg/app/wanas-group-events-in-egypt/id6759305143",
    },
    android: {
      status: "live",
      url: "https://play.google.com/store/apps/details?id=com.gaber.wanas",
    },
  },
  {
    slug: "hinty",
    name: "Hinty",
    tagline: "AI guide and helper for video games",
    category: "Entertainment",
    icon: "/apps/hinty.jpg",
    accent: "#7c5cff",
    stack: ["React Native", "Expo Router", "Supabase", "Deno", "RevenueCat", "Clerk"],
    highlights: [
      "Built and shipped a cross-platform AI gaming assistant in React Native (Expo Router, React 19, Reanimated), backed by a Supabase/Deno serverless backend and Postgres.",
      "Integrated the Perplexity Sonar LLM through a secure edge-function proxy with multimodal image input, per-game context injection, and prompt guardrails that keep responses on-topic.",
      "Designed a freemium monetization system using RevenueCat subscriptions and a server-enforced usage limit, backed by an atomic Postgres RPC and row-level security, so quotas can't be bypassed client-side.",
      "Implemented authentication with Clerk (Apple & Google sign-in) with server-side JWT verification, plus an IGDB game database integration using cached Twitch OAuth tokens for search, trending games, and detail lookups.",
    ],
    ios: {
      status: "live",
      url: "https://apps.apple.com/eg/app/hinty-ai-game-guides-hints/id6773489237",
    },
    android: { status: "placeholder" },
  },
  {
    slug: "koligo",
    name: "Koligo",
    tagline: "Personal CRM and social network manager",
    category: "Productivity",
    icon: "/apps/koligo.jpg",
    accent: "#3aa0e0",
    stack: ["React Native", "SQLite", "Supabase", "RevenueCat"],
    highlights: [
      "Built and shipped a cross-platform personal-CRM app in React Native (Expo Router, React 19, Reanimated, NativeWind), backed by a local-first SQLite store synced to a Supabase/Postgres backend.",
      "Implemented Apple & Google sign-in and a freemium model using RevenueCat subscriptions with a server-verified “Plus” entitlement to gate premium features.",
    ],
    ios: {
      status: "live",
      url: "https://apps.apple.com/eg/app/contacts-koligo/id6748540215",
    },
    android: {
      status: "live",
      url: "https://play.google.com/store/apps/details?id=com.anonymous.Koligo",
    },
  },
  {
    slug: "candlestick-ai",
    name: "Candlestick AI",
    tagline: "AI trading chart scanner",
    category: "Finance",
    icon: "/apps/candlestick.jpg",
    accent: "#33b57a",
    stack: ["React Native", "Expo Router", "Supabase", "Deno", "OpenAI"],
    highlights: [
      "Built and shipped a cross-platform AI trading assistant in React Native (Expo Router, React 19), backed by a Supabase/Deno serverless backend with EAS builds and OTA updates.",
      "Integrated OpenAI GPT-4o vision through a secure edge-function proxy to analyse user-captured chart screenshots, returning structured insights: trend, support/resistance, a strategic game plan, and a seven-section deep dive on price action, momentum, and risk/reward.",
    ],
    ios: {
      status: "live",
      url: "https://apps.apple.com/eg/app/candlestick-ai-chart-scanner/id6753019322",
    },
    android: {
      status: "live",
      url: "https://play.google.com/store/apps/details?id=com.gaber.stockai",
    },
  },
];

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { label: "Libraries/frameworks & tools", items: ["React Native", "Expo", "EAS", "NativeWind", "Redux", "Reanimated"] },
  { label: "Backend & Data", items: ["Supabase", "PostgreSQL", "SQLite", "REST APIs", "Clerk"] },
  { label: "AI & Delivery", items: ["LLM/AI Integration", "RevenueCat", "Git", "App Store Deployment"] },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Arab Academy for Science and Technology",
  start: "Jan 2020",
  end: "Mar 2024",
};
