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
    <section className="container-page py-28">
      <div className="rounded-[2rem] hero-gradient border p-12 md:p-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">What's next</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">{headline}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {actions.map(a => (
            <Link
              key={a.to + a.label}
              to={a.to}
              className={
                a.primary !== false
                  ? "inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                  : "inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-medium hover:bg-surface-2 transition"
              }
            >
              {a.label}
              <ArrowRight className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
