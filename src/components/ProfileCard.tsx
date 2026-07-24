import { motion } from "motion/react";

export function ProfileCard({
  image,
  name,
  title,
  qualifications,
  description,
  contact,
  reverse = false,
}: {
  image: string;
  name: string;
  title: string;
  qualifications?: string;
  description: string;
  contact: { phone?: string; email?: string; address?: string };
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`grid md:grid-cols-5 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="md:col-span-2 relative group">
        <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative overflow-hidden rounded-3xl gold-border">
          <img src={image} alt={name} className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy-deep to-transparent">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">{title}</div>
            <div className="font-display text-3xl mt-1">{name}</div>
          </div>
        </div>
      </div>

      <div className="md:col-span-3 space-y-5">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Profile</div>
          <h3 className="font-display text-4xl mt-2 gold-text">{name}</h3>
          {qualifications && <p className="text-sm text-muted-foreground mt-2 italic">{qualifications}</p>}
        </div>
        <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{description}</p>
        <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-gold/20">
          {contact.phone && <InfoRow label="Mobile" value={contact.phone} />}
          {contact.email && <InfoRow label="Email" value={contact.email} />}
          {contact.address && <InfoRow label="Address" value={contact.address} full />}
        </div>
      </div>
    </motion.div>
  );
}

function InfoRow({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{label}</div>
      <div className="text-sm text-foreground/90 mt-1">{value}</div>
    </div>
  );
}
