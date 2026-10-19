import { CompareSlider } from "@/components/ui/CompareSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SurfaceTransformation() {
  return (
    <section className="border-t border-stone/80 bg-stone/30 py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Material transformation"
              title="From prepared surface to black finish."
              description="Rust removal and cleaning are pretreatment stages. Phosphating follows on a suitably prepared substrate to form the conversion coating."
            />
          </div>
          <div className="lg:col-span-8">
            <CompareSlider
              beforeSrc="/images/surface-rust.jpg"
              afterSrc="/images/surface-black.jpg"
              beforeAlt="Rusted and oxidized iron surface before pretreatment."
              afterAlt="Uniform matte black phosphated iron surface after conversion coating."
              beforeLabel="Pretreated metal"
              afterLabel="Black phosphated finish"
            />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-soft-grey">
              Drag the control or use arrow keys to compare representative
              surface conditions. Your line sequence, chemistry, and acceptance
              criteria will be confirmed during technical review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
