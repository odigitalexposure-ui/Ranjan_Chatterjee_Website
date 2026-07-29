import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { PageHeader, PageBody } from "@/components/PageShell";
import { GalleryCard } from "@/components/GalleryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { team } from "@/lib/team";

// Import project showcase images
import siteVisitRseDesk from "../assets/site_visit_rse_desk.jpg";
import siteVisitRseModel from "../assets/site_visit_rse_model.jpg";
import siteVisitConstruction from "../assets/site_visit_construction.jpg";
import projectTower from "../assets/project_tower.jpg";
import siteVisitSkygaze from "../assets/site_visit_skygaze.jpg";
import siteVisitOrangeTarp from "../assets/site_visit_orange_tarp.jpg";
import siteVisitScaffolding from "../assets/site_visit_scaffolding.jpg";
import projectModernComplex from "../assets/project_modern_complex.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | All-In-One-Nexus" },
      { name: "description", content: "Meet the people behind All-In-One-Nexus and see our portfolio of valuations, site visits, and inspections." },
      { property: "og:title", content: "Gallery | All-In-One-Nexus" },
      { property: "og:description", content: "The team and projects behind our valuation and consultancy practice." },
    ],
  }),
  component: GalleryPage,
});

const projectImages = [
  {
    src: siteVisitRseDesk,
    title: "Site Inspection - RISE Project Valuation Report",
    description: "Valuation inspection conducted on-site at the RSE Sports Republic office and sports complex.",
  },
  {
    src: siteVisitRseModel,
    title: "Project Model Inspection - Project Valuation Report",
    description: "Technical review and valuation assessment of the upcoming RSE Sports Republic masterplan model.",
  },
  {
    src: siteVisitSkygaze,
    title: "Project Model Review - Merlin Skygaze Project Valuation Report",
    description: "Inspection of the high-rise Skygaze residential project scale model during planning and advisory phase.",
  },
  {
    src: projectTower,
    title: "Asset Valuation - Residential Skyscraper",
    description: "Comprehensive valuation and site analysis of a newly constructed modern multi-story residential building.",
  },
  {
    src: siteVisitConstruction,
    title: "On-Site Valuation - Atmosphere Flat Valuation Report",
    description: "Inspection and progress assessment at a major real estate development site for valuation purposes.",
  },
  {
    src: siteVisitOrangeTarp,
    title: "Structural Valuation - Project Inspection",
    description: "Ongoing inspection of reinforcement steel and foundation work at a residential project site.",
  },
  {
    src: siteVisitScaffolding,
    title: "On-Site - Project Inspection",
    description: "Physical inspection of structural progress, brickwork, and scaffolding of a multi-story housing project.",
  },
  {
    src: projectModernComplex,
    title: "Asset Valuation - Ambuja Utalika Flat Valuation",
    description: "Completed valuation of a premium high-rise residential complex, including common facilities and parking areas.",
  },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Gallery"
        subtitle="Meet the specialists behind All-In-One-Nexus. Tap any card to view the full profile."
      />
      
      <PageBody>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((p, i) => (
            <GalleryCard key={p.name} person={p} index={i} onlyImage={true} />
          ))}
        </div>
      </PageBody>

      <PageBody>
        <div id="projects" className="pt-16 border-t border-gold/15 space-y-12">
          <SectionHeading
            eyebrow="On-Site Portfolio"
            title="Projects & Site Visits"
            subtitle="Glance at some of our actual on-site inspections, valuations, and masterplan reviews."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((img, i) => (
              <ProjectImageCard key={i} img={img} index={i} />
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
}

function ProjectImageCard({ img, index }: { img: typeof projectImages[0]; index: number }) {
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
