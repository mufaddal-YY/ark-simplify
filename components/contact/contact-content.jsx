"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
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

const contactIconMap = {
  phone: FiPhone,
  whatsapp: FiPhone,
  email: FiMail,
};

const socialIconMap = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
};

const defaultContactContent = {
  eyebrow: "Let's Talk",
  title: "Reach the team that keeps complex work moving.",
  description:
    "Tell us what support you're looking for and we'll route your enquiry to the right team across construction, finance, or ProEstimate services.",
  directContactLabel: "Direct Contact",
  contactMethods,
  offices: officeLocations.map((office) => ({
    title: office.title,
    address: office.value,
  })),
  responseWindowLabel: "Response Window",
  responseWindowText: "We usually respond within one working day.",
  socialLinks,
  enquiryForm: {
    eyebrow: "Send an Enquiry",
    title: "Tell us what you need",
    description:
      "Share a few details and our team will follow up with the right next step.",
    serviceOptions,
    submitLabel: "Submit Enquiry",
  },
};

function normalizeContactMethod(method, index) {
  const Icon = method.icon ?? contactIconMap[method.type] ?? FiPhone;

  return {
    id: method._key ?? method.label ?? index,
    label: method.label,
    value: method.value,
    href: method.href,
    icon: Icon,
    target: method.href?.startsWith("http") ? "_blank" : method.target,
    rel: method.href?.startsWith("http") ? "noreferrer" : method.rel,
  };
}

function normalizeSocialLink(link, index) {
  const label = link.platform ?? link.label;

  return {
    id: link._key ?? label ?? index,
    label,
    href: link.href,
    icon: link.icon ?? socialIconMap[label] ?? FaLinkedinIn,
  };
}

export default function ContactContent({ data }) {
  const router = useRouter();
  const content = data ?? defaultContactContent;
  const methods = (content.contactMethods?.length
    ? content.contactMethods
    : defaultContactContent.contactMethods
  ).map(normalizeContactMethod);
  const offices = content.offices?.length
    ? content.offices
    : defaultContactContent.offices;
  const socials = (content.socialLinks?.length
    ? content.socialLinks
    : defaultContactContent.socialLinks
  ).map(normalizeSocialLink);
  const form = content.enquiryForm ?? defaultContactContent.enquiryForm;
  const options = form.serviceOptions?.length
    ? form.serviceOptions
    : defaultContactContent.enquiryForm.serviceOptions;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(formElement);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(
          result.error ?? "We could not submit your enquiry right now.",
        );
      }

      formElement.reset();
      router.push("/contact-us/thank-you");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your enquiry right now.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                {content.eyebrow ?? "Let's Talk"}
              </p>
              <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
                {content.title ?? defaultContactContent.title}
              </h2>
              <p className="max-w-xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
                {content.description ?? defaultContactContent.description}
              </p>
            </div>

            <div className="rounded-lg border border-white/8 bg-[#151827] p-6 text-white shadow-[0_28px_80px_rgba(8,12,20,0.18)] sm:p-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/62 uppercase">
                  {content.directContactLabel ??
                    defaultContactContent.directContactLabel}
                </p>
                <div className="space-y-3">
                  {methods.map(({ id, label, value, href, icon: Icon, target, rel }) => (
                    <Link
                      key={id}
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
              {offices.map((office) => (
                <article
                  key={office._key ?? office.title}
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
                        {office.address ?? office.value}
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
                    {content.responseWindowLabel ??
                      defaultContactContent.responseWindowLabel}
                  </p>
                  <p className="text-base font-semibold text-brand-secondary">
                    {content.responseWindowText ??
                      defaultContactContent.responseWindowText}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socials.map(({ id, label, href, icon: Icon }) => (
                  <Link
                    key={id}
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
                  {form.eyebrow ?? defaultContactContent.enquiryForm.eyebrow}
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary">
                  {form.title ?? defaultContactContent.enquiryForm.title}
                </h3>
                <p className="text-base leading-8 text-brand-secondary/72">
                  {form.description ??
                    defaultContactContent.enquiryForm.description}
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                      className="h-12 w-full appearance-none rounded-lg border border-brand-secondary/12 bg-white px-4 pr-12 text-sm font-medium text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {options.map((option) => (
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
                    required
                    placeholder="Tell us a little about your requirement."
                    className="w-full rounded-lg border border-brand-secondary/12 bg-white px-4 py-3 text-sm font-medium leading-7 text-brand-secondary outline-none transition-colors focus:border-brand-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brand-primary inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-base font-semibold"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : form.submitLabel ??
                      defaultContactContent.enquiryForm.submitLabel}
                </button>

                {submitError ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {submitError}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
