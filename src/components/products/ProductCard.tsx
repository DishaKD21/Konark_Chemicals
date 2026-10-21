import Link from "next/link";
import type { Product } from "@/data/products";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article className={cn("card card-hover flex h-full flex-col overflow-hidden", className)}>
      <Link
        href={`/products/${product.slug}`}
        className="image-frame relative mx-4 mt-4 aspect-[4/3] overflow-hidden"
      >
        <SafeImage
          src={product.primaryImage}
          alt={product.primaryImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 88vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <span className="inline-flex w-fit rounded-md bg-sage/80 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-olive">
          {product.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-graphite">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-copper"
          >
            {product.productName}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-body-sm leading-relaxed text-soft-grey">
          {truncate(product.shortDescription, 140)}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="link-arrow mt-5 w-fit"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
