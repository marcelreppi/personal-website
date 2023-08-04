module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e9f6ff",
          100: "#d8edff",
          200: "#b8ddff",
          300: "#8dc4ff",
          400: "#609eff",
          500: "#3c78ff",
          600: "#1a4dff",
          700: "#234ef3",
          800: "#1139c2",
          900: "#173698",
          950: "#0e1e58",
        },
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
      spacing: {
        4.5: "1.125rem",
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
};
