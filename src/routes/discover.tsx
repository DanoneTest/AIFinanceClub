import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Shield, Scale, Compass, Route as RouteIcon, Gavel } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { news, newsletters } from "@/lib/data";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover — AI.Finance Club" },
      { name: "description", content: "Vision, journey, governance, responsible AI, and the AI Gate Committee for Finance." },
      { property: "og:title", content: "Discover AI in Finance" },
      { property: "og:description", content: "Vision, journey, governance, and the AI Gate." },
    ],
  }),
  component: Discover,
});

const SECTIONS = [
  { id: "vision", label: "Vision", icon: Compass },
  { id: "journey", label: "Journey", icon: RouteIcon },
  { id: "governance", label: "AI Governance", icon: Scale },
  { id: "responsible", label: "Responsible AI", icon: Shield },
  { id: "ai-gate", label: "AI Gate", icon: Gavel },
];

const JOURNEY = [
  { year: "2023", title: "Awareness", desc: "First experiments. Build a shared language around AI in Finance." },
  { year: "2024", title: "Foundations", desc: "Tools, governance, and the first community of AI Champions." },
  { year: "2025", title: "Practical adoption", desc: "AI Boost beta, daily-use Copilot, scaled tips, and live use cases." },
  { year: "2026", title: "Scale & value", desc: "Industrialised use cases, measured value, and Finance-wide adoption." },
];

function Discover() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Discover AI in Finance.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The vision, journey, governance, and responsible use of AI shaping how Finance transforms.
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-2">
            {SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`} className="chip hover:bg-surface-2">
                <s.icon className="size-3.5" /> {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="container-page py-14">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Vision</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">AI as a daily Finance partner.</h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Free time for insight", d: "Reduce repetitive work so teams focus on analysis and decisions." },
              { t: "Better, faster decisions", d: "Bring evidence and synthesis to every leadership conversation." },
              { t: "Trusted by design", d: "Responsible, governed AI — fit for Finance standards." },
              { t: "Owned by Finance", d: "Driven by Finance teams, not delegated to IT alone." },
            ].map(c => (
              <div key={c.t} className="rounded-2xl border bg-card p-5">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="container-page py-14">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Journey</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">From awareness to scaled adoption.</h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-4 relative">
          {JOURNEY.map((j, i) => (
            <li key={j.year} className="rounded-2xl border bg-card p-5 relative">
              <div className="text-xs text-accent-blue font-medium">Phase {i + 1} · {j.year}</div>
              <div className="mt-1 text-lg font-semibold">{j.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{j.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* News */}
      <section className="container-page py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Latest news</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {news.map(n => (
            <article key={n.id} className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="chip">{n.tag}</span>
                <span className="text-[11px] text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="mt-3 font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-10">
        <div className="rounded-2xl border bg-card p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">AI.Finance Newsletter</h2>
            <p className="mt-2 text-sm text-muted-foreground">A monthly digest of news, events, tips, and use cases.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button className="rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">Subscribe</button>
              <button className="rounded-full border px-5 py-2 text-sm font-medium">View archive</button>
            </div>
          </div>
          <ul className="space-y-2">
            {newsletters.map(n => (
              <li key={n.id} className="rounded-xl border p-4 bg-surface flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{n.issue}</div>
                  <div className="text-xs text-muted-foreground">{n.summary}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI Governance */}
      <section id="governance" className="container-page py-14">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">AI Governance</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">A clear way to evaluate, prioritise, and scale.</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Governance ensures AI initiatives in Finance are valuable, feasible, safe, and aligned with company standards.
        </p>
        <div className="mt-6 rounded-2xl border bg-card p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Cross-functional</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Finance Transformation", "IT", "Data & Analytics", "Legal / Risk / Compliance", "Business owners"].map(x => (
              <span key={x} className="chip">{x}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Strategic alignment", d: "Initiatives connect to Finance priorities and value." },
            { t: "Risk & compliance", d: "Data, legal, and ethical checks built in from day one." },
            { t: "Scalability", d: "Pilots designed with scale in mind, not just experiments." },
          ].map(c => (
            <div key={c.t} className="rounded-2xl border bg-card p-5">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsible AI */}
      <section id="responsible" className="container-page py-14">
        <div className="rounded-2xl border bg-surface p-8 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Responsible AI</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Trusted, safe, and human in the loop.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Data protection", d: "Only approved tools and data sources." },
              { t: "Human oversight", d: "Finance keeps the final decision." },
              { t: "Explainability", d: "Understand how and why AI suggests an output." },
              { t: "Fairness & ethics", d: "No use case that conflicts with company values." },
            ].map(c => (
              <div key={c.t} className="rounded-xl border bg-card p-4">
                <div className="font-semibold text-sm">{c.t}</div>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Gate */}
      <section id="ai-gate" className="container-page py-14">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">AI Gate</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">The AI Gate Committee.</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          A single checkpoint to review every Finance AI initiative — from idea to scale — with the right people in the room.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "What it reviews", d: "AI ideas, risks, value potential, feasibility, and data readiness." },
            { t: "What it decides", d: "Move forward, refine, redirect, or stop an initiative." },
            { t: "How to prepare", d: "Clarify problem, value, users, data, and responsible AI considerations." },
          ].map(c => (
            <div key={c.t} className="rounded-2xl border bg-card p-5">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
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
