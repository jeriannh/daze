module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#F1BEA8",
        orange: "#E3966D",
        blue: "#006371",
        blueGrey: "#BDCDCC",
        grey: "#F5F5F5",
        green: "#9ABAA9",
      },
      fontFamily: {
        "pn-bold": ["Proxima Nova Bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/forms")],
}
