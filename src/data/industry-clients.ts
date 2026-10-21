export type IndustryClient = {
  id: string;
  name: string;
  logoSrc: string;
};

/** Placeholder entries for layout — replace with approved client names and logos. */
export const productSupplyClients: IndustryClient[] = [
  {
    id: "northline",
    name: "Northline Fasteners Pvt. Ltd.",
    logoSrc: "/images/clients/product/northline-fasteners.svg",
  },
  {
    id: "apex",
    name: "Apex Engineering Components",
    logoSrc: "/images/clients/product/apex-engineering.svg",
  },
  {
    id: "prava",
    name: "Prava Steel Forming",
    logoSrc: "/images/clients/product/prava-steel.svg",
  },
  {
    id: "meridian",
    name: "Meridian Hardware Industries",
    logoSrc: "/images/clients/product/meridian-hardware.svg",
  },
  {
    id: "voltac",
    name: "Voltac Industrial Supply",
    logoSrc: "/images/clients/product/voltac-industrial.svg",
  },
  {
    id: "harbor",
    name: "Harbor Bolt & Nut Works",
    logoSrc: "/images/clients/product/harbor-bolt.svg",
  },
];

export const jobworkClients: IndustryClient[] = [
  {
    id: "bharat-auto",
    name: "Bharat Auto Parts",
    logoSrc: "/images/clients/jobwork/bharat-auto-parts.svg",
  },
  {
    id: "coastal",
    name: "Coastal Fabrication Co.",
    logoSrc: "/images/clients/jobwork/coastal-fabrication.svg",
  },
  {
    id: "ridge",
    name: "Ridge Engineering Works",
    logoSrc: "/images/clients/jobwork/ridge-engineering.svg",
  },
  {
    id: "orion",
    name: "Orion Coupling Systems",
    logoSrc: "/images/clients/jobwork/orion-coupling.svg",
  },
  {
    id: "summit",
    name: "Summit Machine Parts",
    logoSrc: "/images/clients/jobwork/summit-machine.svg",
  },
  {
    id: "terra",
    name: "Terra Forge Industries",
    logoSrc: "/images/clients/jobwork/terra-forge.svg",
  },
];
