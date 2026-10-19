import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inquiryItems = [
  {
    title: "Product information",
    detail: "Overview, packaging formats, and supply terms — provided on request.",
  },
  {
    title: "Technical Data Sheet (TDS)",
    detail: "Available on inquiry. [Link or file path to be added when issued.]",
  },
  {
    title: "Safety Data Sheet (SDS)",
    detail: "Available on inquiry. [Link or file path to be added when issued.]",
  },
  {
    title: "Application suitability",
    detail: "Share substrate, current pretreatment, and target finish for review.",
  },
  {
    title: "Bulk & industrial supply",
    detail: "Volume, dispatch location, and lead-time discussions for plant buyers.",
  },
];

export function InquirySection() {
  return (
    <section id="inquiry" className="border-t border-stone/80 bg-stone/25 py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Documentation"
            title="Product inquiry & technical information."
            description="Download links appear here only when documents are published. Until then, request copies through the contact form or email."
          />
          <ul className="divide-y divide-graphite/10 border border-graphite/10 bg-ivory">
            {inquiryItems.map((item) => (
              <li key={item.title} className="px-6 py-5 sm:px-8">
                <h3 className="text-base font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft-grey">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <Button href="#contact">Request Technical Information</Button>
        </div>
      </div>
    </section>
  );
}
