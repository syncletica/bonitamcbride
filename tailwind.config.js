/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Path to your project's files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/OC-10.png')",
        'case-study-pattern': "url('./assets/bg-case-study.png')",
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
}
