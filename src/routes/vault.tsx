import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/vault")({
  head: () => ({
    meta: [
      { title: "The Vault — Coffret 001 — YNKLV_" },
      {
        name: "description",
        content:
          "Coffret magnétique 2400g. Livre relié, hoodie modulaire, signal cap. Unboxing ritualisé.",
      },
      { property: "og:title", content: "The Vault — Coffret 001 — YNKLV_" },
      {
        property: "og:description",
        content: "Packaging luxe ritualisé. Édition numérotée à 500 exemplaires.",
      },
    ],
  }),
  component: Vault,
});

const steps = [
  {
    n: "01",
    t: "Le seuil",
    d: "Le coffret magnétique se referme avec un son grave. 2400 grammes. Silence imposé.",
  },
  {
    n: "02",
    t: "Le livre",
    d: "Posé en premier. Reliure cousue. Tranche noire. Le texte avant tout.",
  },
  {
    n: "03",
    t: "Le hoodie",
    d: "Plié main, bandeau de soie noire numéroté. Tissu Modular 480gsm.",
  },
  {
    n: "04",
    t: "Le signal",
    d: "Sous le tissu : la Signal Cap, et une carte gravée — votre numéro.",
  },
];

function Vault() {
  return (
    <Shell>
      <section className="border-b border-border/50 bg-grid">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
            /Vault — Édition 001
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-light tracking-[-0.04em] leading-[0.9] max-w-4xl">
            The Vault<span className="text-accent">.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-foreground/80 leading-relaxed">
            Un coffret magnétique de 2400 grammes. Trois objets. Un rituel.
            L'unboxing comme première lecture du manifeste.
          </p>
        </div>
      </section>

      {/* OBJECT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-square bg-gradient-to-br from-card to-background border border-border relative overflow-hidden"
        >
          <div className="absolute inset-8 border border-border/60 flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                Vault 001
              </p>
              <p className="font-display text-4xl mt-4 font-light">YNKLV_</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] mt-3 text-muted-foreground">
                N° __ / 500
              </p>
            </div>
          </div>
          <span className="absolute bottom-4 right-4 size-2 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent)]" />
        </motion.div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
            /Objet
          </p>
          <h2 className="font-display text-4xl font-light tracking-tight">
            Coffret magnétique noir mat
          </h2>
          <dl className="mt-10 space-y-3 text-sm">
            {[
              ["Poids total", "2400 g"],
              ["Dimensions", "260 × 320 × 80 mm"],
              ["Matériau", "Carton plein densité, finition soft-touch"],
              ["Sérigraphie", "Hot-foil noir mat sur noir"],
              ["Numérotation", "Manuelle, encre acid green"],
              ["Inclus", "Livre + Modular Hoodie + Signal Cap + Carte gravée"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 border-b border-border/50 pb-2">
                <dt className="text-muted-foreground col-span-1">{k}</dt>
                <dd className="font-mono text-xs col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
          <button className="mt-10 bg-accent text-accent-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:shadow-[0_0_40px_color-mix(in_oklab,var(--color-accent)_40%,transparent)] transition-all">
            Pre-order Vault — €490
          </button>
        </div>
      </section>

      {/* RITUAL */}
      <section className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-10">
            /Rituel d'ouverture
          </p>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-8 min-h-[240px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Étape {s.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
