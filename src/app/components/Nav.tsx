import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Nav() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();

  function gotoAnchor(hash: string) {
    setOpen(false);
    if (loc.pathname !== "/") {
      nav("/" + hash);
    } else {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function pageLink(to: string) {
    const active = loc.pathname === to;
    return `px-3 py-2 text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`;
  }

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group">
          <span className="font-semibold tracking-tight">Clockout</span>
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink onClick={() => gotoAnchor("#how-it-works")}>How It Works</NavLink>
          <NavLink onClick={() => gotoAnchor("#pricing")}>Pricing</NavLink>
          <Link to="/agent" className={pageLink("/agent")}>Agent</Link>
          <Link to="/blog" className={pageLink("/blog")}>Blog</Link>
          <div className="ml-2"><CTAButton variant="nav">Free Revenue Report</CTAButton></div>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 grid place-items-center text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            <MobileLink onClick={() => gotoAnchor("#how-it-works")}>How It Works</MobileLink>
            <MobileLink onClick={() => gotoAnchor("#pricing")}>Pricing</MobileLink>
            <Link
              to="/agent"
              onClick={() => setOpen(false)}
              className={`py-3 min-h-11 ${loc.pathname === "/agent" ? "text-accent" : "text-foreground"}`}
            >
              Agent
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className={`py-3 min-h-11 ${loc.pathname === "/blog" ? "text-accent" : "text-foreground"}`}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </button>
  );
}

function MobileLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-left py-3 min-h-11 text-foreground border-b border-border last:border-b-0">
      {children}
    </button>
  );
}
