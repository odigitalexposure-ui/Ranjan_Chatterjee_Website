import { GalleryCard } from "@/components/GalleryCard";
import { team } from "@/lib/team";

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((person, index) => (
          <GalleryCard key={person.name} person={person} index={index} />
        ))}
      </div>
    </section>
  );
}
