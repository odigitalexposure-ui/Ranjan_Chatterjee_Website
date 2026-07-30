import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
// import logo from "@/assets/rc-logo.png.asset.json";
import ranjan from "../assets/ranjan_chatterjee.png"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full gold-border px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {/*Govt. Registered*/} Valuer
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Precision in <span className="gold-text italic">Valuation</span>,
            <br /> Trust in Every Report.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            All-In-One-Nexus brings together decades of expertise in
            valuation, engineering consultancy services, legal services — delivering assessments
            trusted by banks, courts, corporates {/*and the Government of India*/}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="px-6 py-3 rounded-full bg-gold text-navy-deep font-medium hover:bg-gold-soft transition-all glow-gold">
              Our Services
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-full gold-border text-gold hover:bg-gold/10 transition-all">
              Request a Valuation →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "5,000+", v: "Cases" },
              { k: "₹5,000 Cr+", v: "Valued" },
              { k: "20+ Yrs", v: "Experience" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl gold-text">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent blur-3xl rounded-full" />
          <motion.img
            src={ranjan}
            alt="RC All-In-One-Nexus"
            className="relative w-full max-w-md rounded-3xl glow-gold"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
