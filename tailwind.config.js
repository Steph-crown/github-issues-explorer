/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      black: "#0D1117",
      green: "#2DA44E",
      purple: "#8250DF",
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        border: {
          dark: "#30363D",
          light: "#D0D7DE",
        },
        muted: {
          dark: "#8D949D",
          light: "#57606A",
        },
        "fg-default": {
          dark: "#C9D1D9",
          light: "#24292F",
        },
        "sub-default": {
          dark: "#020409",
          light: "#F6F8FA",
        },
        "table-head": {
          light: "#F6F8FA",
          dark: "#171B21",
        },
      },
    },
  },
  plugins: [],
};
