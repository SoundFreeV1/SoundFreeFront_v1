export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
