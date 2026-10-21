import { products, type Product } from "@/data/products";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductCategories(): string[] {
  return [...new Set(products.map((p) => p.category))].sort();
}
