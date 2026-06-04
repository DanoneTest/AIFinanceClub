import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SearchOverlay } from "./SearchOverlay";

const NAV = [
  { to: "/understand", label: "Understand AI in Finance" },
  { to: "/upskill", label: "Upskill" },
  { to: "/explore", label: "Explore & Build" },
  { to: "/champions", label: "AI Champions" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="inline-block size-6 rounded-md bg-navy" />
            <span className="hidden sm:inline">AI Finance Hub</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground bg-surface-2" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-1.5 rounded-full text-sm hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
        <nav className="lg:hidden border-t bg-background/90">
          <div className="container-page flex gap-1 overflow-x-auto py-2 text-sm">
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground bg-surface-2" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-1.5 rounded-full whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t mt-24">
        <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block size-5 rounded-md bg-navy" />
            <span>AI Finance Transformation Hub</span>
          </div>
          <div>Built for Finance. Designed for adoption.</div>
        </div>
      </footer>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
