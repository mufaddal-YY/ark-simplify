import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import {FaWhatsapp} from "react-icons/fa6";
import FloatingWhatsapp from "@/components/common/floating-whatsapp";
import {getWhatsappHref} from "@/lib/whatsapp";

export default function LandingThankYou({
  campaign,
  landingPath,
  logoSrc,
  logoAlt,
  accent,
  accentDark,
  accentSoft,
  shadow,
  eyebrow,
  title,
  description,
  phone,
  email = "enquiry@arksimplify.com",
}) {
  return (
    <main
      className="relative flex min-h-screen overflow-hidden bg-[#151827] px-4 py-8 text-white sm:px-6 lg:px-8"
      style={{
        "--campaign-accent": accent,
        "--campaign-accent-dark": accentDark,
        "--campaign-accent-soft": accentSoft,
        "--campaign-shadow": shadow,
      }}
    >
      <Script id={`${campaign}-landing-thank-you-event`} strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'landing_form_submission',
            form_source: '${campaign}_landing',
            thank_you_path: window.location.pathname
          });
          window.gtag?.('event', 'generate_lead', {
            form_source: '${campaign}_landing',
            page_path: window.location.pathname
          });
          window.gtag?.('event', 'ThankYou_Code', {
            form_source: '${campaign}_landing',
            page_path: window.location.pathname
          });
        `}
      </Script>

      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, var(--campaign-shadow), transparent 34%), radial-gradient(circle at 84% 82%, var(--campaign-shadow), transparent 30%)",
        }}
      />
      <div className="pointer-events-none absolute -top-28 -right-28 size-96 rounded-full border border-white/8" />
      <div className="pointer-events-none absolute -bottom-36 -left-36 size-[30rem] rounded-full border border-white/8" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col">
        <header className="flex min-h-16 items-center justify-between">
          <Link
            href={landingPath}
            className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--campaign-accent)]"
            aria-label={`${logoAlt} landing page`}
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={220}
              height={72}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </Link>
          <span className="hidden items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/58 uppercase sm:inline-flex">
            <ShieldCheck className="size-4 text-[var(--campaign-accent)]" />
            Submission secured
          </span>
        </header>

        <section className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:py-20">
          <div>
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-[var(--campaign-accent)] text-white shadow-[0_18px_48px_var(--campaign-shadow)]">
              <CheckCircle2 className="size-8" aria-hidden="true" />
            </span>
            <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[var(--campaign-accent)] uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {description}
            </p>
            <Link
              href={landingPath}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--campaign-accent)] px-6 text-sm font-bold text-white shadow-[0_14px_34px_var(--campaign-shadow)] transition hover:bg-[var(--campaign-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--campaign-accent)]"
            >
              Return to offer
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <aside className="rounded-[1.75rem] border border-white/10 bg-white p-6 text-[#1b2433] shadow-[0_30px_90px_rgba(0,0,0,0.24)] sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--campaign-accent-dark)] uppercase">
              What happens next
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "Our team reviews the details you submitted.",
                "A specialist contacts you to confirm scope and access.",
                "We agree the next step and begin the review.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--campaign-accent-soft)] text-xs font-black text-[var(--campaign-accent-dark)]">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-[#596170]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-7 border-t border-[#1b2433]/10 pt-6">
              <p className="text-xs font-bold tracking-[0.14em] text-[#1b2433]/52 uppercase">
                Need help now?
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={getWhatsappHref(phone)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Chat on WhatsApp at ${phone}`}
                  className="flex items-center gap-3 rounded-xl bg-[var(--campaign-accent-soft)] px-4 py-3 text-sm font-semibold transition hover:text-[var(--campaign-accent-dark)]"
                >
                  <FaWhatsapp className="size-4 text-[var(--campaign-accent-dark)]" />
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 rounded-xl bg-[var(--campaign-accent-soft)] px-4 py-3 text-sm font-semibold transition hover:text-[var(--campaign-accent-dark)]"
                >
                  <Mail className="size-4 text-[var(--campaign-accent-dark)]" />
                  {email}
                </a>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <FloatingWhatsapp phone={phone} />
    </main>
  );
}
