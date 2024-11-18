import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        maxsm: { max: "640px" },
        maxmd: { max: "768px" },
        maxmmd: { max: "900px" },
        maxlg: { max: "1024px" },
        maxlg2: { max: "1200px" },
        maxxl: { max: "1280px" },
        max2xl: { max: "1536px" },
        minmd2: { min: "900px" },
        minlg2: { min: "1200px" },
        "3xl": "1920px",
      },
      backgroundImage: {
        hero: "url('/images/hero-kitten.png')",
        "pet-food": "url('/images/pet-food.png')",
        "pet-care": "url('/images/pet-care.png')",
        "pet-toy": "url('/images/pet-toy.png')",
        "deal-1": "url('/images/deal-1.png')",
        "deal-2": "url('/images/deal-2.png')",
        "deal-3": "url('/images/deal-3.png')",
        "cover-1": "url('/images/cover-1.png')",
        "cover-2": "url('/images/cover-2.jpg')",
        "cover-3": "url('/images/cover-3.jpg')",
        "brand-1": "url('/images/brands/brand-1.jpg')",
        "brand-2": "url('/images/brands/brand-2.jpg')",
        "brand-3": "url('/images/brands/brand-3.jpg')",
        "brand-4": "url('/images/brands/brand-4.jpg')",
      },
      backgroundSize: {
        "50%": "50%",
      },
      colors: {
        "default-orange": "#FB923C",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
