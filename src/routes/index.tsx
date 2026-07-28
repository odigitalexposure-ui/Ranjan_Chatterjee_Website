import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import FAQSection from "@/components/FAQSection";

// Import project showcase images
import siteVisitRseDesk from "../assets/site_visit_rse_desk.jpg";
import siteVisitSkygaze from "../assets/site_visit_skygaze.jpg";
import projectTower from "../assets/project_tower.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: " All-In-One-Nexus |  Valuers in Kolkata" },
      { name: "description", content: "Trusted valuation, asset assessment and consultancy — 5,000+ cases and ₹5,000 Cr+ valued across industrial, commercial and residential sectors." },
      { property: "og:title", content: " All-In-One-Nexus |  Valuers" },
      { property: "og:description", content: "Precision in valuation, trust in every report." },
    ],
  }),
  component: HomePage,
});


const services = [
  { icon: "🏭", title: "Industrial Valuation", desc: "Plant, machinery, factories & manufacturing units." },
  { icon: "🏢", title: "Commercial Assets", desc: "Offices, retail, warehouses & mixed-use properties." },
  { icon: "🏠", title: "Residential", desc: "Apartments, villas, land & housing societies." },
  { icon: "🏦", title: "Banking & Finance", desc: "NPA & bank-panel valuations." },
  { icon: "⚙️", title: "Plant & Machinery", desc: "IBBI registered valuers for P&M class of assets." },
  { icon: "📜", title: "Statutory", desc: "Income Tax, Wealth Tax & Capital Gains reports." },
];

const homeProjects = [
  {
    src: projectTower,
    title: "Asset Valuation - Residential Skyscraper",
    description: "Comprehensive valuation and site analysis of a newly constructed modern multi-story residential building.",
  },
  {
    src: siteVisitRseDesk,
    title: "Site Inspection - RSE Sports Republic",
    description: "Valuation inspection conducted on-site at the RSE Sports Republic office and sports complex.",
  },
  {
    src: siteVisitSkygaze,
    title: "Project Model Review - Skygaze",
    description: "Inspection of the high-rise Skygaze residential project scale model during planning and advisory phase.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="A Nexus of Valuer Expertise"
          subtitle="Comprehensive, valuation by Govt regd.valuer, IBBI valuer, engineering consultancy and other services by Chartered Engineer, legal experts of High Court and Supreme Court under one roof."
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
              transition={{ delay: i * 0.15 }}
            >
              <div className="font-display text-5xl gold-text">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects & Site Visits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Featured Projects & Site Visits"
          subtitle="A preview of our on-site inspections, asset valuations, and structural reviews."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeProjects.map((img, i) => (
            <ProjectImageCard key={i} img={img} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            hash="projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-navy-deep font-medium hover:bg-gold-soft transition-all glow-gold"
          >
            <span>View More Projects</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

          {/* FAQ Section */}
          <FAQSection/>

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

function ProjectImageCard({ img, index }: { img: typeof homeProjects[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        whileHover={{ y: -6 }}
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-2xl gold-border bg-card/60 backdrop-blur cursor-pointer aspect-[4/3] flex items-center justify-center"
      >
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <h4 className="font-display text-lg gold-text leading-tight">{img.title}</h4>
          <p className="text-xs text-foreground/80 mt-1 line-clamp-2">{img.description}</p>
          <div className="text-[10px] text-gold mt-2 flex items-center gap-1">
            <span>View Full Image</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto gold-border bg-navy-deep">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl gold-text">{img.title}</DialogTitle>
            <DialogDescription className="text-sm text-foreground/80 mt-1">
              {img.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex items-center justify-center bg-navy-deep/20 rounded-xl overflow-hidden max-h-[70vh]">
            <img src={img.src} alt={img.title} className="w-full h-auto max-h-[65vh] object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
