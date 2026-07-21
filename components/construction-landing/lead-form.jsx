"use client";

import {Check, LoaderCircle, LockKeyhole} from "lucide-react";
import {useId, useState} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fieldClass =
  "min-h-12 min-w-0 max-w-full w-full rounded-xl border border-[#d8d4cc] bg-white px-4 text-[0.95rem] text-[#1b2433] outline-none transition placeholder:text-[#7a808b] focus:border-[var(--campaign-accent)] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--campaign-accent)_12%,transparent)]";

export default function LeadForm({content, onSuccess}) {
  const selectLabelId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const selectOptions = content.selectOptions?.length
    ? content.selectOptions
    : [
        "Subcontractor",
        "General Contractor",
        "Manufacturer",
        "Other construction professional",
      ];
  const selectCampaign = content.serviceValue === "Free Books Health Check"
    ? "finance"
    : "construction";

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    const payload = Object.fromEntries(new FormData(formElement).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(
          result.error ?? "We could not submit your details right now.",
        );
      }

      formElement.reset();
      setSubmitted(true);
      onSuccess?.();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your details right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-brand-surface px-6 py-10 text-center"
        role="status"
      >
        <span className="mb-5 inline-flex size-14 items-center justify-center rounded-full bg-[#1b2433] text-white">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#1b2433]">
          Your bid is on our radar.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-[#596170]">
          {content.successText ??
            "Thanks for the details. An ARK specialist will reply within one business day to confirm the next step."}
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-semibold text-[#1b2433]">
          Name
          <input
            className={`${fieldClass} mt-2`}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            maxLength={120}
            required
          />
        </label>
        <label className="block min-w-0 text-sm font-semibold text-[#1b2433]">
          Work email
          <input
            className={`${fieldClass} mt-2`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            maxLength={180}
            required
          />
        </label>
        <label className="block min-w-0 text-sm font-semibold text-[#1b2433]">
          Company
          <input
            className={`${fieldClass} mt-2`}
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            maxLength={160}
            required
          />
        </label>
        <div className="block min-w-0 text-sm font-semibold text-[#1b2433]">
          <span id={selectLabelId}>
            {content.selectLabel ?? "You are a…"}
          </span>
          <Select name="designation" required>
            <SelectTrigger
              className="mt-2"
              aria-labelledby={selectLabelId}
            >
              <SelectValue
                placeholder={content.selectPlaceholder ?? "Select your role"}
              />
            </SelectTrigger>
            <SelectContent campaign={selectCampaign}>
              {selectOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <input
        name="service"
        type="hidden"
        value={content.serviceValue ?? "Free Sample Takeoff"}
      />
      {content.hideMessage ? (
        <input
          name="message"
          type="hidden"
          value={content.messageValue ?? "Requesting a consultation."}
        />
      ) : (
        <label className="block min-w-0 text-sm font-semibold text-[#1b2433]">
          {content.messageLabel ?? "Active bid details"}
          <textarea
            className={`${fieldClass} mt-2 min-h-24 resize-y py-3`}
            name="message"
            placeholder={
              content.messagePlaceholder ??
              "Trade, scope, due date, or a short note about your backlog"
            }
            maxLength={4000}
            required
          />
        </label>
      )}

      <label className="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {submitError ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--campaign-accent)] px-5 text-sm font-bold text-white shadow-[0_12px_28px_var(--campaign-shadow)] transition hover:bg-[var(--campaign-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--campaign-accent)] disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
        ) : null}
        {isSubmitting ? "Sending details…" : content.submitLabel}
      </button>

      <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#717681]">
        <LockKeyhole className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        <span>{content.privacyText}</span>
      </p>
    </form>
  );
}
