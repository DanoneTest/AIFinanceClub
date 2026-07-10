import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Play, MapPin, Calendar, Lock } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { champions, regions, functions } from "@/lib/data";

export const Route = createFileRoute("/champions")({
  head: () => ({
    meta: [
      { title: "AI Champions — AI.finance" },
      { name: "description", content: "Meet the people making AI real across Finance." },
    ],
  }),
  component: Champions,
});

function Champions() {
  const [region, setRegion] = useState<string>("All");
  const [fn, setFn] = useState<string>("All");
  const [country, setCountry] = useState<string>("All");

  const countries = useMemo(() => Array.from(new Set(champions.map(c => c.country))).sort(), []);
  const byCountry = useMemo(() => {
    const map: Record<string, number> = {};
    champions.forEach(c => { map[c.country] = (map[c.country] ?? 0) + 1; });
    return map;
  }, []);

  const filtered = useMemo(() => {
    return champions.filter(c =>
      (region === "All" || c.region === region) &&
      (fn === "All" || c.function === fn) &&
      (country === "All" || c.country === country)
    );
  }, [region, fn, country]);

  return (
    <>
      <section className="hero-gradient">
        <div className="container-page pt-10 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Meet the people making AI real.</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            400+ AI Champions help Finance teams learn, experiment, and scale practical AI use cases.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a href="#directory" className="rounded-full bg-navy text-navy-foreground px-4 py-1.5 text-sm font-medium">Meet My Champion</a>
            <button className="rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium">Champion Corner</button>
            <a href="#apply" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">Apply to join</a>
          </div>
        </div>
      </section>



      {/* Directory */}
      <section id="directory" className="container-page py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Champion Directory</h2>
        <p className="mt-1 text-sm text-muted-foreground">Filter by region, CBU, or function.</p>

        <div className="mt-5 space-y-2">
          <FilterRow label="Region" options={["All", ...regions]} value={region} onChange={setRegion} />
          <FilterRow label="CBU" options={["All", ...countries]} value={country} onChange={setCountry} />
          <FilterRow label="Function" options={["All", ...functions]} value={fn} onChange={setFn} />
        </div>

        <div className="mt-5 max-h-[600px] overflow-y-auto pr-1">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map(c => (
              <article key={c.id} className="rounded-2xl border bg-card p-4 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-surface-2 flex items-center justify-center font-semibold text-navy">
                    {c.name.split(" ").map(p => p[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.role}</div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                  <div><div className="text-muted-foreground">Region</div>{c.region}</div>
                  <div><div className="text-muted-foreground">CBU</div>{c.country}</div>
                  <div><div className="text-muted-foreground">Function</div>{c.function}</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {c.expertise.map(e => <span key={e} className="chip text-[10px] py-0.5">{e}</span>)}
                </div>
                <div className="mt-3 pt-2 border-t flex gap-2">
                  <button className="flex-1 rounded-full bg-navy text-navy-foreground px-3 py-1.5 text-xs">Contact</button>
                  <button className="flex-1 rounded-full border px-3 py-1.5 text-xs">Ask for help</button>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="md:col-span-2 lg:col-span-3 rounded-2xl border bg-card p-6 text-center text-sm text-muted-foreground">
                No champions match these filters yet.
              </div>
            )}
          </div>
        </div>
      </section>  

      {/* Apply */}
      <section id="apply" className="container-page py-10">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why join the AI Champion community.</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Everything you need to know about the community, who it's for, and what's in it for you.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Why it exists</div>
              <ul className="mt-2 space-y-1.5 text-sm list-disc pl-5">
                <li>Accelerate AI <strong>adoption</strong> across Finance</li>
                <li>Identify, test and <strong>scale</strong> high-impact AI use cases</li>
                <li>Build a strong, sustainable <strong>AI learning culture</strong> in Finance</li>
              </ul>
            </div>
            <div className="rounded-xl bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">How the community works</div>
              <ul className="mt-2 space-y-1.5 text-sm list-disc pl-5">
                <li><strong>1 global</strong> AI Champions Community driven by the AI Finance team</li>
                <li><strong>150 Champions worldwide</strong>, across Finance functions</li>
                <li><strong>Hands-on Mini-Labs</strong> to explore new AI technologies</li>
                <li><strong>Use-case driven</strong> — test, share, scale</li>
                <li>Practical · Finance-driven · Impact-oriented</li>
              </ul>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Who can join</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>✓ All Finance & DBS Finance professionals</li>
                <li>✓ Any <strong>role</strong>, any <strong>seniority</strong>, any <strong>geography</strong></li>
                <li>✓ <strong>Curious</strong>, willing to learn</li>
                <li>✓ Motivated to <strong>test AI in daily work</strong></li>
              </ul>
            </div>
            <div className="rounded-xl bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">What it really means</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>○ <strong>Test AI tools</strong> & Finance use cases</li>
                <li>○ <strong>Join Mini-Labs</strong> & learning sessions</li>
                <li>○ <strong>Share learnings</strong> with peers</li>
                <li>○ Be a <strong>local AI relay</strong></li>
              </ul>
            </div>
            <div className="rounded-xl bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">What's in it for you</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>★ <strong>Early access</strong> to AI tools, pilots & initiatives</li>
                <li>★ <strong>Hands-on</strong>, Finance-focused <strong>learnings</strong></li>
                <li>★ Digital, analytical & leadership skills dev</li>
                <li>★ <strong>Global network</strong> with Finance peers</li>
                <li>★ <strong>Visible</strong> impact on Finance transfo</li>
              </ul>
            </div>
          </div>

          <a href="https://forms.office.com/e/1TvUkFsmUn" target="_blank" rel="noopener noreferrer" className="mt-6 rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium inline-block text-center">Apply now</a>
        </div>
      </section>

      {/* Champion Corner */}
      <section className="container-page py-10">
        <div className="rounded-2xl border border-white/10 bg-black text-white p-6 md:p-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white">
            <Lock className="size-3.5" />
            For Champions
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#d4af37]">Champion Corner</h2>
          <p className="mt-2 text-white/80 max-w-2xl text-sm">
            A dedicated space with programs, mini-labs, and the community channel.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-sm text-white">
              <div className="text-[11px] uppercase tracking-wider text-white/60">Program</div>
              <div className="mt-1 font-medium">Champ Up learning program</div>
            </div>
            <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-sm text-white md:col-span-1">
              <div className="text-[11px] uppercase tracking-wider text-white/60">Minilab sections</div>
              <ul className="mt-1 space-y-1">
                <li>• Shape the community 2025</li>
                <li>• Copilot PBI</li>
                <li>• Shape the sharpoint</li>
                <li>• Mendo — new ways of upskilling</li>
                <li>• Copilot Finance</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-sm text-white">
              <div className="text-[11px] uppercase tracking-wider text-white/60">Community</div>
              <div className="mt-1 font-medium">Join the Community Channel</div>
            </div>
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
    <div className="flex items-start gap-2 flex-wrap">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground w-20 pt-1.5">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)} className={`chip text-[11px] ${value === o ? "chip-active" : ""}`}>{o}</button>
        ))}
      </div>
    </div>
  );
}
