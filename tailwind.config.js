module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        title: [
          '24px',
          {
            lineHeight: '24px',
          },
        ],
      },
      colors: {
        gold: '#C5A974',
        nav: '#3D352E',
        blu: '#1EA0D1',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        blue: ' 0px 0px 10px 0px #1EA0D1',
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
