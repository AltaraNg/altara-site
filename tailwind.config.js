module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#074A74",
        brand25: "#c2d2dd",
        lemon: "#a0c474",
        lightBlue: "#47B5FF",
      },
      lineHeight: {
        12: "4rem",
        13: "5.5rem",
        14: "7rem",
      },
      height: {
        99: "30rem",
        101: "33rem",
      },
      width: {
        98: "29rem",
        101: "31rem",
        0.3: "30%",
      },
    },
  },
  plugins: [],
};
