/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#e58929",
        secondary: "#6c6c6c",
        success: "#2ECC71",
        danger: "#FF5A5F",
        white: "#fff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
