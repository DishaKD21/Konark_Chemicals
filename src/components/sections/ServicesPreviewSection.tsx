import { serviceHighlights } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesPreviewSection() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Chemical supply and phosphating jobwork"
          description="Jobwork is a core part of our business. Share component specifications, finish requirements, and quantities for a feasibility review and quotation."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="card p-6 lg:p-7">
              <h3 className="text-lg font-semibold text-graphite">{item.title}</h3>
              <p className="mt-3 text-body-sm leading-relaxed text-soft-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/services">Explore services</Button>
          <Button href="/contact?inquiry=jobwork" variant="secondary">
            Request a jobwork quotation
          </Button>
        </div>
      </div>
    </section>
  );
}
