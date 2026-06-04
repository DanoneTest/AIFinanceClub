import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { resources } from "@/lib/data";

export const Route = createFileRoute("/upskill")({
  head: () => ({
    meta: [
      { title: "Upskill — AI Finance Hub" },
      { name: "description", content: "A practical learning experience for every Finance profile — from first discovery to leading use cases." },
      { property: "og:title", content: "Upskill" },
      { property: "og:description", content: "Build your AI confidence." },
    ],
  }),
  component: Upskill,
});

const paths = [
  {
    name: "Discover",
    desc: "Understand what AI is, what it can do, and how it applies to Finance.",
    best: "People starting their AI journey.",
    outcomes: ["Understand AI capabilities", "Learn key concepts", "Identify simple opportunities in daily work"],
  },
  {
    name: "Apply",
    desc: "Use Copilot and M365 AI tools to improve everyday productivity.",
    best: "People who want to use AI in daily Finance tasks.",
    outcomes: ["Use Copilot in Outlook, Excel, Word, Teams", "Write better prompts", "Save time on recurring tasks", "Understand when a license is required"],
  },
  {
    name: "Lead",
    desc: "Propose use cases, shape initiatives, and help your team scale AI.",
    best: "Future AI Champions and use case owners.",
    outcomes: ["Frame AI use cases", "Submit ideas", "Support adoption", "Join the Champion community"],
  },
];

const quiz = [
  {
    q: "How confident are you with AI today?",
    options: ["I am just starting", "I use AI occasionally", "I already use AI often"],
    weights: ["Discover", "Apply", "Lead"],
  },
  {
    q: "What do you want to achieve first?",
    options: ["Understand what AI can do", "Save time in daily work", "Build or propose a use case"],
    weights: ["Discover", "Apply", "Lead"],
  },
  {
    q: "Which tools are most relevant to you?",
    options: ["Copilot / M365", "Power BI / Analytics", "Automation / Low-code"],
    weights: ["Apply", "Apply", "Lead"],
  },
] as const;

function Upskill() {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);

  const setAnswer = (qi: number, oi: number) =>
    setAnswers(prev => prev.map((v, i) => (i === qi ? oi : v)));

  const complete = answers.every(a => a !== null);
  let recommended: string | null = null;
  if (complete) {
    const counts: Record<string, number> = { Discover: 0, Apply: 0, Lead: 0 };
    answers.forEach((a, i) => { counts[quiz[i].weights[a!]] += 1; });
    recommended = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-24 pb-24 md:pt-32 md:pb-32 text-center">
          
          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight">Build your AI confidence.</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A practical learning experience for every Finance profile — from first discovery to leading use cases.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#quiz" className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Find my path</a>
            <a href="#resources" className="rounded-full border bg-card px-6 py-3 text-sm font-medium">Explore resources</a>
          </div>
        </div>
      </section>

      {/* AI Boost Beta */}
      <section className="container-page py-24">
        <div className="rounded-[2rem] border bg-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent-blue/15 blur-3xl" />
          <Sparkles className="size-7 text-accent-blue" />
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">AI Boost Beta</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A selected Finance learning path to help teams understand AI, use it in daily work, and propose high-value use cases.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
            {["Selected for Finance", "Practical learning", "Built around real use cases", "Designed for adoption"].map(x => (
              <div key={x} className="rounded-2xl border bg-surface p-4 text-sm font-medium">{x}</div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <button className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Start AI Boost</button>
          </div>
        </div>
      </section>

      {/* Choose your path */}
      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Choose your path</h2>
        <p className="mt-2 text-muted-foreground">Three paths designed for where you are today.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {paths.map(p => (
            <div key={p.name} className="rounded-3xl border bg-card p-8 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-accent-blue font-medium">Path</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 text-sm">
                <span className="text-muted-foreground">Best for: </span>
                <span className="text-foreground">{p.best}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.outcomes.map(o => (
                  <li key={o} className="flex gap-2"><Check className="size-4 text-accent-blue shrink-0 mt-0.5" />{o}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="container-page py-24">
        <div className="rounded-[2rem] border bg-card p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Find your AI starting point</h2>
          <p className="mt-2 text-muted-foreground">Answer three quick questions.</p>

          <div className="mt-10 space-y-8">
            {quiz.map((q, qi) => (
              <div key={qi}>
                <div className="text-sm text-muted-foreground">Question {qi + 1}</div>
                <div className="mt-1 text-lg font-medium">{q.q}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {q.options.map((o, oi) => (
                    <button
                      key={o}
                      onClick={() => setAnswer(qi, oi)}
                      className={`chip ${answers[qi] === oi ? "chip-active" : ""}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {recommended && (
            <div className="mt-10 rounded-2xl bg-surface-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Recommended path</div>
                <div className="mt-1 text-2xl font-semibold">{recommended}</div>
              </div>
              <button className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                Start recommended path <ArrowRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Three boxes */}
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "AI in Finance", items: ["AI Boost", "General Finance pathway", "Events", "AI Sandbox"], cta: "Explore AI in Finance" },
            { t: "Other Resources", items: ["DDAI Academy", "LinkedIn Learning", "AI Skill Navigator", "Ad hoc trainings"], cta: "Browse resources" },
            { t: "Tips & Tricks", items: ["Monthly tips", "Filter by tool", "Prompt examples", "Productivity ideas"], cta: "View tips" },
          ].map(b => (
            <div key={b.t} className="rounded-3xl border bg-card p-8 flex flex-col">
              <h3 className="text-2xl font-semibold tracking-tight">{b.t}</h3>
              <ul className="mt-5 space-y-2 text-muted-foreground">
                {b.items.map(i => <li key={i} className="flex gap-2"><span className="text-accent-blue">·</span>{i}</li>)}
              </ul>
              <button className="mt-8 self-start inline-flex items-center gap-2 text-sm font-medium text-navy">
                {b.cta} <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="container-page py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Resources library</h2>
        <p className="mt-2 text-muted-foreground">Selected places to keep learning.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(r => (
            <article key={r.id} className="rounded-3xl border bg-card p-7">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="mt-2 text-muted-foreground">{r.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm text-navy">Open <ArrowRight className="size-4" /></button>
            </article>
          ))}
        </div>
      </section>

      {/* Apply to be a Champion */}
      <section className="container-page py-16">
        <div className="rounded-[2rem] border bg-navy text-navy-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to help others adopt AI?</h2>
            <p className="mt-3 opacity-80 max-w-xl">After building your skills, you can apply to join the AI Champion community.</p>
          </div>
          <button className="rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium">Apply for Champion Community</button>
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
