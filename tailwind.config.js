module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#234ef3",
        sen1: "rgba(100, 85, 232, 1)",
        sen2: "rgba(150, 71, 219, 1)",
        mb: "#c50e20",
        npm: "#ca3736",
        wordchain: "#31A691",
      },
      fontSize: {},
      boxShadow: {
        custom: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      },
      transitionProperty: {
        fontSize: "font-size",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      borderWidth: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [],
}
