/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      borderColor: ["checked"],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
