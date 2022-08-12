const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7892A7",
        secondary: "#dcc77d",
        accent: "#D9CAB3",
        text: "#FCF9C6",
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
