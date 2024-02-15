/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        adelia: ["Adelia"],
        lora: ["Lora"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#265748",
      },
    },
  },
  plugins: [],
};
