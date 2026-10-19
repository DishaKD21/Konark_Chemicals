import { SectionHeading } from "@/components/ui/SectionHeading";

export function QualitySection() {
  return (
    <section
      id="about"
      className="border-t border-graphite/20 bg-graphite py-24 text-ivory lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            dark
            eyebrow="Expertise"
            title="Built around process precision."
            description="We work with industrial buyers who need repeatable finishing, practical technical support, and chemistry aligned to how their line actually runs."
          />
          <div className="space-y-8 border-l border-copper/50 pl-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-copper">
                Consistency
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/90">
                Finish appearance and bath discipline are managed through agreed
                operating windows — not marketing superlatives.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-copper">
                Technical support
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/90">
                Discuss pretreatment compatibility, line integration, and
                documentation requirements with our technical contact channel.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-copper">
                Credentials
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/90">
                [Quality certifications, laboratory capabilities, and compliance
                documents — add verified items here when available.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
