"use client";

import type { Product } from "@/data/products";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type ProductDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  onOpenGallery: () => void;
  onOpenDataSheet: () => void;
};

export function ProductDetailsModal({
  open,
  onClose,
  product,
  onOpenGallery,
  onOpenDataSheet,
}: ProductDetailsModalProps) {
  if (!product) return null;

  const showCode =
    product.productCode && !product.productCode.startsWith("[");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={product.productName}
      size="lg"
      zIndex={90}
      panelClassName="!max-w-4xl"
    >
      <div className="grid gap-8 px-5 py-5 sm:px-6 lg:grid-cols-2 lg:py-6">
        <button
          type="button"
          onClick={onOpenGallery}
          className="image-frame relative aspect-[4/3] max-h-[280px] w-full cursor-zoom-in text-left"
          aria-label={`Open results gallery for ${product.productName}`}
        >
          <SafeImage
            src={product.primaryImage}
            alt={product.primaryImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 400px"
          />
          <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-[0.6875rem] font-semibold text-graphite shadow-soft">
            Click to view gallery
          </span>
        </button>

        <div className="min-w-0">
          <p className="text-body-sm text-olive">{product.category}</p>
          {showCode && (
            <p className="mt-1 text-body-sm text-soft-grey">
              Code: {product.productCode}
            </p>
          )}
          <p className="mt-4 text-body-sm leading-relaxed text-soft-grey">
            {product.fullDescription}
          </p>

          <h3 className="mt-6 text-sm font-semibold text-graphite">Key features</h3>
          <ul className="mt-2 space-y-2 text-body-sm text-soft-grey">
            {product.keyFeatures.map((f) => (
              <li key={f} className="rounded-md bg-sage/40 px-3 py-2">{f}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold text-graphite">Applications</h3>
          <ul className="mt-2 list-inside list-disc text-body-sm text-soft-grey">
            {product.applications.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold text-graphite">
            Compatible substrates
          </h3>
          <ul className="mt-2 list-inside list-disc text-body-sm text-soft-grey">
            {product.compatibleSubstrates.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {product.technicalSpecifications.length > 0 && (
            <>
              <h3 className="mt-6 text-sm font-semibold text-graphite">
                Technical specifications
              </h3>
              <dl className="mt-2 space-y-2 text-body-sm">
                {product.technicalSpecifications.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-4 rounded-md bg-white/80 px-3 py-2"
                  >
                    <dt className="font-medium text-graphite">{row.label}</dt>
                    <dd className="text-soft-grey">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button type="button" variant="secondary" onClick={onOpenGallery}>
              View results gallery
            </Button>
            <Button type="button" onClick={onOpenDataSheet}>
              Data sheet
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
