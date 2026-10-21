import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <section id="products" className="section-y-lg bg-sage/30">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Catalogue"
            title="Featured products"
            description="A selection from our seven-product catalogue. Each line has its own technical profile, imagery, and inquiry path."
          />
          <Button href="/products" variant="secondary" className="shrink-0">
            View all products
          </Button>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mt-8 text-body-sm text-soft-grey">
          Placeholder names and data will be updated from your approved product
          list.
        </p>
      </div>
    </section>
  );
}
