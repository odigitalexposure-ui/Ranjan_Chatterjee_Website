import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export type GalleryPerson = {
  image: string;
  name: string;
  role: string;
  shortDesc: string;
  fullDesc: string;
  qualifications?: string;
  contact?: { phone?: string; email?: string; address?: string };
};

export function GalleryCard({ person, index = 0 }: { person: GalleryPerson; index?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col overflow-hidden rounded-2xl gold-border bg-card/60 backdrop-blur"
      >
        <div className="relative overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{person.role}</div>
          <h3 className="font-display text-2xl mt-1 gold-text">{person.name}</h3>
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1">{person.shortDesc}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-5 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-navy-deep text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Read more <span aria-hidden>→</span>
          </button>
        </div>
      </motion.article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto gold-border bg-navy-deep">
          <DialogHeader>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{person.role}</div>
            <DialogTitle className="font-display text-3xl gold-text">{person.name}</DialogTitle>
            {person.qualifications && (
              <DialogDescription className="italic text-muted-foreground">
                {person.qualifications}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="mt-2 space-y-4">
            <img src={person.image} alt={person.name} className="w-full h-64 object-cover rounded-xl" />
            <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{person.fullDesc}</p>
            {person.contact && (
              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-gold/20">
                {person.contact.phone && <Info label="Mobile" value={person.contact.phone} />}
                {person.contact.email && <Info label="Email" value={person.contact.email} />}
                {person.contact.address && <Info label="Address" value={person.contact.address} full />}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Info({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{label}</div>
      <div className="text-sm text-foreground/90 mt-1">{value}</div>
    </div>
  );
}
