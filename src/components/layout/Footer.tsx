import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { primaryProduct } from "@/data/products";
import { seoConfig } from "@/data/seo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-editorial gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-4">
          <p className="font-display text-xl font-semibold uppercase tracking-[0.1em]">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone/90">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-soft-grey">
            Phosphating chemical manufacturer and supplier for industrial metal
            surface treatment — export and bulk inquiries from{" "}
            {seoConfig.regionsServed.slice(0, -1).join(", ")}, and{" "}
            {seoConfig.regionsServed.at(-1)}.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone/90 transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
            Product
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone/90">
            <li>
              <Link href="#products" className="hover:text-ivory">
                {primaryProduct.shortName}
              </Link>
            </li>
            <li>
              <Link href="#inquiry" className="hover:text-ivory">
                Technical information
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone/90">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-ivory"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.phone}</li>
            <li className="max-w-xs leading-relaxed">{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-editorial flex-col gap-2 px-6 py-6 text-xs text-soft-grey sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Industrial surface treatment · Phosphating chemicals</p>
        </div>
      </div>
    </footer>
  );
}
