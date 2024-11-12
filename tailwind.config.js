/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      //Colors
      colors: {
        primary: "#0F9DF8",
        background: "#040B1C",
        cardbg: "#061840",
        white: "#FBFBFB",

        navbg: "#0A214E",

        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
