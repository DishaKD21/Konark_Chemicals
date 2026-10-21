"use client";

import { Download, ExternalLink } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

type DataSheetPdfModalProps = {
  open: boolean;
  onClose: () => void;
  productName: string;
  pdfUrl?: string;
};

export function DataSheetPdfModal({
  open,
  onClose,
  productName,
  pdfUrl,
}: DataSheetPdfModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`${productName} — Technical Data Sheet`}
      size="full"
      zIndex={110}
      panelClassName="!h-[min(90vh,900px)] !max-h-none !w-[min(95vw,1200px)]"
    >
      {pdfUrl ? (
        <div className="flex h-full min-h-[70vh] flex-col">
          <div className="flex flex-wrap gap-3 px-5 py-3 sm:px-6">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-sage/80 px-4 py-2 text-body-sm font-semibold text-graphite hover:bg-sage"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download PDF
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-sage/80 px-4 py-2 text-body-sm font-semibold text-graphite hover:bg-sage"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Open in new tab
            </a>
          </div>
          <iframe
            title={`Technical data sheet for ${productName}`}
            src={pdfUrl}
            className="min-h-0 flex-1 w-full bg-sage/25"
          />
        </div>
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center px-6 py-16 text-center">
          <p className="max-w-md text-body-sm leading-relaxed text-soft-grey">
            Technical Data Sheet is not available yet.
          </p>
        </div>
      )}
    </Modal>
  );
}
