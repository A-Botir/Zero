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
      boxShadow: {
        card1: "-8px 8px 24px -4px rgb(145 158 171 / 8%)",
        card2: "-24px 24px 72px -8px rgb(145 158 171 / 24%)",
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
