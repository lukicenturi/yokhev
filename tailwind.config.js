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
        primary: {
          DEFAULT: "#265748",
          hover: "#51796d",
          active: "#3c685a",
        },
      },
    },
  },
  plugins: [],
};
