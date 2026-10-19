import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-stone/80 bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          eyebrow="Process"
          title="A disciplined treatment sequence."
          description="The steps below reflect a typical ferrous surface-treatment flow. Your exact sequence depends on substrate, formulation, and approved work instructions."
        />

        <div className="mt-16 hidden lg:block">
          <div className="relative border-t border-graphite/15 pt-10">
            <div
              className="absolute left-0 right-0 top-[3.35rem] h-px bg-graphite/10"
              aria-hidden="true"
            />
            <ol className="grid grid-cols-6 gap-4">
              {processSteps.map((step) => (
                <li key={step.number} className="relative list-none">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center border border-copper text-xs font-medium text-copper"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-base font-semibold leading-snug text-graphite">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-soft-grey">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className="mt-12 space-y-0 border-t border-graphite/15 lg:hidden">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="border-b border-graphite/10 py-8 pl-12"
            >
              <span
                className="float-left -ml-12 inline-flex h-8 w-8 items-center justify-center border border-copper text-xs font-medium text-copper"
              >
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-graphite">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft-grey">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
