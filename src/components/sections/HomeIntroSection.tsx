import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function HomeIntroSection() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Konark Chemicals"
              title="Metal pretreatment and phosphating for industrial buyers"
              description={siteConfig.tagline}
            />
          </div>
          <div className="panel-muted lg:col-span-7">
            <p className="text-body-sm leading-relaxed text-soft-grey sm:text-base">
              We supply pretreatment and phosphating chemicals for manufacturing
              lines, and operate phosphating jobwork for components treated at
              our facility. Product selection, process sequence, and quotations
              are agreed through direct technical dialogue.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3 text-body-sm font-semibold">
              <li>
                <Link
                  href="/products"
                  className="rounded-md bg-sage/80 px-4 py-2 text-graphite hover:bg-sage"
                >
                  View products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="rounded-md bg-sage/80 px-4 py-2 text-graphite hover:bg-sage"
                >
                  Phosphating jobwork
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="rounded-md bg-sage/80 px-4 py-2 text-graphite hover:bg-sage"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
