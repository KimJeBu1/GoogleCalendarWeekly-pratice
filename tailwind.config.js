const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) }
const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // borderWidth: px0_10,
      // fontSize: px0_100,
      // lineHeight: px0_100,
      // minWidth: px0_400,
      // minHeight: px0_200,
      // minTop: px0_200,
      // minBottom: px0_200,
      // spacing: px0_200,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
