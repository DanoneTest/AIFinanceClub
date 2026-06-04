import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Copy, Check } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { tips, tools } from "@/lib/data";

export const Route = createFileRoute("/upskill")({
  head: () => ({
    meta: [
      { title: "Upskill — AI.Finance Club" },
      { name: "description", content: "AI Boost beta, learning platforms, and practical tips for Finance." },
      { property: "og:title", content: "Upskill" },
      { property: "og:description", content: "Build your AI confidence." },
    ],
  }),
  component: Upskill,
});

function Upskill() {
  const [activeTool, setActiveTool] = useState<string>("All");
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredTips = tips.filter(t => {
    if (activeTool !== "All" && t.tool !== activeTool) return false;
    if (q && !(t.title + t.description + (t.prompt ?? "")).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const copy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Build your AI confidence.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            One Finance learning path, the right resources, and tips you can use today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a href="#ai-boost" className="rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">AI Boost</a>
            <a href="#resources" className="rounded-full border bg-card px-5 py-2 text-sm font-medium">Other Resources</a>
            <a href="#tips" className="rounded-full border bg-card px-5 py-2 text-sm font-medium">Tips & Tricks</a>
          </div>
        </div>
      </section>

      {/* AI Boost – Beta Version */}
      <section id="ai-boost" className="container-page py-12">
        <div className="rounded-2xl border bg-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-accent-blue/15 blur-3xl" />
          <div className="flex items-center gap-3">
            <Sparkles className="size-6 text-accent-blue" />
            <span className="chip chip-active">Beta</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">AI Boost – Beta Version</h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">
            A selected Finance learning path to help teams understand AI, use it in daily work, and propose high-value use cases.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
            {["Selected for Finance", "Practical learning", "Built around real use cases", "Designed for adoption"].map(x => (
              <div key={x} className="rounded-xl border bg-surface p-3 text-sm font-medium">{x}</div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <button className="rounded-full bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
              Start AI Boost <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section id="resources" className="container-page py-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Other Resources</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Keep learning beyond AI Boost.</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* A. Danone Digital & AI Academy — smaller */}
          <article className="rounded-2xl border bg-surface p-6 flex flex-col">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Academy</div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Danone Digital & AI Academy</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The company-wide foundation for digital and AI literacy. Start here for general AI concepts and learning journeys.
            </p>
            <button className="mt-5 self-start inline-flex items-center gap-1.5 text-sm text-navy">
              Open the Academy <ArrowRight className="size-4" />
            </button>
          </article>

          {/* B. Learning Platforms — larger */}
          <article className="rounded-2xl border bg-card p-6 lg:col-span-2">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Learning platforms</div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Selected platforms for Finance teams</h3>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { t: "LinkedIn Learning", d: "Curated AI, productivity, and business content." },
                { t: "AI Skill Navigator", d: "Identify the right AI learning by role and level." },
                { t: "Ad Hoc Trainings", d: "Targeted sessions for teams, tools, or use cases." },
              ].map(p => (
                <div key={p.t} className="rounded-xl border bg-surface p-4">
                  <div className="font-semibold text-sm">{p.t}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-xs text-navy">Open <ArrowRight className="size-3" /></button>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section id="tips" className="container-page py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Tips & Tricks</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Practical tips you can use today.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Monthly tips, prompt examples, and a searchable tips database — filter by tool.</p>
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search tips, prompts, tools…"
            className="w-full md:w-80 rounded-full border bg-card px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["All", ...tools].map(t => (
            <button key={t} onClick={() => setActiveTool(t)} className={`chip ${activeTool === t ? "chip-active" : ""}`}>{t}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTips.map(tip => (
            <article key={tip.id} className="rounded-2xl border bg-card p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip">{tip.tool}</span>
                {tip.prompt && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Prompt</span>}
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug">{tip.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{tip.description}</p>
              {tip.prompt && (
                <div className="mt-4 rounded-xl bg-surface-2 p-3 text-xs font-mono text-foreground/80">{tip.prompt}</div>
              )}
              {tip.prompt && (
                <button
                  onClick={() => copy(tip.id, tip.prompt!)}
                  className="mt-3 self-start inline-flex items-center gap-1.5 text-xs text-navy hover:opacity-80"
                >
                  {copied === tip.id ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied === tip.id ? "Copied" : "Copy prompt"}
                </button>
              )}
            </article>
          ))}
          {filteredTips.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl border bg-card p-8 text-center text-sm text-muted-foreground">
              No tips match your search yet.
            </div>
          )}
        </div>
      </section>

      <WhatsNext
        headline="Ready to put AI into practice?"
        subtitle="Explore capabilities, use cases, and submit your own idea."
        actions={[{ to: "/explore", label: "Go to Explore & Build" }]}
      />
    </>
  );
}
