import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { ProductGallery } from "@/components/products/ProductGallery";
import { BeforeAfterComparison } from "@/components/products/BeforeAfterComparison";
import { ProductDetailActions } from "@/components/products/ProductDetailActions";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.productName,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-graphite sm:text-2xl">{children}</h2>
  );
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="bg-sage/50 pt-28 pb-10 lg:pt-36 lg:pb-14">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-6">
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-olive">
                {product.category}
              </span>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-snug sm:text-4xl">
                {product.productName}
              </h1>
              {product.productCode && !product.productCode.startsWith("[") && (
                <p className="mt-2 text-body-sm text-soft-grey">
                  Code: {product.productCode}
                </p>
              )}
              <p className="mt-5 text-body-sm leading-relaxed text-soft-grey sm:text-base">
                {product.shortDescription}
              </p>
              <div className="mt-8">
            <ProductDetailActions product={product} />
              </div>
            </div>
            <div className="lg:col-span-6">
              <ProductGallery
                images={product.galleryImages}
                productName={product.productName}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="panel-muted">
              <SectionTitle>Key features</SectionTitle>
              <ul className="mt-5 space-y-3 text-body-sm text-soft-grey">
                {product.keyFeatures.map((f) => (
                  <li key={f} className="rounded-lg bg-sage/40 px-4 py-3">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel-muted">
              <SectionTitle>Availability</SectionTitle>
              <p className="mt-5 text-body-sm leading-relaxed text-soft-grey">
                {product.availabilityOrInquiryText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-sage/35">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <SectionTitle>Before and after surface treatment</SectionTitle>
          <p className="mt-3 max-w-2xl text-body-sm text-soft-grey">
            Representative samples for discussion. Pretreatment stages are separate
            from phosphating unless your process specification states otherwise.
          </p>
          <div className="mt-8 max-w-3xl">
            <BeforeAfterComparison
              before={product.beforeImages}
              after={product.afterImages}
              productName={product.productName}
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-6 lg:p-8">
              <SectionTitle>Description</SectionTitle>
              <p className="mt-5 text-body-sm leading-relaxed text-soft-grey">
                {product.fullDescription}
              </p>
            </div>
            <div className="card p-6 lg:p-8">
              <SectionTitle>Applications</SectionTitle>
              <ul className="mt-5 space-y-2 text-body-sm text-soft-grey">
                {product.applications.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-olive" aria-hidden>•</span>
                    {a}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-semibold text-graphite">
                Compatible substrates
              </h3>
              <ul className="mt-3 space-y-2 text-body-sm text-soft-grey">
                {product.compatibleSubstrates.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-olive" aria-hidden>•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="card p-6 lg:p-8">
            <SectionTitle>Technical specifications</SectionTitle>
            {product.technicalSpecifications.length > 0 ? (
              <div className="mt-6 overflow-hidden rounded-xl bg-sage/30">
                <table className="w-full text-left text-body-sm">
                  <tbody>
                    {product.technicalSpecifications.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-white/60 last:border-0"
                      >
                        <th className="px-4 py-3.5 font-semibold text-graphite sm:w-1/3">
                          {row.label}
                        </th>
                        <td className="px-4 py-3.5 text-soft-grey">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-5 text-body-sm text-soft-grey">
                Confirmed technical values will be listed here. Contact us for
                details until the technical data sheet is published.
              </p>
            )}
            <Link
              href={`/contact?product=${encodeURIComponent(product.slug)}`}
              className="link-arrow mt-8 inline-flex"
            >
              Request product information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
