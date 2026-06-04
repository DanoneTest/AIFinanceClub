import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function WhatsNext({
  headline,
  subtitle,
  actions,
}: {
  headline: string;
  subtitle: string;
  actions: { to: string; label: string; primary?: boolean }[];
}) {
  return (
    <section className="container-page py-10">
      <div className="rounded-2xl border bg-surface px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">What's next</div>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">{headline}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {actions.map(a => (
            <Link
              key={a.to + a.label}
              to={a.to}
              className={
                a.primary !== false
                  ? "inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                  : "inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium hover:bg-surface-2 transition"
              }
            >
              {a.label}
              <ArrowRight className="size-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
