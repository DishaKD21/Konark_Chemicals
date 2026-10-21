import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import {
  certifications,
  companyMetrics,
  companyStory,
  facilityGallery,
  timelineEvents,
} from "@/data/company";
import { CompanyTimeline } from "@/components/company/CompanyTimeline";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Konark Chemicals",
  description:
    "Metal pretreatment chemicals, phosphating formulations, and industrial jobwork. Company story, capabilities, and credentials — updated from confirmed business information.",
  path: "/about",
});

export default function AboutPage() {
  const confirmedMetrics = companyMetrics.filter(
    (m) => m.confirmed && m.value,
  );
  const confirmedCerts = certifications.filter((c) => c.confirmed);

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={companyStory.headline}
        description="Manufacturing and supply of pretreatment and phosphating chemicals, with jobwork services for suitable iron and steel components."
      />

      <section className="section-y bg-white">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <div className="panel-muted max-w-3xl space-y-5">
            {companyStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-body-sm leading-relaxed text-soft-grey sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sage/30">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite sm:text-3xl">
            Company timeline
          </h2>
          <div className="mt-8 max-w-2xl">
            <CompanyTimeline events={timelineEvents} />
          </div>
        </div>
      </section>

      {confirmedMetrics.length > 0 && (
        <section className="section-y bg-ivory">
          <div className="mx-auto max-w-editorial px-6 lg:px-10">
            <h2 className="text-2xl font-semibold text-graphite">Company facts</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {confirmedMetrics.map((m) => (
                <div key={m.label} className="card p-6">
                  <dt className="text-body-sm font-semibold text-olive">{m.label}</dt>
                  <dd className="mt-2 text-xl font-semibold text-graphite">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">
            Facility and operations
          </h2>
          <p className="mt-3 text-body-sm text-soft-grey">
            Replace placeholder photography with approved facility and process
            images.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilityGallery.map((img) => (
              <div
                key={img.src}
                className="image-frame relative aspect-[4/3] max-h-[220px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sage/25">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">
            Certifications and quality
          </h2>
          {confirmedCerts.length > 0 ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {confirmedCerts.map((cert) => (
                <div key={cert.id} className="card p-6">
                  {cert.imageSrc && (
                    <div className="image-frame relative mx-auto aspect-[4/3] max-h-[240px] max-w-md">
                      <Image
                        src={cert.imageSrc}
                        alt={cert.imageAlt ?? cert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="mt-6 text-lg font-semibold text-graphite">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-soft-grey">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 max-w-2xl text-body-sm text-soft-grey">
              {certifications[0]?.description ??
                "Certification details will be published after scope, validity, and public display are confirmed."}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
