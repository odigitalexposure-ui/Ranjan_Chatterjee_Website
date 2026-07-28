import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHeader, PageBody } from "@/components/PageShell";
import ranjanSignboard from "../assets/ranjan_signboard.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | All-In-One-Nexus" },
      { name: "description", content: "Reach out to All-In-One-Nexus for valuation, engineering and consultancy services. Based in Kolkata, serving across India." },
      { property: "og:title", content: "Contact  All-In-One-Nexus" },
      { property: "og:description", content: "Request a valuation or consultation today." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  {
    name: "Ranjan Chatterjee",
    role: "Govt. Registered Valuer",
    phone: "+91 8240384694",
    email: "ranjanchatterjee1965@gmail.com",
    address: "3/106 A, Vivek Nagar, Jadavpur, Kolkata — 700 075",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We're here to help with your valuation, consultancy or engineering needs. Reach out — we usually respond within 24 hours."
      />
      <PageBody>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cards.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl p-6 bg-card/60 gold-border"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold">{c.role}</div>
                <div className="font-display text-2xl mt-1">{c.name}</div>
                <div className="mt-4 space-y-2 text-sm text-foreground/85">
                  <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="block hover:text-gold">📞 {c.phone}</a>
                  <a href={`mailto:${c.email}`} className="block hover:text-gold break-all">✉ {c.email}</a>
                  <p className="text-muted-foreground">📍 {c.address}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden gold-border bg-card/60 backdrop-blur p-2 aspect-[4/3] flex items-center justify-center"
            >
              <img
                src={ranjanSignboard}
                alt="Ranjan Chatterjee registration signboard"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const form = new FormData(e.currentTarget);

                const name = form.get("name")?.toString() || "";
                const email = form.get("email")?.toString() || "";
                const phone = form.get("phone")?.toString() || "";
                const subject = form.get("subject")?.toString() || "";
                const message = form.get("message")?.toString() || "";

                const text = `*New Contact Form Enquiry*

              👤 Name: ${name}
              📧 Email: ${email}
              📞 Phone: ${phone}
              📌 Subject: ${subject}

              💬 Message:
              ${message}`;

                window.location.href =
                  `https://wa.me/918240384694?text=${encodeURIComponent(text)}`;

                setSent(true);
              }}
            className="lg:col-span-3 rounded-2xl p-8 bg-card/60 gold-border space-y-5"
          >
            <h3 className="font-display text-3xl gold-text">Send a Message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Subject" name="subject" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-gold/90">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg bg-navy-deep/60 gold-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Tell us about your valuation or consultancy requirement..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gold text-navy-deep font-medium hover:bg-gold-soft transition-all glow-gold"
            >
              {sent ? "✓ Message sent — thank you!" : "Send Message"}
            </button>
          </motion.form>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-2xl gold-border relative w-full h-[400px] bg-card/40"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3686.098256774808!2d88.37567557529837!3d22.50049637954316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMwJzAxLjgiTiA4OMKwMjInNDEuNyJF!5e0!3m2!1sen!2sin!4v1784962507310!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Office Location Map"
            className="w-full h-full opacity-90 focus:outline-none"
          />
        </motion.div>
      </PageBody>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-gold/90">{label}</label>
      <input
        type={type} name={name} required={required}
        className="mt-2 w-full rounded-lg bg-navy-deep/60 gold-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
    </div>
  );
}
