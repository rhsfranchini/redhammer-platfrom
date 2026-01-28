/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rh-maroon': '#802629',
        'rh-maroon-dark': '#6a1f22',
        'rh-header': '#333',
      }
    },
  },
  plugins: [],
}
