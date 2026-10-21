import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-charcoal text-ivory"
    >
      <div className="absolute inset-0 lg:left-[42%]">
        <Image
          src="/images/hero-phosphated-steel.jpg"
          alt="Machined steel component with a deep matte black phosphated conversion coating and visible fine grain."
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/20 lg:from-charcoal lg:via-charcoal/40 lg:to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-editorial flex-col justify-end px-6 pb-20 pt-32 lg:justify-center lg:pb-28 lg:pt-40 lg:px-10">
        <div className="max-w-xl lg:max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
            Industrial Surface Treatment
          </p>
          <div className="mt-6 h-px w-16 bg-copper" aria-hidden="true" />
          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-display text-ivory sm:text-[2.75rem] lg:text-[3.25rem]">
            Engineered for Metal.
            <br />
            Finished in Black.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone/95 sm:text-lg">
            Precision phosphating solutions for industrial metal surface
            treatment, delivering a distinctive black finish through a controlled
            conversion-coating process.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/products">Explore Our Products</Button>
            <Button
              href="/contact"
              variant="ghost"
              className="border border-ivory/25 bg-transparent text-ivory shadow-none ring-0 hover:border-ivory/40 hover:bg-ivory/5"
            >
              Discuss Your Requirement
            </Button>
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.16em] text-soft-grey">
            Conversion coating · Ferrous substrates · Process-controlled finish
          </p>
        </div>
      </div>
    </section>
  );
}
