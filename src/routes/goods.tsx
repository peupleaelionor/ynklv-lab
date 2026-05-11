import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/goods")({
  head: () => ({
    meta: [
      { title: "Goods — Collection 001 — YNKLV_" },
      {
        name: "description",
        content: "Tech Tee Signature, Modular Hoodie, Signal Cap. Édition limitée.",
      },
      { property: "og:title", content: "Goods — Collection 001 — YNKLV_" },
      {
        property: "og:description",
        content: "Trois pièces. Tissu lourd. Édition numérotée.",
      },
    ],
  }),
  component: Goods,
});

const items = [
  {
    code: "001/A",
    name: "Tech Tee Signature",
    price: "€95",
    desc: "Coton organique 240gsm, sérigraphie wordmark. Coupe boxy.",
    weight: "240gsm",
  },
  {
    code: "001/B",
    name: "Modular Hoodie",
    price: "€280",
    desc: "Tissu lourd 480gsm. Capuche structurée. Poche kangourou démontable.",
    weight: "480gsm",
  },
  {
    code: "001/C",
    name: "Signal Cap",
    price: "€85",
    desc: "Sergé noir mat. Brodé acid green. Sangle métal vissée.",
    weight: "Wool blend",
  },
];

function Goods() {
  return (
    <Shell>
      <section className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
            /Collection 001
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-light tracking-[-0.04em] leading-[0.9]">
            Goods<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-foreground/80 leading-relaxed">
            Trois pièces. Conçues pour durer. Conçues pour tenir.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-px bg-border">
        {items.map((p, i) => (
          <motion.article
            key={p.code}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-background p-8 flex flex-col"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-card via-background to-card border border-border/60 flex items-center justify-center mb-6 relative overflow-hidden">
              <span className="font-display text-7xl font-extralight text-foreground/15 group-hover:text-accent/30 transition-colors">
                {p.code.split("/")[1]}
              </span>
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.code}
              </span>
              <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {p.weight}
              </span>
            </div>
            <h2 className="font-display text-2xl font-light tracking-tight">{p.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              {p.desc}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-sm">{p.price}</span>
              <button className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground hover:text-accent transition-colors">
                Pre-order →
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.1]">
            Acquérir l'ensemble dans
            <br />
            <span className="text-accent">The Vault</span> — coffret 001.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            La collection complète, le roman relié et la carte gravée — assemblés en
            coffret magnétique 2400g. Numéroté à 500 exemplaires.
          </p>
        </div>
      </section>
    </Shell>
  );
}
