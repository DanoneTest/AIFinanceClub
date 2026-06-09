export type ResultType = "News" | "Tip" | "Tool" | "Use Case" | "Champion" | "Resource" | "Event" | "FAQ";

export type News = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  date: string;
  image?: string;
};

export const news: News[] = [
  { id: "n1", title: "Talk to My Anything now live across 3 zones", tag: "Initiative", summary: "The conversational Finance AI interface is available to FP&A and Controlling teams in AMEA, AMER and EMEA.", date: "May 2025" },
  { id: "n2", title: "AI Boost Beta launches for Finance", tag: "Learning", summary: "A selected Finance learning pathway is now available to help teams build practical AI confidence.", date: "Jun 2025" },
  { id: "n3", title: "AI Champions community expands", tag: "Community", summary: "More Finance teams are now represented in the AI Champions network.", date: "May 2025" },
  { id: "n4", title: "Use case scorecard introduced", tag: "Explore & Build", summary: "AI initiatives can now be tracked from idea to live impact.", date: "May 2025" },
];

export type Tip = {
  id: string;
  title: string;
  tool: string;
  description: string;
  prompt?: string;
  related?: string[];
};

export const tools = ["Copilot", "Excel", "Power BI", "Power Automate", "Prompting", "Automation"] as const;

export const tips: Tip[] = [
  { id: "t1", title: "Turn variance notes into executive commentary", tool: "Copilot", description: "Transform raw variance notes into a concise executive summary.", prompt: "Rewrite these variance notes into a concise executive summary with key risks and actions.", related: ["Monthly close", "FP&A"] },
  { id: "t2", title: "Generate a first draft of a monthly close summary", tool: "Copilot", description: "Create structured close summaries with key highlights.", prompt: "Create a monthly close summary using the following highlights, organized by revenue, margin, cost, and risk." },
  { id: "t3", title: "Explain movements in a Power BI dashboard", tool: "Power BI", description: "Summarize key drivers in your dashboards.", prompt: "Summarize the main movements by region and identify the top three drivers." },
  { id: "t4", title: "Automate recurring reminder emails", tool: "Power Automate", description: "A simple flow that reminds stakeholders before reporting deadlines." },
  { id: "t5", title: "Draft prompt patterns for analysis", tool: "Prompting", description: "Use role + task + context + format patterns for cleaner outputs.", prompt: "Act as a senior FP&A analyst. Analyze the following data. Highlight 3 insights. Format as bullets." },
  { id: "t6", title: "Excel: clean and reshape datasets", tool: "Excel", description: "Use Copilot in Excel to standardize columns and flag anomalies.", prompt: "Standardize the column headers, infer correct data types, and flag rows with anomalies." },
];

export type Champion = {
  id: string;
  name: string;
  role: string;
  region: string;
  country: string;
  function: string;
  expertise: string[];
};

export const champions: Champion[] = [
  { id: "c1", name: "A. Laurent", role: "Finance Manager", region: "EMEA", country: "France", function: "FP&A", expertise: ["Copilot", "Prompting", "AI Use Cases"] },
  { id: "c2", name: "S. Okafor", role: "Controller", region: "AMER", country: "USA", function: "Controlling", expertise: ["Power BI", "Power Automate"] },
  { id: "c3", name: "M. Tanaka", role: "Senior Analyst", region: "APAC", country: "Japan", function: "Reporting", expertise: ["Python", "Power BI"] },
  { id: "c4", name: "L. Müller", role: "Treasury Lead", region: "EMEA", country: "Germany", function: "Treasury", expertise: ["Power Apps", "Power Automate"] },
  { id: "c5", name: "R. Patel", role: "Tax Analyst", region: "AMER", country: "Canada", function: "Tax", expertise: ["Copilot", "AI Use Cases"] },
  { id: "c6", name: "J. Kim", role: "Audit Manager", region: "APAC", country: "South Korea", function: "Audit", expertise: ["Prompting", "Power Apps"] },
  { id: "c7", name: "E. Rossi", role: "FP&A Lead", region: "EMEA", country: "Italy", function: "FP&A", expertise: ["Copilot", "Power BI"] },
  { id: "c8", name: "C. Silva", role: "Controller", region: "AMER", country: "Brazil", function: "Controlling", expertise: ["Power Automate", "Power Apps"] },
  { id: "c9", name: "N. Wang", role: "Reporting Analyst", region: "APAC", country: "China", function: "Reporting", expertise: ["Python", "AI Use Cases"] },
  { id: "c10", name: "F. Garcia", role: "FP&A Analyst", region: "EMEA", country: "Spain", function: "FP&A", expertise: ["Prompting"] },
];

export const regions = ["EMEA", "AMER", "APAC"];
export const functions = ["FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"];
export const expertiseTags = ["Copilot", "Power BI", "Power Automate", "AI Use Cases", "Prompting", "Python", "Power Apps"];

export type Capability = "Copilot" | "Power Automate" | "Power Apps" | "Python" | "Vibe Coding";
export type Maturity = "Idea" | "Pilot" | "Scaling" | "Live";

export type UseCase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  capability: Capability;
  function: string;
  status: Maturity;
  impact: string;
  owner: string;
};

export const useCases: UseCase[] = [
  { id: "u1", title: "Monthly variance commentary assistant", problem: "Finance teams spend time rewriting variance notes for leadership.", solution: "Copilot helps transform raw notes into concise executive commentary.", capability: "Copilot", function: "FP&A", status: "Pilot", impact: "Faster monthly reporting", owner: "FP&A EMEA" },
  { id: "u2", title: "Automated reporting reminders", problem: "Teams manually chase stakeholders for reporting inputs.", solution: "Power Automate sends reminders and tracks responses.", capability: "Power Automate", function: "Reporting", status: "Live", impact: "Reduced manual follow-up", owner: "Reporting Hub" },
  { id: "u3", title: "Power BI insight summarizer", problem: "Dashboard users need help interpreting key movements.", solution: "Copilot summarizes main drivers and highlights anomalies.", capability: "Copilot", function: "Controlling", status: "Idea", impact: "Faster insight generation", owner: "Controlling AMER" },
  { id: "u4", title: "Forecast data preparation script", problem: "Forecast files require repetitive cleaning.", solution: "Python automates data preparation.", capability: "Python", function: "FP&A", status: "Scaling", impact: "Cleaner inputs and time saved", owner: "FP&A APAC" },
  { id: "u5", title: "Internal Finance knowledge assistant", problem: "Teams struggle to find policies, templates, and past learnings.", solution: "Copilot Q&A over selected internal knowledge sources.", capability: "Copilot", function: "Reporting", status: "Idea", impact: "Faster access to knowledge", owner: "Finance Transformation" },
  { id: "u6", title: "Tax filing app", problem: "Tax filings rely on fragmented spreadsheets.", solution: "Power Apps centralizes tasks and approvals.", capability: "Power Apps", function: "Tax", status: "Pilot", impact: "Centralized tax workflow", owner: "Tax AMER" },
];

export const capabilities = [
  { name: "Copilot" as Capability, what: "Use for content generation, summarization, analysis, Q&A, and decision support.", use: "Variance commentary, summaries, internal Q&A", example: "Monthly variance commentary assistant", tools: ["ChatGPT Enterprise"] },
  { name: "Power Automate" as Capability, what: "Use for repetitive workflows, notifications, approvals, and reporting routines.", use: "Reminders, approvals, status tracking", example: "Automated reporting reminders", tools: ["Power Automate"] },
  { name: "Power Apps" as Capability, what: "Use to build apps and workflows without heavy development.", use: "Centralized data capture and approvals", example: "Tax filing workflow app", tools: ["Power Apps"] },
  { name: "Python" as Capability, what: "Use for data transformation, financial analysis, forecasting, and repeatable scripts.", use: "Data prep, modeling, automation of analysis", example: "Forecast data preparation script", tools: ["Python", "Pandas"] },
  { name: "Vibe Coding" as Capability, what: "Use AI coding tools to prototype simple apps, dashboards, and internal tools quickly.", use: "Rapid prototypes for Finance ideas", example: "Internal calculator prototype", tools: ["Lovable", "Cursor"] },
];

export type Resource = {
  id: string;
  name: string;
  description: string;
};

// 8 Learning platforms
export const resources: Resource[] = [
  { id: "r1", name: "Danone Digital & AI Academy", description: "Company-wide foundation for digital and AI literacy." },
  { id: "r2", name: "Campus X", description: "Cross-functional learning hub for Danone." },
  { id: "r3", name: "LinkedIn Learning", description: "Curated AI, productivity, and business learning content." },
  { id: "r4", name: "DataCamp", description: "Hands-on data and Python learning tracks." },
  { id: "r5", name: "Microsoft Hub", description: "Official Copilot and M365 enablement." },
  { id: "r6", name: "ESI", description: "Executive Skills Institute training paths." },
  { id: "r7", name: "Ad Hoc Trainings", description: "Targeted sessions for teams, tools, or use cases." },
  { id: "r8", name: "Microsoft AI Skill Navigator", description: "Identify the right AI learning by role and level." },
];

export type EventItem = {
  id: string;
  title: string;
  type: string; // FD Call, Training, Mini-Lab…
  description: string;
  date: string; // ISO-like or display
  day: string;
  month: string;
  meta?: string;
};

export const events: EventItem[] = [
  { id: "e1", title: "Finance Directors AI Call #31", type: "FD Call", description: "Teams · 10:00 CET", date: "Jun 5", day: "5", month: "JUN", meta: "Teams · 10:00 CET" },
  { id: "e2", title: "AI Boost — APAC session", type: "Training", description: "Remote · 09:00 SGT", date: "Jun 12", day: "12", month: "JUN", meta: "Remote · 09:00 SGT" },
  { id: "e3", title: "Mini-Lab: Copilot for Forecasting", type: "Mini-Lab", description: "Champions only", date: "Jun 19", day: "19", month: "JUN", meta: "Champions only" },
  { id: "e4", title: "AI Finance Demo Day", type: "Event", description: "See practical use cases from Finance teams.", date: "Jul 18", day: "18", month: "JUL", meta: "Hybrid" },
];

export type Newsletter = { id: string; issue: string; summary: string };
export const newsletters: Newsletter[] = [
  { id: "nl1", issue: "June 2025", summary: "AI Boost Beta & Copilot Tips" },
  { id: "nl2", issue: "May 2025", summary: "Champions Month Highlights" },
  { id: "nl3", issue: "April 2025", summary: "Explore & Build Special" },
];

export type FAQ = { id: string; q: string; a: string };
export const faqs: FAQ[] = [
  { id: "f1", q: "What is AI.finance?", a: "AI.finance is the Finance Transformation hub for AI capabilities, learning, use cases and the Champions community." },
  { id: "f2", q: "Who can use Copilot M365 with internal data?", a: "Anyone with an M365 licence may use internal non-classified data. Confidential or unpublished data is not allowed." },
  { id: "f3", q: "How do I submit an AI idea?", a: "Use the AI.DEA form on Explore & Build. The AI Gate Committee reviews ideas every ~3 months." },
  { id: "f4", q: "Can I use public ChatGPT or Gemini for Finance data?", a: "No. Public ChatGPT, Gemini, or any unapproved tool must never receive Danone data." },
  { id: "f5", q: "How do I become an AI Champion?", a: "Express interest from the AI Champions page. You don't need to be technical — curiosity and willingness to share is what matters." },
  { id: "f6", q: "Where can I learn AI for Finance?", a: "Start with AI Boost on the Upskill page, then explore 8 partner platforms including LinkedIn Learning, DataCamp and the Microsoft AI Skill Navigator." },
];

// Unified search index
export type SearchItem = {
  id: string;
  type: ResultType;
  title: string;
  description: string;
  meta?: string;
  href: string;
};

export const searchIndex: SearchItem[] = [
  ...faqs.map(f => ({ id: f.id, type: "FAQ" as const, title: f.q, description: f.a, meta: "FAQ", href: "/" })),
  ...news.map(n => ({ id: n.id, type: "News" as const, title: n.title, description: n.summary, meta: n.tag, href: "/discover" })),
  ...tips.map(t => ({ id: t.id, type: "Tip" as const, title: t.title, description: t.description, meta: t.tool, href: "/upskill" })),
  ...tools.map(t => ({ id: `tool-${t}`, type: "Tool" as const, title: t, description: `Tool used across Finance AI tips and workflows.`, meta: "Tool", href: "/upskill" })),
  ...useCases.map(u => ({ id: u.id, type: "Use Case" as const, title: u.title, description: u.problem, meta: `${u.capability} · ${u.status}`, href: "/explore" })),
  ...resources.map(r => ({ id: r.id, type: "Resource" as const, title: r.name, description: r.description, meta: "Learning", href: "/upskill" })),
  ...events.map(e => ({ id: e.id, type: "Event" as const, title: e.title, description: e.description, meta: `${e.type} · ${e.date}`, href: "/" })),
  ...champions.map(c => ({ id: c.id, type: "Champion" as const, title: c.name, description: `${c.role} · ${c.function} · ${c.region}`, meta: c.expertise.join(", "), href: "/champions" })),
];
