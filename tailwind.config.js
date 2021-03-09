module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        highlight: "#234ef3",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "3.5xl": "2.125rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
}
