/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        infiniteScrolltoL: "infiniteScrolltoL 20s linear infinite",
        infiniteScrolltoR: "infiniteScrolltoR 20s linear infinite",
      },
      keyframes: {
        infiniteScrolltoL: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        infiniteScrolltoR: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      screens: {
        "custom-bp": "56rem",
      },
    },
  },
  plugins: [],
};
