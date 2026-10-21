"use client";

import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/data/site";
import { InquiryForm, type InquiryKind } from "@/components/forms/InquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") ?? "";
  const inquiry = searchParams.get("inquiry");

  let kind: InquiryKind = "general";
  if (inquiry === "jobwork") kind = "jobwork";
  else if (product) kind = "product";

  const mapsUrl = siteConfig.contact.mapsUrl;

  return (
    <section className="section-y-lg bg-ivory">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Contact"
              title="Product, pricing, and jobwork inquiries"
              description="Update contact details in site configuration when your business information is confirmed."
            />
            <div className="panel-muted mt-8 space-y-4 text-body-sm text-soft-grey">
              <p>
                <span className="text-graphite">Email</span>
                <br />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-copper hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-graphite">Phone</span>
                <br />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-copper"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              {siteConfig.contact.whatsapp &&
                !siteConfig.contact.whatsapp.includes("[") && (
                  <p>
                    <span className="text-graphite">WhatsApp</span>
                    <br />
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                      className="text-copper hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </p>
                )}
              <p>
                <span className="text-graphite">Address</span>
                <br />
                {siteConfig.contact.address}
              </p>
              {mapsUrl && (
                <p>
                  <a
                    href={mapsUrl}
                    className="text-copper hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              )}
              <p className="text-xs">{siteConfig.contact.businessHours}</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="card p-6 lg:p-8">
              <InquiryForm kind={kind} defaultProductSlug={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
