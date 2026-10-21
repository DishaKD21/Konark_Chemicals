import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";
import { getAllProducts, getProductCategories } from "@/lib/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Products — Metal pretreatment & phosphating chemicals",
  description:
    "Browse Konark Chemicals catalogue of pretreatment and phosphating products. Each product has dedicated imagery, specifications, and inquiry support.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Metal pretreatment and phosphating chemicals"
        description="Seven catalogue lines with individual technical profiles. Replace placeholder names and data from your approved product list as information is confirmed."
      />
      <section className="section-y-lg bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <p className="text-body-sm text-soft-grey">
            Categories: {categories.join(" · ")}
          </p>
          <div className="mt-8">
            <ProductsCatalog products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
