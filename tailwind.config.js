/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "7/4": "7 / 4",
        "5/3": "5 / 3",
        "5/4": "5 / 4",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
