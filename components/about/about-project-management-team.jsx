import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const defaultProjectManagers = [
  { name: "Pawan", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Abhishek", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Sanika", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Mamta", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Harsh", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Vinny", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Isha", role: "Project Management", imageUrl: "/leader.png" },
  { name: "Rutuja", role: "Project Management", imageUrl: "/leader.png" },
];

const defaultContent = {
  eyebrow: "Delivery team",
  title: "Project management team",
  description:
    "The team supporting day-to-day project coordination, follow-through, and delivery rhythm across Ark Simplify engagements.",
  members: defaultProjectManagers,
};

function normalizeWhatsappUrl(member) {
  if (member.whatsappUrl) {
    return member.whatsappUrl;
  }

  const number = member.whatsappNumber?.replace(/[^\d]/g, "");
  return number ? `https://wa.me/${number}` : null;
}

export default function AboutProjectManagementTeam({ data }) {
  const content = data ?? defaultContent;
  const projectManagers = content.members?.length
    ? content.members
    : defaultProjectManagers;

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-4">
          {content.eyebrow ? (
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {content.eyebrow}
            </p>
          ) : null}
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            {content.title ?? defaultContent.title}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            {content.description ?? defaultContent.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectManagers.map((member) => {
            const whatsappUrl = normalizeWhatsappUrl(member);
            const imageUrl = member.imageUrl ?? "/leader.png";
            const showLinkedin =
              member.showLinkedin !== false && Boolean(member.linkedinUrl);
            const showWhatsapp =
              member.showWhatsapp !== false && Boolean(whatsappUrl);

            return (
              <article
                key={member._key ?? member.name}
                className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_16px_36px_rgba(15,23,42,0.045)]"
              >
                <div className="relative aspect-[4/4.2] bg-brand-surface">
                  <Image
                    src={imageUrl}
                    alt={member.imageAlt ?? member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 p-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-brand-secondary">
                      {member.name}
                    </h3>
                    {member.role ? (
                      <p className="text-sm leading-6 text-brand-secondary/68">
                        {member.role}
                      </p>
                    ) : null}
                  </div>

                  {showLinkedin || showWhatsapp ? (
                    <div className="flex items-center gap-2">
                      {showLinkedin ? (
                        <Link
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} LinkedIn profile`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-secondary/12 bg-brand-surface text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
                        >
                          <FaLinkedinIn className="h-3.5 w-3.5" />
                        </Link>
                      ) : null}
                      {showWhatsapp ? (
                        <Link
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`WhatsApp ${member.name}`}
                          title={member.whatsappNumber}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#25D366]/35 bg-[#25D366]/10 text-[#128C4A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                        >
                          <FaWhatsapp className="h-3.5 w-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
