module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        'extrablack': "1100"
      },
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
