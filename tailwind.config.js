/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4285F4",
        green: "#00FFB0",
        red: "#E92126",
        grey: "#23252D",
        iconBlack: "#191A23",
        footer: "#474859",
        black: "#191A23",
        bg: "#030303",
        line: "#D4D4D4",
        text: "#D4D4D4",
        greenF: "#00FFB0",
        greenT: "#CCFF00",
        redF: "#E92126",
        redT: "#FBBC05",
        blueF: "#4285F4",
        blueT: "#9747FF",
      },
      backgroundImage: {
        greenLi: "linear-gradient(to right, #00FFB0, #CCFF00)",
      },
      boxShadow: {
        blueLi: "0px 0px 10px rgba(33, 122, 255, 0.25)",
        yellowLi: "0px 0px 10px rgba(239, 184, 41, 0.25)",
        greenLi: "0px 0px 10px 0px rgba(0, 255, 176, 0.25)",
      },
    },
  },
  plugins: [],
};
