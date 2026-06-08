import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { capabilities, useCases, type Capability, type Maturity } from "@/lib/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore & Build — AI.finance" },
      { name: "description", content: "Capabilities, use cases, and submit your next AI idea for Finance." },
    ],
  }),
  component: Explore,
});

const FUNCTIONS = ["All", "FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"];
const CAP_FILTERS = ["All", "AI", "Automation", "Low-Code", "Python", "Vibe Coding"];
const STAGES: { name: Maturity; desc: string }[] = [
  { name: "Idea", desc: "Opportunity identified." },
  { name: "Pilot", desc: "Small test with users." },
  { name: "Scaling", desc: "Expansion across teams." },
  { name: "Live", desc: "Adopted and delivering value." },
];

function Explore() {
  const [fnFilter, setFnFilter] = useState("All");
  const [capFilter, setCapFilter] = useState("All");
  const [q, setQ] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    return useCases.filter(u => {
      if (fnFilter !== "All" && u.function !== fnFilter) return false;
      if (capFilter !== "All" && u.capability !== capFilter) return false;
      if (q && !(u.title + u.problem + u.solution).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [fnFilter, capFilter, q]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-10 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Turn ideas into impact.</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            AI tools powering Finance use cases, a searchable library, and your idea submission.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Capabilities</div>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">AI Tools Powering Finance Use Cases.</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {capabilities.map(c => (
            <article key={c.name} className="rounded-2xl border bg-card p-4 flex flex-col">
              <span className="chip self-start">{c.name}</span>
              <p className="mt-2 text-xs text-muted-foreground flex-1">{c.what}</p>
              <div className="mt-3 text-[11px] space-y-1">
                <div><span className="text-muted-foreground">Typical: </span>{c.use}</div>
                <div className="flex flex-wrap gap-1 pt-1.5">
                  {c.tools.map(t => <span key={t} className="chip text-[10px] py-0.5">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="container-page py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Use Cases</div>
            <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Searchable use case library.</h2>
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search use cases…"
            className="w-full md:w-80 rounded-full border bg-card px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground w-16">Function</span>
            {FUNCTIONS.map(f => (
              <button key={f} onClick={() => setFnFilter(f)} className={`chip ${fnFilter === f ? "chip-active" : ""}`}>{f}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground w-16">Tool</span>
            {CAP_FILTERS.map(f => (
              <button key={f} onClick={() => setCapFilter(f)} className={`chip ${capFilter === f ? "chip-active" : ""}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(u => (
            <article key={u.id} className="rounded-2xl border bg-card p-4 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip text-[11px]">{u.capability as Capability}</span>
                <StatusPill status={u.status} />
              </div>
              <h3 className="mt-2 text-sm font-semibold leading-snug">{u.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground"><span className="text-foreground/70">Problem:</span> {u.problem}</p>
              <p className="mt-1 text-xs text-muted-foreground"><span className="text-foreground/70">Solution:</span> {u.solution}</p>
              <div className="mt-3 pt-2 border-t text-[11px] text-muted-foreground flex justify-between">
                <span>{u.function} · {u.owner}</span>
                <span>{u.impact}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Finance Awards CTA */}
        <div className="mt-6 rounded-2xl border bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10 p-5 flex items-center gap-4 flex-wrap">
          <Trophy className="size-8 text-amber-600" />
          <div className="flex-1 min-w-[200px]">
            <div className="font-semibold">Do you want to submit this use case to the Finance Awards?</div>
            <div className="text-sm text-muted-foreground">Recognize your team's AI impact at the next Finance Awards ceremony.</div>
          </div>
          <button className="rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">Submit to Finance Awards</button>
        </div>

        {/* Scorecards */}
        <div className="mt-6 rounded-2xl border bg-card p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Initiative scorecards</div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {STAGES.map((s, i) => (
              <div key={s.name} className="rounded-xl bg-surface p-3">
                <div className="text-[11px] text-muted-foreground">Stage {i + 1}</div>
                <div className="mt-0.5 text-sm font-semibold">{s.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I Have an Idea */}
      <section id="idea" className="container-page py-10">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">I Have an Idea</div>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Submit your next AI use case.</h2>

          {submitted ? (
            <div className="mt-6 rounded-xl bg-surface-2 p-5 text-center">
              <div className="text-lg font-semibold">Idea submitted</div>
              <p className="mt-1 text-sm text-muted-foreground">Thanks — your idea will be reviewed by the AI Gate Committee.</p>
              <button onClick={() => setSubmitted(false)} className="mt-3 rounded-full border px-4 py-2 text-sm">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-5 grid gap-3 md:grid-cols-2">
              <Field label="Idea title"><input className={inputClass} required /></Field>
              <Field label="Finance process impacted"><input className={inputClass} required /></Field>
              <Field label="Problem to solve" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Expected benefit" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Tools or capabilities"><input className={inputClass} placeholder="AI, Automation, Low-Code…" /></Field>
              <Field label="Team / contact"><input className={inputClass} /></Field>
              <div className="md:col-span-2">
                <button type="submit" className="rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium inline-flex items-center gap-2">
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

const inputClass = "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40";

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
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
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${styles[status]}`}>{status}</span>;
}
