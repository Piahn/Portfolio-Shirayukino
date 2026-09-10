/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-heading)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        border: "#e7e3df",
        frame: "#d9d4cf",
        celestial: {
          DEFAULT: "#142d55",
          light: "#1e4480",
          dark: "#0b1a32",
        },
        gold: {
          DEFAULT: "#cba052",
          light: "#e2b86e",
          dark: "#a37a32",
        },
      },
    },
  },
  plugins: [],
};
