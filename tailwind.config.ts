import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        light_gray: "var(--light-gray)",
        gray: "var(--gray)",
        black: "var(--black)",

      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-inherit': { font: 'inherit' },
        '.guty': { display: 'flex', }
      });
    }),
  ],
};
export default config;
