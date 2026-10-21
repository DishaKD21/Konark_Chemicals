"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/products";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: GalleryImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const count = images.length;
  const current = images[index] ?? images[0];

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  if (!current) {
    return (
      <div className="image-frame flex aspect-[4/3] max-h-[320px] items-center justify-center p-8 text-body-sm text-soft-grey">
        Product photography for {productName} will be added here.
      </div>
    );
  }

  return (
    <div>
      <div className="image-frame relative aspect-[4/3] max-h-[340px] w-full bg-sage/30">
        <button
          type="button"
          className="absolute inset-0 z-10 cursor-zoom-in rounded-image"
          onClick={() => setLightbox(true)}
          aria-label={`Enlarge image ${index + 1} of ${count}`}
        />
        <SafeImage
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 480px"
          priority
        />
        {count > 1 && (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-graphite shadow-soft hover:bg-white"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-graphite shadow-soft hover:bg-white"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {current.caption && (
        <p className="mt-3 text-body-sm text-soft-grey">{current.caption}</p>
      )}
      {count > 1 && (
        <ul
          className="mt-4 flex gap-2.5 overflow-x-auto pb-1"
          aria-label="Gallery thumbnails"
        >
          {images.map((img, i) => (
            <li key={`${img.src}-${i}`}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "image-frame relative h-14 w-[4.5rem] shrink-0 ring-2 ring-offset-2 ring-offset-ivory transition-opacity",
                  i === index ? "ring-olive/50 opacity-100" : "ring-transparent opacity-75 hover:opacity-100",
                )}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image gallery`}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-modal bg-white p-3 shadow-card-elevated sm:p-4">
            <button
              type="button"
              className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 text-graphite shadow-soft hover:text-copper"
              onClick={() => setLightbox(false)}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="image-frame relative mx-auto h-[min(75vh,640px)] w-full">
              <SafeImage
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {current.caption && (
              <p className="mt-3 text-center text-body-sm text-soft-grey">
                {current.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
