import Image from "next/image";
import { primaryProduct } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductSection() {
  const product = primaryProduct;

  return (
    <section id="products" className="border-t border-stone/80 bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Product"
              title="Surface Treatment, Refined."
              description="A phosphating chemical for industrial black conversion coatings on prepared iron and steel — supplied with technical dialogue, not off-the-shelf claims."
            />
            <div className="mt-10 space-y-6 border-t border-graphite/10 pt-10">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-copper">
                  Product
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-graphite">
                  {product.name}
                </p>
                <p className="mt-1 text-sm text-soft-grey">{product.shortName}</p>
              </div>
              <p className="text-base leading-relaxed text-soft-grey">
                {product.description}
              </p>
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div className="border-l border-copper/40 pl-4">
                  <dt className="text-xs uppercase tracking-wider text-graphite/70">
                    Purpose
                  </dt>
                  <dd className="mt-1 text-soft-grey">{product.purpose}</dd>
                </div>
                <div className="border-l border-copper/40 pl-4">
                  <dt className="text-xs uppercase tracking-wider text-graphite/70">
                    Substrates
                  </dt>
                  <dd className="mt-1 text-soft-grey">{product.substrates}</dd>
                </div>
              </dl>
              <Button href="#inquiry" variant="secondary">
                Request product details
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[3/4] w-full max-w-lg lg:ml-auto lg:max-w-none">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
