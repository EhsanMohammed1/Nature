/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#eefbf1",
          100: "#d6f5dc",
          200: "#b0eabe",
          300: "#7cd999",
          400: "#63ca87",
          500: "#24a555",
          600: "#168543",
          700: "#126a38",
          800: "#10552d",
          900: "#0e4627",
          950: "#072716",
        },
      },
    },
  },
  plugins: [],
};
