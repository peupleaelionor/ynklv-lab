import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/site/Shell";
import { bookMeta, chapters, type Chapter } from "@/lib/book-data";

export const Route = createFileRoute("/livre")({
  head: () => ({
    meta: [
      { title: "Le Livre — Je ne sais pas ce qu'elles veulent — YNKLV_" },
      {
        name: "description",
        content:
          "Le roman en 18 chapitres. Table des matières, extraits et lecture intégrale.",
      },
      {
        property: "og:title",
        content: "Je ne sais pas ce qu'elles veulent — YNKLV_",
      },
      {
        property: "og:description",
        content: "Roman en 18 chapitres. Le rocher, l'océan, la nouvelle alliance.",
      },
    ],
  }),
  component: Livre,
});

function Livre() {
  const [active, setActive] = useState<Chapter | null>(null);

  return (
    <Shell>
      <section className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
              /Roman — 18 chapitres
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em] leading-[0.95]">
              {bookMeta.title}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              {bookMeta.subtitle}. {bookMeta.pages} pages. {bookMeta.edition}.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-accent text-accent-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:shadow-[0_0_40px_color-mix(in_oklab,var(--color-accent)_40%,transparent)] transition-all">
                Pre-order — €89
              </button>
              <a
                href="#toc"
                className="border border-border px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:border-accent hover:text-accent transition-colors"
              >
                Table des matières
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9 border border-border p-8 self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Colophon
            </p>
            <dl className="space-y-4 text-sm">
              {[
                ["Auteur", bookMeta.author],
                ["Pages", String(bookMeta.pages)],
                ["Format", "140 × 210 mm"],
                ["Reliure", "Cousue, dos toilé"],
                ["Édition", "Numérotée — 500 ex."],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-mono text-xs">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* TOC */}
      <section id="toc" className="max-w-7xl mx-auto px-6 py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-10">
          /Table des matières
        </p>

        <ul className="border-t border-border">
          {chapters.map((c, i) => (
            <motion.li
              key={c.number}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.3) }}
              className="border-b border-border"
            >
              <button
                onClick={() => setActive(c)}
                className="group w-full grid md:grid-cols-12 gap-6 items-baseline py-6 text-left hover:bg-card/40 transition-colors px-2"
              >
                <span className="md:col-span-1 font-mono text-xs text-accent">
                  {c.number}
                </span>
                <span className="md:col-span-4 font-display text-2xl font-light tracking-tight group-hover:text-accent transition-colors">
                  {c.title}
                </span>
                <span className="md:col-span-6 text-sm text-muted-foreground italic">
                  « {c.excerpt} »
                </span>
                <span className="md:col-span-1 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent transition-colors">
                  Lire →
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/90 backdrop-blur-md flex items-stretch md:items-center justify-center p-0 md:p-8"
            onClick={() => setActive(null)}
          >
            <motion.article
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-full overflow-y-auto bg-card border border-border p-8 md:p-16"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent"
              >
                Fermer ✕
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                Chapitre {active.number}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-light tracking-tight">
                {active.title}
              </h2>
              <p className="mt-6 italic text-muted-foreground border-l-2 border-accent pl-4">
                « {active.excerpt} »
              </p>
              <div className="mt-10 space-y-6 text-foreground/85 leading-[1.8] text-[1.05rem]">
                {active.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-12 pt-6 border-t border-border font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Extrait — Édition Vault 001
              </p>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </Shell>
  );
}
