import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { seoConfig } from "@/data/seo";
import { getAllProducts } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();
  const products = getAllProducts().slice(0, 4);

  return (
    <footer className="mt-8 rounded-t-xl bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-editorial gap-10 px-6 py-14 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-16">
        <div className="lg:col-span-4">
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-body-sm leading-relaxed text-stone/90">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-sm text-body-sm leading-relaxed text-soft-grey">
            Supply and jobwork inquiries from{" "}
            {seoConfig.regionsServed.slice(0, -1).join(", ")}, and{" "}
            {seoConfig.regionsServed.at(-1)}.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-sage">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-stone/90 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-sage">Products</p>
          <ul className="mt-4 space-y-2 text-body-sm text-stone/90">
            {products.map((p) => (
              <li key={p.id}>
                <Link href={`/products/${p.slug}`} className="hover:text-white">
                  {p.productName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="font-semibold text-copper hover:text-white">
                Full catalogue →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-sage">Contact</p>
          <ul className="mt-4 space-y-2 text-body-sm text-stone/90">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-editorial flex-col gap-2 px-6 py-5 text-body-sm text-soft-grey sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>Phosphating chemicals · Pretreatment · Jobwork</p>
        </div>
      </div>
    </footer>
  );
}
