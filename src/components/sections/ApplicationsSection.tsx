import Image from "next/image";
import { applications } from "@/data/applications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const aspectClass = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

export function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="border-t border-stone/80 bg-charcoal py-24 text-ivory lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          dark
          eyebrow="Applications"
          title="Where conversion coatings matter."
          description="Illustrative industrial categories — final suitability depends on substrate, specification, and approved operating procedure."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {applications.map((app, i) => (
            <figure
              key={app.id}
              className={cn(
                "group relative overflow-hidden border border-ivory/10",
                i === 0 && "lg:col-span-7",
                i === 1 && "lg:col-span-5",
                i === 2 && "lg:col-span-5",
                i === 3 && "lg:col-span-4",
                i === 4 && "lg:col-span-3",
              )}
            >
              <div className={cn("relative w-full", aspectClass[app.aspect])}>
                <Image
                  src={app.image}
                  alt={app.imageAlt}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-base font-semibold">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/90">
                  {app.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
