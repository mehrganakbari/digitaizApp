/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'lite': '#E5E5E5',
      'Orange-700': '#c2410c',
      'Orange-600': '#ea580c',
      'Orange-500': '#f97316',
      'Orange-400': '#fb923c',
      'Orange-300': '#fdba74',
      'Orange-100': '#ffedd5',
      'Slate-900': '#0f172a',
      'Slate-800': '#1e293b',
      'Slate-700': '#334155',
      'Slate-200': '#e2e8f0',
      'Stone-100': '#f5f5f5',
      'Stone-50': '#fafaf9',
      'Gray-300': '#d1d5db',
      'Gray-200': '#e5e7eb',
      'Indigo-600': '#4f46e5',
      'Yellow-400': '#facc15',
    },
    extend: {
      screens: {
        'xs': '400px',
        'xs2': '515px',
        'sm': '568px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
};