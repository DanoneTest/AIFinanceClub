import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { news, tips, tools, newsletters, champions } from "@/lib/data";

export const Route = createFileRoute("/understand")({
  head: () => ({
    meta: [
      { title: "Understand AI in Finance — AI Finance Hub" },
      { name: "description", content: "The strategy, governance, updates, and community shaping AI adoption across Finance." },
      { property: "og:title", content: "Understand AI in Finance" },
      { property: "og:description", content: "Strategy, governance, news, and the AI community." },
    ],
  }),
  component: Understand,
});

function Understand() {
  const [activeTool, setActiveTool] = useState<string>("All");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredTips = activeTool === "All" ? tips : tips.filter(t => t.tool === activeTool);

  const copy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-24 pb-24 md:pt-32 md:pb-32 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Page 1 · Understand</p>
          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight">Understand AI in Finance.</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            The strategy, governance, updates, and community shaping AI adoption across Finance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#news" className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Read latest news</a>
            <a href="#committee" className="rounded-full border bg-card px-6 py-3 text-sm font-medium">See AI Committee</a>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="container-page py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest news</h2>
            <p className="mt-2 text-muted-foreground">What's happening across AI in Finance.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {news.map(n => (
            <article key={n.id} className="rounded-3xl border bg-card p-8 hover:shadow-soft transition">
              <div className="flex items-center justify-between">
                <span className="chip">{n.tag}</span>
                <span className="text-xs text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{n.title}</h3>
              <p className="mt-3 text-muted-foreground">{n.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-20">
        <div className="rounded-[2rem] border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">AI Finance Newsletter</h2>
            <p className="mt-3 text-muted-foreground text-lg">A monthly digest of news, events, tips, and use cases.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Subscribe</button>
              <button className="rounded-full border px-6 py-3 text-sm font-medium">View archive</button>
            </div>
          </div>
          <ul className="space-y-3">
            {newsletters.map(n => (
              <li key={n.id} className="rounded-2xl border p-5 bg-surface flex items-center justify-between">
                <div>
                  <div className="font-medium">{n.issue}</div>
                  <div className="text-sm text-muted-foreground">{n.summary}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="container-page py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tips of the Month</h2>
        <p className="mt-2 text-muted-foreground">Practical AI tips for everyday Finance work, searchable by tool.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {["All", ...tools].map(t => (
            <button
              key={t}
              onClick={() => setActiveTool(t)}
              className={`chip ${activeTool === t ? "chip-active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTips.map(tip => (
            <article key={tip.id} className="rounded-3xl border bg-card p-7 flex flex-col">
              <span className="chip self-start">{tip.tool}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{tip.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tip.description}</p>
              {tip.prompt && (
                <div className="mt-5 rounded-2xl bg-surface-2 p-4 text-sm font-mono text-foreground/80">
                  {tip.prompt}
                </div>
              )}
              <div className="mt-5 flex items-center justify-between pt-4 border-t">
                {tip.prompt ? (
                  <button
                    onClick={() => copy(tip.id, tip.prompt!)}
                    className="inline-flex items-center gap-2 text-sm text-navy hover:opacity-80"
                  >
                    {copied === tip.id ? <Check className="size-4" /> : <Copy className="size-4" />}
                    {copied === tip.id ? "Copied" : "Copy"}
                  </button>
                ) : <span />}
                <button className="text-sm text-muted-foreground hover:text-foreground">Read more</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="container-page py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">How AI decisions are governed.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The AI Committee helps evaluate, prioritize, and guide AI initiatives across Finance.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border bg-card p-8 md:p-10">
          <div className="text-sm uppercase tracking-wider text-muted-foreground">Cross-functional</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Finance Transformation", "IT", "Data & Analytics", "Legal / Risk / Compliance", "Business owners"].map(x => (
              <span key={x} className="chip">{x}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { t: "What it reviews", d: "AI ideas, risks, value potential, feasibility, data readiness." },
            { t: "What it decides", d: "Whether an initiative should move forward, be refined, or be redirected." },
            { t: "How to prepare", d: "Clarify the problem, expected value, users, data, and responsible AI considerations." },
          ].map(c => (
            <div key={c.t} className="rounded-3xl border bg-card p-8">
              <h3 className="text-xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Champions preview */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">AI adoption is powered by people.</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              AI Champions help teams learn, experiment, and apply AI in daily Finance work.
            </p>
          </div>
          <Link to="/champions" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-surface-2">
            Meet the Champions <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {champions.slice(0, 4).map(c => (
            <div key={c.id} className="rounded-3xl border bg-card p-7">
              <div className="size-12 rounded-full bg-surface-2 flex items-center justify-center font-semibold text-navy">
                {c.name.split(" ").map(p => p[0]).join("")}
              </div>
              <div className="mt-5 font-semibold">{c.name}</div>
              <div className="text-sm text-muted-foreground">{c.role} · {c.region}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.expertise.slice(0, 2).map(e => <span key={e} className="chip text-[11px]">{e}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatsNext
        headline="Ready to build your AI confidence?"
        subtitle="Start with the learning path that matches your role and ambition."
        actions={[{ to: "/upskill", label: "Go to Upskill" }]}
      />
    </>
  );
}
