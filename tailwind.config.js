/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
        center: true,
      },
    },
    fontFamily: {
      barlow: '"Barlow"',
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      half: "50%",
      16: "4rem",
    },
    fontSize: {
      "xl-custom": "1.125rem",
    },
  },
  plugins: [],
};
