import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, Sparkles, GraduationCap, Wrench, Users } from "lucide-react";
import { SearchOverlay } from "@/components/SearchOverlay";
import { WhatsNext } from "@/components/WhatsNext";
import { news } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI.Finance Club — Finance Digital Transformation" },
      { name: "description", content: "Discover, upskill, build, and scale AI across Finance." },
      { property: "og:title", content: "AI.Finance Club" },
      { property: "og:description", content: "Discover, upskill, build, and scale AI across Finance." },
    ],
  }),
  component: Index,
});

const journeys = [
  { to: "/discover", label: "Discover", subtitle: "Vision, governance, and the responsible use of AI in Finance.", cta: "Discover the vision", icon: Sparkles },
  { to: "/upskill", label: "Upskill", subtitle: "AI Boost beta, resources, and practical tips.", cta: "Start learning", icon: GraduationCap },
  { to: "/explore", label: "Explore & Build", subtitle: "Capabilities, use cases, and submit your next idea.", cta: "Explore use cases", icon: Wrench },
  { to: "/champions", label: "AI Champions", subtitle: "Meet the people scaling AI across Finance.", cta: "Meet the Champions", icon: Users },
] as const;

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="container-page pt-16 pb-20 md:pt-24 md:pb-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">Finance Digital Transformation</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight text-foreground animate-fade-up">
            AI.Finance Club
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Discover, upskill, build, and scale AI across Finance.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-8 mx-auto flex items-center gap-3 w-full max-w-2xl rounded-full glass-card px-5 py-3 text-left text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="size-5" />
            <span className="truncate text-sm">Search news, tips, tools, use cases, resources, and champions…</span>
          </button>
        </div>
      </section>

      {/* Journey cards — four side by side */}
      <section className="container-page py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map(j => {
            const Icon = j.icon;
            return (
              <Link
                key={j.to}
                to={j.to}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-elevated transition-all hover:-translate-y-0.5"
              >
                <Icon className="size-6 text-accent-blue" />
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{j.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{j.subtitle}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:gap-2.5 transition-all">
                  {j.cta} <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* News — original V1 layout */}
      <section className="container-page py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Latest news</h2>
            <p className="mt-1 text-sm text-muted-foreground">What's happening across AI in Finance.</p>
          </div>
          <Link to="/discover" className="text-sm text-navy inline-flex items-center gap-1.5">View all <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {news.map(n => (
            <article key={n.id} className="rounded-2xl border bg-card p-5 hover:shadow-soft transition">
              <div className="flex items-center justify-between">
                <span className="chip">{n.tag}</span>
                <span className="text-[11px] text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="mt-3 font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About Our Team */}
      <section className="container-page py-12">
        <div className="rounded-2xl border bg-surface p-8 md:p-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">About our team</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Finance Digital Transformation</h2>
          </div>
          <p className="md:col-span-2 text-muted-foreground">
            We are a small team inside Finance, working hand-in-hand with FP&amp;A, Controlling, Reporting, Treasury, Tax, and IT to make
            AI practical, trusted, and adopted. Our mission: help every Finance team move from curiosity to measurable impact.
          </p>
        </div>
      </section>

      <WhatsNext
        headline="Where would you like to start?"
        subtitle="Pick the path that matches your role today."
        actions={[
          { to: "/discover", label: "Discover", primary: true },
          { to: "/upskill", label: "Upskill", primary: false },
        ]}
      />

      <SearchOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
