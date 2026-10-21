import { CompareSlider } from "@/components/ui/CompareSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SurfaceTransformation() {
  return (
    <section className="section-y bg-ivory">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Surface treatment"
              title="From untreated metal to treated surface"
              description="Rust removal and cleaning are pretreatment stages — not every phosphating product removes rust directly. Phosphating follows on a suitably prepared substrate."
            />
          </div>
          <div className="lg:col-span-7">
            <CompareSlider
              beforeSrc="/images/surface-rust.jpg"
              afterSrc="/images/surface-black.jpg"
              beforeAlt="Rusted and oxidized iron surface before pretreatment."
              afterAlt="Phosphated iron surface after conversion coating."
              beforeLabel="Before"
              afterLabel="After"
            />
            <p className="mt-5 max-w-xl text-body-sm leading-relaxed text-soft-grey">
              Drag the control or use arrow keys to compare representative
              surface conditions. Your line sequence and acceptance criteria are
              confirmed during technical review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
