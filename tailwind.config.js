module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "hsl(12, 88%, 59%)",
        "secondary" : "hsl(228, 39%, 23%)",
        "grayBlue" : "hsl(227, 12%, 61%)",
        "darkBlue" : "hsl(233, 12%, 13%)",
        "paleRed": "hsl(13, 100%, 96%)",
        "lightGray": "hsl(0, 0%, 98%)"
      },
      scale: {
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '90': '0.9',
      },
      height: {
        '1/7': '14.3%',
        '6/7': '85.7%',

      },
      width: {
        '86': '24rem',
        '128': '32rem',
        '136': '36rem',

      },
      scale: {
        '180': '-1',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
