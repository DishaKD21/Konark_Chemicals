import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = path ? path : "/";
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url.replace(/\/$/, "")}${canonical}`,
      siteName: siteConfig.name,
    },
  };
}
