import Image from "next/image";

const projectManagers = [
  { name: "Pawan", image: "/leader.png" },
  { name: "Abhishek", image: "/leader.png" },
  { name: "Sanika", image: "/leader.png" },
  { name: "Mamta", image: "/leader.png" },
  { name: "Harsh", image: "/leader.png" },
  { name: "Vinny", image: "/leader.png" },
  { name: "Isha", image: "/leader.png" },
  { name: "Rutuja", image: "/leader.png" },
];

export default function AboutProjectManagementTeam() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Project management team
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            The team supporting day-to-day project coordination, follow-through,
            and delivery rhythm across Ark Simplify engagements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectManagers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_16px_36px_rgba(15,23,42,0.045)]"
            >
              <div className="relative aspect-[4/4.2] bg-brand-surface">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-brand-secondary">
                  {member.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
