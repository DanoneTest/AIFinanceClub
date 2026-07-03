import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Copy, Check, X, Gamepad2 } from "lucide-react";
import { WhatsNext } from "@/components/WhatsNext";
import { tips, tools, resources, type Tip } from "@/lib/data";
import { pathways } from "@/lib/pathways";
import { useDynamicTips } from "@/hooks/useLocalStorageCards";

export const Route = createFileRoute("/upskill")({
  head: () => ({
    meta: [
      { title: "Upskill — AI.finance" },
      { name: "description", content: "AI Boost, learning platforms, and practical tips for Finance." },
    ],
  }),
  component: Upskill,
});

const PATHS = [
  {
    id: "discover",
    title: "Discover",
    desc: "Understand what Copilot is, what it can do, and how it applies to Finance.",
    bestFor: "People starting their Copilot journey.",
    outcomes: ["Understand Copilot capabilities", "Learn key concepts", "Identify simple opportunities in daily work"],
  },
  {
    id: "apply",
    title: "Apply",
    desc: "Use Copilot and M365 tools to improve everyday productivity.",
    bestFor: "People who want to use Copilot in daily Finance tasks.",
    outcomes: [
      "Use Copilot in Outlook, Excel, Word, Teams",
      "Write better prompts",
      "Save time on recurring tasks",
      "Understand when a license is required",
    ],
  },
  {
    id: "lead",
    title: "Lead",
    desc: "Propose use cases, shape initiatives, and help your team scale Copilot.",
    bestFor: "Future AI Champions and use case owners.",
    outcomes: ["Frame Copilot use cases", "Submit ideas", "Support adoption", "Join the Champion community"],
  },
];

function Upskill() {
  const [activeTool, setActiveTool] = useState<string>("All");
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [openPathway, setOpenPathway] = useState<string | null>(null);
  const [openTip, setOpenTip] = useState<Tip | null>(null);
  const activePathway = pathways.find(p => p.key === openPathway) ?? null;
  const { cards: dynamicTips } = useDynamicTips();

  const filteredTips = tips.filter(t => {
    if (activeTool !== "All" && t.tool !== activeTool) return false;
    if (q && !(t.title + t.description + (t.prompt ?? "")).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const filteredDynamicTips = dynamicTips.filter(t => {
    if (activeTool !== "All" && t.tool !== activeTool) return false;
    if (q && !(t.title + t.description).toLowerCase().includes(q.toLowerCase())) return false;
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
        <div className="container-page pt-10 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Build your AI confidence.</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            One Finance learning path, the right resources, and tips you can use today.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a href="#ai-boost" className="rounded-full bg-navy text-navy-foreground px-4 py-1.5 text-sm font-medium">AI Boost</a>
            <a href="#resources" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">Learning Platforms</a>
            <a href="#tips" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">Tips & Tricks</a>
            <a href="#play" className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">Play the Game</a>
          </div>
        </div>
      </section>

      {/* AI Boost — 3 paths */}
      <section id="ai-boost" className="container-page py-10">
        <div className="flex items-center gap-3">
          <Sparkles className="size-5 text-accent-blue" />
          <span className="chip chip-active">Beta</span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">AI Boost</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">A selected Finance learning path — choose the level that matches where you are today.</p>

        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {PATHS.map(p => (
            <div key={p.id} className="rounded-2xl border bg-card p-6 flex flex-col">
              <div className="text-[11px] uppercase tracking-[0.18em] text-accent-blue font-semibold">Path</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 text-sm">
                <span className="text-muted-foreground">Best for: </span>
                <span className="text-foreground">{p.bestFor}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm flex-1">
                {p.outcomes.map(o => (
                  <li key={o} className="flex gap-2">
                    <Check className="size-4 text-accent-blue shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setOpenPathway(p.id)} aria-expanded={openPathway === p.id} className="flex-1 rounded-full bg-navy text-navy-foreground px-3 py-1.5 text-xs font-medium inline-flex items-center justify-center gap-1">
                  Start <ArrowRight className="size-3" />
                </button>
                <button onClick={() => setShowQuiz(true)} className="rounded-full border px-3 py-1.5 text-xs font-medium">Quiz</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Platforms — 8 */}
      <section id="resources" className="container-page py-10">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Other Resources</div>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Learning platforms for Finance.</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {resources.map(r => (
            <a key={r.id} href="#" className="rounded-2xl border bg-card p-4 hover:shadow-soft transition flex flex-col">
              <div className="font-semibold text-sm">{r.name}</div>
              <p className="mt-1 text-xs text-muted-foreground flex-1">{r.description}</p>
              <span className="mt-3 text-xs text-accent-blue inline-flex items-center gap-1">Open <ArrowRight className="size-3" /></span>
            </a>
          ))}
        </div>
      </section>

      {/* Tips & Tricks — compact */}
      <section id="tips" className="container-page py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Tips & Tricks</div>
            <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Practical tips you can use today.</h2>
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search tips, prompts, tools…"
            className="w-full md:w-80 rounded-full border bg-card px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...tools].map(t => (
            <button key={t} onClick={() => setActiveTool(t)} className={`chip ${activeTool === t ? "chip-active" : ""}`}>{t}</button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTips.map(tip => (
            tip.link ? (
              <a key={tip.id} href={tip.link} target="_blank" rel="noopener noreferrer" className="rounded-xl border bg-card p-3 text-left hover:shadow-soft transition cursor-pointer block">
                <div className="flex items-center justify-between">
                  <span className="chip text-[10px] py-0.5">{tip.tool}</span>
                  {tip.prompt && <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Prompt</span>}
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug line-clamp-2">{tip.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{tip.description}</p>
              </a>
            ) : (
              <button key={tip.id} onClick={() => setOpenTip(tip)} className="rounded-xl border bg-card p-3 text-left hover:shadow-soft transition">
                <div className="flex items-center justify-between">
                  <span className="chip text-[10px] py-0.5">{tip.tool}</span>
                  {tip.prompt && <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Prompt</span>}
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug line-clamp-2">{tip.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{tip.description}</p>
              </button>
            )
          ))}
          {filteredDynamicTips.map(tip => (
            (tip as any).link ? (
              <a key={tip.id} href={(tip as any).link} target="_blank" rel="noopener noreferrer" className="rounded-xl border bg-card p-3 text-left hover:shadow-soft transition cursor-pointer block">
                <div className="flex items-center justify-between">
                  <span className="chip text-[10px] py-0.5">{tip.tool}</span>
                  {tip.type && <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{tip.type}</span>}
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug line-clamp-2">{tip.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{tip.description}</p>
              </a>
            ) : (
              <button key={tip.id} onClick={() => setOpenTip(tip as any)} className="rounded-xl border bg-card p-3 text-left hover:shadow-soft transition">
                <div className="flex items-center justify-between">
                  <span className="chip text-[10px] py-0.5">{tip.tool}</span>
                  {tip.type && <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{tip.type}</span>}
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug line-clamp-2">{tip.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{tip.description}</p>
              </button>
            )
          ))}
          {filteredTips.length === 0 && filteredDynamicTips.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-4 rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground">
              No tips match your search yet.
            </div>
          )}
        </div>
      </section>

      {/* Play the Game */}
      <section id="play" className="container-page py-10">
        <div className="rounded-2xl border bg-gradient-to-br from-navy to-accent-blue text-navy-foreground p-6 md:p-8">
          <div className="flex items-center gap-5 flex-wrap">
            <Gamepad2 className="size-10" />
            <div className="flex-1 min-w-[200px]">
              <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">Watch</div>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Play the Game</h2>
              <p className="mt-1 text-sm opacity-90">An interactive AI.finance challenge.</p>
            </div>
          </div>
          <div className="mt-5 relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1101636689?h=a95dad4483"
              title="AI.finance video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <WhatsNext
        headline="Ready to put AI into practice?"
        subtitle="Explore capabilities, use cases, and submit your own idea."
        actions={[{ to: "/explore", label: "Go to Explore & Build" }]}
      />

      {/* Tip Modal */}
      {openTip && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setOpenTip(null)}>
          <div onClick={e => e.stopPropagation()} className="bg-card border rounded-3xl max-w-lg w-full p-6 shadow-elevated">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="chip">{openTip.tool}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{openTip.title}</h3>
              </div>
              <button onClick={() => setOpenTip(null)} className="rounded-full p-1.5 hover:bg-muted"><X className="size-4" /></button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{openTip.description}</p>
            {openTip.prompt && (
              <>
                <div className="mt-4 rounded-xl bg-surface-2 p-3 text-xs font-mono">{openTip.prompt}</div>
                <button onClick={() => copy(openTip.id, openTip.prompt!)} className="mt-2 inline-flex items-center gap-1.5 text-xs text-navy">
                  {copied === openTip.id ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied === openTip.id ? "Copied" : "Copy prompt"}
                </button>
              </>
            )}
            {openTip.related && (
              <div className="mt-4">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Related</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">{openTip.related.map(r => <span key={r} className="chip text-[11px]">{r}</span>)}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowQuiz(false)}>
          <div onClick={e => e.stopPropagation()} className="bg-card border rounded-3xl max-w-md w-full p-6 shadow-elevated">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold tracking-tight">Find your AI Boost path</h3>
              <button onClick={() => setShowQuiz(false)} className="rounded-full p-1.5 hover:bg-muted"><X className="size-4" /></button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">A 4-question quiz that recommends Discover, Apply, or Lead. Content to be provided.</p>
            <button onClick={() => setShowQuiz(false)} className="mt-4 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm">Close</button>
          </div>
        </div>
      )}

      {/* Pathway Resources Modal */}
      {activePathway && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setOpenPathway(null)}>
          <div onClick={e => e.stopPropagation()} className="bg-card border rounded-3xl max-w-2xl w-full p-6 shadow-elevated max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-accent-blue font-semibold">Pathway</div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{activePathway.label} — Learning resources</h3>
              </div>
              <button onClick={() => setOpenPathway(null)} aria-label="Close" className="rounded-full p-1.5 hover:bg-muted"><X className="size-4" /></button>
            </div>
            <div className="mt-4 overflow-y-auto pr-1 -mr-1 space-y-2">
              {activePathway.resources.map(r => (
                <a
                  key={r.id}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border bg-surface p-3 hover:bg-surface-2 hover:border-accent-blue/40 transition"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-sm font-medium text-foreground group-hover:text-navy group-hover:underline">{r.title}</span>
                      {r.mustDo && (
                        <span className="chip chip-active text-[10px] py-0.5">Must do</span>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="chip text-[10px] py-0.5">{r.type}</span>
                      <span>{r.provider}</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border bg-card px-2 py-0.5 text-[11px] text-muted-foreground">{r.timeMinutes} min</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
