"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DataSheetPdfModal } from "@/components/products/DataSheetPdfModal";
import { getProductDataSheetPdf } from "@/lib/product-media";
import type { Product } from "@/data/products";

type ProductDetailActionsProps = {
  product: Product;
};

export function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const [tdsOpen, setTdsOpen] = useState(false);
  const contactHref = `/contact?product=${encodeURIComponent(product.slug)}`;
  const pdfUrl = getProductDataSheetPdf(product);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={contactHref}>Request a quote</Button>
        <Button type="button" variant="secondary" onClick={() => setTdsOpen(true)}>
          Data sheet
        </Button>
      </div>
      <DataSheetPdfModal
        open={tdsOpen}
        onClose={() => setTdsOpen(false)}
        productName={product.productName}
        pdfUrl={pdfUrl}
      />
    </>
  );
}
