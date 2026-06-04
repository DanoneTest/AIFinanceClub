import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, Sparkles, GraduationCap, Wrench, Users } from "lucide-react";
import { SearchOverlay } from "@/components/SearchOverlay";
import { WhatsNext } from "@/components/WhatsNext";
import { news, tips, useCases, events } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Finance Transformation Hub" },
      { name: "description", content: "Understand, learn, build, and scale AI across Finance." },
      { property: "og:title", content: "AI Finance Transformation Hub" },
      { property: "og:description", content: "Understand, learn, build, and scale AI across Finance." },
    ],
  }),
  component: Index,
});

const journeys = [
  { to: "/understand", label: "Understand AI in Finance", subtitle: "Strategy, governance, news, and the AI community.", cta: "Explore the vision", icon: Sparkles },
  { to: "/upskill", label: "Upskill", subtitle: "Find your AI learning path and build practical skills.", cta: "Start learning", icon: GraduationCap },
  { to: "/explore", label: "Explore & Build", subtitle: "Discover capabilities, use cases, and submit your next idea.", cta: "Explore use cases", icon: Wrench },
  { to: "/champions", label: "AI Champions", subtitle: "Connect with the people helping Finance adopt AI.", cta: "Meet the Champions", icon: Users },
] as const;

function Index() {
  const [open, setOpen] = useState(false);
  const featured = useCases[0];
  const latestNews = news[0];
  const tip = tips[0];
  const upcoming = events.find(e => e.type === "Upcoming")!;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="container-page pt-24 pb-28 md:pt-36 md:pb-40 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">Finance Transformation</p>
          <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-foreground animate-fade-up">
            AI Finance Transformation Hub
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Understand, learn, build, and scale AI across Finance.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-10 mx-auto flex items-center gap-3 w-full max-w-2xl rounded-full glass-card px-6 py-4 text-left text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="size-5" />
            <span className="truncate">Search news, tips, tools, use cases, resources, and champions…</span>
          </button>
        </div>
      </section>

      {/* Journey cards */}
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {journeys.map(j => {
            const Icon = j.icon;
            return (
              <Link
                key={j.to}
                to={j.to}
                className="group relative overflow-hidden rounded-3xl border bg-card p-10 hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <Icon className="size-7 text-accent-blue" />
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">{j.label}</h3>
                <p className="mt-3 text-muted-foreground text-lg">{j.subtitle}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:gap-3 transition-all">
                  {j.cta} <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest from the Hub */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest from the Hub</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-3xl border bg-card p-7">
            <div className="chip">News</div>
            <h3 className="mt-4 font-semibold text-lg leading-snug">{latestNews.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{latestNews.summary}</p>
          </article>
          <article className="rounded-3xl border bg-card p-7">
            <div className="chip">Tip of the Month</div>
            <h3 className="mt-4 font-semibold text-lg leading-snug">{tip.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{tip.description}</p>
          </article>
          <article className="rounded-3xl border bg-card p-7">
            <div className="chip">Upcoming Event</div>
            <h3 className="mt-4 font-semibold text-lg leading-snug">{upcoming.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{upcoming.date} · {upcoming.description}</p>
          </article>
          <article className="rounded-3xl border bg-card p-7">
            <div className="chip">Featured Use Case</div>
            <h3 className="mt-4 font-semibold text-lg leading-snug">{featured.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{featured.problem}</p>
          </article>
        </div>
      </section>

      {/* Big closing statement */}
      <section className="container-page py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">One hub. Every AI Finance journey.</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            From first discovery to scaled use cases, the hub helps Finance teams move from curiosity to impact.
          </p>
        </div>
      </section>

      <WhatsNext
        headline="Where would you like to start?"
        subtitle="Pick a path that matches your role and ambition."
        actions={[
          { to: "/understand", label: "Understand AI", primary: true },
          { to: "/upskill", label: "Upskill", primary: false },
        ]}
      />

      <SearchOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
