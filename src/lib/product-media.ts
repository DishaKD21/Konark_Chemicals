import type { GalleryImage, Product } from "@/data/products";

export type GalleryCategory = "all" | "product" | "before" | "after";

export type CategorizedGalleryImage = GalleryImage & {
  category: Exclude<GalleryCategory, "all">;
};

export function getProductDataSheetPdf(product: Product): string | undefined {
  return product.dataSheetPdf ?? product.technicalDataSheet;
}

export function buildProductGallery(
  product: Product,
): CategorizedGalleryImage[] {
  const items: CategorizedGalleryImage[] = [];
  const seen = new Set<string>();

  const push = (img: GalleryImage, category: CategorizedGalleryImage["category"]) => {
    if (!img.src || seen.has(img.src)) return;
    seen.add(img.src);
    items.push({ ...img, category });
  };

  product.galleryImages.forEach((img) => push(img, "product"));
  product.beforeImages.forEach((img) => push(img, "before"));
  product.afterImages.forEach((img) => push(img, "after"));

  return items;
}

export function filterGallery(
  images: CategorizedGalleryImage[],
  filter: GalleryCategory,
): CategorizedGalleryImage[] {
  if (filter === "all") return images;
  return images.filter((img) => img.category === filter);
}

export function availableGalleryFilters(
  images: CategorizedGalleryImage[],
): GalleryCategory[] {
  const filters: GalleryCategory[] = ["all"];
  if (images.some((i) => i.category === "product")) filters.push("product");
  if (images.some((i) => i.category === "before")) filters.push("before");
  if (images.some((i) => i.category === "after")) filters.push("after");
  return filters;
}

export const galleryFilterLabels: Record<GalleryCategory, string> = {
  all: "All images",
  product: "Product",
  before: "Before treatment",
  after: "After treatment",
};
