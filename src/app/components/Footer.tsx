import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <span className="font-semibold tracking-tight">Clockout</span>
              <span className="text-accent">.</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Local automation installs. Fixed price. You own it.
            </p>
          </div>

          {/* NAP — Name / Address */}
          <div className="flex flex-col gap-2">
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Contact</div>
            <a href="mailto:hello@clockout.us" className="mono text-sm text-foreground hover:text-accent transition-colors">hello@clockout.us</a>
            <address className="not-italic mono text-xs text-muted-foreground mt-1 leading-relaxed">
              Roscoe, IL 61073<br />
              Roscoe · Rockford · Machesney Park · Loves Park<br />
              Belvidere · Rockton · South Beloit · Cherry Valley<br />
              Beloit & surrounding areas
            </address>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2 md:items-end">
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Site</div>
            <Link to="/agent" className="mono text-sm text-muted-foreground hover:text-accent transition-colors">Agent Arsenal</Link>
            <Link to="/blog" className="mono text-sm text-muted-foreground hover:text-accent transition-colors">Field Notes</Link>
            <a href="mailto:hello@clockout.us" className="mono text-sm text-muted-foreground hover:text-accent transition-colors">Email</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="mono text-xs text-muted-foreground">© 2026 Clockout. Roscoe, IL</p>
          <p className="mono text-xs text-muted-foreground">Automation installs for local contractors · Stateline area</p>
        </div>
      </div>
    </footer>
  );
}
