"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const contactMethods = [
  {
    label: "US Contact",
    value: "+1 (312) 380-0712",
    href: "tel:+13123800712",
    icon: FiPhone,
  },
  {
    label: "India Contact",
    value: "+91 8668473798",
    href: "https://wa.me/918668473798",
    icon: FiPhone,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Email",
    value: "info@arksimplify.com",
    href: "mailto:info@arksimplify.com",
    icon: FiMail,
  },
];

const officeLocations = [
  {
    title: "Head Office",
    value: "Block 4, Gujar wada, Kothi road, Mahal, Nagpur - 440002",
  },
  {
    title: "Branch Office",
    value:
      "481, Second Floor, New Nandanvan Layout, Nandanvan, Nagpur, 440024",
  },
];
// 
// 
// 

const serviceOptions = [
  "Construction Support",
  "Finance Support",
  "General Enquiry",
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

export default function ContactContent() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSuccessOpen(true);
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                Let&apos;s Talk
              </p>
              <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
                Reach the team that keeps complex work moving.
              </h2>
              <p className="max-w-xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
                Tell us what support you&apos;re looking for and we&apos;ll route
                your enquiry to the right team across construction, finance, or
                ProEstimate services.
              </p>
            </div>

            <div className="rounded-lg border border-white/8 bg-[#151827] p-6 text-white shadow-[0_28px_80px_rgba(8,12,20,0.18)] sm:p-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/62 uppercase">
                  Direct Contact
                </p>
                <div className="space-y-3">
                  {contactMethods.map(({ label, value, href, icon: Icon, target, rel }) => (
                    <Link
                      key={label}
                      href={href}
                      target={target}
                      rel={rel}
                      className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/6 px-4 py-4 transition-all duration-300 hover:border-white/18 hover:bg-white/9"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="space-y-1">
                        <span className="block text-xs font-semibold tracking-[0.14em] text-white/58 uppercase">
                          {label}
                        </span>
                        <span className="block text-base font-semibold text-white">
                          {value}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {officeLocations.map((office) => (
                <article
                  key={office.title}
                  className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-5 shadow-[0_18px_46px_rgba(54,59,79,0.06)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-secondary/12 bg-white text-brand-primary">
                      <FiMapPin className="h-4 w-4" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-brand-secondary">
                        {office.title}
                      </h3>
                      <p className="text-sm leading-7 text-brand-secondary/72">
                        {office.value}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-brand-secondary/10 bg-white p-5 shadow-[0_18px_46px_rgba(54,59,79,0.05)] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-secondary/12 bg-brand-surface text-brand-primary">
                  <FiClock className="h-4 w-4" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-[0.14em] text-brand-secondary/52 uppercase">
                    Response Window
                  </p>
                  <p className="text-base font-semibold text-brand-secondary">
                    We usually respond within one working day.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/12 bg-brand-surface text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-4 shadow-[0_26px_70px_rgba(54,59,79,0.08)] sm:p-6 lg:p-7">
            <div className="rounded-lg border border-white/80 bg-white p-5 sm:p-6 lg:p-7">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                  Send an Enquiry
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary">
                  Tell us what you need
                </h3>
                <p className="text-base leading-8 text-brand-secondary/72">
                  Share a few details and our team will follow up with the
                  right next step.
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-brand-secondary"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="h-12 w-full rounded-lg border border-brand-secondary/12 bg-white px-4 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-company"
                      className="text-sm font-semibold text-brand-secondary"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      className="h-12 w-full rounded-lg border border-brand-secondary/12 bg-white px-4 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-semibold text-brand-secondary"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="h-12 w-full rounded-lg border border-brand-secondary/12 bg-white px-4 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-designation"
                      className="text-sm font-semibold text-brand-secondary"
                    >
                      Designation
                    </label>
                    <input
                      id="contact-designation"
                      name="designation"
                      type="text"
                      placeholder="Your designation"
                      className="h-12 w-full rounded-lg border border-brand-secondary/12 bg-white px-4 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-semibold text-brand-secondary"
                  >
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg border border-brand-secondary/12 bg-white px-4 pr-12 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-secondary/52">
                      <FiArrowUpRight className="h-4 w-4 rotate-45" />
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-brand-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    placeholder="Tell us a little about your requirement."
                    className="w-full rounded-lg border border-brand-secondary/12 bg-white px-4 py-3 text-sm font-medium leading-7 text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-brand-primary inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-base font-semibold"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isSuccessOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-secondary/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-[0_30px_100px_rgba(8,12,20,0.28)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                <FiCheckCircle className="h-6 w-6" />
              </span>
              <button
                type="button"
                aria-label="Close thank you message"
                onClick={() => setIsSuccessOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-secondary/12 text-brand-secondary/62 transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <h3
                id="enquiry-success-title"
                className="text-2xl font-semibold tracking-[-0.03em] text-brand-secondary"
              >
                Thank you for your enquiry.
              </h3>
              <p className="text-base leading-7 text-brand-secondary/72">
                Your form has been submitted successfully. Our team will get in
                touch with you soon.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex break-all text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
                onClick={() => setIsSuccessOpen(false)}
              >
                https://www.arksimplify.com/contact-us
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsSuccessOpen(false)}
              className="btn-brand-primary mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
