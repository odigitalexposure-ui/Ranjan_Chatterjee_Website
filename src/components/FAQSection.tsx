import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does All-In-One-Nexus provide?",
    answer:
      "All-In-One-Nexus provides valuation, engineering consultancy, project assessment, property valuation, industrial valuation, bank valuation, financial institution valuation, technical inspection, and multidisciplinary consultancy services across India.",
  },
  {
    question: "Who is Ranjan Chatterjee?",
    answer:
      "Ranjan Chatterjee is a Government Registered Valuer with extensive experience in valuation, engineering consultancy, and technical assessment. He provides professional valuation reports for banks, financial institutions, legal matters, taxation, industrial projects, and private clients.",
  },
  {
    question: "What types of properties can you value?",
    answer:
      "We provide valuation services for residential properties, commercial buildings, industrial plants, factories, warehouses, land, machinery, equipment, infrastructure projects, and specialized engineering assets.",
  },
  {
    question: "Do you provide valuation reports for banks and financial institutions?",
    answer:
      "Yes. We prepare professional valuation reports accepted by banks, financial institutions, NBFCs, legal authorities, and government organizations for loans, mortgages, financial assessments, and compliance purposes.",
  },
  {
    question: "Can you assist with engineering and technical consultancy?",
    answer:
      "Yes. Our consultancy covers engineering inspections, project evaluation, technical due diligence, infrastructure assessment, industrial consultancy, and engineering advisory services.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "Our office is located in Jadavpur, Kolkata, West Bengal. However, we undertake valuation and consultancy assignments across West Bengal and throughout India depending on project requirements.",
  },
  {
    question: "How long does it take to complete a valuation?",
    answer:
      "The completion time depends on the size and complexity of the property or project. Simple residential valuations may take only a few days, while large industrial or infrastructure projects may require additional time for inspection and documentation.",
  },
  {
    question: "What documents are required for a valuation?",
    answer:
      "Typically, clients should provide ownership documents, approved building plans, property tax records, land documents, identity proof, and any technical drawings or project-related information relevant to the valuation.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can contact us by phone, email, WhatsApp, or through the contact form on this website. We will discuss your requirements and guide you through the valuation process.",
  },
  {
    question: "How can I contact All-In-One-Nexus?",
    answer:
      "You can reach us at +91 8240384694, email us at ranjanchatterjee1965@gmail.com, or visit our office at 3/106 Vivek Nagar, Jadavpur, Kolkata – 700075.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-gold uppercase tracking-[0.35em] text-sm">
            Frequently Asked Questions
          </div>

          <h2 className="font-display text-5xl mt-4 gold-text">Everything You Need to Know</h2>

          <p className="mt-5 text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most commonly asked questions regarding our
            valuer, engineering consultancy, property assessment, and professional advisory
            services.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="rounded-2xl bg-card/60 gold-border overflow-hidden backdrop-blur"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-7 py-6 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="text-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-7 pb-6 text-muted-foreground leading-8">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
