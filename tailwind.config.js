module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "portfolio-black": "#000000",
        "portfolio-purple": "#682ae9",
        "portfolio-lightpurple": "#700b97",
        "portfolio-distinct": "#be05c2",
        "portfolio-blue":"#3b82f0",
        "portfolio-ppurple":"#5C33F6"
      },
      width:{
        "40-r": "40rem",
        "35-r": "30rem"
      },
      height:{
        "40-r": "40rem",
        "35-r": "30rem"
      }
    },
    container:{
      center: true,
      padding: "3rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
