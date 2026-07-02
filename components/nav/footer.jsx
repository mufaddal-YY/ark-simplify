import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import CertificateDialog from "@/components/nav/certificate-dialog";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Blog", href: "/blog" },
      { label: "Life at ARK", href: "/life-at-ark" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Construction", href: "/construction" },
      { label: "Finance", href: "/finance" },
    ],
  },
];

const contactItems = [
  {
    label: "ARK Finance (USA)",
    value: "+1 (312) 380-0712",
    href: "tel:+13123800712",
    icon: FiPhone,
  },
  {
    label: "ARK Construction (India)",
    value: "+91 8668473798",
    href: "https://wa.me/918668473798",
    icon: FiPhone,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Head Office",
    value: "Block 4, Gujar wada, Kothi road, Mahal, Nagpur - 440002",
    href: "/contact-us",
    icon: FiMapPin,
  },
  {
    label: "Branch Office",
    value: "481, Second Floor, New Nandanvan Layout, Nandanvan, Nagpur, 440024",
    href: "/contact-us",
    icon: FiMapPin,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: FaFacebookF,
  },
];

const certificates = [
  {
    label: "ISO 9001 Certificate",
    href: "/12238%20%20%20%209K%20%20%20%20%20ARKSIMPLIFIQ%20PRIVATE%20LIMITED.pdf",
    filename: "ARK-Simplify-ISO-9001-Certificate.pdf",
  },
  {
    label: "ISO 27001 Certificate",
    href: "/12239%20%20%20%2027K%20%20%20%20%20ARKSIMPLIFIQ%20PRIVATE%20LIMITED.pdf",
    filename: "ARK-Simplify-ISO-27001-Certificate.pdf",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-secondary/10 bg-white px-4 pt-16 pb-8 text-brand-secondary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-brand-secondary/10 pb-12 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo_main.png"
                alt="ARK Simplify"
                width={172}
                height={72}
                className="h-auto w-[148px]"
              />
            </Link>

            <p className="max-w-md text-base leading-8 text-brand-secondary/68">
              Structured construction, finance, and estimation support for
              teams that need dependable execution behind the scenes.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/12 bg-brand-surface text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-white hover:text-brand-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-brand-secondary/48 uppercase">
                ISO Certificates
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {certificates.map((certificate) => (
                  <CertificateDialog
                    key={certificate.label}
                    label={certificate.label}
                    href={certificate.href}
                    filename={certificate.filename}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.82fr_0.68fr_1.1fr]">
            {linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold tracking-[0.16em] text-brand-secondary/48 uppercase">
                  {group.title}
                </h3>
                <nav className="space-y-3" aria-label={`${group.title} links`}>
                  {group.links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="group flex items-center justify-between gap-3 rounded-lg px-0 py-1 text-base font-semibold text-brand-secondary transition-colors duration-300 hover:text-brand-primary"
                    >
                      <span>{label}</span>
                      <FiArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-brand-secondary/48 uppercase">
                Contact
              </h3>
              <div className="space-y-2">
                {contactItems.map(({ label, value, href, icon: Icon, target, rel }) => (
                  <Link
                    key={label}
                    href={href}
                    target={target}
                    rel={rel}
                    className="flex gap-2.5 rounded-lg border border-brand-secondary/10 bg-brand-surface px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/24 hover:bg-white"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-brand-primary shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.12em] text-brand-secondary/42 uppercase">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-xs font-semibold leading-5 text-brand-secondary">
                        {value}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm font-medium text-brand-secondary/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ARK Simplify. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-brand-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
