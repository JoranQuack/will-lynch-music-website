import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: "#E8E3F2",
        bluey: "#C4D9F2",
        greeny: "#BDE9C9",
        green: "#027223",
        white: "#FFFFFF",
        dark: "#3E464F",
      },
    },
    fontFamily: {
      'quicksand': ['var(--font-quicksand)', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config;
