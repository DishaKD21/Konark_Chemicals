import { CompareSlider } from "@/components/ui/CompareSlider";
import type { GalleryImage } from "@/data/products";

type BeforeAfterComparisonProps = {
  before: GalleryImage[];
  after: GalleryImage[];
  productName: string;
};

export function BeforeAfterComparison({
  before,
  after,
  productName,
}: BeforeAfterComparisonProps) {
  const beforeImg = before[0];
  const afterImg = after[0];

  if (!beforeImg || !afterImg) {
    return (
      <p className="text-sm text-soft-grey">
        Before-and-after photography for {productName} will be published when
        approved samples are available.
      </p>
    );
  }

  return (
    <div>
      <CompareSlider
        beforeSrc={beforeImg.src}
        afterSrc={afterImg.src}
        beforeAlt={beforeImg.alt}
        afterAlt={afterImg.alt}
        beforeLabel="Before treatment"
        afterLabel="After phosphating"
      />
      <p className="mt-4 text-sm leading-relaxed text-soft-grey">
        Pretreatment (cleaning, derusting where required) precedes phosphating.
        Images show representative surface conditions for discussion — not a
        universal result for every substrate.
      </p>
    </div>
  );
}
