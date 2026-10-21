"use client";

import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailsModal } from "@/components/products/ProductDetailsModal";
import { ProductGalleryModal } from "@/components/products/ProductGalleryModal";
import { DataSheetPdfModal } from "@/components/products/DataSheetPdfModal";
import { getProductDataSheetPdf } from "@/lib/product-media";

type ProductsCatalogProps = {
  products: Product[];
};

export function ProductsCatalog({ products }: ProductsCatalogProps) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  const anyOpen = detailsOpen || galleryOpen || pdfOpen;

  useEffect(() => {
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [anyOpen]);

  useEffect(() => {
    if (!anyOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (galleryOpen) {
        e.preventDefault();
        setGalleryOpen(false);
      } else if (pdfOpen) {
        e.preventDefault();
        setPdfOpen(false);
      } else if (detailsOpen) {
        e.preventDefault();
        setDetailsOpen(false);
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [anyOpen, galleryOpen, pdfOpen, detailsOpen]);

  const openDetails = useCallback((product: Product) => {
    setSelected(product);
    setDetailsOpen(true);
  }, []);

  const openGallery = useCallback(() => {
    setGalleryOpen(true);
  }, []);

  const openPdf = useCallback(() => {
    setPdfOpen(true);
  }, []);

  const closeDetails = useCallback(() => {
    setDetailsOpen(false);
    setGalleryOpen(false);
    setPdfOpen(false);
    setSelected(null);
  }, []);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            interactive
            onMoreDetails={() => openDetails(product)}
            onViewGallery={() => {
              setSelected(product);
              setDetailsOpen(true);
              setGalleryOpen(true);
            }}
            onDataSheet={() => {
              setSelected(product);
              setDetailsOpen(true);
              setPdfOpen(true);
            }}
          />
        ))}
      </div>

      <ProductDetailsModal
        open={detailsOpen}
        onClose={closeDetails}
        product={selected}
        onOpenGallery={openGallery}
        onOpenDataSheet={openPdf}
      />

      <ProductGalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        product={selected}
      />

      <DataSheetPdfModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        productName={selected?.productName ?? "Product"}
        pdfUrl={selected ? getProductDataSheetPdf(selected) : undefined}
      />
    </>
  );
}
