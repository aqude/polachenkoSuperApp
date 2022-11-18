/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte','./src/app.html' , './src/**/*.{ts,tsx,svelte, css}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}
