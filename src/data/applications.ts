export type Application = {
  id: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  aspect: "square" | "landscape" | "portrait";
};

export const applications: Application[] = [
  {
    id: "fabricated",
    title: "Fabricated components",
    caption:
      "Welded and formed iron and steel parts where surface preparation and phosphating integrate with fabrication workflows.",
    image: "/images/app-fabricated.jpg",
    imageAlt:
      "Fabricated steel frame with matte black phosphated finish under warm industrial lighting.",
    aspect: "landscape",
  },
  {
    id: "engineering",
    title: "Engineering parts",
    caption:
      "Machined brackets, links, and structural elements — suitability depends on material grade and process approval.",
    image: "/images/app-engineering.jpg",
    imageAlt:
      "Machined steel engineering bracket with black phosphated surface texture.",
    aspect: "square",
  },
  {
    id: "machinery",
    title: "Machinery parts",
    caption:
      "Couplings, collars, and wear interfaces on industrial equipment where a conversion coating is specified.",
    image: "/images/app-machinery.jpg",
    imageAlt:
      "Industrial machinery coupling and collar in black phosphated steel.",
    aspect: "landscape",
  },
  {
    id: "hardware",
    title: "Hardware & fasteners",
    caption:
      "Bolts, nuts, and washers — application-specific pretreatment and finishing requirements apply.",
    image: "/images/app-hardware.jpg",
    imageAlt:
      "Steel bolts and washers with matte dark phosphated finish on a steel plate.",
    aspect: "square",
  },
  {
    id: "precision",
    title: "Precision metal parts",
    caption:
      "Turned and milled components where finish consistency and process control are critical.",
    image: "/images/app-precision.jpg",
    imageAlt:
      "Precision-turned steel components with uniform black phosphated coating.",
    aspect: "portrait",
  },
];
