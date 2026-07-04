import Link from "next/link";
import { FiArrowUpRight, FiCheckCircle, FiMail, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <FiCheckCircle className="h-7 w-7" />
            </span>
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                Enquiry Submitted
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-5xl">
                Thank you for reaching out.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
                Your enquiry has been sent successfully. Our team will review
                the details and get back to you soon.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="btn-brand-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold"
              >
                Back to Home
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="btn-brand-outline inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-base font-semibold"
              >
                Send Another Enquiry
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-6 shadow-[0_18px_46px_rgba(54,59,79,0.06)]">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-secondary/52 uppercase">
              Need something urgent?
            </p>
            <div className="mt-5 space-y-3">
              <Link
                href="tel:+13123800712"
                className="flex items-center gap-3 rounded-lg border border-brand-secondary/10 bg-white px-4 py-4 text-brand-secondary transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <FiPhone className="h-5 w-5" />
                <span className="font-semibold">+1 (312) 380-0712</span>
              </Link>
              <Link
                href="mailto:info@arksimplify.com"
                className="flex items-center gap-3 rounded-lg border border-brand-secondary/10 bg-white px-4 py-4 text-brand-secondary transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <FiMail className="h-5 w-5" />
                <span className="font-semibold">info@arksimplify.com</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
