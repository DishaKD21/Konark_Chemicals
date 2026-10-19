export type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  substrates: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "black-phosphate",
    name: "[Product Name — placeholder]",
    shortName: "Black phosphating chemical",
    description:
      "A conversion-coating formulation for controlled phosphating of prepared iron and steel surfaces, developed for industrial lines where a uniform dark finish is required.",
    purpose:
      "Produces a matte to deep black phosphated layer on suitably prepared ferrous substrates as part of an approved surface-treatment sequence.",
    substrates:
      "Iron and steel components — substrate grade and condition to be confirmed for your application.",
    image: "/images/product-housing.jpg",
    imageAlt:
      "Precision steel component with a matte black phosphated conversion coating showing fine surface grain.",
  },
];

export const primaryProduct = products[0];
