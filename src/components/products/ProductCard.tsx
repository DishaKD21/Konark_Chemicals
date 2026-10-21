import Link from "next/link";
import type { Product } from "@/data/products";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  interactive?: boolean;
  onMoreDetails?: () => void;
  onViewGallery?: () => void;
  onDataSheet?: () => void;
};

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export function ProductCard({
  product,
  className,
  interactive,
  onMoreDetails,
  onViewGallery,
  onDataSheet,
}: ProductCardProps) {
  const imageBlock = (
    <div className="image-frame relative mx-4 mt-4 aspect-[4/3] overflow-hidden">
      <SafeImage
        src={product.primaryImage}
        alt={product.primaryImageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 88vw, 33vw"
      />
    </div>
  );

  return (
    <article className={cn("card card-hover flex h-full flex-col overflow-hidden", className)}>
      {interactive ? (
        <button
          type="button"
          className="block w-full text-left"
          onClick={onMoreDetails}
          aria-label={`More details about ${product.productName}`}
        >
          {imageBlock}
        </button>
      ) : (
        <Link href={`/products/${product.slug}`} className="block">
          {imageBlock}
        </Link>
      )}

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <span className="inline-flex w-fit rounded-md bg-sage/80 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-olive">
          {product.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-graphite">
          {interactive ? (
            <button
              type="button"
              className="text-left hover:text-copper"
              onClick={onMoreDetails}
            >
              {product.productName}
            </button>
          ) : (
            <Link href={`/products/${product.slug}`} className="hover:text-copper">
              {product.productName}
            </Link>
          )}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-body-sm leading-relaxed text-soft-grey">
          {truncate(product.shortDescription, 140)}
        </p>

        {interactive ? (
          <div className="mt-4 flex flex-col gap-2">
            <Button type="button" className="w-full sm:w-auto" onClick={onMoreDetails}>
              More details
            </Button>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onViewGallery}
                className="link-arrow !px-3 !py-1.5 text-[0.8125rem]"
              >
                View gallery
              </button>
              <button
                type="button"
                onClick={onDataSheet}
                className="link-arrow !px-3 !py-1.5 text-[0.8125rem]"
              >
                Data sheet
              </button>
            </div>
          </div>
        ) : (
          <Link href={`/products/${product.slug}`} className="link-arrow mt-5 w-fit">
            View details
          </Link>
        )}
      </div>
    </article>
  );
}
