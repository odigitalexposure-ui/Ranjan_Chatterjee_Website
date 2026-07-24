import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader, PageBody } from "@/components/PageShell";
import ranjan from "@/assets/ranjan.png.asset.json";
import arpan from "@/assets/arpan.png.asset.json";
import logo from "@/assets/rc-logo.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | RC All-In-One-Nexus" },
      { name: "description", content: "A visual glimpse into RC All-In-One-Nexus — our team, our work and the assets we've valued across India." },
      { property: "og:title", content: "Gallery | RC All-In-One-Nexus" },
      { property: "og:description", content: "Moments from our journey in valuation and consultancy." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: ranjan.url, caption: "Ranjan Chatterjee — Founder" },
  { src: arpan.url, caption: "Arpan Kumar Majumder — Chartered Engineer" },
  { src: logo.url, caption: "RC All-In-One-Nexus" },
  { src: ranjan.url, caption: "In the field" },
  { src: arpan.url, caption: "Site inspection" },
  { src: logo.url, caption: "Our mark of trust" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Gallery"
        subtitle="Moments, people and projects that shape our story."
      />
      <PageBody>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl gold-border"
            >
              <img src={it.src} alt={it.caption} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-deep to-transparent">
                <span className="text-sm text-gold">{it.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </PageBody>
    </>
  );
}
