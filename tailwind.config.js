/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ['Nunito']
      },
      colors: {
        primary: '#1a74e4',
        body: '#f1f2f6'
      }
    },
  },
  plugins: [],
}

