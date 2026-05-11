import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/livre", label: "Livre" },
  { to: "/vault", label: "Vault" },
  { to: "/goods", label: "Goods" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Lab — 2026
          </span>
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)] animate-pulse" />
        </div>
      </div>
    </header>
  );
}
