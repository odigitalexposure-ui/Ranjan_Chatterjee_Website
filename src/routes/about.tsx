import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/PageShell";
import { ProfileCard } from "@/components/ProfileCard";
import ranjan from "@/assets/ranjan.png.asset.json";
import arpan from "@/assets/arpan.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | RC All-In-One-Nexus" },
      { name: "description", content: "Meet the experts behind RC All-In-One-Nexus — Ranjan Chatterjee and Arpan Kumar Majumder, government-registered valuers with decades of expertise." },
      { property: "og:title", content: "About RC All-In-One-Nexus" },
      { property: "og:description", content: "Meet Ranjan Chatterjee and Arpan Kumar Majumder — decades of valuation & engineering leadership." },
    ],
  }),
  component: AboutPage,
});

const ranjanDesc = `A highly distinguished Master in Valuation from West Bengal State University, Science Graduate from University of Calcutta, Life Member of the Institution of Valuers (IOV), Delhi, and Government Registered Valuer under the Income Tax Department, with over 20 years of rich, multidisciplinary experience in valuation, asset assessment, and professional consultancy.

Having successfully completed more than 5,000 valuation cases with a cumulative valuation exceeding ₹5,000 Crore, the extensive valuation portfolio covers diverse sectors including industrial, commercial, residential, institutional, banking, financial, and other immovable assets.`;

const arpanDesc = `A highly distinguished Chartered Engineer (India), Fellow of the Institution of Engineers (India), B.E. in Mechanical Engineering and certified Registered Valuer specializing in Plant & Machinery under the Insolvency & Bankruptcy Board of India (IBBI), with over 36 years of rich, multidisciplinary experience in engineering, project management, and executive leadership across government and public sector undertakings.

Formerly the Chief Engineer with the Water Resources Investigation and Development Department, Government of West Bengal. Extensive valuation portfolio covers diverse industrial assets including Jute manufacturing, Cold Storage, Ice Plant, Oxygen Plant, Chemical, Dairy, Food Processing, and Hotel & Hospitality sectors.

Leadership & Government Service:
• Water Resources (22+ yrs) — from Assistant Engineer to Chief Engineer, overseeing minor irrigation, deep tube wells, lift & solar irrigation schemes.
• Agricultural Marketing (8+ yrs) — technical authority for licensing all cold storage facilities in West Bengal.
• Bridge & Roof Co. (India) Ltd. (6 yrs) — supervised fabrication, erection & commissioning for ONGC, IOCL and SAIL.`;

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About RC All-In-One-Nexus"
        subtitle="Two lifetimes of expertise — in valuation, engineering, and public service — brought together under one trusted name."
      />
      <PageBody>
        <div className="space-y-28">
          <ProfileCard
            image={ranjan.url}
            name="Ranjan Chatterjee"
            title="Founder • Govt. Registered Valuer"
            qualifications="B.Sc. (C.U), MBA-REV (WBSU), Govt. Regd. Valuer (Income Tax Dept.), Life Member of IOV (Delhi)"
            description={ranjanDesc}
            contact={{
              phone: "+91 8240384694",
              email: "ranjanchatterjee1965@gmail.com",
              address: "3/106 A, Vivek Nagar, Jadavpur, Kolkata — 700 075",
            }}
          />
          <ProfileCard
            reverse
            image={arpan.url}
            name="Arpan Kumar Majumder"
            title="IBBI Registered Valuer • Chartered Engineer"
            qualifications="B.E. (Mechanical), Chartered Engineer (India), FIE, IBBI Registered Valuer — Plant & Machinery"
            description={arpanDesc}
            contact={{
              phone: "+91 9038243544 / 9432201519",
              email: "ak_majumdar04@yahoo.com",
              address: "AA-284, Salt Lake City, West Bengal — 700 064",
            }}
          />
        </div>
      </PageBody>
    </>
  );
}
