module.exports = {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#074A74",
        brand25: "#c2d2dd",
        lemon: "#a0c474",
      },
      lineHeight: {
        12: "4rem",
        13: "5.5rem",
        14: "7rem",
      },
    },
  },
  plugins: [],
};
=======
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,js}'],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> ea236a7ff7ff8be56491fae5cac3e220f0fbd215
