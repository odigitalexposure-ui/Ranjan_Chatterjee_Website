import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/PageShell";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | All-In-One-Nexus" },
      { name: "description", content: "Comprehensive valuation and consultancy services — industrial, commercial, residential, plant & machinery, banking and statutory reports." },
      { property: "og:title", content: "Services | All-In-One-Nexus" },
      { property: "og:description", content: "Comprehensive valuation and consultancy services across all asset classes." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: "🏭", title: "Industrial Valuation", desc: "Factories, manufacturing units, warehouses and plants across sectors — Jute, Cold Storage, Ice Plant, Oxygen Plant, Chemical, Dairy and more." },
  { icon: "🏢", title: "Commercial Property", desc: "Offices, showrooms, retail spaces, hotels, hospitality and mixed-use commercial complexes." },
  { icon: "🏠", title: "Residential Assets", desc: "Apartments, bungalows, plots, and housing society valuations for personal, legal and investment needs." },
  { icon: "⚙️", title: "Plant & Machinery", desc: "IBBI-registered valuation for P&M class of assets — insolvency, restructuring and lender reporting." },
  { icon: "🏦", title: "Banking & Finance", desc: "Bank-panel valuations, mortgage security, NPA asset assessment and financial due diligence." },
  { icon: "📜", title: "Statutory Valuation", desc: "Income Tax, Wealth Tax, Capital Gains, Stamp Duty and other statutory compliance reports." },
  { icon: "🏛️", title: "Institutional Assets", desc: "Schools, hospitals, temples, trusts and government/public sector immovable property." },
  { icon: "📊", title: "Advisory & Consultancy", desc: "Feasibility studies, technical audits, project reports and multidisciplinary advisory." },
  { icon: "🧾", title: "Insolvency Support", desc: "Fair value & liquidation value reports under IBC for CIRP and resolution processes." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="A complete suite of valuation like immovable property, plant and machinery by Govt. Regd. Valuer , IBBI Valuer, engineering consultancy services along with legal consultancy services — precise, compliant and trusted by institutions across India."
      />
      <PageBody>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Diverse Portfolio, Deep Expertise"
            subtitle="From heavy industry to residential homes — trusted by clients across every sector."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Industrial", "Commercial", "Residential", "Institutional", "Banking", "Financial", "Jute Mills", "Cold Storage", "Chemical", "Food Processing", "Dairy", "Hotel & Hospitality", "Government", "Immovable Assets"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full gold-border text-sm text-foreground/85 bg-card/40">{tag}</span>
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
}
