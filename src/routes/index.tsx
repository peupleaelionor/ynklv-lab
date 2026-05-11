import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shell } from "@/components/site/Shell";
import logoUrl from "@/assets/ynklv-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YNKLV_ — Creative Engineering Lab" },
      {
        name: "description",
        content:
          "YNKLV_ Creative Engineering Lab. Roman, Vault et collection 001. Objets pour ceux qui tiennent.",
      },
      { property: "og:title", content: "YNKLV_ — Creative Engineering Lab" },
      {
        property: "og:description",
        content: "Roman, Vault et collection 001. Pour ceux qui tiennent.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8"
          >
            <span className="inline-block size-1 rounded-full bg-accent mr-3 align-middle" />
            Édition 001 — Vault Drop / Q1 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,9vw,8rem)] leading-[0.9] tracking-[-0.04em] font-light max-w-5xl"
          >
            Je ne sais pas
            <br />
            ce qu'<span className="italic font-extralight">elles</span> veulent
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl"
          >
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
              Un roman en dix-huit chapitres. Le rocher, l'océan, la nouvelle alliance.
              Un manifeste silencieux pour ceux qui apprennent à tenir.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/livre"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-accent/90 transition-all hover:shadow-[0_0_40px_color-mix(in_oklab,var(--color-accent)_40%,transparent)]"
              >
                Lire le roman
                <span>→</span>
              </Link>
              <Link
                to="/vault"
                className="inline-flex items-center gap-3 border border-border px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:border-accent hover:text-accent transition-colors"
              >
                The Vault
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-8 right-6 hidden md:flex flex-col items-end gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Scroll
            </span>
            <span className="h-12 w-px bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </section>

      {/* MARQUEE / WORDMARK */}
      <section className="border-y border-border/50 py-10 overflow-hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 gap-8">
          <img src={logoUrl} alt="YNKLV_ Yankelevitch" className="h-16 md:h-24 opacity-90" />
          <p className="hidden md:block font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground max-w-xs text-right leading-relaxed">
            Yankelevitch / Creative Engineering Lab
            <br />
            Signature wordmark — ultra-thin hairline
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-10">
          /001 — Manifeste
        </p>
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-display text-4xl md:text-5xl tracking-tight font-light leading-[1.05]">
            Le rocher ne demande rien à la mer.
            <br />
            <span className="text-muted-foreground italic font-extralight">
              Et pourtant, c'est lui qu'elle cherche.
            </span>
          </h2>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              YNKLV_ est un laboratoire d'ingénierie créative. Nous ne fabriquons pas
              des produits. Nous fabriquons des postures.
            </p>
            <p>
              Un livre. Un coffret. Une collection. Trois objets, une seule grammaire :
              le féminin sauvage, la nouvelle alliance, la virilité du témoin.
            </p>
            <ul className="grid grid-cols-2 gap-3 pt-4">
              {["Rocher", "Océan", "Témoin", "Alliance"].map((w) => (
                <li
                  key={w}
                  className="border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:border-accent hover:text-accent transition-colors"
                >
                  /{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TROIS PILIERS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-10">
          /002 — Le triptyque
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              tag: "Texte",
              to: "/livre" as const,
              title: "Le Roman",
              desc: "Dix-huit chapitres. Une seule respiration. Lire en ligne ou commander l'édition Vault.",
              cta: "Ouvrir →",
            },
            {
              tag: "Objet",
              to: "/vault" as const,
              title: "The Vault",
              desc: "Coffret magnétique 2400g. Livre relié, hoodie modulaire, signal cap. Unboxing ritualisé.",
              cta: "Découvrir →",
            },
            {
              tag: "Tissu",
              to: "/goods" as const,
              title: "Collection 001",
              desc: "Tech Tee Signature, Modular Hoodie, Signal Cap. Édition limitée, numérotée à la main.",
              cta: "Acquérir →",
            },
          ].map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group bg-background p-10 hover:bg-card transition-colors flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                  /{p.tag}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {p.desc}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground group-hover:text-accent transition-colors mt-10">
                {p.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CITATION */}
      <section className="border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="font-display text-3xl md:text-5xl font-extralight italic leading-[1.2] tracking-tight">
            "Voir sans posséder.
            <br />
            Tenir sans étouffer.
            <br />
            <span className="text-accent not-italic font-light">Témoigner.</span>"
          </p>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            — Chap. V, Virilité du témoin
          </p>
        </div>
      </section>
    </Shell>
  );
}
