import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ranjan from "../assets/ranjan_chatterjee.jpg"

export type GalleryPerson = {
  image: string;
  name: string;
  role: string;
  shortDesc: string;
  fullDesc: string;
  qualifications?: string;
  contact?: { phone?: string; email?: string; address?: string };
};

export function GalleryCard({ 
  person, 
  index = 0,
  onlyImage = false
}: { 
  person: GalleryPerson; 
  index?: number;
  onlyImage?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        whileHover={{ y: -6 }}
        onClick={onlyImage ? () => setOpen(true) : undefined}
        className={`group relative flex flex-col overflow-hidden rounded-2xl gold-border bg-card/60 backdrop-blur ${onlyImage ? "cursor-pointer" : ""}`}
      >
        <div className="relative overflow-hidden aspect-[3/4] bg-navy-deep/25 flex items-center justify-center w-full">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          {onlyImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{person.role}</div>
              <h4 className="font-display text-xl gold-text leading-tight mt-1">{person.name}</h4>
              <div className="text-[10px] text-foreground/80 mt-1.5 flex items-center gap-1">
                <span>View full profile</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          )}
        </div>
        {!onlyImage && (
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
        )}
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
            <div className="w-full max-h-[400px] flex items-center justify-center bg-navy-deep/20 rounded-xl overflow-hidden">
              <img src={person.image} alt={person.name} className="w-full h-full max-h-[400px] object-contain" />
            </div>
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
