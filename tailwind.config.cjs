/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lite: "#E5E5E5",
      "Orange-700": "#DE3618",
      "Orange-600": "#FC5858",
      "Orange-500": "#F25E57",
      "Orange-400": "#FF755C",
      "Orange-300": "#FF9F8E",
      "Orange-200": "#FC5858",
      "Orange-100": "#FFCBCB",
      "Slate-900": "#161D25",
      "Slate-800": "#222F5D",
      "Slate-700": "#606060",
      "Slate-200": "#E2E2E2",
      "Stone-100": "#F4F4F4",
      "Stone-50": "#FDFDFD",
      "Gray-300": "#AFAFAF",
      "Gray-200": "#EBEBEB",
      "Indigo-600": "#8750FB",
      "Yellow-400": "#FFDE74",
    },
    extend: {
      screens: {
        xs: "400px",
        xs2: "515px",
        sm: "568px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/custom-forms"),
  ],
  darkMode: "class",
};
