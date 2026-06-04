import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { WhatsNext } from "@/components/WhatsNext";
import { champions, regions, functions, expertiseTags } from "@/lib/data";

export const Route = createFileRoute("/champions")({
  head: () => ({
    meta: [
      { title: "AI Champions — AI Finance Hub" },
      { name: "description", content: "Meet the people making AI real across Finance." },
      { property: "og:title", content: "AI Champions" },
      { property: "og:description", content: "Connect with the people helping Finance adopt AI." },
    ],
  }),
  component: Champions,
});

function Champions() {
  const [region, setRegion] = useState<string>("All");
  const [fn, setFn] = useState<string>("All");
  const [tag, setTag] = useState<string>("All");

  const filtered = useMemo(() => {
    return champions.filter(c =>
      (region === "All" || c.region === region) &&
      (fn === "All" || c.function === fn) &&
      (tag === "All" || c.expertise.includes(tag))
    );
  }, [region, fn, tag]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-24 pb-24 md:pt-32 md:pb-32 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Page 4 · AI Champions</p>
          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight">Meet the people making AI real.</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Champions help Finance teams learn, experiment, and scale practical AI use cases.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#directory" className="rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Find a Champion</a>
            <a href="#apply" className="rounded-full border bg-card px-6 py-3 text-sm font-medium">Apply to join</a>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section id="directory" className="container-page py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Discover Champions</h2>
        <p className="mt-2 text-muted-foreground">Filter by region, function, or expertise.</p>

        <div className="mt-8 space-y-4">
          <FilterRow label="Region" options={["All", ...regions]} value={region} onChange={setRegion} />
          <FilterRow label="Function" options={["All", ...functions]} value={fn} onChange={setFn} />
          <FilterRow label="Expertise" options={["All", ...expertiseTags]} value={tag} onChange={setTag} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <article key={c.id} className="rounded-3xl border bg-card p-7 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-surface-2 flex items-center justify-center font-semibold text-navy text-lg">
                  {c.name.split(" ").map(p => p[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.role}</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div><div className="text-muted-foreground text-xs">Region</div>{c.region}</div>
                <div><div className="text-muted-foreground text-xs">Function</div>{c.function}</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.expertise.map(e => <span key={e} className="chip text-[11px]">{e}</span>)}
              </div>
              <div className="mt-6 pt-4 border-t flex gap-2">
                <button className="flex-1 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm">Contact</button>
                <button className="flex-1 rounded-full border px-4 py-2 text-sm">Ask for help</button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 rounded-3xl border bg-card p-10 text-center text-muted-foreground">
              No champions match these filters yet.
            </div>
          )}
        </div>
      </section>

      {/* What Champions do */}
      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Champions do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Guide", d: "Help colleagues understand how AI can support Finance work." },
            { t: "Experiment", d: "Test tools, prompts, workflows, and use cases." },
            { t: "Scale", d: "Share learnings and help teams adopt what works." },
          ].map(c => (
            <div key={c.t} className="rounded-3xl border bg-card p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="container-page py-24">
        <div className="rounded-[2rem] border bg-card p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Become an AI Champion.</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            You do not need to be technical. You need curiosity, practical thinking, and willingness to help others learn.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {["Express interest", "Join onboarding", "Participate in learning and community sessions", "Share tips, use cases, and feedback"].map((s, i) => (
              <li key={s} className="rounded-2xl bg-surface p-5">
                <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                <div className="mt-1 font-medium">{s}</div>
              </li>
            ))}
          </ol>
          <button className="mt-10 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium">Apply now</button>
        </div>
      </section>

      {/* Champion Corner */}
      <section className="container-page py-16">
        <div className="rounded-[2rem] border bg-navy text-navy-foreground p-10 md:p-14">
          <div className="text-xs uppercase tracking-[0.2em] opacity-70">For Champions</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Champion Corner</h2>
          <p className="mt-3 opacity-80 max-w-2xl">A dedicated space with resources, playbooks, and community sessions.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Champion resources", "Upcoming community sessions", "Playbooks", "Templates", "Event materials", "Recognition / spotlight"].map(x => (
              <div key={x} className="rounded-2xl bg-background/10 backdrop-blur-sm border border-white/10 p-5 text-sm">{x}</div>
            ))}
          </div>
        </div>
      </section>

      <WhatsNext
        headline="Start your AI Finance journey today."
        subtitle="Learn the basics, explore use cases, or connect with a Champion."
        actions={[
          { to: "/upskill", label: "Start with Upskill", primary: true },
          { to: "/explore", label: "Explore Use Cases", primary: false },
        ]}
      />
    </>
  );
}

function FilterRow({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-start gap-3 flex-wrap">
      <div className="text-xs uppercase tracking-wider text-muted-foreground w-20 pt-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)} className={`chip ${value === o ? "chip-active" : ""}`}>{o}</button>
        ))}
      </div>
    </div>
  );
}
