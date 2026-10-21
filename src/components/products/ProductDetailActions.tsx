"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TechnicalDataSheetModal } from "@/components/products/TechnicalDataSheetModal";

type ProductDetailActionsProps = {
  productName: string;
  slug: string;
  pdfUrl?: string;
};

export function ProductDetailActions({
  productName,
  slug,
  pdfUrl,
}: ProductDetailActionsProps) {
  const [tdsOpen, setTdsOpen] = useState(false);
  const contactHref = `/contact?product=${encodeURIComponent(slug)}`;

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={contactHref}>Request a quote</Button>
        {pdfUrl ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setTdsOpen(true)}
          >
            View Technical Data Sheet
          </Button>
        ) : (
          <Button href={contactHref} variant="secondary">
            Technical Data Sheet on request
          </Button>
        )}
      </div>
      <TechnicalDataSheetModal
        open={tdsOpen}
        onClose={() => setTdsOpen(false)}
        productName={productName}
        pdfUrl={pdfUrl}
        contactHref={contactHref}
      />
    </>
  );
}
