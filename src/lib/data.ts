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
  { id: "t1", title: "Efficient prompt engineering", tool: "Copilot", description: "Summarize email threads and save frequently used prompts.", prompt: "Can you summarize this email thread (…) in 3 key bullet points and the next steps, it should be summarized in a simple way to be shared with my team.", related: ["Copilot M365", "Outlook", "Co-built with Rodolphe Destremau"] },
  { id: "t2", title: "Customize your own financial podcast with Copilot Notebooks", tool: "Copilot", description: "Create a Notebook on your topics, add .ppt/.pdf files, then generate and customize the tone and length of your own podcast. Save to OneDrive for on-the-way learning.", related: ["Copilot Notebook", "Co-built with Amandine Motte"] },
  { id: "t3", title: "In-depth analysis with Copilot Analyst", tool: "Copilot", description: "Use Copilot Analyst to monitor trends and specific KPIs.", prompt: "Can you deepdive on Gross Margin in AOP 2026 by category and by month and highlight trend versus RF10 focusing Net Sales, Materials and Logistics evolution?", related: ["Copilot Analyst", "Co-built with Monica Crisci"] },
  { id: "t4", title: "Personalize Copilot Chat outputs", tool: "Copilot", description: "Personalize in Chat settings the output format that best suits you and your way of communicating.", prompt: "Keep the answers short and straight-forward like one would show to the finance board.", related: ["Copilot Chat M365", "Co-built with Srikar Mandyam"] },
  { id: "t5", title: "Prompt efficiency with Prompt Coach Assistant", tool: "Prompting", description: "Use Prompt Coach to help you improve a complex prompt.", prompt: "Generate a prompt to help financial auditors check compliance of a supplier contract with policies. The end product should allow to fill a testing sheet similar to this one : (…).", related: ["Prompt Coach", "Co-built with Patrick Leva"] },
  { id: "t6", title: "Have Copilot pre-writing your emails in Outlook", tool: "Copilot", description: "Set personal instructions on Copilot Outlook and have Copilot pre-write your emails in your own style.", prompt: "Review a representative sample of emails from My Sent Items and produce a single, cohesive block of Custom Instructions to give to Outlook that accurately reflects how I naturally write emails. The output must be written as if it were the Custom Instructions for the draft instructions itself, not an analysis or explanation.", related: ["Copilot Outlook"] },
  { id: "t7", title: "Edit with Copilot for Brand Margins Drivers Analysis", tool: "Excel", description: "Test the new Excel Agent: Edit with Copilot and prepare a Brand Margin Drivers Analysis.", prompt: "Create a 10-top Brand Margin Drivers tab: 2025 vs RF 2026, by Brand, sorted by 2025 NetSales. Compute NS/kg, COGS/kg, Margin%, Δ Margin (bps) + driver split (NS/kg vs COGS/kg). Add charts + comments, show numbers in million and leave only necessary columns, add formatting for margin changes to highlight the biggest ones.", related: ["Copilot Excel", "Co-built with Anna Musial"] },
  { id: "t8", title: "Use Facilitator to keep track of meetings' agenda", tool: "Automation", description: "Activate Facilitator Assistant when sending an Outlook invitation to time-track the meeting and take notes. Facilitator automatically updates the agenda items covered during the meeting.", related: ["Facilitator Assistant", "Co-built with Alena Potykalova"] },
  { id: "t9", title: 'Compliance with the use of "/"', tool: "Copilot", description: "Verify your OneDrive shared files and avoid spreading confidential data.", prompt: "Can you summarize me the most important topics listed in this document : /", related: ["OneDrive"] },
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
  { id: "u1", title: "Automation for Tax Repository", problem: "Tax compliance, governance, and traceability rely on scattered sources.", solution: "Centralized tax repository with global tax chatbot, AI Tax Agent, and automated controls like VAT verification.", capability: "Power Automate", function: "Tax", status: "Live", impact: "Single source of truth for Tax", owner: "Global Tax — P-A. Cauchois, M.A. Aranha" },
  { id: "u2", title: "Contract Audit Assistant", problem: "Contract reviews are manual and time-consuming.", solution: "AI-powered assistant automates contract reviews using GenAI, AgenticAI, and RPA for efficient document analysis.", capability: "Power Automate", function: "Audit", status: "Live", impact: "Faster contract reviews", owner: "Audit & Internal Control — P. Leva" },
  { id: "u3", title: "Internal Control Assistant", problem: "Teams struggle to access policies, past results, and internal knowledge.", solution: "Single AI assistant searches internal documents, policies, and past results through one conversational interface.", capability: "Copilot", function: "Audit", status: "Live", impact: "Faster access to knowledge", owner: "Audit & Internal Control — K. Aoun" },
  { id: "u4", title: "Python anomalies detection", problem: "Spotting unusual patterns in large financial datasets is hard manually.", solution: "Python-based anomaly detection with a wizard-based app layer guides users through structured investigation steps.", capability: "Python", function: "Controlling", status: "Scaling", impact: "Stronger control framework", owner: "Company Controlling & Reporting — R. Destremau, A. Nozal" },
  { id: "u5", title: "Notebooks & DAN MAC' Insights", problem: "Notes, documents, and insights are scattered across tools.", solution: "Copilot Notebooks act as a central brain and can generate customized podcasts on internal documents and numbers.", capability: "Copilot", function: "Reporting", status: "Pilot", impact: "Consolidated knowledge & insights", owner: "Finance Transformation — M. Babych" },
  { id: "u6", title: "AI FX Trend Analysis", problem: "Reviewing large currency reports is slow and requires expertise.", solution: "An AI Analyst Agent streamlines FX analysis, making advanced reviews accessible to Finance and Treasury users.", capability: "Copilot", function: "Treasury", status: "Pilot", impact: "Faster FX insights", owner: "Global Treasury — J. Xu" },
  { id: "u7", title: "Researcher for Market Intelligence (DACH)", problem: "Manual market research takes hours and requires expertise.", solution: "Copilot Researcher Agent collects and summarizes external data, helping users explore topics without deep expertise.", capability: "Copilot", function: "Controlling", status: "Pilot", impact: "Faster market intelligence", owner: "Finance Controlling DACH — M. Livorova" },
  { id: "u8", title: "Playstation for Promo", problem: "RGM teams need agile promo investment decisions under fast-changing conditions.", solution: "AI-powered promo planning with scenario modeling for investment allocation based on data-driven insights.", capability: "Copilot", function: "FP&A", status: "Scaling", impact: "Better RGM decisions", owner: "Data Finance France — T. Renoux" },
  { id: "u9", title: "Variances Reconciliations for EMEA", problem: "Reconciling financial data across CBUs and schedules is manual and error-prone.", solution: "Power Automate, Excel Office Scripts, and Copilot automate file processing, variance detection, and validation.", capability: "Power Automate", function: "Controlling", status: "Live", impact: "Consistent EMEA reporting", owner: "EMEA Controlling — S. Mandyam" },
  { id: "u10", title: "Dashboard-to-Deck Automation", problem: "Building reporting decks requires manual extraction from BI tools.", solution: "Direct linking of PowerBI, Excel, and PowerPoint automates end-to-end refresh to presentation-ready outputs.", capability: "Copilot", function: "Controlling", status: "Pilot", impact: "End-to-end reporting automation", owner: "EMEA Controlling — S. Onceler" },
  { id: "u11", title: "Copilot PowerBI for OPS Fixed Costs", problem: "Exploring complex BI datasets requires technical expertise.", solution: "Copilot in PowerBI enables natural language interaction and faster insight generation within existing dashboards.", capability: "Copilot", function: "Controlling", status: "Pilot", impact: "Self-serve insights for OPS", owner: "OPS Fixed Costs — E. Fall, O. Manceau" },
  { id: "u12", title: "Researcher for Market Intelligence (Waters)", problem: "Pricing intelligence requires synthesizing many external and internal signals.", solution: "Researcher Agent structures market questions and sources data to compare market trends with company positioning.", capability: "Copilot", function: "Controlling", status: "Pilot", impact: "Sharper pricing intelligence", owner: "Waters Sales Controlling France — M. Berkani" },
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
  { id: "e1", title: "AI Gate Committee", type: "AI Governance", description: " 14:00 CET", date: "Jun 10", day: "10", month: "JUN", meta: " 14:00 CET" },
  { id: "e2", title: "FD Call - June", type: "FD Call", description: " 14:30 CET", date: "Jun 16", day: "16", month: "JUN", meta: " 14:30 CET" },
  { id: "e3", title: "Mini-Lab: Copilot for Finance", type: "Mini-Lab", description: "Champions only", date: "Jun 17", day: "17", month: "JUN", meta: "Champions only" },
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
