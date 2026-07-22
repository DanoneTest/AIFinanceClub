import { useState, useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Home } from "lucide-react";
import { SearchOverlay } from "./SearchOverlay";
import { AdminLogin } from "./admin/AdminLogin";
import { AdminPanel } from "./admin/AdminPanel";
import { FloatingIsland } from "./FloatingIsland";

const logo = "/logo.png";

const NAV = [
  { to: "/discover", label: "Discover", n: "1" },
  { to: "/upskill", label: "Upskill", n: "2" },
  { to: "/explore", label: "Explore & Build", n: "3" },
  { to: "/champions", label: "AI Champions", n: "4" },
] as const;

function Wordmark() {
  return (
    <span className="inline-flex items-baseline font-semibold tracking-tight text-foreground">
      <span>AI</span>
      <span className="mx-[1px] inline-block size-1.5 rounded-full bg-accent-blue translate-y-[-1px]" aria-hidden />
      <span>finance club</span>
    </span>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin_authenticated") === "true") {
      setAdminPanelOpen(true);
    }
  }, []);

  const handleAdminLoginSuccess = () => {
    setAdminLoginOpen(false);
    setAdminPanelOpen(true);
  };

  const handleAdminPanelClose = () => {
    setAdminPanelOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-14 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Finance Transformation</span>
              <Wordmark />
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-surface-2" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="px-2.5 py-1.5 rounded-full text-sm hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              aria-label="Home"
            >
              <Home className="size-4" />
            </Link>
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground bg-surface-2" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-1.5 rounded-full text-sm hover:text-foreground transition-colors"
              >
                <span className="text-muted-foreground/70 mr-1.5">{item.n}.</span>{item.label}
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
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground bg-surface-2" }} inactiveProps={{ className: "text-muted-foreground" }} className="px-3 py-1.5 rounded-full whitespace-nowrap inline-flex items-center gap-1"><Home className="size-3.5" /></Link>
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground bg-surface-2" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-1.5 rounded-full whitespace-nowrap"
              >
                <span className="opacity-60 mr-1">{item.n}.</span>{item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t mt-12">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-5 w-5 object-contain" />
            <span>Finance Transformation · </span><Wordmark />
          </div>
          <div className="flex items-center gap-4">
            <span> Designed for adoption.</span>
            <button onClick={() => setAdminLoginOpen(true)} className="text-xs opacity-30 hover:opacity-50">
              Admin
            </button>
          </div>
        </div>
      </footer>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AdminLogin open={adminLoginOpen} onClose={() => setAdminLoginOpen(false)} onSuccess={handleAdminLoginSuccess} />
      <AdminPanel open={adminPanelOpen} onClose={handleAdminPanelClose} />
    </div>
  );
}
