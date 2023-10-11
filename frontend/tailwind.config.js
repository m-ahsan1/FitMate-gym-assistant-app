/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Mynerve: "'Mynerve', cursive", // Ensure fonts with spaces have " " surrounding it.

        Raleway: " 'Raleway', sans-serif",
      },
    },
  },
  plugins: [],
};
