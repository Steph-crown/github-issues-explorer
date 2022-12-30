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
      "border-blue": "#58A6FF",
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
        outline: {
          light: "rgba(36, 41, 47, 0.4)",
          dark: "#24292F",
        },
      },
      fontFamily: {
        "SF-pro-text": [
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "serif",
        ],
        "SF-pro-display": [
          "SF Pro Display",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
