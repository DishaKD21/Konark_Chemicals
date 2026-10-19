import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#202321",
        charcoal: "#151715",
        ivory: "#F3EFE6",
        stone: "#DCD6CA",
        copper: "#A66B46",
        olive: "#727960",
        "soft-grey": "#77786F",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.02em",
      },
      maxWidth: {
        editorial: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
