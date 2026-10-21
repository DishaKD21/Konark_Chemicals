import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#242723",
        charcoal: "#191B18",
        ivory: "#F6F3EC",
        sage: "#E7EBDD",
        stone: "#DCD6CA",
        copper: "#A66B46",
        olive: "#71845B",
        "soft-grey": "#777970",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "sans-serif"],
        display: ["var(--font-sans)", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.015em",
      },
      maxWidth: {
        editorial: "72rem",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
        image: "10px",
        card: "12px",
        hero: "12px",
        modal: "12px",
      },
      boxShadow: {
        card: "0 4px 18px rgba(35, 38, 30, 0.06)",
        "card-elevated": "0 10px 32px rgba(35, 38, 30, 0.09)",
        "card-hover": "0 14px 36px rgba(35, 38, 30, 0.12)",
        header: "0 4px 24px rgba(35, 38, 30, 0.06)",
        soft: "0 2px 12px rgba(35, 38, 30, 0.04)",
      },
      fontSize: {
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65" }],
      },
    },
  },
  plugins: [],
};

export default config;
