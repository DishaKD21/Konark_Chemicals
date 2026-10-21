import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ClientLogoGrid } from "@/components/industries/ClientLogoGrid";
import { applications } from "@/data/applications";
import {
  jobworkClients,
  productSupplyClients,
} from "@/data/industry-clients";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Industries & applications",
  description:
    "Industrial applications for metal pretreatment and phosphating — fasteners, fabricated components, machinery parts, and precision metal work.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Industries and use cases"
        description="Examples of component categories where pretreatment and phosphating are discussed with customers. Suitability is confirmed per substrate, specification, and process approval."
      />
      <section className="section-y-lg bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {applications.map((app) => (
              <article key={app.id} className="card overflow-hidden">
                <div className="image-frame relative m-4 aspect-[16/10]">
                  <Image
                    src={app.image}
                    alt={app.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="px-6 pb-6 pt-0 lg:px-7 lg:pb-7">
                  <h2 className="text-lg font-semibold text-graphite">{app.title}</h2>
                  <p className="mt-2 text-body-sm leading-relaxed text-soft-grey">
                    {app.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-body-sm text-soft-grey">
            Explore our{" "}
            <Link href="/products" className="font-semibold text-copper hover:underline">
              product catalogue
            </Link>{" "}
            or{" "}
            <Link href="/services" className="font-semibold text-copper hover:underline">
              discuss jobwork
            </Link>{" "}
            for your components.
          </p>
        </div>
      </section>

      <section className="section-y-lg border-t border-graphite/5 bg-sage/25">
        <div className="mx-auto max-w-editorial space-y-16 px-6 lg:px-10">
          <ClientLogoGrid
            title="Companies using our products"
            description="Illustrative placeholder logos and names for layout preview. Replace with approved customer references when ready to publish."
            clients={productSupplyClients}
          />
          <ClientLogoGrid
            title="Phosphating jobwork customers"
            description="Representative placeholder companies for jobwork partnerships. Swap in real client logos and names after confirmation."
            clients={jobworkClients}
          />
        </div>
      </section>
    </>
  );
}
