import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Wrench, Users, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { SearchOverlay } from "@/components/SearchOverlay";
import { WhatsNext } from "@/components/WhatsNext";
import { news, events, faqs } from "@/lib/data";
import { useDynamicNews, useDynamicEvents } from "@/hooks/useLocalStorageCards";
const teamPhoto = "/ai-lympics-team.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI.finance — Finance Transformation" },
      { name: "description", content: "Built by Finance for Finance. Designed for adoption." },
      { property: "og:title", content: "AI.finance" },
      { property: "og:description", content: "Built by Finance for Finance. Designed for adoption." },
    ],
  }),
  component: Index,
});

const journeys = [
  { to: "/discover", n: "1", label: "Discover", subtitle: "Ambition, governance, journey.", icon: Sparkles },
  { to: "/upskill", n: "2", label: "Upskill", subtitle: "AI Boost, learning, tips.", icon: GraduationCap },
  { to: "/explore", n: "3", label: "Explore & Build", subtitle: "Capabilities, use cases, ideas.", icon: Wrench },
  { to: "/champions", n: "4", label: "AI Champions", subtitle: "400+ Champions across Finance.", icon: Users },
] as const;

function Index() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [newsIdx, setNewsIdx] = useState(0);
  const [showMoreEvents, setShowMoreEvents] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.id ?? null);
  const { cards: dynamicNews } = useDynamicNews();
  const { cards: dynamicEvents } = useDynamicEvents();

  const allNews = [...news, ...dynamicNews];
  const allEvents = [...events, ...dynamicEvents];
  const featured = allNews[newsIdx];
  const visibleEvents = showMoreEvents ? allEvents : allEvents.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-page pt-10 pb-10 md:pt-14 md:pb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] opacity-70 animate-fade-up">Finance Transformation</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight animate-fade-up">
            <span className="inline-flex items-baseline">
              <span>AI</span>
              <span className="mx-1 inline-block size-2.5 md:size-3 rounded-full bg-accent-blue translate-y-[-2px]" aria-hidden />
              <span className="lowercase">finance club</span>
            </span>
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-80 max-w-xl mx-auto animate-fade-up">
            Built by Finance for Finance.<br/>Designed for adoption.
          </p>
        </div>
      </section>

      {/* Journey cards — compact */}
      <section className="container-page py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map(j => {
            const Icon = j.icon;
            return (
              <Link
                key={j.to}
                to={j.to}
                className="group relative rounded-2xl border bg-card p-4 hover:shadow-elevated transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-accent-blue">{j.n}</span>
                  <Icon className="size-4 text-accent-blue" />
                </div>
                <h3 className="mt-2 text-base font-semibold tracking-tight">{j.label}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{j.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-navy group-hover:gap-2 transition-all">
                  Open <ArrowRight className="size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest News & Upcoming Events */}
      <section className="container-page py-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
          LATEST NEWS & UPCOMING EVENTS
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Latest News carousel */}
          <article className="rounded-2xl border bg-card p-5 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Latest news</h3>
              <Link to="/discover" className="text-xs text-accent-blue inline-flex items-center gap-1">All news <ArrowRight className="size-3" /></Link>
            </div>
            <div className="mt-3 rounded-xl h-40 bg-gradient-to-br from-navy to-accent-blue relative overflow-hidden flex items-end p-3" style={featured.imageUrl ? { backgroundImage: `url(${featured.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
              <span className="chip bg-card/95 text-foreground text-[11px]">{featured.tag}</span>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">{featured.date}</div>
            <h4 className="mt-1 font-semibold leading-snug">{featured.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{featured.summary}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                {allNews.map((_, i) => (
                  <button key={i} onClick={() => setNewsIdx(i)} className={`size-1.5 rounded-full transition-all ${i === newsIdx ? "bg-accent-blue w-4" : "bg-border"}`} aria-label={`News ${i+1}`} />
                ))}
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => setNewsIdx((newsIdx - 1 + allNews.length) % allNews.length)} className="rounded-full border px-2.5 py-1 text-xs inline-flex items-center gap-1 hover:bg-surface-2"><ChevronLeft className="size-3" /> Prev</button>
                <button onClick={() => setNewsIdx((newsIdx + 1) % allNews.length)} className="rounded-full bg-navy text-navy-foreground px-2.5 py-1 text-xs inline-flex items-center gap-1">Next <ChevronRight className="size-3" /></button>
              </div>
            </div>
          </article>

          {/* Upcoming Events */}
          <article className="rounded-2xl border bg-card p-5 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Upcoming events</h3>
              <button className="text-xs text-accent-blue inline-flex items-center gap-1">Add all <ArrowRight className="size-3" /></button>
            </div>
            <ul className="mt-2 divide-y">
              {visibleEvents.map(e => (
                <li key={e.id} className="py-3 flex items-start gap-4">
                  <div className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-center min-w-[48px]">
                    <div className="text-[10px] font-semibold text-accent-blue tracking-wider">{e.month}</div>
                    <div className="text-lg font-bold leading-none">{e.day}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{e.title}</div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="chip text-[10px] py-0.5">{e.type}</span>
                      <span>{e.meta}</span>
                    </div>
                    <button className="mt-1 text-xs text-accent-blue inline-flex items-center gap-1"></button>
                  </div>
                </li>
              ))}
            </ul>
            {allEvents.length > 3 && (
              <button onClick={() => setShowMoreEvents(v => !v)} className="mt-2 rounded-xl bg-surface-2 py-2 text-xs font-medium hover:bg-surface">
                ▼ {showMoreEvents ? "Show less" : "Show more events"}
              </button>
            )}
          </article>
        </div>
      </section>


      {/* FAQ */}
      <section className="container-page py-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
          Frequently asked questions
        </div>
        <div className="rounded-2xl border bg-card divide-y">
          {faqs.map(f => (
            <details key={f.id} open={openFaq === f.id} onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && setOpenFaq(f.id)} className="group p-4">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="text-accent-blue text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-3 text-center">
          <button onClick={() => setSearchOpen(true)} className="text-xs text-accent-blue">Search all FAQs →</button>
        </div>
      </section>

      {/* AI.finance Team */}
      <section className="container-page py-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
          AI.finance Team
        </div>
        <div className="rounded-2xl border bg-surface p-6 md:p-8 grid gap-6 md:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="inline-flex items-baseline">AI<span className="mx-0.5 inline-block size-1.5 rounded-full bg-accent-blue translate-y-[-1px]" />finance</span> Team
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The Finance Digital & AI team drives the transformation of Finance by enabling teams with digital and AI capabilities and scaling high-impact use cases.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              It acts as a central accelerator, combining strategy, tools, and community to boost productivity, insights, and decision-making across Finance.
            </p>
            <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
              <Mail className="size-3.5" /> Contact Us
            </button>
          </div>
          <img src={teamPhoto} alt="AI.finance club team" className="w-full h-auto rounded-xl object-cover shadow-elevated" />
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

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
