import {
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/data/seo";

export function JsonLd() {
  const graphs = [getOrganizationJsonLd(), getWebSiteJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
