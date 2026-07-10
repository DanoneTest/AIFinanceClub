import { createFileRoute } from "@tanstack/react-router";
import { Shield, Scale, Compass, Route as RouteIcon, Play, Target, BarChart3, CheckCircle2, XCircle, AlertCircle, Lock, ExternalLink } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover — AI.finance" },
    ],
  }),
  component: Discover,
});

const SECTIONS = [
  { id: "ambition", label: "Ambition", icon: Compass },
  { id: "journey", label: "Journey", icon: RouteIcon },
  { id: "governance", label: "AI Governance", icon: Scale },
  { id: "responsible", label: "Responsible AI", icon: Shield },
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
    ],
  },
  {
    year: "2026",
    label: "Accelerations",
    color: "text-emerald-600",
    items: [],
    groups: [
      { title: "Upskilling", items: ["Champions animation", "AI.Lympics", "AI Sandbox"] },
      { title: "Scale for Value", items: ["AI Lab Flagships", "AI Champs Mini Labs", "Agents in DBS & Controlling"] },
    ],
  },
];

const GOLDEN_RULES = [
  { icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50", title: "Always verify AI outputs", body: "before sharing or making decisions. AI can be wrong — you remain accountable at all times." },
  { icon: XCircle, color: "text-red-600 bg-red-50", title: "NEVER PASTE CONFIDENTIAL DATA into any unapproved tool", body: "This includes unpublished results, customer data, and M&A information." },
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
                <video
                  src="/Official video for AI Day - Sharepoint.mp4"
                  controls
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Responsible AI & Compliance</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight">The rules you need to know before using AI in finance</h2>

        <div className="mt-5 grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-2"><Target className="size-4 text-accent-blue" /><span className="font-semibold">Build AI that creates value.</span></div>
            <p className="mt-2 text-sm text-muted-foreground">AI Governance helps us move from ideas to measurable business value while managing risk responsibly. The objective is not to build AI for the sake of AI, but to improve business decisions and create impact.</p>
            <a
              href="/Accelerating Time to Value - Finance Day.pptx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:bg-navy/90 transition-colors"
            >
              <Play className="size-3.5" /> Consult Danone AI Compliance
            </a>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-2"><BarChart3 className="size-4 text-accent-blue" /><span className="font-semibold">Before building with AI, ask yourself:</span></div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "✅ What decision are we improving?",
                "✅ How will we measure success?",
                "✅ Is the value bigger than the cost?",
                "✅ Do we have the right data?",
                "✅ Is there any risk? Is it acceptable?",
              ].map((q, i) => (
                <li key={i} className="flex gap-2">{q}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">Keep watch the video</p>
            <a
              href="https://vimeo.com/1101636689/a95dad4483?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:bg-navy/90 transition-colors"
            >
              <Play className="size-3.5" /> Watch AI Governance at Danone
            </a>
          </div>
        </div>

        {/* Maturity Scale */}
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">AI Product Maturity Scale</div>
          <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
            {[
              { stars: "★", label: "THEORETICAL", color: "text-muted-foreground", desc: "We believe value is possible" },
              { stars: "★★", label: "EMPIRICAL", color: "text-foreground", desc: "We can prove it with data" },
              { stars: "★★★", label: "APPLICABLE", color: "text-accent-blue", desc: "We validated it in real life" },
              { stars: "★★★★", label: "REPLICABLE", color: "text-navy", desc: "We can scale it across teams" },
              { stars: "★★★★★", label: "IMPACT", color: "text-emerald-600", desc: "We continuously create value" },
            ].map((m, i) => (
              <>
                <div key={i} className="rounded-2xl border bg-card p-4 text-center w-36">
                  <div className="text-amber-500 text-lg">{m.stars}</div>
                  <div className={`mt-1 text-xs font-bold tracking-wider ${m.color}`}>{m.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.desc}</div>
                </div>
                {i < 4 && <div className="text-2xl text-muted-foreground">→</div>}
              </>
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
          <a
            href="https://danone.sharepoint.com/sites/DMS-Policies-and-Positions/Publishing%20Area/Responsible%20Business%20Practices/Artificial%20Intelligence/26-05_Danone%20Responsible%20AI%20Policy_internal.pdf?web=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:bg-navy/90 transition-colors"
          >
            <ExternalLink className="size-3.5" /> Read the Danone Responsible AI Policy
          </a>
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
