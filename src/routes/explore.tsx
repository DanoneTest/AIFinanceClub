import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { capabilities, useCases, type Capability, type Maturity } from "@/lib/data";
import { useDynamicUseCases } from "@/hooks/useLocalStorageCards";

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
const CAP_FILTERS = ["All", "Copilot", "Power Automate", "Power Apps", "GitHub", "Vibe Coding"];
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
  const { cards: dynamicUseCases } = useDynamicUseCases();

  const filtered = useMemo(() => {
    return useCases.filter(u => {
      if (fnFilter !== "All" && u.function !== fnFilter) return false;
      if (capFilter !== "All" && u.capability !== capFilter) return false;
      if (q && !(u.title + u.problem + u.solution).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [fnFilter, capFilter, q]);

  const filteredDynamic = useMemo(() => {
    return dynamicUseCases.filter(u => {
      if (fnFilter !== "All" && u.function !== fnFilter) return false;
      if (capFilter !== "All" && u.capability !== capFilter) return false;
      if (q && !(u.title + u.problem + u.solution).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [dynamicUseCases, fnFilter, capFilter, q]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-10 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Turn ideas into impact.</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            AI tools powering Finance use cases, a searchable library, and your idea submission.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a href="#capabilities" className="rounded-full bg-navy text-navy-foreground px-4 py-1.5 text-sm font-medium">Capabilities</a>
            <a href="#usecases" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">Use Cases</a>
            <a href="#idea" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">I Have an Idea</a>
          </div>
        </div>
      </section>


      {/* Capabilities */}
      <section id="capabilities" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Capabilities</div>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Available Capabilities - AI Tools at Danone.</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            {
              name: "Copilot Chat",
              status: "Available to all",
              statusTone: "bg-emerald-100 text-emerald-700",
              rows: [
                ["What it does", "Conversational AI: writes, summarises, reformulates, brainstorms, answers in natural language"],
                ["Finance uses", "Committee notes · Variance commentary · Policy Q&A · Presentation first drafts"],
                ["Access", <>Via browser — no request needed · Finance user guide · <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">CoPilot Chat</a></>],
              ],
            },
            {
              name: "Copilot M365 — Excel · Word · Outlook · Teams · PowerPoint",
              status: "M365 licence required",
              statusTone: "bg-sky-100 text-sky-700",
              rows: [
                ["Excel", "Natural language formulas · Column analysis · Auto pivot tables · Anomaly detection"],
                ["Outlook / Teams", "Email thread summary · Meeting summary with actions · Transcription"],
                ["Access", <>Check with your manager for licence · <a href="https://danone.sharepoint.com/sites/GTI-CopilotM365PilotGroup/SitePages/Copilot%20Hub.aspx" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">Request form</a> · Per-app guide</>],
              ],
            },
            {
              name: "Copilot for Power BI",
              status: "On request",
              statusTone: "bg-amber-100 text-amber-700",
              rows: [
                ["What it does", "Natural language Q&A on dashboards · Auto visual generation · Close report summaries"],
                ["Access", <><a href="https://forms.office.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">Access request form</a> · Lead time: 5 days · Finance guide</>],
              ],
            },
            {
              name: "Power Automate",
              status: "Available to all",
              statusTone: "bg-emerald-100 text-emerald-700",
              rows: [
                ["What it does", "No-code workflow automation · Triggers and automatic actions across Microsoft tools"],
                ["Finance uses", "Approval circuits · Budget alerts · Supplier data extraction · SharePoint ↔ Teams sync"],
                ["Access", <><a href="https://make.powerautomate.com/" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">Available 365</a> · Library of Finance flows · Support via your local Champion</>],
              ],
            },
            {
              name: "Power Apps",
              status: "On request",
              statusTone: "bg-amber-100 text-amber-700",
              rows: [
                ["What it does", "Build apps and workflows without heavy development"],
                ["Finance uses", "Centralized data capture · Approval apps · Lightweight internal tools"],
                ["Access", <><a href="https://make.powerapps.com/" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">Request via IT</a> · Champion support available</>],
              ],
            },
            {
              name: "More Advanced Tools — Azure OpenAI, Agents, Python",
              status: "contact the Ai.Finance Team",
              statusTone: "bg-rose-100 text-rose-700",
              rows: [
                ["What they do", "Custom AI solutions: agents, advanced automation, ML models, complex data pipelines"],
                ["Examples", "Talk to My Anything · DBS Agent · Python for Controlling · Advanced Forecasting models"],
                ["Access", "Contact the Ai.Finance Team · Brief + Validation + IT access"],
              ],
            },
          ].map(c => (
            <article key={c.name} className="rounded-2xl border bg-card p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold">{c.name}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium ${c.statusTone}`}>{c.status}</span>
              </div>
              <dl className="mt-3 space-y-1.5 text-xs">
                {c.rows.map(([k, v], i) => (
                  <div key={i} className="grid grid-cols-[110px_1fr] gap-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
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
            u.link ? (
              <a key={u.id} href={u.link} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-card p-4 flex flex-col cursor-pointer">
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
              </a>
            ) : (
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
            )
          ))}
          {filteredDynamic.map(u => (
            (u as any).link ? (
              <a key={u.id} href={(u as any).link} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-card p-4 flex flex-col cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="chip text-[11px]">{u.capability as Capability}</span>
                  <StatusPill status={u.status as Maturity} />
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug">{u.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground"><span className="text-foreground/70">Problem:</span> {u.problem}</p>
                <p className="mt-1 text-xs text-muted-foreground"><span className="text-foreground/70">Solution:</span> {u.solution}</p>
                <div className="mt-3 pt-2 border-t text-[11px] text-muted-foreground flex justify-between">
                  <span>{u.function} · {u.owner}</span>
                  <span>{u.impact}</span>
                </div>
              </a>
            ) : (
              <article key={u.id} className="rounded-2xl border bg-card p-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="chip text-[11px]">{u.capability as Capability}</span>
                  <StatusPill status={u.status as Maturity} />
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug">{u.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground"><span className="text-foreground/70">Problem:</span> {u.problem}</p>
                <p className="mt-1 text-xs text-muted-foreground"><span className="text-foreground/70">Solution:</span> {u.solution}</p>
                <div className="mt-3 pt-2 border-t text-[11px] text-muted-foreground flex justify-between">
                  <span>{u.function} · {u.owner}</span>
                  <span>{u.impact}</span>
                </div>
              </article>
            )
          ))}
        </div>
      </section>




      {/* I Have an Idea */}
      <section id="idea" className="container-page py-10">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">I Have an Idea</div>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Submit your AI.Idea or existing use-case you want to put in the portfolio</h2>

          {submitted ? (
            <div className="mt-6 rounded-xl bg-surface-2 p-5 text-center">
              <div className="text-lg font-semibold">Idea submitted</div>
              <p className="mt-1 text-sm text-muted-foreground">Thanks — your idea will be reviewed by the AI.finance team.</p>
              <button onClick={() => setSubmitted(false)} className="mt-3 rounded-full border px-4 py-2 text-sm">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-5 grid gap-3 md:grid-cols-2">
              <Field label="Idea title"><input className={inputClass} required /></Field>
              <Field label="Finance process impacted"><input className={inputClass} required /></Field>
              <Field label="Problem to solve" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Expected benefit" full><textarea className={inputClass} rows={2} required /></Field>
              <Field label="Tools or capabilities"><input className={inputClass} placeholder="Copilot, Power Automate, Power Apps…" /></Field>
              <Field label="Team / contact"><input className={inputClass} /></Field>
              <Field label="Attachments" full>
                <input type="file" multiple className={inputClass} />
              </Field>
              <div className="md:col-span-2 flex justify-end">
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
