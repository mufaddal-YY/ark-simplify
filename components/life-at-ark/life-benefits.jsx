import {
  Award,
  Building2,
  HeartPulse,
  MapPinned,
  MessageSquareText,
  Network,
  PartyPopper,
  Scale,
  TrendingUp,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    title: "Growth",
    description:
      "We are growing steadily and scaling towards new milestones, creating an environment where employees regularly gain exposure to new responsibilities, challenges, and opportunities that support both personal and professional growth.",
    icon: TrendingUp,
  },
  {
    title: "Work/Life Balance",
    description:
      "At ARK Simplifiq Private Limited, we value the impact our employees create more than the hours they spend at work. We encourage a healthy work-life balance through a flexible, supportive, and result-oriented environment.",
    icon: Scale,
  },
  {
    title: "Vibrant Office",
    description:
      "Our workplace is designed to provide a comfortable and positive atmosphere that supports productivity and well-being. With a welcoming workspace, collaborative culture, and pantry facilities, we ensure employees feel motivated and valued every day.",
    icon: Building2,
  },
  {
    title: "Performance Incentives",
    description:
      "We recognize and reward excellence. Employees are offered performance-based variable incentives that reflect their individual contributions, achievements, and overall impact on business success.",
    icon: Trophy,
  },
  {
    title: "Events and Celebrations",
    description:
      "We believe in working hard and celebrating achievements together. Regular team outings, quarterly parties, and festive celebrations help create a fun, engaging, and connected workplace culture.",
    icon: PartyPopper,
  },
  {
    title: "Relocation Allowance",
    description:
      "We understand that relocating can be challenging. To make the transition smoother, we provide relocation support and allowances for eligible employees joining us from different locations.",
    icon: MapPinned,
  },
  {
    title: "Health Benefits",
    description:
      "Employee wellness is important to us. We provide health insurance coverage and support initiatives that help employees maintain their overall well-being.",
    icon: HeartPulse,
  },
  {
    title: "No Hierarchy Structure",
    description:
      "We follow an open and collaborative work culture with a flat organizational structure. We believe in leadership through ideas and teamwork, fostering transparency and easy communication across all levels.",
    icon: Network,
  },
  {
    title: "Spot Award",
    description:
      "Outstanding performance deserves recognition. Our quarterly Spot Award program rewards top performers with appreciation and cash incentives for their exceptional contributions.",
    icon: Award,
  },
  {
    title: "Career Development Discussions",
    description:
      "We are committed to helping our employees grow. Regular career development discussions are conducted to understand goals, guide progress, and create opportunities for long-term success.",
    icon: MessageSquareText,
  },
];

export default function LifeBenefits() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            Benefits
          </p>
          <h2 className="text-4xl font-semibold text-brand-secondary lg:text-5xl">
            Benefits at ARK
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-lg border border-brand-secondary/10 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] sm:p-7"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-secondary/10 bg-brand-surface text-brand-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div className="h-px w-14 bg-brand-primary" />
                  <h3 className="text-xl font-semibold text-brand-secondary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-7 text-brand-secondary/72 sm:text-base">
                    {benefit.description}
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
