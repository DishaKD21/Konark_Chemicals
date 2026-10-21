export type TechnicalSpec = {
  label: string;
  value: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Product = {
  id: string;
  slug: string;
  productName: string;
  productCode?: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  primaryImage: string;
  primaryImageAlt: string;
  galleryImages: GalleryImage[];
  beforeImages: GalleryImage[];
  afterImages: GalleryImage[];
  applications: string[];
  compatibleSubstrates: string[];
  keyFeatures: string[];
  /** @deprecated Use dataSheetPdf */
  technicalDataSheet?: string;
  dataSheetPdf?: string;
  technicalSpecifications: TechnicalSpec[];
  availabilityOrInquiryText: string;
  featured?: boolean;
};

const defaultBefore: GalleryImage[] = [
  {
    src: "/images/surface-rust.jpg",
    alt: "Rusted ferrous surface before pretreatment — representative sample.",
    caption: "Pretreatment required before phosphating",
  },
];

const defaultAfter: GalleryImage[] = [
  {
    src: "/images/surface-black.jpg",
    alt: "Phosphated ferrous surface after conversion coating — representative sample.",
    caption: "After approved phosphating sequence",
  },
];

function dataSheetPath(slug: string): string {
  return `/documents/products/${slug}.pdf`;
}

function gallery(
  slug: string,
  primary: string,
  alt: string,
  extras: GalleryImage[] = [],
): GalleryImage[] {
  return [
    { src: primary, alt, caption: "Product reference" },
    ...extras,
  ];
}

export const products: Product[] = [
  {
    id: "k18-gray",
    slug: "k18-gray-phosphating-chemical",
    productName: "K18 Gray Phosphating Chemical",
    productCode: "[Product code — confirm]",
    category: "Gray phosphating",
    shortDescription:
      "Gray phosphating formulation for ferrous components where a controlled conversion coating is required as part of an approved pretreatment and phosphating sequence.",
    fullDescription:
      "K18 Gray Phosphating Chemical is supplied for industrial metal surface treatment lines. Rust removal, degreasing, and rinsing are pretreatment stages; phosphating follows on a suitably prepared substrate. Application parameters, bath management, and acceptance criteria should be agreed with our technical team for your components and line conditions.",
    primaryImage: "/images/products/k18-gray-phosphating-chemical/primary.jpg",
    primaryImageAlt: "K18 gray phosphating chemical — product reference photograph.",
    galleryImages: gallery(
      "k18-gray-phosphating-chemical",
      "/images/products/k18-gray-phosphating-chemical/primary.jpg",
      "K18 gray phosphating chemical packaging or product reference.",
      [
        {
          src: "/images/products/k18-gray-phosphating-chemical/treated-metal.jpg",
          alt: "Treated metal sample associated with K18 gray phosphating.",
          caption: "Treated component — replace with approved photography",
        },
      ],
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: [
      "Nuts, bolts, and washers",
      "Fabricated steel components",
      "Machined ferrous parts — grade to be confirmed",
    ],
    compatibleSubstrates: [
      "Iron and steel — substrate condition and grade to be confirmed per inquiry",
    ],
    keyFeatures: [
      "Intended for gray phosphating conversion coatings on prepared ferrous surfaces",
      "Process support available for line integration inquiries",
      "Technical data sheet available on request when issued",
    ],
    dataSheetPdf: dataSheetPath("k18-gray-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Bulk and industrial supply — contact for availability and documentation.",
    featured: true,
  },
  {
    id: "product-02",
    slug: "product-02-phosphating-chemical",
    productName: "[Product 2 name — from catalogue]",
    productCode: "[Code — confirm]",
    category: "Phosphating chemicals",
    shortDescription:
      "[Short description — add from product catalogue. Do not publish unverified technical claims.]",
    fullDescription:
      "[Full product description — add from catalogue. Pretreatment and phosphating are separate process stages unless your datasheet states otherwise.]",
    primaryImage: "/images/products/product-02-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 2] — replace with catalogue photography.",
    galleryImages: gallery(
      "product-02-phosphating-chemical",
      "/images/products/product-02-phosphating-chemical/primary.jpg",
      "[Product 2] primary image placeholder.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm per product]"],
    compatibleSubstrates: ["[Substrates — confirm per product]"],
    keyFeatures: ["[Key features — confirm per product]"],
    dataSheetPdf: dataSheetPath("product-02-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Contact us for product information and technical documentation.",
    featured: true,
  },
  {
    id: "product-03",
    slug: "product-03-phosphating-chemical",
    productName: "[Product 3 name — from catalogue]",
    category: "Phosphating chemicals",
    shortDescription: "[Short description — from catalogue]",
    fullDescription: "[Full description — from catalogue]",
    primaryImage: "/images/products/product-03-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 3] image placeholder.",
    galleryImages: gallery(
      "product-03-phosphating-chemical",
      "/images/products/product-03-phosphating-chemical/primary.jpg",
      "[Product 3] primary image.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm]"],
    compatibleSubstrates: ["[Substrates — confirm]"],
    keyFeatures: ["[Features — confirm]"],
    dataSheetPdf: dataSheetPath("product-03-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Available on inquiry.",
    featured: true,
  },
  {
    id: "product-04",
    slug: "product-04-phosphating-chemical",
    productName: "[Product 4 name — from catalogue]",
    category: "Pretreatment chemicals",
    shortDescription: "[Short description — from catalogue]",
    fullDescription: "[Full description — from catalogue]",
    primaryImage: "/images/products/product-04-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 4] image placeholder.",
    galleryImages: gallery(
      "product-04-phosphating-chemical",
      "/images/products/product-04-phosphating-chemical/primary.jpg",
      "[Product 4] primary image.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm]"],
    compatibleSubstrates: ["[Substrates — confirm]"],
    keyFeatures: ["[Features — confirm]"],
    dataSheetPdf: dataSheetPath("product-04-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Available on inquiry.",
    featured: false,
  },
  {
    id: "product-05",
    slug: "product-05-phosphating-chemical",
    productName: "[Product 5 name — from catalogue]",
    category: "Black phosphating",
    shortDescription: "[Short description — from catalogue]",
    fullDescription: "[Full description — from catalogue]",
    primaryImage: "/images/products/product-05-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 5] image placeholder.",
    galleryImages: gallery(
      "product-05-phosphating-chemical",
      "/images/products/product-05-phosphating-chemical/primary.jpg",
      "[Product 5] primary image.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm]"],
    compatibleSubstrates: ["[Substrates — confirm]"],
    keyFeatures: ["[Features — confirm]"],
    dataSheetPdf: dataSheetPath("product-05-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Available on inquiry.",
    featured: true,
  },
  {
    id: "product-06",
    slug: "product-06-phosphating-chemical",
    productName: "[Product 6 name — from catalogue]",
    category: "Phosphating chemicals",
    shortDescription: "[Short description — from catalogue]",
    fullDescription: "[Full description — from catalogue]",
    primaryImage: "/images/products/product-06-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 6] image placeholder.",
    galleryImages: gallery(
      "product-06-phosphating-chemical",
      "/images/products/product-06-phosphating-chemical/primary.jpg",
      "[Product 6] primary image.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm]"],
    compatibleSubstrates: ["[Substrates — confirm]"],
    keyFeatures: ["[Features — confirm]"],
    dataSheetPdf: dataSheetPath("product-06-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Available on inquiry.",
    featured: false,
  },
  {
    id: "product-07",
    slug: "product-07-phosphating-chemical",
    productName: "[Product 7 name — from catalogue]",
    category: "Phosphating chemicals",
    shortDescription: "[Short description — from catalogue]",
    fullDescription: "[Full description — from catalogue]",
    primaryImage: "/images/products/product-07-phosphating-chemical/primary.jpg",
    primaryImageAlt: "[Product 7] image placeholder.",
    galleryImages: gallery(
      "product-07-phosphating-chemical",
      "/images/products/product-07-phosphating-chemical/primary.jpg",
      "[Product 7] primary image.",
    ),
    beforeImages: defaultBefore,
    afterImages: defaultAfter,
    applications: ["[Applications — confirm]"],
    compatibleSubstrates: ["[Substrates — confirm]"],
    keyFeatures: ["[Features — confirm]"],
    dataSheetPdf: dataSheetPath("product-07-phosphating-chemical"),
    technicalSpecifications: [],
    availabilityOrInquiryText: "Available on inquiry.",
    featured: false,
  },
];

/** @deprecated Use getProductBySlug — kept for legacy imports */
export const primaryProduct = products[0];
