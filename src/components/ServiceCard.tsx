import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ServiceCard({ icon, title, desc, index = 0 }: {
  icon: ReactNode;
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative group rounded-2xl p-8 bg-card/60 backdrop-blur gold-border overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all" />
      <div className="relative">
        <div className="h-14 w-14 rounded-xl bg-gold/10 gold-border flex items-center justify-center text-gold text-2xl mb-5">
          {icon}
        </div>
        <h3 className="font-display text-2xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
