import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { capabilities, useCases, type Capability, type Maturity } from "@/lib/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore & Build — AI.Finance Club" },
      { name: "description", content: "Capabilities, use cases, and submit your next AI idea for Finance." },
      { property: "og:title", content: "Explore & Build" },
      { property: "og:description", content: "Turn ideas into impact." },
    ],
  }),
  component: Explore,
});

const FILTERS = ["All", "AI", "Automation", "Low-Code", "Python", "Vibe Coding", "FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"] as const;
const STAGES: { name: Maturity; desc: string }[] = [
  { name: "Idea", desc: "Opportunity identified." },
  { name: "Pilot", desc: "Small test with users." },
  { name: "Scaling", desc: "Expansion across teams." },
  { name: "Live", desc: "Adopted and delivering value." },
];

function Explore() {
  const [filter, setFilter] = useState<string>("All");
  const [q, setQ] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    return useCases.filter(u => {
      if (filter !== "All" && u.capability !== filter && u.function !== filter) return false;
      if (q && !(u.title + u.problem + u.solution).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [filter, q]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Turn ideas into impact.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore capabilities, browse the Finance use case library, and submit your next idea.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a href="#capabilities" className="rounded-full border bg-card px-5 py-2 text-sm font-medium">Capabilities</a>
            <a href="#usecases" className="rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">Use Cases</a>
            <a href="#idea" className="rounded-full border bg-card px-5 py-2 text-sm font-medium">I Have an Idea</a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="container-page py-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Capabilities</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">What's possible.</h2>
        <p className="mt-2 text-sm text-muted-foreground">Five capability families powering Finance use cases.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(c => (
            <article key={c.name} className="rounded-2xl border bg-card p-5">
              <span className="chip">{c.name}</span>
              <p className="mt-3 text-sm text-muted-foreground">{c.what}</p>
              <div className="mt-4 text-xs space-y-1.5">
                <div><span className="text-muted-foreground">Typical use: </span>{c.use}</div>
                <div><span className="text-muted-foreground">Example: </span>{c.example}</div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {c.tools.map(t => <span key={t} className="chip text-[11px]">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="container-page py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Use Cases</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Searchable use case library.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Filter by capability or Finance function.</p>
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search use cases…"
            className="w-full md:w-80 rounded-full border bg-card px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`chip ${filter === f ? "chip-active" : ""}`}>{f}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(u => (
            <article key={u.id} className="rounded-2xl border bg-card p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip">{u.capability as Capability}</span>
                <StatusPill status={u.status} />
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug">{u.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground"><span className="text-foreground/70">Problem:</span> {u.problem}</p>
              <p className="mt-1 text-xs text-muted-foreground"><span className="text-foreground/70">Solution:</span> {u.solution}</p>
              <div className="mt-4 pt-3 border-t text-[11px] text-muted-foreground flex justify-between">
                <span>{u.function} · {u.owner}</span>
                <span>{u.impact}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Initiative Scorecards */}
        <div className="mt-10 rounded-2xl border bg-card p-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Initiative scorecards</div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3">
            {STAGES.map((s, i) => (
              <div key={s.name} className="rounded-xl bg-surface p-4">
                <div className="text-[11px] text-muted-foreground">Stage {i + 1}</div>
                <div className="mt-0.5 text-base font-semibold">{s.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I Have an Idea */}
      <section id="idea" className="container-page py-12">
        <div className="rounded-2xl border bg-card p-8 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">I Have an Idea</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Submit your next AI use case.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Help us identify the next high-value Finance use case.</p>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-surface-2 p-6 text-center">
              <div className="text-xl font-semibold">Idea submitted</div>
              <p className="mt-1 text-sm text-muted-foreground">Thanks — your idea will be reviewed by the AI Gate Committee.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 rounded-full border px-4 py-2 text-sm">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Idea title"><input className={inputClass} required /></Field>
              <Field label="Finance process impacted"><input className={inputClass} required /></Field>
              <Field label="Problem to solve" full><textarea className={inputClass} rows={3} required /></Field>
              <Field label="Expected benefit" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Tools or capabilities"><input className={inputClass} placeholder="AI, Automation, Low-Code…" /></Field>
              <Field label="Team / contact"><input className={inputClass} /></Field>
              <div className="md:col-span-2">
                <button type="submit" className="rounded-full bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
                  Submit idea <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <WhatsNext
        headline="Need help turning an idea into action?"
        subtitle="Connect with the AI Champions community."
        actions={[{ to: "/champions", label: "Go to AI Champions" }]}
      />
    </>
  );
}

const inputClass = "w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40";

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function StatusPill({ status }: { status: Maturity }) {
  const styles: Record<Maturity, string> = {
    Idea: "bg-surface-2 text-foreground",
    Pilot: "bg-accent-blue/15 text-accent-blue",
    Scaling: "bg-navy/10 text-navy",
    Live: "bg-navy text-navy-foreground",
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[status]}`}>{status}</span>;
}
