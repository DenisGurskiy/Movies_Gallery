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
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "#787984",
        gray100Primary: "#0D0D0D",
        gray50: "#787984",
        divider: "#3B3B3F",
        gray20divider: "#DDDEE0",
        gray30Disabled: "#BBBCC1",
        gray10Background: "#F4F4F5",
        systemRedError: "#C33433",
        systemGreenSuccess: "#13A14E",
        systemYellow: "#F3FFA6",
        systemYellowBorder: "#ECFF6E",
        disabled: "#F4F4F5",
      },
    },
  },
  plugins: [],
};
export default config;
