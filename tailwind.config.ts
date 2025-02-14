import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ss: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        grey: "#C1C1C4",
        dark: "#717171",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
export default config;
