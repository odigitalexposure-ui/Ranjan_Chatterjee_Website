import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-16 pb-14 border-b border-gold/15">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-6xl gold-text">{title}</h1>
        {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </section>
  );
}

export function PageBody({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6 py-20">{children}</div>;
}
