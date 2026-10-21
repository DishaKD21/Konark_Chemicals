import { benefits } from "@/data/benefits";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BenefitsSection() {
  return (
    <section className="section-y bg-sage/25">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Konark Chemicals"
          title="Industrial expertise you can discuss with our team"
          description="Product-specific information, application-focused support, jobwork services, and direct communication — without invented guarantees."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.number} className="card p-6 lg:p-7">
              <p className="text-sm font-bold tabular-nums text-olive">
                {item.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-graphite">
                {item.title}
              </h3>
              <p className="mt-3 text-body-sm leading-relaxed text-soft-grey">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
