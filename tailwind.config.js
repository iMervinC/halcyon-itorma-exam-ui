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
        mando: '#C5A974',
        primary: '#132034',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
