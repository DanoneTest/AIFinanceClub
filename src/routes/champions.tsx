import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Play, MapPin, Calendar, Lock } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { champions, regions, functions, expertiseTags } from "@/lib/data";

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
  const [tag, setTag] = useState<string>("All");
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
      (tag === "All" || c.expertise.includes(tag)) &&
      (country === "All" || c.country === country)
    );
  }, [region, fn, tag, country]);

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

      {/* Champions Video Section */}
      <section className="container-page py-10">
        <div className="rounded-2xl border bg-card p-5">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Champions video</div>
          <div className="mt-3 rounded-xl aspect-video bg-gradient-to-br from-navy to-accent-blue flex items-center justify-center relative cursor-pointer">
            <div className="size-16 rounded-full bg-card text-foreground flex items-center justify-center">
              <Play className="size-6 ml-1" />
            </div>
            <span className="absolute bottom-3 left-4 text-xs text-white/80">Video placeholder · Champions in action</span>
          </div>
        </div>
      </section>

      {/* Champions by country */}
      <section className="container-page py-8">
        <div className="rounded-2xl border bg-surface p-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Champions by country</div>
              <h2 className="mt-1 text-xl font-semibold tracking-tight">Where our Champions are.</h2>
            </div>
            <span className="text-xs text-muted-foreground">Interactive map coming soon</span>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
            {Object.entries(byCountry).map(([c, n]) => (
              <button key={c} onClick={() => setCountry(country === c ? "All" : c)} className={`rounded-xl border bg-card p-3 text-left transition ${country === c ? "ring-2 ring-accent-blue" : "hover:bg-surface-2"}`}>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3" />{c}</div>
                <div className="mt-1 font-semibold">{n}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section id="directory" className="container-page py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Champion Directory</h2>
        <p className="mt-1 text-sm text-muted-foreground">Filter by country, region, function, or expertise.</p>

        <div className="mt-5 space-y-2">
          <FilterRow label="Country" options={["All", ...countries]} value={country} onChange={setCountry} />
          <FilterRow label="Region" options={["All", ...regions]} value={region} onChange={setRegion} />
          <FilterRow label="Function" options={["All", ...functions]} value={fn} onChange={setFn} />
          <FilterRow label="Expertise" options={["All", ...expertiseTags]} value={tag} onChange={setTag} />
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
                  <div><div className="text-muted-foreground">Country</div>{c.country}</div>
                  <div><div className="text-muted-foreground">Region</div>{c.region}</div>
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

      {/* March Campaign placeholder */}
      <section className="container-page py-8">
        <div className="rounded-2xl border bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-900/10 p-5 flex items-center gap-4 flex-wrap">
          <Calendar className="size-8 text-emerald-600" />
          <div className="flex-1 min-w-[200px]">
            <div className="text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Placeholder</div>
            <div className="font-semibold">March Campaign — AI Champion Month</div>
            <div className="text-sm text-muted-foreground">Content will be provided later.</div>
          </div>
          <button className="rounded-full bg-emerald-700 text-white px-4 py-2 text-sm font-medium">Learn more</button>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="container-page py-10">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Become an AI Champion.</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            You do not need to be technical. You need curiosity, practical thinking, and willingness to help others learn.
          </p>
          <ol className="mt-5 grid gap-3 md:grid-cols-4">
            {["Express interest", "Join onboarding", "Participate in learning and community sessions", "Share tips, use cases, and feedback"].map((s, i) => (
              <li key={s} className="rounded-xl bg-surface p-3">
                <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                <div className="mt-0.5 font-medium text-sm">{s}</div>
              </li>
            ))}
          </ol>
          <button className="mt-5 rounded-full bg-navy text-navy-foreground px-5 py-2 text-sm font-medium">Apply now</button>
        </div>
      </section>

      {/* Champion Corner */}
      <section className="container-page py-10">
        <div className="rounded-2xl border border-white/10 bg-black text-white p-6 md:p-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white">
            <Lock className="size-3.5" />
            For Champions
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-white">Champion Corner</h2>
          <p className="mt-2 text-white/80 max-w-2xl text-sm">
            A dedicated space with resources, playbooks, and community sessions.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Champion resources", "Upcoming community sessions", "Playbooks", "Templates", "Event materials", "Recognition / spotlight"].map(s => (
              <div key={s} className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-sm text-white">
                {s}
              </div>
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
