import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        primary: "#16a34a",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
} satisfies Config;
