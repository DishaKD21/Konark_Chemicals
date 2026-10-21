"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";
import {
  availableGalleryFilters,
  buildProductGallery,
  filterGallery,
  galleryFilterLabels,
  type GalleryCategory,
} from "@/lib/product-media";
import { SafeImage } from "@/components/ui/SafeImage";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";

type ProductGalleryModalProps = {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  initialIndex?: number;
};

export function ProductGalleryModal({
  open,
  onClose,
  product,
  initialIndex = 0,
}: ProductGalleryModalProps) {
  const allImages = useMemo(
    () => (product ? buildProductGallery(product) : []),
    [product],
  );
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [index, setIndex] = useState(0);

  const images = useMemo(
    () => filterGallery(allImages, filter),
    [allImages, filter],
  );
  const filters = useMemo(() => availableGalleryFilters(allImages), [allImages]);

  useEffect(() => {
    if (!open) return;
    setFilter("all");
    setIndex(Math.min(initialIndex, Math.max(0, allImages.length - 1)));
  }, [open, product?.id, initialIndex, allImages.length]);

  useEffect(() => {
    if (index >= images.length) setIndex(0);
  }, [images.length, index]);

  const current = images[index];

  const go = useCallback(
    (delta: number) => {
      if (images.length === 0) return;
      setIndex((i) => (i + delta + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.stopPropagation();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.stopPropagation();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const empty = allImages.length === 0;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={product ? `${product.productName} — Results gallery` : "Gallery"}
      size="lg"
      zIndex={100}
      panelClassName="!max-w-5xl"
    >
      {empty ? (
        <div className="px-6 py-16 text-center text-body-sm text-soft-grey">
          Result photographs for this product have not been added yet. Add images
          under{" "}
          <code className="text-graphite">public/images/products/{product?.slug}/</code>
          .
        </div>
      ) : (
        <div className="px-5 pb-6 sm:px-6">
          {filters.length > 1 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setFilter(f);
                    setIndex(0);
                  }}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-body-sm font-medium transition-colors",
                    filter === f
                      ? "bg-copper text-white"
                      : "bg-sage/70 text-graphite hover:bg-sage",
                  )}
                >
                  {galleryFilterLabels[f]}
                </button>
              ))}
            </div>
          )}

          <div className="image-frame relative mx-auto aspect-[16/10] max-h-[min(50vh,420px)] w-full bg-sage/30">
            {current && (
              <SafeImage
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain transition-opacity duration-300"
                sizes="90vw"
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/90 p-2 shadow-soft hover:bg-white"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/90 p-2 shadow-soft hover:bg-white"
                  onClick={() => go(1)}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <p className="mt-3 text-center text-body-sm font-medium text-graphite">
            {images.length > 0 ? `${index + 1} of ${images.length}` : "0 of 0"}
          </p>
          {current?.caption && (
            <p className="mt-1 text-center text-body-sm text-soft-grey">
              {current.caption}
            </p>
          )}

          {images.length > 1 && (
            <ul
              className="mt-4 flex gap-2 overflow-x-auto pb-1"
              aria-label="Gallery thumbnails"
            >
              {images.map((img, i) => (
                <li key={`${img.src}-${i}`}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      "image-frame relative h-14 w-[4.5rem] shrink-0 ring-2 ring-offset-2 ring-offset-ivory",
                      i === index ? "ring-olive/50" : "ring-transparent opacity-75 hover:opacity-100",
                    )}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <SafeImage
                      src={img.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Modal>
  );
}
