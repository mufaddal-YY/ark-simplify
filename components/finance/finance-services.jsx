const financeServices = [
  {
    title: "Bookkeeping",
    description:
      "Maintaining accurate, up-to-date financial records that teams can rely on for reporting and decision-making.",
  },
  {
    title: "Procurement Solutions",
    description:
      "Supporting purchasing workflows with better control, documentation, and visibility across vendors and spend.",
  },
  {
    title: "Inventory Management Solutions",
    description:
      "Helping businesses track, manage, and reconcile inventory with clarity across systems and reporting.",
  },
  {
    title: "Invoicing",
    description:
      "Managing invoicing workflows to ensure accuracy, timeliness, and alignment with financial records.",
  },
];

function FinanceVideoCard({ label }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0f1a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/54 uppercase">
          {label}
        </p>
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-finance" />
      </div>
      <video
        src="/demo_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        className="aspect-video w-full object-cover"
      />
    </div>
  );
}

function FinanceServiceCard({ title, description }) {
  return (
    <article className="rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(0,185,32,0.14),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.48),rgba(10,12,20,0.94)_62%)] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] sm:p-7">
      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
          Finance Service
        </p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>
        <div className="h-px w-14 bg-brand-finance" />
        <p className="text-base leading-8 text-white/74 sm:text-lg">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function FinanceServices() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            Our Finance Services
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-5xl">
            Our Finance Services
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <FinanceVideoCard label="Screen Recorder 1" />
          <div className="grid gap-5 sm:grid-cols-2">
            <FinanceServiceCard {...financeServices[0]} />
            <FinanceServiceCard {...financeServices[1]} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <FinanceServiceCard {...financeServices[2]} />
            <FinanceServiceCard {...financeServices[3]} />
          </div>
          <div className="grid gap-5">
            <FinanceVideoCard label="Screen Recorder 2" />
            <FinanceVideoCard label="Screen Recorder 3" />
          </div>
        </div>
      </div>
    </section>
  );
}
