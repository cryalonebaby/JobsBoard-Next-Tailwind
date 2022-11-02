/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'hWhite': '#E7EAF0',
      'pWhite': '#E8EBF3',
      'locWhite': '#D8D8D8',

      'bgGray': '#f5f5f5',
      'lightGray': '#878D9D',
      'darkGray': '#3A4562',
      'iconGray': '#70778B',
      'cardGray': '#EFF0F5',
      'starGray': '#38415D',
      'borderGray': '#DEE3EF',
      'btnGray': '#E4E5EA',
      'arrowGray': '#384564',
      'borderGray': '#E9EAED',
      'spanGray': '#CBCDD4',
      'pointGray': '#82899D',

      'paginationBlue': '#5876C5',
      'lightBlue': '#E1E6F4',
      'darkBlue': '#55699E',
      'borderBlue': '#B8C0DA',

      'lightYellow': '#FFF8D9',
      'darkYellow': '#988B49',
      'borderYellow': '#FFCF00',

      'mapDark': '#202336',
      'mapLight': '#2A3047'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'proxima': ['Proxima Nova', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}
