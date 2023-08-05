/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "translate-up-out-in": {
          "0%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
          "25%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "50%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "translate-up-out-in": "translate-up-out-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
