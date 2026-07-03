import { createFileRoute } from "@tanstack/react-router";
import { Shield, Scale, Compass, Route as RouteIcon, Gavel, Play, Target, BarChart3, CheckCircle2, XCircle, AlertCircle, Lock } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";

const sponsorPhoto = "/jurgen-esser.png";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover — AI.finance" },
      { name: "description", content: "Ambition, journey, governance, responsible AI, and the AI Gate Committee for Finance." },
    ],
  }),
  component: Discover,
});

const SECTIONS = [
  { id: "ambition", label: "Ambition", icon: Compass },
  { id: "journey", label: "Journey", icon: RouteIcon },
  { id: "governance", label: "AI Governance", icon: Scale },
  { id: "responsible", label: "Responsible AI", icon: Shield },
  { id: "ai-gate", label: "AI Gate", icon: Gavel },
];

const QUOTES = [
  "I was super impressed and super proud of the energy I could feel.",
  "First superpower, the power of visible leadership.",
  "Second superpower is about upskilling at scale.",
  "Power of collaborations and partnerships.",
];

const JOURNEY = [
  {
    year: "2024",
    label: "Experimentations",
    color: "text-accent-blue",
    items: [
      "Build data foundations",
      "Experiment with available capabilities",
      "Establish Finance AI governance",
      "Deliver quick wins with M365 Copilot",
    ],
  },
  {
    year: "2025",
    label: "Foundations",
    color: "text-navy",
    items: [
      "Launch AI Champions Community",
      "Deliver value through squads",
      "Biweekly Tips & Tricks",
      "FD Calls",
      "AI Gate Committee",
    ],
  },
  {
    year: "2026",
    label: "Accelerations",
    color: "text-emerald-600",
    items: [],
    groups: [
      { title: "Upskilling", items: ["Champions animation", "AI.Lympics", "AI Sandbox"] },
      { title: "Scale for Value", items: ["AI Lab Flagships", "Advanced Forecasting", "Agents in DBS & Controlling", "Global Portfolio"] },
    ],
  },
];

const GOLDEN_RULES = [
  { icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50", title: "Always verify AI outputs", body: "before sharing or making decisions. AI can be wrong — you remain accountable at all times." },
  { icon: XCircle, color: "text-red-600 bg-red-50", title: "NEVER PASTE CONFIDENTIAL DATA into any unapproved tool", body: "(unpublished results, customer data, M&A info) — including public ChatGPT, Claude, Gemini, DeepSeek or personal AI tools." },
  { icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50", title: "Report any incident or unexpected behaviour", body: "to your local Champion or via the AI in Finance Teams channel. No panic — but the team must know." },
  { icon: AlertCircle, color: "text-amber-600 bg-amber-50", title: "AI is an assistant, not a decision-maker.", body: "Every AI-generated output must be reviewed and validated by a human before being shared or acted upon." },
  { icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50", title: "Apply the Decision Science Canvas", body: "before starting any AI use case: define the decision, measure success, assess value vs cost, check data availability and identify responsible AI risks." },
];

function Discover() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-10 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Discover AI in Finance.</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            Ambition, journey, governance, and the responsible use of AI shaping Finance.
          </p>
          <nav className="mt-5 flex flex-wrap justify-center gap-2">
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className={i === 0 ? "rounded-full bg-navy text-navy-foreground px-4 py-1.5 text-sm font-medium" : "rounded-full border bg-card px-4 py-1.5 text-sm font-medium"}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Ambition */}
      <section id="ambition" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Ambition</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">AI as a daily Finance partner.</h2>

        <div className="mt-6 rounded-2xl border bg-card p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Executive sponsor */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Executive sponsor</div>
              <div className="mt-3 rounded-xl bg-surface-2 aspect-video overflow-hidden relative">
                <img src={sponsorPhoto} alt="Jurgen Esser" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3">
                <div className="font-semibold">Jurgen Esser</div>
                <div className="text-sm text-muted-foreground">Deputy CEO & CFO Danone</div>
              </div>
              
            </div>

            {/* Quote */}
            <div className="md:border-l md:pl-8 flex flex-col">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Key quote</div>
              <blockquote className="mt-3 flex-1 rounded-2xl bg-surface border p-6 relative">
                <span className="absolute top-2 left-4 text-6xl leading-none text-accent-blue/30 font-serif">"</span>
                <p className="relative text-lg md:text-xl font-medium italic text-foreground/90 leading-relaxed">
                  First superpower, the power of visible leadership. Visible leadership by showing us the way on how to apply AI on our daily work. I want to pass a big thank you to the Champions we have in the AI community in finance and the Second superpower is about upskilling at scale.
                </p>
                <footer className="mt-4 text-sm font-semibold text-foreground not-italic">
                  — Jurgen Esser<span className="text-muted-foreground font-normal">, Deputy CEO & CFO Danone</span>
                </footer>
              </blockquote>
              <button className="mt-4 self-start rounded-full border bg-card px-4 py-2 text-sm font-medium">Read full message</button>
            </div>

          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Our Journey — 2024 → 2025 → 2026</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">From experimentation to value at scale.</h2>
        <p className="mt-2 text-sm text-muted-foreground">From bottom-up experiencing in 2024… to upskilling acceleration and value at scale in 2026.</p>

        {/* Timeline rail */}
        <div className="mt-8 relative">
          <div className="hidden md:block absolute top-3 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-accent-blue via-navy to-emerald-500" />
          <div className="grid md:grid-cols-3 gap-5">
            {JOURNEY.map((p, i) => (
              <div key={p.year} className="relative">
                <div className="hidden md:flex justify-center mb-3">
                  <div className={`size-5 rounded-full border-2 bg-card ${i===0?"border-accent-blue":i===1?"border-navy":"border-emerald-500"}`} />
                </div>
                <div className={`text-center text-xs font-semibold tracking-wider ${p.color}`}>{p.year} — {p.label.toUpperCase()}</div>
                <div className="mt-3 rounded-2xl border bg-card p-5">
                  {p.items.length > 0 && (
                    <ul className="space-y-1.5 text-sm">
                      {p.items.map(it => (
                        <li key={it} className="flex gap-2"><span className="text-muted-foreground">·</span>{it}</li>
                      ))}
                    </ul>
                  )}
                  {p.groups?.map(g => (
                    <div key={g.title} className="mt-3 first:mt-0">
                      <div className="text-xs font-semibold text-accent-blue">{g.title}</div>
                      <ul className="mt-1.5 space-y-1.5 text-sm">
                        {g.items.map(it => (
                          <li key={it} className="flex gap-2"><span className="text-muted-foreground">·</span>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Governance */}
      <section id="governance" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">AI Governance & Responsible AI</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">Structured by Decision Science.</h2>

        <div className="mt-5 grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-2"><Target className="size-4 text-accent-blue" /><span className="font-semibold">The AI Governance Framework</span></div>
            <p className="mt-2 text-sm text-muted-foreground">Danone's AI governance is enabled by Decision Science — a structured approach to ensure every AI project creates real, measurable business value while managing risks responsibly.</p>
            <div className="mt-3 text-sm">
              <div className="font-semibold">Two compasses guide every AI project:</div>
              <p className="mt-2 text-sm text-muted-foreground"><span className="font-semibold text-foreground">· Opportunity Compass:</span> Maps decisions by importance and volume to recommend the right AI approach (Automation Agents, ML/AI, Statistics, Self-Service Analytics).</p>
              <p className="mt-1 text-sm text-muted-foreground"><span className="font-semibold text-foreground">· Risk Compass:</span> Identifies risks linked to each decision type — bias, accuracy drift, regulatory constraints and more.</p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-2"><BarChart3 className="size-4 text-accent-blue" /><span className="font-semibold">Decision Science Canvas — 5 questions before any AI use case</span></div>
            <ol className="mt-3 space-y-2 text-sm">
              {[
                "What decision will this AI improve, and what outcome will change?",
                "How will we measure success and prove impact?",
                "What is the value hypothesis vs cost?",
                "Is the data, technology and capability available?",
                "What is the Responsible AI risk category and required mitigations?",
              ].map((q, i) => (
                <li key={i} className="flex gap-2"><span className="font-semibold text-accent-blue">{i+1}.</span>{q}</li>
              ))}
            </ol>
            <button className="mt-4 text-sm text-accent-blue inline-flex items-center gap-1">▷ Watch: AI Governance in Danone video →</button>
          </div>
        </div>

        {/* Maturity Scale */}
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">AI Product Maturity Scale</div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { stars: "★", label: "THEORETICAL", color: "text-muted-foreground", desc: "If we can do this, we can gain this" },
              { stars: "★★", label: "EMPIRICAL", color: "text-foreground", desc: "By comparing with history, we can gain this" },
              { stars: "★★★", label: "APPLICABLE", color: "text-accent-blue", desc: "After experimenting in real life, we gain this" },
              { stars: "★★★★★", label: "IMPACT", color: "text-emerald-600", desc: "We continuously gain this vs our baseline" },
            ].map((m, i) => (
              <div key={i} className="rounded-2xl border bg-card p-4 text-center">
                <div className="text-amber-500 text-lg">{m.stars}</div>
                <div className={`mt-1 text-xs font-bold tracking-wider ${m.color}`}>{m.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools allowed per context */}
        <div className="mt-5 rounded-2xl border bg-surface p-5">
          <div className="font-semibold">Tools allowed per context</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              { k: "Copilot Chat", v: "✅ Available to all — No confidential data, no unpublished results", i: CheckCircle2, c: "text-emerald-600" },
              { k: "Copilot M365", v: "✅ M365 licence — Internal non-classified data OK. Verify classification.", i: CheckCircle2, c: "text-emerald-600" },
              { k: "Power Automate", v: "✅ Available to all — Sensitive flows reviewed by manager before go-live", i: CheckCircle2, c: "text-emerald-600" },
              { k: "Custom tools", v: "🔒 Validated projects only — AI Committee brief + IT access required", i: Lock, c: "text-amber-600" },
              { k: "Forbidden", v: "Public ChatGPT, Claude, Gemini, DeepSeek, or any unapproved tool with Danone data", i: XCircle, c: "text-red-600" },
            ].map((r, i) => (
              <li key={i} className="grid grid-cols-[140px_1fr] gap-3 items-start">
                <span className="text-muted-foreground text-sm flex items-center gap-1.5"><r.i className={`size-3.5 ${r.c}`} />{r.k}</span>
                <span>{r.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Responsible AI — 5 Golden Rules */}
      <section id="responsible" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">The 5 Golden Rules — Responsible AI in Finance</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">Trusted, safe, and human in the loop.</h2>
        <div className="mt-5 space-y-2">
          {GOLDEN_RULES.map((r, i) => (
            <div key={i} className="rounded-xl border bg-card p-4 flex items-start gap-3">
              <div className={`rounded-full p-1.5 ${r.color}`}><r.icon className="size-4" /></div>
              <div className="text-sm"><span className="font-semibold">{r.title}</span> <span className="text-muted-foreground">{r.body}</span></div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a className="text-sm text-accent-blue inline-flex items-center gap-1" href="https://danone.sharepoint.com/sites/DMS-Policies-and-Positions/Publishing%20Area/Responsible%20Business%20Practices/Artificial%20Intelligence/26-05_Danone%20Responsible%20AI%20Policy_internal.pdf?web=1" target="_blank" rel="noopener noreferrer">Danone Responsible AI Policy →</a>
        </div>
      </section>

      {/* AI Gate Committee */}
      <section id="ai-gate" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">AI Project GATE Committee</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">The AI Gate Committee.</h2>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border bg-card p-5">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Role of the Committee</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "🎯 Verify the relevance and strategic fit of each AI project submitted",
                "📊 Evaluate the maturity level of the use case (Theoretical → Impact)",
                "⚖️ Assess the benefit vs cost of implementation",
                "✅ Validate before project creation and IT resource allocation",
              ].map((it, i) => (
                <li key={i} className="rounded-lg bg-surface p-2.5">{it}</li>
              ))}
            </ul>
            <div className="mt-5 text-[11px] uppercase tracking-wider text-muted-foreground">Composition</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="rounded-lg bg-surface p-2.5">👥 Finance Transformation + IT Data & Analytics (D&A) AI team</li>
              <li className="rounded-lg bg-surface p-2.5">📅 Meets approximately every 3 months. Minutes shared with submitters.</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">How to submit a project</div>
            <ol className="mt-3 space-y-3 text-sm">
              {[
                { t: "Fill in the AI.DEA form", d: "Describe the decision to improve, expected value and tool envisaged." },
                { t: "Kick off with AI.finance team", d: "Pre-validation and use-case framing with D&A AI team." },
                { t: "Assessment & GATE validation", d: "Committee evaluates: relevance, maturity, benefit vs cost → Project creation or MINI.LAB routing." },
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="size-7 rounded-full bg-accent-blue/10 text-accent-blue font-semibold text-sm flex items-center justify-center shrink-0">{i+1}</span>
                  <div><div className="font-semibold">{s.t}</div><div className="text-muted-foreground">{s.d}</div></div>
                </li>
              ))}
            </ol>
            <button className="mt-5 rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">📝 Submit to the AI GATE Committee →</button>
          </div>
        </div>
      </section>

      <WhatsNext
        headline="Ready to build your AI confidence?"
        subtitle="Start with the learning path that matches your role."
        actions={[{ to: "/upskill", label: "Go to Upskill" }]}
      />
    </>
  );
}
