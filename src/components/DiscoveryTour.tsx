import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

type Step = {
  id: string;
  targetSelector: string;
  title: string;
  lines: [string, string, string];
  navigateTo?: string;
};

const STEPS: Step[] = [
  {
    id: "hero",
    targetSelector: '[data-tour="hero"]',
    title: "Welcome to the AI.finance club",
    lines: [
      "This is your home for everything AI in Finance.",
      "Scroll down to see the Latest News and Upcoming Events.",
      "Use the tour below to explore every section in a minute.",
    ],
  },
  {
    id: "discover",
    targetSelector: '[data-tour="nav-discover"]',
    title: "Discover",
    lines: [
      "Your starting point — the ambition and the journey.",
      "Covers AI organisation, governance, and responsible AI.",
      "Learn where Finance is heading and why AI matters here.",
    ],
  },
  {
    id: "upskill",
    targetSelector: '[data-tour="nav-upskill"]',
    title: "Upskill",
    lines: [
      "Build your AI confidence with one clear learning path.",
      "Find AI Power Up, learning platforms, and quick tips.",
      "There's even a game to make learning stick.",
    ],
  },
  {
    id: "explore",
    targetSelector: '[data-tour="nav-explore"]',
    title: "Explore & Build",
    lines: [
      "Turn ideas into real impact for Finance teams.",
      "Browse AI capabilities and a searchable use-case library.",
      "Got an idea? Submit it with \"I Have an Idea\".",
    ],
  },
  {
    id: "champions",
    targetSelector: '[data-tour="nav-champions"]',
    title: "AI Champions",
    lines: [
      "Meet 400+ Champions making AI real across Finance.",
      "Find your local Champion and visit the Champion Corner.",
      "Ready to help others? Apply to join the community.",
    ],
  },
  {
    id: "search",
    targetSelector: '[data-tour="search"]',
    title: "Search",
    lines: [
      "Find anything across the club in seconds.",
      "Search learning, use cases, governance, and people.",
      "Your fastest route to the right resource.",
    ],
  },
  {
    id: "capsules",
    targetSelector: '[data-tour="hero-capsules"]',
    title: "Quick navigation capsules",
    lines: [
      "Every inner page has a hero with capsule buttons.",
      "Tap them to jump straight to sections on that page.",
      "They're your shortcut for fast navigation everywhere.",
    ],
    navigateTo: "/discover",
  },
  {
    id: "island",
    targetSelector: '[data-tour="island"]',
    title: "You're all set",
    lines: [
      "That's the whole club — you're ready to explore.",
      "Re-run this tour anytime from the island below.",
      "Have thoughts? Use Feedback to tell us anything.",
    ],
  },
];

type Rect = { top: number; left: number; width: number; height: number };

export function DiscoveryTour({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; placement: "top" | "bottom" }>({ top: 0, left: 0, placement: "bottom" });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const currentPath = useRouterState({ select: s => s.location.pathname });

  const step = STEPS[stepIdx];

  const computePosition = useCallback(() => {
    if (!step) return;
    const el = document.querySelector(step.targetSelector) as HTMLElement | null;
    if (!el) {
      setRect(null);
      return;
    }
    const r = el.getBoundingClientRect();
    const pad = 8;
    const spotRect: Rect = { top: r.top - pad, left: r.left - pad, width: r.width + pad * 2, height: r.height + pad * 2 };
    setRect(spotRect);

    const tooltipW = 340;
    const tooltipH = tooltipRef.current?.offsetHeight ?? 180;
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const spaceBelow = vh - (spotRect.top + spotRect.height);
    const placement: "top" | "bottom" = spaceBelow > tooltipH + 16 ? "bottom" : "top";
    let top = placement === "bottom" ? spotRect.top + spotRect.height + 12 : spotRect.top - tooltipH - 12;
    let left = spotRect.left + spotRect.width / 2 - tooltipW / 2;
    left = Math.max(12, Math.min(left, vw - tooltipW - 12));
    top = Math.max(12, Math.min(top, vh - tooltipH - 12));
    setTooltipPos({ top, left, placement });
  }, [step]);

  useEffect(() => {
    if (!open || !step) return;
    let cancelled = false;
    const run = async () => {
      if (step.navigateTo && currentPath !== step.navigateTo) {
        await navigate({ to: step.navigateTo });
      }
      // poll for target to appear (up to ~2s)
      for (let i = 0; i < 20 && !cancelled; i++) {
        const el = document.querySelector(step.targetSelector) as HTMLElement | null;
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => { if (!cancelled) computePosition(); }, 300);
          return;
        }
        await new Promise(r => setTimeout(r, 100));
      }
      if (!cancelled) computePosition();
    };
    run();
    return () => { cancelled = true; };
  }, [open, stepIdx, computePosition, step, navigate, currentPath]);

  useEffect(() => {
    if (!open) return;
    const handler = () => computePosition();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, true);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler, true);
    };
  }, [open, computePosition]);

  const next = useCallback(() => {
    if (stepIdx >= STEPS.length - 1) {
      onClose();
      setStepIdx(0);
    } else {
      setStepIdx(i => i + 1);
    }
  }, [stepIdx, onClose]);
  const prev = useCallback(() => setStepIdx(i => Math.max(0, i - 1)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); setStepIdx(0); }
      else if (e.key === "ArrowRight" || e.key === "Enter") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev, onClose]);

  useEffect(() => {
    if (!open) setStepIdx(0);
  }, [open]);

  if (!open) return null;

  const isLast = stepIdx === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-label="Discovery tour">
      {rect ? (
        <div
          className="fixed inset-0 pointer-events-auto transition-opacity duration-200"
          style={{ background: "transparent" }}
          onClick={() => { onClose(); setStepIdx(0); }}
        >
          <div
            className="absolute rounded-2xl pointer-events-none transition-all duration-300"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              boxShadow: "0 0 0 9999px rgba(10, 20, 40, 0.65), 0 0 0 3px rgba(59,130,246,0.6), 0 0 30px 6px rgba(59,130,246,0.35)",
            }}
          />
        </div>
      ) : (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { onClose(); setStepIdx(0); }} />
      )}

      <div
        ref={tooltipRef}
        className="fixed w-[340px] max-w-[92vw] rounded-2xl bg-white shadow-2xl border border-black/5 p-5 pointer-events-auto animate-fade-up"
        style={{ top: tooltipPos.top, left: tooltipPos.left }}
        onClick={e => e.stopPropagation()}
        aria-live="polite"
      >
        <button
          onClick={() => { onClose(); setStepIdx(0); }}
          className="absolute top-3 right-3 rounded-full p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          aria-label="Close tour"
        >
          <X className="size-4" />
        </button>
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent-blue font-semibold">Step {stepIdx + 1} / {STEPS.length}</div>
        <h4 className="mt-1 text-lg font-semibold text-navy tracking-tight pr-6">{step.title}</h4>
        <ul className="mt-2 space-y-1 text-sm text-slate-600 leading-relaxed">
          {step.lines.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-3.5" /> Previous
          </button>
          <button
            onClick={next}
            className="inline-flex items-center gap-1 rounded-full bg-navy text-navy-foreground px-4 py-1.5 text-xs font-medium hover:opacity-90"
          >
            {isLast ? "Finish" : (<>Next <ChevronRight className="size-3.5" /></>)}
          </button>
        </div>
      </div>
    </div>
  );
}
