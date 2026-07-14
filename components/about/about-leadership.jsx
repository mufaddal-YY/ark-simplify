import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const defaultLeaders = [
  {
    name: "Rohit Purohit",
    role: "MD Ark Simplify",
    imageUrl: "/leader.png",
  },
  {
    name: "Aditya Purohit",
    role: "CIO Ark Simplify",
    imageUrl: "/leader.png",
  },
  {
    name: "Amandeep Kaur",
    role: "Head Ark Finance",
    imageUrl: "/leader.png",
  },
  {
    name: "Keshav",
    role: "Business Development Manager, Ark Simplify",
    imageUrl: "/leader.png",
  },
  {
    name: "Gagandeep Kaur",
    role: "Head of Growth & Strategy, Ark Simplify",
    imageUrl: "/leader.png",
  },
];

const defaultContent = {
  eyebrow: "Leadership",
  title: "Leadership team",
  description:
    "The people leading Ark Simplify across delivery, finance, growth, and client relationships.",
  members: defaultLeaders,
};

function normalizeWhatsappUrl(member) {
  if (member.whatsappUrl) {
    return member.whatsappUrl;
  }

  const number = member.whatsappNumber?.replace(/[^\d]/g, "");
  return number ? `https://wa.me/${number}` : null;
}

export default function AboutLeadership({ data }) {
  const content = data ?? defaultContent;
  const leaders = content.members?.length ? content.members : defaultLeaders;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => {
            const whatsappUrl = normalizeWhatsappUrl(leader);
            const imageUrl = leader.imageUrl ?? "/leader.png";
            const showLinkedin =
              leader.showLinkedin !== false && Boolean(leader.linkedinUrl);
            const showWhatsapp =
              leader.showWhatsapp !== false && Boolean(whatsappUrl);

            return (
              <article
                key={leader._key ?? leader.name}
                className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
              >
                <div className="relative aspect-[4/4.8] bg-brand-surface">
                  <Image
                    src={imageUrl}
                    alt={leader.imageAlt ?? leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-brand-secondary">
                        {leader.name}
                      </h3>
                      <p className="text-sm leading-7 text-brand-secondary/70">
                        {leader.role}
                      </p>
                    </div>

                    {showLinkedin || showWhatsapp ? (
                      <div className="flex shrink-0 items-center gap-2">
                        {showLinkedin ? (
                          <Link
                            href={leader.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${leader.name} LinkedIn profile`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/12 bg-brand-surface text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
                          >
                            <FaLinkedinIn className="h-4 w-4" />
                          </Link>
                        ) : null}
                        {showWhatsapp ? (
                          <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`WhatsApp ${leader.name}`}
                            title={leader.whatsappNumber}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#25D366]/35 bg-[#25D366]/10 text-[#128C4A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                          >
                            <FaWhatsapp className="h-4 w-4" />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
