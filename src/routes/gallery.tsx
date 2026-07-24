import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/PageShell";
import { GalleryCard } from "@/components/GalleryCard";
import { team } from "@/lib/team";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | RC All-In-One-Nexus" },
      { name: "description", content: "Meet the people behind RC All-In-One-Nexus — valuers, engineers and legal specialists." },
      { property: "og:title", content: "Gallery | RC All-In-One-Nexus" },
      { property: "og:description", content: "The team behind our valuation and consultancy practice." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Gallery"
        subtitle="Meet the specialists behind RC All-In-One-Nexus. Tap Read more on any card for the full profile."
      />
      <PageBody>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((p, i) => (
            <GalleryCard key={p.name} person={p} index={i} />
          ))}
        </div>
      </PageBody>
    </>
  );
}
