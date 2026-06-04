export type ResultType = "News" | "Tip" | "Tool" | "Use Case" | "Champion" | "Resource" | "Event";

export type News = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  date: string;
};

export const news: News[] = [
  { id: "n1", title: "AI Boost Beta launches for Finance", tag: "Learning", summary: "A selected Finance learning pathway is now available to help teams build practical AI confidence.", date: "Jun 2025" },
  { id: "n2", title: "New Tip of the Month available", tag: "Tips & Tricks", summary: "This month's tip shows how to use Copilot to summarize variance commentary.", date: "Jun 2025" },
  { id: "n3", title: "AI Champions community expands", tag: "Community", summary: "More Finance teams are now represented in the AI Champions network.", date: "May 2025" },
  { id: "n4", title: "Use case scorecard introduced", tag: "Explore & Build", summary: "AI initiatives can now be tracked from idea to live impact.", date: "May 2025" },
];

export type Tip = {
  id: string;
  title: string;
  tool: string;
  description: string;
  prompt?: string;
};

export const tools = ["Copilot", "Excel", "Power BI", "Power Automate", "Prompting", "Automation"] as const;

export const tips: Tip[] = [
  { id: "t1", title: "Turn variance notes into executive commentary", tool: "Copilot", description: "Transform raw variance notes into a concise executive summary.", prompt: "Rewrite these variance notes into a concise executive summary with key risks and actions." },
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
  function: string;
  expertise: string[];
};

export const champions: Champion[] = [
  { id: "c1", name: "A. Laurent", role: "Finance Manager", region: "EMEA", function: "FP&A", expertise: ["Copilot", "Prompting", "AI Use Cases"] },
  { id: "c2", name: "S. Okafor", role: "Controller", region: "AMER", function: "Controlling", expertise: ["Power BI", "Automation"] },
  { id: "c3", name: "M. Tanaka", role: "Senior Analyst", region: "APAC", function: "Reporting", expertise: ["Python", "Power BI"] },
  { id: "c4", name: "L. Müller", role: "Treasury Lead", region: "EMEA", function: "Treasury", expertise: ["Low-Code", "Automation"] },
  { id: "c5", name: "R. Patel", role: "Tax Analyst", region: "AMER", function: "Tax", expertise: ["Copilot", "AI Use Cases"] },
  { id: "c6", name: "J. Kim", role: "Audit Manager", region: "APAC", function: "Audit", expertise: ["Prompting", "Low-Code"] },
];

export const regions = ["EMEA", "AMER", "APAC"];
export const functions = ["FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"];
export const expertiseTags = ["Copilot", "Power BI", "Automation", "AI Use Cases", "Prompting", "Python", "Low-Code"];

export type Capability = "AI" | "Automation" | "Low-Code" | "Python" | "Vibe Coding";
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
  { id: "u1", title: "Monthly variance commentary assistant", problem: "Finance teams spend time rewriting variance notes for leadership.", solution: "AI helps transform raw notes into concise executive commentary.", capability: "AI", function: "FP&A", status: "Pilot", impact: "Faster monthly reporting", owner: "FP&A EMEA" },
  { id: "u2", title: "Automated reporting reminders", problem: "Teams manually chase stakeholders for reporting inputs.", solution: "Automation sends reminders and tracks responses.", capability: "Automation", function: "Reporting", status: "Live", impact: "Reduced manual follow-up", owner: "Reporting Hub" },
  { id: "u3", title: "Power BI insight summarizer", problem: "Dashboard users need help interpreting key movements.", solution: "AI summarizes main drivers and highlights anomalies.", capability: "AI", function: "Controlling", status: "Idea", impact: "Faster insight generation", owner: "Controlling AMER" },
  { id: "u4", title: "Forecast data preparation script", problem: "Forecast files require repetitive cleaning.", solution: "Python automates data preparation.", capability: "Python", function: "FP&A", status: "Scaling", impact: "Cleaner inputs and time saved", owner: "FP&A APAC" },
  { id: "u5", title: "Internal Finance knowledge assistant", problem: "Teams struggle to find policies, templates, and past learnings.", solution: "AI Q&A over selected internal knowledge sources.", capability: "AI", function: "Reporting", status: "Idea", impact: "Faster access to knowledge", owner: "Finance Transformation" },
  { id: "u6", title: "Tax filing low-code workflow", problem: "Tax filings rely on fragmented spreadsheets.", solution: "Low-code app centralizes tasks and approvals.", capability: "Low-Code", function: "Tax", status: "Pilot", impact: "Centralized tax workflow", owner: "Tax AMER" },
];

export const capabilities = [
  { name: "AI" as Capability, what: "Use for content generation, summarization, analysis, Q&A, and decision support.", use: "Variance commentary, summaries, internal Q&A", example: "Monthly variance commentary assistant", tools: ["Copilot", "ChatGPT Enterprise"] },
  { name: "Automation" as Capability, what: "Use for repetitive workflows, notifications, approvals, and reporting routines.", use: "Reminders, approvals, status tracking", example: "Automated reporting reminders", tools: ["Power Automate"] },
  { name: "Low-Code" as Capability, what: "Use to build apps and workflows without heavy development.", use: "Centralized data capture and approvals", example: "Tax filing workflow app", tools: ["Power Apps"] },
  { name: "Python" as Capability, what: "Use for data transformation, financial analysis, forecasting, and repeatable scripts.", use: "Data prep, modeling, automation of analysis", example: "Forecast data preparation script", tools: ["Python", "Pandas"] },
  { name: "Vibe Coding" as Capability, what: "Use AI coding tools to prototype simple apps, dashboards, and internal tools quickly.", use: "Rapid prototypes for Finance ideas", example: "Internal calculator prototype", tools: ["Lovable", "Cursor"] },
];

export type Resource = {
  id: string;
  name: string;
  description: string;
};

export const resources: Resource[] = [
  { id: "r1", name: "DDAI Academy", description: "General AI and data learning resources." },
  { id: "r2", name: "LinkedIn Learning", description: "Curated AI, productivity, and business learning content." },
  { id: "r3", name: "AI Skill Navigator", description: "A guide to identify the right AI learning resources by role and level." },
  { id: "r4", name: "Ad Hoc Trainings", description: "Targeted sessions for teams, tools, or specific use cases." },
  { id: "r5", name: "AI Sandbox", description: "A safe environment to experiment with AI concepts and prototypes." },
];

export type Event = {
  id: string;
  title: string;
  type: "Upcoming" | "Past";
  description: string;
  date: string;
  materials?: string[];
};

export const events: Event[] = [
  { id: "e1", title: "AI Finance Demo Day", type: "Upcoming", description: "See practical use cases from Finance teams.", date: "Jul 18, 2025" },
  { id: "e2", title: "Copilot for Finance Session", type: "Past", description: "Hands-on session on Copilot use in daily Finance work.", date: "May 22, 2025", materials: ["Recording", "Slides", "Key takeaways"] },
  { id: "e3", title: "AI Champion Showcase", type: "Past", description: "Champions present use cases, learnings, and next steps.", date: "Apr 9, 2025", materials: ["Use cases", "Learnings", "Next steps"] },
];

export type Newsletter = {
  id: string;
  issue: string;
  summary: string;
};

export const newsletters: Newsletter[] = [
  { id: "nl1", issue: "June 2025", summary: "AI Boost Beta & Copilot Tips" },
  { id: "nl2", issue: "May 2025", summary: "Champions Month Highlights" },
  { id: "nl3", issue: "April 2025", summary: "Explore & Build Special" },
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
  ...news.map(n => ({ id: n.id, type: "News" as const, title: n.title, description: n.summary, meta: n.tag, href: "/understand" })),
  ...tips.map(t => ({ id: t.id, type: "Tip" as const, title: t.title, description: t.description, meta: t.tool, href: "/understand" })),
  ...tools.map(t => ({ id: `tool-${t}`, type: "Tool" as const, title: t, description: `Tool used across Finance AI tips and workflows.`, meta: "Tool", href: "/understand" })),
  ...useCases.map(u => ({ id: u.id, type: "Use Case" as const, title: u.title, description: u.problem, meta: `${u.capability} · ${u.status}`, href: "/explore" })),
  ...resources.map(r => ({ id: r.id, type: "Resource" as const, title: r.name, description: r.description, meta: "Learning", href: "/upskill" })),
  ...events.map(e => ({ id: e.id, type: "Event" as const, title: e.title, description: e.description, meta: `${e.type} · ${e.date}`, href: "/explore" })),
  ...champions.map(c => ({ id: c.id, type: "Champion" as const, title: c.name, description: `${c.role} · ${c.function} · ${c.region}`, meta: c.expertise.join(", "), href: "/champions" })),
];
