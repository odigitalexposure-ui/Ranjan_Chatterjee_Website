import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/PageShell";
import { ProfileCard } from "@/components/ProfileCard";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryCard } from "@/components/GalleryCard";
import { team } from "@/lib/team";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | RC All-In-One-Nexus" },
      { name: "description", content: "Meet the experts behind RC All-In-One-Nexus — valuers, engineers and legal specialists with decades of combined expertise." },
      { property: "og:title", content: "About RC All-In-One-Nexus" },
      { property: "og:description", content: "Meet our team of government-registered valuers, chartered engineers and legal experts." },
    ],
  }),
  component: AboutPage,
});

const ranjan = team.find(
  (person) => person.name === "Ranjan Chatterjee"
);

const otherTeam = team.filter(
  (person) => person.name !== "Ranjan Chatterjee"
);

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About RC All-In-One-Nexus"
        subtitle="A team of government-registered valuers, chartered engineers and legal experts — decades of combined experience under one trusted name."
      />
      
      <PageBody>
        <div className="space-y-24">
          {ranjan && (
            <ProfileCard
              key={ranjan.name}
              reverse={false}
              image={ranjan.image}
              name={ranjan.name}
              title={ranjan.role}
              qualifications={ranjan.qualifications}
              description={ranjan.fullDesc}
              contact={ranjan.contact ?? {}}
            />
          )}

          <div className="pt-20 border-t border-gold/15 space-y-12">
            <SectionHeading
              eyebrow="Our Associates"
              title="Expert Professionals"
              subtitle="Meet the specialists behind RC All-In-One-Nexus. Tap Read more on any card for the full profile."
            />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherTeam.map((p, i) => (
                <GalleryCard key={p.name} person={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </PageBody>
    </>
  );
}



