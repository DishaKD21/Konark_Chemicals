import { benefits } from "@/data/benefits";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BenefitsSection() {
  return (
    <section className="border-t border-stone/80 bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          eyebrow="Benefits"
          title="What this chemistry is built to support."
          description="Clear, process-level advantages — without unverified performance guarantees."
        />

        <div className="mt-16 grid gap-0 border-t border-graphite/10 lg:grid-cols-2">
          {benefits.map((item, index) => (
            <article
              key={item.number}
              className={`border-b border-graphite/10 py-10 lg:px-10 lg:py-12 ${
                index % 2 === 0 ? "lg:border-r" : ""
              }`}
            >
              <p className="font-display text-2xl font-semibold tabular-nums text-copper/90">
                {item.number}
              </p>
              <h3 className="mt-4 text-lg text-graphite">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-soft-grey">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
