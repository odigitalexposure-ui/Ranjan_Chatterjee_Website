import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RC All-In-One-Nexus | Government Registered Valuers in Kolkata" },
      { name: "description", content: "Trusted valuation, asset assessment and consultancy — 5,000+ cases and ₹5,000 Cr+ valued across industrial, commercial and residential sectors." },
      { property: "og:title", content: "RC All-In-One-Nexus | Government Registered Valuers" },
      { property: "og:description", content: "Precision in valuation, trust in every report." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: "🏭", title: "Industrial Valuation", desc: "Plant, machinery, factories & manufacturing units." },
  { icon: "🏢", title: "Commercial Assets", desc: "Offices, retail, warehouses & mixed-use properties." },
  { icon: "🏠", title: "Residential", desc: "Apartments, villas, land & housing societies." },
  { icon: "🏦", title: "Banking & Finance", desc: "Loan security, NPA & bank-panel valuations." },
  { icon: "⚙️", title: "Plant & Machinery", desc: "IBBI registered valuers for P&M class of assets." },
  { icon: "📜", title: "Statutory", desc: "Income Tax, Wealth Tax & Capital Gains reports." },
];

function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="A Nexus of Valuation Expertise"
          subtitle="Comprehensive, government-registered valuation and consultancy services under one roof."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-gold/15">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { k: "20+", v: "Years Experience" },
            { k: "5,000+", v: "Valuation Cases" },
            { k: "₹5,000 Cr+", v: "Assets Valued" },
            { k: "Pan-India", v: "Reach" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-display text-5xl gold-text">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <SectionHeading
          eyebrow="Get Started"
          title="Ready for a Precise, Trusted Valuation?"
          subtitle="From industrial plants to residential property, our multidisciplinary team delivers reports you can rely on."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="px-8 py-3 rounded-full bg-gold text-navy-deep font-medium glow-gold hover:bg-gold-soft">Contact Us</Link>
          <Link to="/about" className="px-8 py-3 rounded-full gold-border text-gold hover:bg-gold/10">Meet the Team</Link>
        </div>
      </section>
    </>
  );
}
