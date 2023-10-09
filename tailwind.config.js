/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "palette-color": "var(--palette-color)",
      },
    },
  },
  plugins: [],
};
