"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

type TechnicalDataSheetModalProps = {
  open: boolean;
  onClose: () => void;
  productName: string;
  pdfUrl?: string;
  contactHref: string;
};

export function TechnicalDataSheetModal({
  open,
  onClose,
  productName,
  pdfUrl,
  contactHref,
}: TechnicalDataSheetModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/50 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tds-modal-title"
    >
      <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-modal bg-white shadow-card-elevated">
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <h2
            id="tds-modal-title"
            className="text-lg font-semibold text-graphite"
          >
            Technical data sheet — {productName}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-graphite hover:bg-sage/60 hover:text-copper"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {pdfUrl ? (
          <>
            <div className="flex flex-wrap gap-4 px-5 pb-3 sm:px-6">
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-sage/70 px-4 py-2 text-body-sm font-semibold text-graphite hover:bg-sage"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sage/70 px-4 py-2 text-body-sm font-semibold text-graphite hover:bg-sage"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Open in new tab
              </a>
            </div>
            <iframe
              title={`Technical data sheet for ${productName}`}
              src={pdfUrl}
              className="min-h-[58vh] w-full flex-1 bg-sage/30 sm:min-h-[60vh]"
            />
          </>
        ) : (
          <div className="px-6 py-10 text-center sm:px-10">
            <p className="text-body-sm leading-relaxed text-soft-grey">
              Technical data sheet available on request for {productName}.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={contactHref}>Request document</Button>
              <Button href={contactHref} variant="secondary">
                Request a quote
              </Button>
            </div>
          </div>
        )}

        <div className="px-5 py-3 text-right sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 text-body-sm font-medium text-graphite hover:bg-sage/50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
