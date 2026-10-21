import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Konark Chemicals for product information, quotations, and phosphating jobwork inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team"
        description="Industrial buyers and jobwork customers — share your requirements for a technical discussion and quotation."
      />
      <Suspense fallback={<div className="px-6 py-16 text-sm text-soft-grey">Loading form…</div>}>
        <ContactPageContent />
      </Suspense>
    </>
  );
}
