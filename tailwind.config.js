module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        highlight: "#234ef3",
        sen1: "rgba(100, 85, 232, 1)",
        sen2: "rgba(150, 71, 219, 1)",
        mb: "#c50e20",
        npm: "#ca3736",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "3.5xl": "2.125rem",
      },
      boxShadow: {
        custom: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      },
      height: {
        0.75: "0.1875rem",
      },
      width: {
        38: "9.375rem",
      },
      borderWidth: {
        1: "1px",
      },
      transitionProperty: {
        fontSize: "font-size",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      padding: ["first", "last"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
