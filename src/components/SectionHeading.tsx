import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-gold mb-4">
          <span className="h-px w-8 bg-gold/60" /> {eyebrow} <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-tight">
        <span className="gold-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
