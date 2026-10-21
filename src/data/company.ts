export type TimelineEvent = {
  year?: string;
  title: string;
  description: string;
  confirmed: boolean;
};

export type CompanyMetric = {
  label: string;
  value?: string;
  confirmed: boolean;
};

export type Certification = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  scope?: string;
  validUntil?: string;
  confirmed: boolean;
};

export const companyStory = {
  headline: "Metal pretreatment and phosphating, built for industry.",
  paragraphs: [
    "Konark Chemicals manufactures and supplies metal pretreatment chemicals and phosphating formulations for industrial buyers. We also provide phosphating jobwork for customers who need components treated at our facility.",
    "Product selection, process sequence, and acceptance criteria depend on your substrate, line conditions, and specification. Our team works with manufacturers and engineering companies on product supply and jobwork quotations.",
    "[Add confirmed company history, founding context, and milestones — do not invent dates or statistics.]",
  ],
  establishedYear: undefined as string | undefined,
};

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Establishment",
    description:
      "[Year and milestone — confirm from company records before publishing.]",
    confirmed: false,
  },
  {
    title: "Product catalogue expansion",
    description:
      "[Add confirmed milestone when product lines were introduced.]",
    confirmed: false,
  },
];

export const companyMetrics: CompanyMetric[] = [
  { label: "Established in", confirmed: false },
  { label: "Employees", confirmed: false },
  { label: "Facility area", confirmed: false },
  { label: "Production capacity", confirmed: false },
  { label: "Products supplied", value: "7 catalogue lines", confirmed: true },
  {
    label: "Services",
    value: "Chemical supply · Phosphating jobwork",
    confirmed: true,
  },
];

export const certifications: Certification[] = [
  {
    id: "iso-placeholder",
    title: "ISO certification",
    description:
      "[Display only after confirming certificate scope, validity, and public use approval. Add image to /images/certifications/.]",
    imageSrc: "/images/certifications/iso-certificate.jpg",
    confirmed: false,
  },
];

export const facilityGallery = [
  {
    src: "/images/facility/placeholder-01.jpg",
    alt: "[Facility photograph — add when available]",
  },
];
