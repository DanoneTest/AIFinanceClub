export type ResultType = "News" | "Tip" | "Tool" | "Use Case" | "Champion" | "Resource" | "Event" | "FAQ";

export type News = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  date: string;
  image?: string | null;
  time?: string;
  link?: string | null;
};

export const news: News[] = [
  { id: "n1", tag: "Ai.finance Club", title: "AI.Finance Club Launch", summary: "", date: "", time: "", link: null, image: "Picture1.png" },
  { id: "n2", tag: "Tips & Tricks", title: "Tip of the Month - July 2026", summary: "Pioches dans la liste", date: "", time: "", link: null, image: "Picture1.png" },
  { id: "n3", tag: "Minilab", title: "Copilot Finance Minilab Kick-off", summary: "50 Finance AI Champions representing a panel of the 3 world zones test two available functionalities (insights and financial reconciliations) during two months and build their business cases. Co-built with Microsoft.", date: "29 Jun 2026", time: "3pm–3:30pm", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQAShybgLMmkTpB82hapFHv1AUbJqk_3AnDaTbo9pDGOmLI?e=QjimNS", image: "Picture1.png" },
  { id: "n4", tag: "Tips & Tricks", title: "Tip of the Month - June 2026", summary: "Compliance with the use of \"/\"", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQCOd1UdkSa3TKYMVDKRD9NkASzLA5Qg5V1EDc_MLG6af7o?e=4hor5U", image: "Picture1.png" },
  { id: "n5", tag: "Event", title: "Finance AI.Lympics - Rueil Edition", summary: "Building on the Lafayette success, Finance AI Day Rueil expanded the experience to a larger audience, showcasing Finance AI Champions, AI Lab use cases, and immersive AI.Lympics activities. More than 150 Danoners attended, with 94% reporting increased motivation to use AI and a 4.8/5 average rating.", date: "21 May 2026", time: "All day", link: "https://danone.sharepoint.com/:b:/s/FinanceDigitalAIAccelaration/IQBi7-fU9YWAR47fwCV_Zv42AZa2h04XlqFQk3FtRJTJPxM?e=AARaUJ", image: "Picture2.png" },
  { id: "n6", tag: "Tips & Tricks", title: "Tip of the Month - May 2026", summary: "Use Facilitator to keep track of meetings' agenda", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQARKnDUMeTcQJedTETW6yQgAWangzfXKePdY6xV3SQNHzM?e=Fa4sii", image: "Picture1.png" },
  { id: "n7", tag: "Minilab", title: "AI.Finance Club Minilab Kick-off", summary: "5 Finance AI Champions co-building the AI.Finance club, testing Sharepoint and Lovable. Launched March 9th to co-build mockups on Sharepoint, then testing phase on Lovable to deliver back to Champions on July 7th.", date: "29 Jun 2026", time: "4pm–4:30pm", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQDv2qOderLxRZVhe1pidFLNAXaQLPXxxX1NwYXlqTY9DPo?e=dFDjnU", image: "Picture1.png" },
  { id: "n8", tag: "Tips & Tricks", title: "Tip of the Month - April 2026", summary: "Customize your own financial podcast with Copilot Notebooks", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQALW2vIkTDkTqvzkxmvEWG4AYCjU2Syth1EeKj4_lPwNz0?e=huVhDl", image: "Picture1.png" },
  { id: "n9", tag: "Tips & Tricks", title: "Tip of the Month - March 2026", summary: "Edit with Copilot for Brand Margins Drivers Analysis", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQAA0nBBOL9sSr-lDM-DTzK8AaBcd-ECabaf6ekk7i6Skp4?e=vxKAG4", image: "Picture1.png" },
  { id: "n10", tag: "Tips & Tricks", title: "Tip of the Month - February 2026", summary: "Have Copilot pre-writing your emails in Outlook", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQBA-_NobHfzT4UDheUjZnvXAQ_6kPlhjfRSev4F2ivzx58?e=tOi4Ru", image: "Picture1.png" },
  { id: "n11", tag: "Event", title: "Finance AI.Lympics - Lafayette Edition", summary: "Finance AI Day Lafayette brought together more than 200 Finance Danoners for the first-ever AI-focused Finance event. The event achieved a 4.8/5 satisfaction score, with 94% of participants learning reusable AI tips and 80% feeling more inspired to use AI in their daily work.", date: "27 Jan 2026", time: "All day", link: "https://danone.sharepoint.com/:b:/s/FinanceDigitalAIAccelaration/IQCZQbs0fWS7SanDX18SPD4LAb1V0-EwEB8aywV-kqiyZb8?e=58lVG4", image: "Picture1.png" },
  { id: "n12", tag: "Tips & Tricks", title: "Tip of the Month - January 2026", summary: "Prompt efficiency with Prompt Coach Assistant", date: "", time: "", link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQCZbd2EgaixSY24XmNB7v0KAUAWTnZfCB0jxXOyQrMMDxo?e=Ka8P0h", image: "Picture1.png" },
];

export type Tip = {
  id: string;
  title: string;
  tool: string;
  description: string;
  prompt?: string;
  related?: string[];
  link?: string;
};

export const tools = ["Copilot", "Excel", "Power BI", "Power Automate", "Prompting", "Automation"] as const;

export const tips: Tip[] = [
  { id: "t1", title: "Efficient prompt engineering", tool: "Copilot", description: "Summarize email threads and save frequently used prompts.", prompt: "Can you summarize this email thread (…) in 3 key bullet points and the next steps, it should be summarized in a simple way to be shared with my team.", related: ["Copilot M365", "Outlook", "Co-built with Rodolphe Destremau"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQCdpqATwhIiRZtZCpf-zQ3eAQ35F6xHCTiV27op284zF8g?e=QUnMtH" },
  { id: "t2", title: "Customize your own financial podcast with Copilot Notebooks", tool: "Copilot", description: "Create a Notebook on your topics, add .ppt/.pdf files, then generate and customize your own podcast.", related: ["Copilot Notebook", "Co-built with Amandine Motte"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQALW2vIkTDkTqvzkxmvEWG4AYCjU2Syth1EeKj4_lPwNz0?e=huVhDl" },
  { id: "t3", title: "In-depth analysis with Copilot Analyst", tool: "Copilot", description: "Use Copilot Analyst to monitor trends and specific KPIs.", prompt: "Can you deepdive on Gross Margin in AOP 2026 by category and by month and highlight trend versus RF10 focusing Net Sales, Materials and Logistics evolution?", related: ["Copilot Analyst", "Co-built with Monica Crisci"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQBxblB7MovDS4wBv1mfKRD_AUnRWT7QcFAW1GPfjFiOjTY?e=FgcyBD" },
  { id: "t4", title: "Personalize Copilot Chat outputs", tool: "Copilot", description: "Personalize in Chat settings the output format that best suits you and your way of communicating.", prompt: "Keep the answers short and straight-forward like one would show to the finance board.", related: ["Copilot Chat M365", "Co-built with Srikar Mandyam"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQDwKm9ZH_8CQ50aMnlhyOZBAXp3puXBQY7BQSyXD2I7SwY?e=gP0d2j" },
  { id: "t5", title: "Prompt efficiency with Prompt Coach Assistant", tool: "Prompting", description: "Use Prompt Coach to help you improve a complex prompt.", prompt: "Generate a prompt to help financial auditors check compliance of a supplier contract with policies. The end product should allow to fill a testing sheet similar to this one : (…).", related: ["Prompt Coach", "Co-built with Patrick Leva"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQCZbd2EgaixSY24XmNB7v0KAUAWTnZfCB0jxXOyQrMMDxo?e=Ka8P0h" },
  { id: "t6", title: "Have Copilot pre-writing your emails in Outlook", tool: "Copilot", description: "Set personal instructions on Copilot Outlook and have Copilot pre-write your emails in your own style.", prompt: "Review a representative sample of emails from My Sent Items and produce a single, cohesive block of Custom Instructions to give to Outlook that accurately reflects how I naturally write emails. The output must be written as if it were the Custom Instructions for the draft instructions itself, not an analysis or explanation.", related: ["Copilot Outlook"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQBA-_NobHfzT4UDheUjZnvXAQ_6kPlhjfRSev4F2ivzx58?e=tOi4Ru" },
  { id: "t7", title: "Edit with Copilot for Brand Margins Drivers Analysis", tool: "Excel", description: "Test the new Excel Agent: Edit with Copilot and prepare a Brand Margin Drivers Analysis.", prompt: "Create a 10-top Brand Margin Drivers tab: 2025 vs RF 2026, by Brand, sorted by 2025 NetSales. Compute NS/kg, COGS/kg, Margin%, Δ Margin (bps) + driver split (NS/kg vs COGS/kg). Add charts + comments, show numbers in million and leave only necessary columns, add formatting for margin changes to highlight the biggest ones.", related: ["Copilot Excel", "Co-built with Anna Musial"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQAA0nBBOL9sSr-lDM-DTzK8AaBcd-ECabaf6ekk7i6Skp4?e=vxKAG4" },
  { id: "t8", title: "Use Facilitator to keep track of meetings' agenda", tool: "Automation", description: "Activate Facilitator Assistant when sending an Outlook invitation to timetrack the meeting and take notes automatically.", related: ["Facilitator Assistant", "Co-built with Alena Potykalova"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQARKnDUMeTcQJedTETW6yQgAWangzfXKePdY6xV3SQNHzM?e=Fa4sii" },
  { id: "t9", title: 'Compliance with the use of "/"', tool: "Copilot", description: "Verify your OneDrive shared files and spread of confidential data.", prompt: "Can you summarize me the most important topics listed in this document : /", related: ["OneDrive"], link: "https://danone.sharepoint.com/:v:/s/FinanceDigitalAIAccelaration/IQCOd1UdkSa3TKYMVDKRD9NkASzLA5Qg5V1EDc_MLG6af7o?e=4hor5U" },
  { id: "t10", title: "Automated Parkage Animation", tool: "Automation", description: "VBA Macros built with Copilot and personalized email generation for parkage resolution.", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQDshRK74HHRTrPAuZNBvcEOAawBJUinRxSpfQm48z9aubs?e=zCZE5r" },
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
export const functions = ["FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax", "Sustainability", "DBS", "Finance Transformation", "Investor Relations", "Consolidation & Reporting", "Business Development and Strategy", "Corporate Finance", "Internal Control", "IT&Data", "Commercial Finance", "FDA", "Operations Finance"];
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
  link?: string;
};

export const useCases: UseCase[] = [
  { id: "u1", title: "Automation for Tax Repository", problem: "Tax compliance, governance, and traceability rely on scattered sources.", solution: "Centralized tax repository with global tax chatbot, AI Tax Agent, and automated controls like VAT verification.", capability: "Power Automate", function: "Tax", status: "Live", impact: "Single source of truth for Tax", owner: "Global Tax — P-A. Cauchois, M.A. Aranha", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQBlXpcSxVjoTrzG_qjXcZxPAXt_tSjpUExeL5PDpj-AwTk?e=EIqFU1" },
  { id: "u2", title: "Contract Audit Assistant", problem: "Contract reviews are manual and time-consuming.", solution: "AI-powered assistant automates contract reviews using GenAI, AgenticAI, and RPA for efficient document analysis.", capability: "Power Automate", function: "Audit", status: "Live", impact: "Faster contract reviews", owner: "Audit & Internal Control — P. Leva", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQBrGLFgUi1wSbGwIVXOpZBCAQmZzxjAoh6YYW46vimzsqM?e=u54tEn" },
  { id: "u3", title: "Internal Control Assistant", problem: "Teams struggle to access policies, past results, and internal knowledge.", solution: "Single AI assistant searches internal documents, policies, and past results through one conversational interface.", capability: "Copilot", function: "Audit", status: "Live", impact: "Faster access to knowledge", owner: "Audit & Internal Control — K. Aoun", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQC7p5nA9DCLRYz007L0_B8sAbr3Ujlr9HzsDt8uq4xH8-Q?e=c9BTLQ" },
  { id: "u4", title: "Python Anomalies Detection", problem: "Identifying unusual patterns and outliers in large financial datasets is manual and slow.", solution: "Python-based anomaly detection with a wizard-based application layer, making advanced analytics usable for non-technical profiles.", capability: "Python", function: "Controlling", status: "Live", impact: "Stronger financial control frameworks", owner: "Company Controlling & Reporting — R. Destremau, A. Nozal", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQAjOTk9oMTMRYsmdvG6MLU6AXGlJS0cQelBXEgnwN8Ap7k?e=XRXTbe" },
  { id: "u5", title: "Notebooks & DAN MAC' Insights", problem: "Notes, documents, and insights are scattered across tools and files.", solution: "Copilot Notebooks act as a central brain bringing together content and generating customized podcasts on internal documents.", capability: "Copilot", function: "FP&A", status: "Live", impact: "Centralised knowledge and on-the-go learning", owner: "Finance Transformation — M. Babych", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQCMq8YMb8a4RquJo1rKEnVcAUD479yH_9eLm93eS35iSQs?e=YTCafl" },
  { id: "u6", title: "AI FX Trend Analysis", problem: "FX analysis requires manually reviewing large currency reports.", solution: "AI Analyst Agent streamlines FX analysis, making advanced currency analysis accessible without technical expertise.", capability: "Copilot", function: "Treasury", status: "Live", impact: "Faster FX reporting for Finance and Treasury", owner: "Global Treasury — J. Xu", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQDk4z7z9cJ7S6PXN93HxGwMAb40CRQZpJbkeW7TqHbpbpA?e=705A4j" },
  { id: "u7", title: "Researcher for Market Intelligence", problem: "Collecting and summarizing external market data takes hours manually.", solution: "Copilot Researcher Agent helps users explore topics, frame questions, and build understanding without requiring expertise.", capability: "Copilot", function: "Controlling", status: "Live", impact: "Hours of manual research reduced", owner: "Finance Controlling DACH — M. Livorova", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQCJp2QO8s3uR6_QfW4Zwy_LAc22MISz-LKqwBteIMZ4oIE?e=Sk37Jp" },
  { id: "u8", title: "Playstation for Promo", problem: "Promotion planning requires fast, data-driven allocation of investment budgets.", solution: "AI-powered promotion planning with scenario modeling for RGM decision-making and investment hypothesis testing.", capability: "Copilot", function: "FP&A", status: "Live", impact: "Faster and more agile promotion decisions", owner: "Data Finance France — T. Renoux", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQA2RVkBENnpTLVsr1u4hnGvAVDYixY7gWvwQgoYlCA_KHM?e=3Qevqt" },
  { id: "u9", title: "Variances Reconciliations for EMEA", problem: "Manual comparison of financial data across multiple CBUs and schedules is error-prone and time-consuming.", solution: "AI-powered variance reconciliation using Power Automate, Excel Office Scripts, and Copilot to automate file processing and variance detection.", capability: "Power Automate", function: "Controlling", status: "Live", impact: "Consistent and faster EMEA reporting", owner: "EMEA Controlling — S. Mandyam", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQDjiWq5oen9Q7uBc8o96ayPAW8Z6vqfY3zqX0oZJaII8ZE?e=AY4eST" },
  { id: "u10", title: "Dashboard-to-Deck Automation", problem: "Reporting requires manual extraction from PowerBI and Excel into PowerPoint.", solution: "End-to-end automation linking PowerBI, Excel, and PowerPoint — from data refresh to presentation-ready output without manual extraction.", capability: "Copilot", function: "Reporting", status: "Live", impact: "Fully automated reporting pipeline", owner: "EMEA Controlling — S. Onceler", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQCN6WCLI30LSbIOwpDj9pIiAZnGrAk3JLWPgCaoW6XTELA?e=QzfBL0" },
  { id: "u11", title: "Copilot PowerBI for OPS Fixed Costs", problem: "Manual navigation of BI dashboards creates slow data exploration and high query time.", solution: "Copilot extension in PowerBI enables natural language interaction, allowing business users to retrieve insights without deep technical expertise.", capability: "Copilot", function: "Controlling", status: "Live", impact: "Faster insight generation from existing BI", owner: "OPS Fixed Costs — E. Fall, O. Manceau", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQBOY0cs41tuQKx0gwk-TJUeAebOLe7ROnilxXxqAiWzJy0?e=qoW8nQ" },
  { id: "u12", title: "Researcher for Market Intelligence (Waters)", problem: "Pricing intelligence requires sourcing and synthesizing information from external data and internal documents manually.", solution: "Researcher agent structures key market questions and synthesizes pricing intelligence for direct comparison with company positioning.", capability: "Copilot", function: "Controlling", status: "Live", impact: "Accelerated pricing intelligence", owner: "Waters Sales Controlling France — M. Berkani", link: "https://danone.sharepoint.com/:p:/s/FinanceDigitalAIAccelaration/IQC3sKdok1faQZ5Z9aJrufbDAVAzV0TWaHNWO1TJH1ooFUw?e=7xm2Yg" },
  { id: "u13", title: "Automated Parkage Animation", problem: "200+ blocked invoices per week require manual resolution and supplier follow-up emails.", solution: "VBA + Copilot generates contextual supplier emails within existing threads, reducing manual effort from ~2 hours to 5 minutes per week.", capability: "Copilot", function: "Controlling", status: "Live", impact: "~2h → 5min per week on parkage resolution", owner: "IT&Data Finance Controlling — C. Brounais, G. Savean" },
  { id: "u14", title: "Tax Research Agent", problem: "A 450K+ document tax knowledge repository is hard to navigate and search manually.", solution: "AI-powered search and talk-to-documents capabilities centralize tax research, analysis, and content generation in one agent.", capability: "Copilot", function: "Tax", status: "Live", impact: "Faster tax research and compliance", owner: "Global Tax — E. Anthoine, M-A. Aranha", link: "https://danone.sharepoint.com/sites/DMS-TaxDatabase/Lists/AI%20Agent%20List/DispForm.aspx?ID=19&e=Q2IiVo" },
  { id: "u15", title: "Invoice Analyzer Agent", problem: "Manual invoice compliance checking against 16 mandatory regulatory fields is slow and inconsistent.", solution: "Agent scans invoices, detects presence or absence of key fields, and generates a standardized compliance table with exact extracted values.", capability: "Copilot", function: "Tax", status: "Live", impact: "Structured, auditable invoice compliance reports", owner: "Global Tax — P-A. Cauchois, M.A. Aranha", link: "https://danone.sharepoint.com/sites/DMS-TaxDatabase/Lists/AI%20Agent%20List/DispForm.aspx?ID=8&e=10mHsb" },
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
  link?: string;
};

// 9 Learning platforms
export const resources: Resource[] = [
  { id: "r1", name: "Danone Digital & AI Academy", description: "Company-wide foundation for digital and AI literacy.", link: "https://danone.sharepoint.com/sites/GTI-CopilotM365PilotGroup/SitePages/Copilot%20Hub.aspx?csf=1&web=1&e=cu4W7w&ovuser=4720ed5e-c545-46eb-99a5-958dd333e9f2%2camandine.motte%40danone.com&OR=Teams-HL&CT=1760538040658&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA5MTExNjAxOCJ9&CID=b7a6cfa1-602a-0000-8a87-cf5247a26b38&cidOR=SPO" },
  { id: "r2", name: "Campus X", description: "Cross-functional learning hub for Danone.", link: "https://danone.edcast.com/user/login" },
  { id: "r3", name: "LinkedIn Learning", description: "Curated AI, productivity, and business learning content.", link: "https://www.linkedin.com/learning/" },
  { id: "r4", name: "DataCamp", description: "Hands-on data and Python learning tracks.", link: "https://www.datacamp.com/users/sign_in?redirect=http%3A%2F%2Fapp.datacamp.com%2F" },
  { id: "r5", name: "Microsoft Hub", description: "Official Copilot and M365 enablement.", link: "https://danone.sharepoint.com/sites/GTI-CopilotM365PilotGroup/SitePages/Copilot%20Hub.aspx?csf=1&web=1&e=cu4W7w&ovuser=4720ed5e-c545-46eb-99a5-958dd333e9f2%2camandine.motte%40danone.com&OR=Teams-HL&CT=1760538040658&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA5MTExNjAxOCJ9&CID=b7a6cfa1-602a-0000-8a87-cf5247a26b38&cidOR=SPO" },
  { id: "r6", name: "ESI", description: "Executive Skills Institute training paths.", link: "https://esi.microsoft.com/" },
  { id: "r7", name: "Ad Hoc Trainings", description: "Targeted sessions for teams, tools, or use cases." },
  { id: "r8", name: "Microsoft AI Skill Navigator", description: "Identify the right AI learning by role and level.", link: "https://aiskillsnavigator.microsoft.com/" },
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
  { id: "e1", title: "Finance AI Champions Community - Quarterly 2", type: "AI Champion Community", description: "Quarterly community call for Finance AI Champions.", date: "Jul 23", day: "23", month: "JUL", meta: "10:00 CET" },
  { id: "e2", title: "Copilot Finance Minilab - Meeting with Microsoft", type: "Champion Mini-Lab", description: "Co-building session with Microsoft for Copilot in Finance.", date: "Jul 22", day: "22", month: "JUL", meta: "15:30 CET" },
  { id: "e3", title: "Finance AI Champions Community - Quarterly 3", type: "AI Champion Community", description: "Quarterly community call for Finance AI Champions.", date: "Sep 16", day: "16", month: "SEP", meta: "10:00 CET" },
];

export type Newsletter = { id: string; issue: string; summary: string };
export const newsletters: Newsletter[] = [
  { id: "nl1", issue: "June 2025", summary: "AI Power Up Beta & Copilot Tips" },
  { id: "nl2", issue: "May 2025", summary: "Champions Month Highlights" },
  { id: "nl3", issue: "April 2025", summary: "Explore Portfolio Special" },
];

export type FAQ = { id: string; q: string; a: string };
export const faqs: FAQ[] = [
  { id: "f1", q: "What is AI.finance Club?", a: "The Finance AI Club is a place where anyone in Danone Finance can learn how to use AI in their daily work. Whether you're just curious about AI or already experimenting with tools like Copilot or ChatGPT, the Club helps you understand the basics, discover finance use cases, learn Danone guidelines, and access useful resources to get started safely and confidently. The goal is simple: make AI accessible, practical, and relevant for everyone in Danone Finance." },
  { id: "f2", q: "This world is new to me. How do I start?", a: "Start small. Learn the basics with AI Power Up on the Upskill page, explore a few finance use cases, and try AI on a simple task you already do today. The Finance AI Club will guide you through the first steps, best practices, and resources to help you build confidence." },
  { id: "f3", q: "Who can use Copilot M365 with internal data?", a: "Anyone with an active Microsoft 365 Copilot license can use Copilot on the Danone data they already have permission to access. Copilot follows the same security and access rights as Microsoft 365. No license yet? Request one here." },
  { id: "f4", q: "Can I use public ChatGPT or Gemini for Finance data?", a: "No. Public ChatGPT, Gemini, or any unapproved tool must never receive Danone data." },
  { id: "f5", q: "What AI initiatives and projects already exist in Danone Finance?", a: "Danone Finance is already running a variety of AI initiatives, ranging from Copilot adoption and upskilling programs to business-focused AI projects, communities, hackathons, and automation initiatives. Explore existing projects, learn from successful use cases, and discover how teams across Finance are leveraging AI to create value." },
  { id: "f6", q: "Can I become an AI Champion?", a: "Of course! AI Champions help test new AI solutions, share best practices, and support AI adoption across Danone Finance. Today, the community includes more than 400 Champions worldwide. No expertise required, curiosity and willingness to contribute are enough. Join us." },
  { id: "f7", q: "I have an idea and I know how to do and I have the tech skills, how to stay compliant?", a: "As of Sept 2026 you MUST go through the Finance AI Boost program to ensure compliance with EU AI Act. This program is designed to create a safe path for you to build and sustain your solution." },
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
