import Image from "next/image";

const leaders = [
  {
    name: "Rohit Purohit",
    role: "MD Ark Simplify",
    image: "/leader.png",
  },
  {
    name: "Aditya Purohit",
    role: "CIO Ark Simplfy",
    image: "/leader.png",
  },
  {
    name: "Amandeep Kaur",
    role: "Head Ark Finance",
    image: "/leader.png",
  },
  {
    name: "Keshav",
    role: "Business Development Manager, Ark Simplify",
    image: "/leader.png",
  },
  {
    name: "Gagandeep Kaur",
    role: "Head of Growth & Strategy, Ark Simplfy",
    image: "/leader.png",
  },
];

export default function AboutLeadership() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Leadership team
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            The people leading Ark Simplify across delivery, finance, growth, and client relationships.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
            >
              <div className="relative aspect-[4/4.8] bg-brand-surface">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-brand-secondary">
                  {leader.name}
                </h3>
                <p className="text-sm leading-7 text-brand-secondary/70">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
