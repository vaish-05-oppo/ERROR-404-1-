/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gradientFrom: '#6D28D9',
        gradientTo: '#06B6D4'
      }
    }
  },
  plugins: [],
}
