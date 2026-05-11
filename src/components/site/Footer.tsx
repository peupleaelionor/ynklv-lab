export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-tight">
            YNKLV<span className="text-accent">_</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Creative Engineering Lab. Objets, textes et signaux pour ceux qui tiennent.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Index</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>/livre</li>
            <li>/vault</li>
            <li>/goods</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Signal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>contact@ynklv.lab</li>
            <li>Paris — Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© YNKLV_ — All signals reserved</span>
          <span className="text-accent">Noir — Édition 001</span>
        </div>
      </div>
    </footer>
  );
}
