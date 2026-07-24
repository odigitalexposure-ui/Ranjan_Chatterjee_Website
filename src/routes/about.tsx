import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/PageShell";
import { ProfileCard } from "@/components/ProfileCard";
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

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About RC All-In-One-Nexus"
        subtitle="A team of government-registered valuers, chartered engineers and legal experts — decades of combined experience under one trusted name."
      />
      <PageBody>
        <div className="space-y-28">
          {team.map((p, i) => (
            <ProfileCard
              key={p.name}
              reverse={i % 2 === 1}
              image={p.image}
              name={p.name}
              title={p.role}
              qualifications={p.qualifications}
              description={p.fullDesc}
              contact={p.contact ?? {}}
            />
          ))}
        </div>
      </PageBody>
    </>
  );
}
