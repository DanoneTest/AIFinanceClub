import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { capabilities, useCases, events, type Capability, type Maturity } from "@/lib/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore & Build — AI Finance Hub" },
      { name: "description", content: "Explore AI, automation, and low-code capabilities — then build the next Finance use case." },
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
  { name: "Scaling", desc: "Expansion across teams or regions." },
  { name: "Live", desc: "Adopted and delivering value." },
];

function Explore() {
  const [filter, setFilter] = useState<string>("All");
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "All") return useCases;
    return useCases.filter(u => u.capability === filter || u.function === filter);
  }, [filter]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-24 pb-24 md:pt-32 md:pb-32 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Page 3 · Explore & Build</p>
          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight">Turn ideas into impact.</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore AI, automation, and low-code capabilities — then build the next Finance use case.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#usecases" className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Explore use cases</a>
            <a href="#idea" className="rounded-full border bg-card px-6 py-3 text-sm font-medium">Submit an idea</a>
          </div>
        </div>
      </section>

      {/* Two boxes */}
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <a href="#capabilities" className="rounded-3xl border bg-card p-10 hover:shadow-elevated transition">
            <h3 className="text-3xl font-semibold tracking-tight">Capabilities</h3>
            <p className="mt-3 text-muted-foreground text-lg">Discover what is possible with AI, automation, and low-code.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["AI", "Automation", "Low-Code", "Python", "Vibe Coding"].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-navy">Explore capabilities <ArrowRight className="size-4" /></span>
          </a>
          <a href="#usecases" className="rounded-3xl border bg-card p-10 hover:shadow-elevated transition">
            <h3 className="text-3xl font-semibold tracking-tight">Use Cases</h3>
            <p className="mt-3 text-muted-foreground text-lg">See what Finance teams are building, testing, and scaling.</p>
            <div className="mt-6 flex gap-2 flex-wrap">
              {STAGES.map(s => <span key={s.name} className="chip">{s.name}</span>)}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-navy">Browse use cases <ArrowRight className="size-4" /></span>
          </a>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Capabilities</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(c => (
            <article key={c.name} className="rounded-3xl border bg-card p-7">
              <span className="chip">{c.name}</span>
              <p className="mt-4 text-muted-foreground">{c.what}</p>
              <div className="mt-5 text-sm space-y-2">
                <div><span className="text-muted-foreground">Typical Finance use: </span>{c.use}</div>
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
      <section id="usecases" className="container-page py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Use case library</h2>
        <p className="mt-2 text-muted-foreground">Filter by capability or Finance function.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`chip ${filter === f ? "chip-active" : ""}`}>{f}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(u => (
            <article key={u.id} className="rounded-3xl border bg-card p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip">{u.capability as Capability}</span>
                <StatusPill status={u.status} />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground/70">Problem:</span> {u.problem}</p>
              <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground/70">Solution:</span> {u.solution}</p>
              <div className="mt-5 pt-4 border-t text-xs text-muted-foreground flex justify-between">
                <span>{u.function} · {u.owner}</span>
                <span>{u.impact}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Initiative Scorecard */}
      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Initiative scorecard</h2>
        <p className="mt-2 text-muted-foreground">How initiatives mature, end to end.</p>
        <div className="mt-10 rounded-3xl border bg-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {STAGES.map((s, i) => (
              <div key={s.name} className="rounded-2xl bg-surface p-6 relative">
                <div className="text-xs text-muted-foreground">Stage {i + 1}</div>
                <div className="mt-1 text-xl font-semibold">{s.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea form */}
      <section id="idea" className="container-page py-24">
        <div className="rounded-[2rem] border bg-card p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Have an AI idea for Finance?</h2>
          <p className="mt-3 text-muted-foreground text-lg">Submit your idea and help us identify the next high-value use case.</p>

          {submitted ? (
            <div className="mt-10 rounded-2xl bg-surface-2 p-8 text-center">
              <div className="text-2xl font-semibold">Idea submitted</div>
              <p className="mt-2 text-muted-foreground">Thanks — your idea will be reviewed by the AI Committee.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full border px-5 py-2.5 text-sm">Submit another</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-10 grid gap-5 md:grid-cols-2"
            >
              <Field label="Idea title"><input className={inputClass} required /></Field>
              <Field label="Finance process impacted"><input className={inputClass} required /></Field>
              <Field label="Problem to solve" full><textarea className={inputClass} rows={3} required /></Field>
              <Field label="Expected benefit" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Tools or capabilities involved"><input className={inputClass} placeholder="AI, Automation, Low-Code…" /></Field>
              <Field label="Team / contact"><input className={inputClass} /></Field>
              <Field label="Maturity" full>
                <div className="flex gap-2 flex-wrap">
                  {["Idea", "Tested", "Already in use"].map(m => (
                    <label key={m} className="chip cursor-pointer">
                      <input type="radio" name="maturity" className="accent-navy" defaultChecked={m === "Idea"} />{m}
                    </label>
                  ))}
                </div>
              </Field>
              <div className="md:col-span-2">
                <button type="submit" className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Submit idea</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="container-page py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Events & restitution</h2>
        <p className="mt-2 text-muted-foreground">Don't just attend — take the learnings back to your team.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(e => (
            <article key={e.id} className="rounded-3xl border bg-card p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className={`chip ${e.type === "Upcoming" ? "chip-active" : ""}`}>{e.type}</span>
                <span className="text-xs text-muted-foreground">{e.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              {e.materials && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.materials.map(m => <span key={m} className="chip text-[11px]">{m}</span>)}
                </div>
              )}
              <button className="mt-6 self-start inline-flex items-center gap-2 text-sm text-navy">
                {e.type === "Upcoming" ? "Register" : "View materials"} <ArrowRight className="size-4" />
              </button>
            </article>
          ))}
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

const inputClass = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/40";

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
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
