import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-baseline gap-0 ${className}`}>
      <span className="font-display text-xl font-light tracking-[0.2em] text-foreground">
        YNKLV
      </span>
      <span className="text-accent text-xl font-light leading-none translate-y-0.5">_</span>
    </Link>
  );
}
