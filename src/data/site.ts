export const siteConfig = {
  name: "Konark Chemicals",
  legalName: "[Company legal name — placeholder]",
  tagline:
    "Metal pretreatment chemicals, phosphating solutions, and industrial jobwork.",
  description:
    "Manufacturer and supplier of metal pretreatment and phosphating chemicals, with phosphating jobwork services for industrial components.",
  url: "https://konark-chemicals.disha-kd321.workers.dev",
  logo: {
    src: "/images/brand/konark-logo.png",
    alt: "Konark Chemicals logo",
    width: 180,
    height: 56,
  },
  contact: {
    email: "enquiries@example.com",
    phone: "+91 [Phone — placeholder]",
    whatsapp: "+91 [WhatsApp — placeholder]",
    address: "[Address line 1], [City], [State] — placeholder",
    mapsUrl: "" as string | undefined,
    businessHours: "[Business hours — placeholder]",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;
