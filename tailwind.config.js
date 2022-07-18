const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#9EB23B",
        secondary: "#C7D36F",
        text: "#FCF9C6",
        accent: "#E0DECA",
      },
      fontFamily: {
        poppins: ["Poppins,sans-serif"],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
