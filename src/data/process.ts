export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Surface inspection",
    description:
      "Assess substrate condition, contamination, and geometry against your approved work instruction.",
  },
  {
    number: "02",
    title: "Cleaning and rust removal",
    description:
      "Remove oils, scale, and oxidation using pretreatment chemicals and methods suited to the substrate — not the phosphating stage itself.",
  },
  {
    number: "03",
    title: "Rinsing and preparation",
    description:
      "Rinse and condition the surface as required before conversion coating. Steps vary by line chemistry and specification.",
  },
  {
    number: "04",
    title: "Phosphating treatment",
    description:
      "Immersion or application per operating procedure to form the phosphate conversion layer and achieve the target black finish.",
  },
  {
    number: "05",
    title: "Post-treatment and drying",
    description:
      "Rinsing, sealing, or drying steps as defined in your process sheet and customer requirement.",
  },
  {
    number: "06",
    title: "Final inspection",
    description:
      "Verify appearance, coverage, and conformance to agreed acceptance criteria before release.",
  },
];
