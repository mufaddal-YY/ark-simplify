"use client";

import Link from "next/link";
import { useId } from "react";
import { getSmsConsentDisclosure, smsProgram } from "@/lib/sms-program";

const consentTypes = Object.entries(smsProgram.messageTypes);
const supportPhoneHref = `tel:+${smsProgram.supportPhone.replace(/\D/g, "")}`;
const linkBase =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles = {
  site: {
    fieldset:
      "rounded-lg border border-brand-secondary/12 bg-brand-surface p-4 sm:p-5",
    legend: "text-sm font-semibold text-brand-secondary",
    intro: "text-sm leading-6 text-brand-secondary/72",
    option:
      "rounded-lg border border-brand-secondary/12 bg-white has-checked:border-brand-primary/60 has-focus-visible:border-brand-primary",
    checkbox: "accent-brand-primary focus-visible:outline-brand-primary",
    optionTitle: "text-brand-secondary",
    optionText: "text-brand-secondary/72",
    note: "text-xs leading-5 text-brand-secondary/72",
    link: "font-semibold text-brand-secondary underline decoration-brand-primary decoration-2 underline-offset-2 hover:text-brand-primary focus-visible:outline-brand-primary",
  },
  campaign: {
    fieldset: "rounded-xl border border-[#d8d4cc] bg-brand-surface p-4",
    legend: "text-sm font-semibold text-[#1b2433]",
    intro: "text-xs leading-5 text-[#646b77]",
    option:
      "rounded-xl border border-[#d8d4cc] bg-white has-checked:border-[var(--campaign-accent)] has-focus-visible:border-[var(--campaign-accent)]",
    checkbox:
      "accent-[var(--campaign-accent)] focus-visible:outline-[var(--campaign-accent)]",
    optionTitle: "text-[#1b2433]",
    optionText: "text-[#646b77]",
    note: "text-xs leading-5 text-[#646b77]",
    link: "font-semibold text-[#1b2433] underline decoration-[var(--campaign-accent)] decoration-2 underline-offset-2 hover:text-[var(--campaign-accent-dark)] focus-visible:outline-[var(--campaign-accent)]",
  },
};

function readConsent(fieldset) {
  return Object.fromEntries(
    consentTypes.map(([key, type]) => [
      key,
      Boolean(fieldset?.elements.namedItem(type.field)?.checked),
    ]),
  );
}

function PolicyLink({ href, className, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      className={`${linkBase} ${className}`}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </Link>
  );
}

export default function SmsConsent({
  variant = "site",
  legend = "Text message (SMS) updates — optional",
  onConsentChange,
}) {
  const baseId = useId();
  const styles = variantStyles[variant] ?? variantStyles.site;
  const noteId = `${baseId}-note`;

  function handleChange(event) {
    onConsentChange?.(readConsent(event.currentTarget.closest("fieldset")));
  }

  return (
    <fieldset className={`min-w-0 ${styles.fieldset}`} aria-describedby={noteId}>
      <legend className={`float-left w-full ${styles.legend}`}>{legend}</legend>

      <div className="clear-both space-y-3 pt-2">
        <p className={styles.intro}>
          Choose the text messages you would like to receive from{" "}
          {smsProgram.brandName}. Each option is separate — select either,
          both, or neither.
        </p>

        {consentTypes.map(([key, type]) => {
          const inputId = `${baseId}-${type.field}`;

          return (
            <label
              key={key}
              htmlFor={inputId}
              className={`flex min-w-0 cursor-pointer items-start gap-3 p-3 transition-colors sm:p-4 ${styles.option}`}
            >
              <input
                id={inputId}
                name={type.field}
                type="checkbox"
                value="yes"
                onChange={handleChange}
                className={`mt-px size-[1.125rem] shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.checkbox}`}
              />
              <span className="min-w-0">
                <span
                  className={`block text-sm leading-5 font-semibold ${styles.optionTitle}`}
                >
                  {type.label}
                </span>{" "}
                <span
                  className={`mt-1 block text-[0.8125rem] leading-5 ${styles.optionText}`}
                >
                  {getSmsConsentDisclosure(key)}
                </span>
              </span>
            </label>
          );
        })}

        <p id={noteId} className={styles.note}>
          {smsProgram.consentNotRequired}. {smsProgram.noSharing}. For help,
          email{" "}
          <a
            href={`mailto:${smsProgram.supportEmail}`}
            className={`${linkBase} ${styles.link}`}
          >
            {smsProgram.supportEmail}
          </a>{" "}
          or call{" "}
          <a
            href={supportPhoneHref}
            className={`${linkBase} whitespace-nowrap ${styles.link}`}
          >
            {smsProgram.supportPhone}
          </a>
          . See our{" "}
          <PolicyLink href={smsProgram.privacyPolicyPath} className={styles.link}>
            Privacy Policy
          </PolicyLink>{" "}
          and{" "}
          <PolicyLink href={smsProgram.termsPath} className={styles.link}>
            Terms of Service
          </PolicyLink>
          .
        </p>
      </div>
    </fieldset>
  );
}
