/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Oswald"],
    },
    extend: {
      aspectRatio: {
        "7/4": "7 / 4",
        "5/3": "5 / 3",
        "5/4": "5 / 4",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "12/5": "12 / 5",
      },
    },
  },
  plugins: [],
};
