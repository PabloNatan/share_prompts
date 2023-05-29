/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,ts,tsx,tsx,mdx}",
    "./src/components/**/*.{ts,ts,tsx,tsx,mdx}",
    "./src/app/**/*.{ts,ts,tsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
