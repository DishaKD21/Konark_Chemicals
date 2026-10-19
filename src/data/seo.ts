import { siteConfig } from "@/data/site";

/** Update `siteConfig.url` to your live domain before launch. */
export const seoConfig = {
  defaultTitle: "Phosphating Chemical Manufacturer | Black Metal Surface Treatment",
  titleTemplate: `%s | ${siteConfig.name}`,
  description:
    "Manufacturer and supplier of industrial phosphating chemicals for iron and steel surface treatment, including black conversion coatings. Technical inquiries and bulk supply for plants in India, the United States, UAE, Europe, and worldwide export markets.",
  /**
   * Used in meta keywords and internal reference. Google ranks primarily from
   * content, links, and site authority—not this list alone.
   */
  keywords: [
    "phosphating chemical manufacturer",
    "phosphating chemicals supplier",
    "phosphating chemical manufacturer India",
    "phosphating chemical manufacturer USA",
    "phosphating chemical supplier Dubai",
    "phosphating chemical UAE",
    "black phosphating chemical",
    "iron phosphating chemical",
    "steel phosphating chemical",
    "metal phosphating process",
    "phosphating surface treatment",
    "conversion coating chemical",
    "metal surface treatment chemicals",
    "industrial phosphating chemicals",
    "ferrous metal phosphating",
    "black phosphate coating chemical",
    "phosphating bath chemical",
    "pretreatment and phosphating",
    "phosphating for fabricated steel",
    "phosphating chemical exporter",
    "bulk phosphating chemical supply",
    "B2B phosphating chemicals",
  ],
  /** Markets you accept inquiries from—update to match your real coverage. */
  regionsServed: [
    "India",
    "United States",
    "United Arab Emirates",
    "Saudi Arabia",
    "United Kingdom",
    "Germany",
    "Singapore",
    "Worldwide",
  ],
  topics: [
    "Phosphating",
    "Metal surface treatment",
    "Conversion coating",
    "Black phosphating",
    "Iron and steel finishing",
  ],
};

export function getOrganizationJsonLd() {
  const { contact, legalName, name, url, description } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: legalName !== "[Company Legal Name — placeholder]" ? legalName : name,
    alternateName: name,
    url,
    description,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
    },
    areaServed: seoConfig.regionsServed.map((region) =>
      region === "Worldwide"
        ? { "@type": "Place", name: "Worldwide" }
        : { "@type": "Country", name: region },
    ),
    knowsAbout: seoConfig.topics,
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: seoConfig.description,
    inLanguage: "en",
  };
}
