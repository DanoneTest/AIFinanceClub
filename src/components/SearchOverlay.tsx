import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { searchIndex, type ResultType } from "@/lib/data";
import { Search, X } from "lucide-react";

const TYPES: ResultType[] = ["News", "Tip", "Tool", "Use Case", "Champion", "Resource", "Event"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [activeTypes, setActiveTypes] = useState<ResultType[]>([]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return searchIndex.filter(item => {
      if (activeTypes.length && !activeTypes.includes(item.type)) return false;
      if (!term) return true;
      return (
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        (item.meta?.toLowerCase().includes(term) ?? false)
      );
    }).slice(0, 40);
  }, [q, activeTypes]);

  if (!open) return null;

  const toggleType = (t: ResultType) =>
    setActiveTypes(prev => (prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]));

  return (
    <div className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-md animate-fade-up" onClick={onClose}>
      <div
        className="mx-auto mt-20 max-w-3xl rounded-3xl bg-card shadow-elevated border overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-6 py-5 border-b">
          <Search className="size-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search news, tips, tools, use cases, resources, and champions…"
            className="flex-1 bg-transparent outline-none text-lg placeholder:text-muted-foreground"
          />
          <button onClick={onClose} className="rounded-full p-2 hover:bg-muted">
            <X className="size-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 px-6 py-4 border-b bg-surface">
          {TYPES.map(t => (
            <button
              key={t}
              onClick={() => toggleType(t)}
              className={`chip ${activeTypes.includes(t) ? "chip-active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-3">
          {results.length === 0 ? (
            <div className="px-6 py-12 text-center text-muted-foreground">No matches yet. Try a different keyword.</div>
          ) : (
            <ul className="divide-y">
              {results.map(r => (
                <li key={`${r.type}-${r.id}`}>
                  <Link
                    to={r.href}
                    onClick={onClose}
                    className="block px-4 py-4 rounded-2xl hover:bg-surface-2 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{r.type}</div>
                        <div className="font-medium text-foreground mt-0.5 truncate">{r.title}</div>
                        <div className="text-sm text-muted-foreground mt-1 line-clamp-2">{r.description}</div>
                      </div>
                      {r.meta && <span className="chip whitespace-nowrap">{r.meta}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
