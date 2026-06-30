import { BadgeCheck, BookOpenText, Handshake, Users } from "lucide-react";

const workStyleCards = [
  {
    title: "Structured Work",
    description:
      "We value clear systems, thoughtful planning, and dependable execution in the work we take on.",
    icon: BookOpenText,
  },
  {
    title: "Shared Ownership",
    description:
      "People are trusted with real responsibilities and expected to follow through with consistency.",
    icon: BadgeCheck,
  },
  {
    title: "Collaborative Teams",
    description:
      "We work closely across functions, support one another, and keep communication straightforward and useful.",
    icon: Users,
  },
  {
    title: "Human Work Culture",
    description:
      "We take work seriously without losing warmth, respect, and the ability to enjoy building things together.",
    icon: Handshake,
  },
];

const iconMap = {
  book: BookOpenText,
  "badge-check": BadgeCheck,
  users: Users,
  handshake: Handshake,
};

const defaultWorkstyle = {
  eyebrow: "How We Work",
  title: "What it feels like to work here.",
  cards: workStyleCards,
};

function normalizeCard(card, index) {
  return {
    ...card,
    icon:
      typeof card.icon === "string"
        ? iconMap[card.icon] ?? BookOpenText
        : card.icon ?? workStyleCards[index]?.icon ?? BookOpenText,
  };
}

export default function LifeWorkstyle({ data }) {
  const section = data ?? defaultWorkstyle;
  const cards = (section.cards?.length
    ? section.cards
    : defaultWorkstyle.cards
  ).map(normalizeCard);

  return (
    <section className="relative overflow-hidden bg-[#151827] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />

      <div className="relative mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            {section.eyebrow ?? defaultWorkstyle.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
            {section.title ?? defaultWorkstyle.title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur-md sm:p-7"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                    <Icon className="h-5 w-5 text-brand-primary" strokeWidth={1.55} />
                  </div>
                  <div className="h-px w-14 bg-brand-primary" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
