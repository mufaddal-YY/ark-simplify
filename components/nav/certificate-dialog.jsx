"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { FiDownload, FiFileText } from "react-icons/fi";
import { X } from "lucide-react";

export default function CertificateDialog({ label, href, filename }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger
        render={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-secondary/10 bg-brand-surface px-3 py-2 text-xs font-semibold text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/24 hover:bg-white hover:text-brand-primary"
          />
        }
      >
        <FiFileText className="h-3.5 w-3.5" />
        {label}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm" />
        <DialogPrimitive.Popup className="fixed left-1/2 top-1/2 z-50 flex h-[86vh] w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg border border-white/20 bg-white shadow-[0_30px_100px_rgba(10,12,20,0.28)] transition duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          <div className="flex items-center justify-between gap-4 border-b border-brand-secondary/10 px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <DialogPrimitive.Title className="truncate text-base font-semibold text-brand-secondary">
                {label}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-1 text-xs font-medium text-brand-secondary/52">
                Preview the certificate before downloading.
              </DialogPrimitive.Description>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={href}
                download={filename}
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand-primary px-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/90"
              >
                <FiDownload className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <DialogPrimitive.Close
                render={
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/10 text-brand-secondary transition-all duration-300 hover:border-brand-primary/24 hover:text-brand-primary"
                    aria-label="Close certificate preview"
                  />
                }
              >
                <X className="h-4 w-4" />
              </DialogPrimitive.Close>
            </div>
          </div>

          <div className="min-h-0 flex-1 bg-brand-surface">
            <iframe
              src={href}
              title={`${label} PDF preview`}
              className="h-full w-full border-0"
            />
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
