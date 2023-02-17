/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter var": ["Inter var", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      cldblue: "#3448c5",
      cldlightblue: "#b6d2ff",
      cldgray: "#eeeef1",
      white: "#ffffff",
      clddarkblue: "#0c163b",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [require("daisyui")],
};
