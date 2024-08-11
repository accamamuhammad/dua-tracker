/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black100: "#080808",
      white: "#FFFFFF",
      white100: "#F7F7F7",
      white150: "#E9E9E9",
      white200: "#BFBBBB",
      white300: "#F5F5F9",
      white400: "#CBC7C8",
      newPurple: "#682EE4",
      longBg: "#F8D6E2",
      mediumBg: "#E1D5FC",
      shortBg: "#C6D1FA",
      dailyBG: "#D1E9F6",
      sleepBG: "#d0f0c0",
    },
    fontFamily: {
      sgBold: ["SpaceGroteskBold", "mono"],
      sgMedium: ["SpaceGroteskMediun", "mono"],
      sgRegular: ["SpaceGroteskRegular", "mono"],
      sgLight: ["SpaceGroteskLight", "mono"],
    },
    darkMode: ["selector", '[data-mode="dark"]'],
  },
  plugins: [],
};
