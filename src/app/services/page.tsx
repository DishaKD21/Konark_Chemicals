import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { jobworkProcess, quotationFactors, serviceHighlights } from "@/data/services";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services — Phosphating jobwork & pretreatment",
  description:
    "Industrial phosphating jobwork and metal pretreatment chemical supply. Request a quotation based on your components and treatment requirements.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Industrial phosphating jobwork"
        description="Looking for a phosphating jobwork partner for your metal components? Discuss component specifications, finish requirements, quantity, and production schedule with our team."
      />

      <section className="section-y bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {serviceHighlights.map((s) => (
              <div key={s.title} className="card p-6 lg:p-7">
                <h2 className="text-lg font-semibold text-graphite">{s.title}</h2>
                <p className="mt-3 text-body-sm leading-relaxed text-soft-grey">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sage/30">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite sm:text-3xl">
            Jobwork process
          </h2>
          <p className="mt-4 max-w-2xl text-body-sm text-soft-grey">
            Typical engagement steps. Actual workflow depends on agreed job
            requirements.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobworkProcess.map((step) => (
              <li key={step.step} className="card flex gap-4 p-5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/15 text-sm font-bold text-olive"
                  aria-hidden
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-graphite">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-soft-grey">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="panel-muted max-w-3xl">
            <h2 className="text-2xl font-semibold text-graphite">
              Quotation factors
            </h2>
            <p className="mt-3 text-body-sm text-soft-grey">
              We do not publish fixed jobwork rates. Pricing may depend on:
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {quotationFactors.map((f) => (
                <li
                  key={f}
                  className="rounded-lg bg-white/80 px-4 py-3 text-body-sm text-soft-grey shadow-soft"
                >
                  {f}
                </li>
              ))}
            </ul>
            <Button href="#jobwork-form" className="mt-8">
              Request a jobwork quotation
            </Button>
          </div>
        </div>
      </section>

      <section id="jobwork-form" className="section-y bg-sage/40">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">Jobwork inquiry</h2>
          <p className="mt-3 max-w-xl text-body-sm text-soft-grey">
            File upload is not configured on this static site. Share drawings or
            photographs by email after submitting this draft.
          </p>
          <div className="card mt-8 p-6 lg:p-10">
            <InquiryForm kind="jobwork" />
          </div>
        </div>
      </section>
    </>
  );
}
